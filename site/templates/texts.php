<?php snippet('header') ?>
<?php snippet('menu') ?>

<ul class="library">

	<?php foreach($page->children()->visible()->sortBy('author_last', 'author_first', 'title') as $text): ?>
	<li class="library-row">
		<a href="<?php echo $text->url() ?>" class="library-item">
	    	<h2><?php echo $text->author_last()->html() ?>, <?php echo $text->title()->html() ?></h2>
	    	<div class="year"><?php echo $text->year()->html() ?></div>
	  	</a>
	</li>
	<?php endforeach ?>

</ul>

<?php snippet('footer') ?>