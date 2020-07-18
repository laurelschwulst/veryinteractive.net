<?php if(!defined('KIRBY')) exit ?>

title: Text
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
  subtitle:
    label: Subtitle
    type:  text
  author_first:
    label: Author (first name)
    type:  text
    width: 1/3
  author_last:
    label: Author (last name)
    type:  text
    width: 1/3
  year:
    label: Year
    type:  text
    width: 1/3
  further_authors:
    label: Further authorship credits
    type:  text
    width: 1
  download_sentence:
    label: Download sentence
    type:  textarea
    help: e.g. Download video colon link or Link to article colon link
    width: 1
  further_metadata:
    label: Further metadata
    type:  text
    width: 1
  text:
    label: Text
    type:  textarea
  selected_image:
      label: Selected Image
      type:  selector
      mode:  single
      types: image