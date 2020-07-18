<?php
kirbytext::$tags['smalltext'] = array(
  'html' => function($tag) {
    switch ($tag->attr('smalltext')) {
      case 'open':
        $markup = '<div class="regular" markdown="1">';
        break;
      case 'close':
        $markup  = '</div>';
        break;
    }
    return $markup;
  }
);