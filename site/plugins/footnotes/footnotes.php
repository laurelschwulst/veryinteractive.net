<?php

/**
 * Adding an footnotes field method: e.g. $page->text()->footnotes()->kt()
 */
field::$methods['footnotes'] = function($field, $convert=true) {
  if ($convert)
    $field->value = KirbyFootnotes::convert($field->value);
  else
    $field->value = KirbyFootnotes::remove($field->value);
  return $field;
};

/**
 *  Pre-filtering Kirbytext if global option "footnotes.global" is set true
 */
if(c::get('footnotes.global', false)) {
  kirbytext::$post[] = function($kirbytext, $value) {
    return KirbyFootnotes::convert($value);
  };
}


/**
 * KirbyFootnotes class
 */
class KirbyFootnotes {

  private static $patternFootnote = '/\[(\d+\..*?)\]/s';
  private static $patternContent  = '/\[\d+\.(.*?)\]/s';

  public static function convert($text) {
    $n = 1;
    $notes = array();
    if (preg_match_all(self::$patternFootnote, $text, $matches)) {
      foreach ($matches[0] as $fn) {
        $notes[$n] = preg_replace(self::$patternContent, '\1', $fn);

        if (substr($notes[$n], 1, 4) == '<no>') {
          $substitute = '';
        } else {
          $substitute  = '<sup class="footnote">';
          $substitute .= '<a href="#fn-'.$n.'" id="fnref-'.$n.'">'.$n.'</a>';
          $substitute .= '</sup>';
        }
        $text      = str_replace($fn, $substitute, $text);
        $notes[$n] = kirbytext($notes[$n]);
        $notes[$n] = str_replace('<p>', '', $notes[$n]);
        $notes[$n] = str_replace('</p>', '', $notes[$n]);
        $n++;
      }

      // build footnotes references
      $text .= "<div class='footnotes' id='footnotes'>";
      $text .= "<div class='footnotedivider'></div>";
      $text .= "<ol>";
      for ($i = 1; $i < $n; $i++) {
        $text .= "<li id='fn-".$i."'>";
        if (substr($notes[$i], 0, 4) == '<no>') {
          $notes[$i] = str_replace('<no>', "", $notes[$i]);
          $text     .= $notes[$i]."</li>";
        } else {
          $text     .= $notes[$i]." <span class='footnotereverse'><a href='#fnref-".$i."'>&#8617;</a></span></li>";
        }
      }
      $text .= "</ol>";
      $text .= "</div>";

      if (c::get('footnotes.smoothscroll', false)) $text .= self::script();

      return $text;
    }

    return $text;
  }

  public static function remove($text) {
    if (preg_match_all(self::$patternFootnote, $text, $matches)) {
      foreach ($matches[0] as $fn) {
          $text = str_replace($fn, "", $text);
      }
    }
    return $text;
  }

  private static function script() {
    return "<script>$(function() { $('a[href*=#]:not([href=#])').click(function() { if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { var t = $(this.hash); t = t.length ? t : $('[name=' + this.hash.slice(1) +']'); if (t.length) { $('html,body').animate({ scrollTop: t.offset().top - ".c::get('footnotes.offset', 0)." }, 1000); return false; } } }); });</script>";
  }
}
