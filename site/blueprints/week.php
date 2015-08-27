<?php if(!defined('KIRBY')) exit ?>

title: Week
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
    width: 1/2
  dates:
    label: Dates
    type:  text
    width: 1/2
  project_start:
  	label: Projects starting?
  	type: text
  	width: 1/2
  project_end:
    label: Projects ending?
    type: text
    width: 1/2
  text:
    label: Text
    type:  textarea