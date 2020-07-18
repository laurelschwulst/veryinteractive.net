<?php snippet('header') ?>
<?php snippet('menu') ?>

<ul class="blog">

	<?php foreach($page->children()->visible()->sortBy('date') as $post): ?>
	<li class="blog-row">
		<a href="<?php echo $post->url() ?>" class="blog-post">
			<div class="date">
	    		<?php $real_date = $post->date(); ?>
				<?php echo date('F j, Y', $real_date); ?>
	    	</div>
	    	<h2><?php echo $post->title()->html() ?></h2>
	  	</a>
	</li>
	<?php endforeach ?>

</ul>

<?php snippet('footer') ?>