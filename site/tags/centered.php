<?php
kirbytext::$tags['centered'] = array(
  'html' => function($tag) {
    switch ($tag->attr('centered')) {
      case 'open':
        $markup = '<div class="centered" markdown="1">';
        break;
      case 'close':
        $markup  = '</div>';
        break;
    }
    return $markup;
  }
);