<?php

kirbytext::$tags['centered'] = array(
  'html' => function($tag) {
    return '<div class="centered">' . $tag->attr('centered') . '</div>';
  }
);

?>