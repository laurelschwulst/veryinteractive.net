<?php

kirbytext::$tags['caption'] = array(
  'html' => function($tag) {
    return '<span class="caption">' . $tag->attr('caption') . '</span>';
  }
);

?>