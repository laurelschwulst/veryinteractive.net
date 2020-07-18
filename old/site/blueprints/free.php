<?php if(!defined('KIRBY')) exit ?>

title: Free
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
    width: 3/4
  hide_title:
    label: Hide title?
    type:  checkbox
    width: 1/4
  metadata:
    label: Metadata
    type:  text
    width: 1
    help: Such as date ("Fall 2020")
  text:
    label: Text
    type:  textarea