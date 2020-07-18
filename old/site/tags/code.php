<?php

kirbytext::$tags['code'] = array(
  'html' => function($tag) {
    return '<code>' . $tag->attr('code') . '</code>';
  }
);

?>