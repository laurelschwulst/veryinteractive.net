<?php

/**
 * Sections Plugin (based off sections Plugin)
**/


kirbytext::$pre[] = function($kirbytext, $text) {

  $text = preg_replace_callback('!\(sections(…|\.{3})\)(.*?)\((…|\.{3})sections\)!is', function($matches) use($kirbytext) {

    $sections = preg_split('!(\n|\r\n)\+{4}\s+(\n|\r\n)!', $matches[2]);

    $html    = array();

    foreach($sections as $key => $section) {
      $field = new Field($kirbytext->field->page, null, trim($section));
      $html[] = '<div id="' . c::get('sections.item', 'section') . '-' . ($key + 1) . '" class="' . c::get('sections.item', 'section') . '">' . kirbytext($field) . '</div>';
    }

    return '<div class="' . c::get('sections.container', 'sections') . '">' . implode($html) . '</div>';

  }, $text);

  return $text;

};