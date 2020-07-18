<?php

kirbytext::$tags['button'] = array(
  'attr' => array(
    'link'
  ),
  'html' => function($tag) {
    return '<a class="button" href="' . $tag->attr('link') . '">' . $tag->attr('button') . '</a>';
  }
);

?>