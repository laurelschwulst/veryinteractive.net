<?php if(!defined('KIRBY')) exit ?>

title: Blog post
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
  date:
    label: Date
    type:  date
    default: today
  text:
    label: Text
    type:  textarea