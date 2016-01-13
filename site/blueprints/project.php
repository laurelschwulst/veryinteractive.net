<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
  Metadata:
    label: Metadata
    type:  text
    width: 1/2
    help: Such as what semester the project was given ("Fall 2020")
  color:
    label: Color
    type:  color
    width: 1/2
  text:
    label: Text
    type:  textarea