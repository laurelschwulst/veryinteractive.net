<?php

kirbytext::$tags['comment'] = array(
  'html' => function($tag) {
    return '<span class="comment">' . $tag->attr('comment') . '</span>';
  }
);

?>