<?php

kirbytext::$tags['underline'] = array(
  'html' => function($tag) {
    return '<span class="underline">' . $tag->attr('underline') . '</span>';
  }
);

?>