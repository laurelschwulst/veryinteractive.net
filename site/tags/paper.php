<?php
kirbytext::$tags['paper'] = array(
  'attr' => array(
    'title'
  ),
  'html' => function($tag) {
    switch ($tag->attr('paper')) {
      case 'open':
        $markup = '<section class="paper"><header class="paper-header">';
        $markup .= $tag->attr('title');
        $markup .= '</header>';
        $markup .= '<div class="paper-content" markdown="1">';
        break;
      case 'close':
        $markup  = '</div></section>';
        break;
    }
    return $markup;
  }
);