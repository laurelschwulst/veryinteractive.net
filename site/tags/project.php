<?php

kirbytext::$tags['project'] = array(
  'html' => function($tag) {
    return '<span class="project-code">' . $tag->attr('project') . '</span>';
  }
);

?>