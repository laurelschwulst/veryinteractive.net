<?php snippet('header') ?>
<?php snippet('top-link') ?>

<div class="container">

	<div class="blog-post text">
		<a href="<?php echo $page->parent()->url() ?>">
			<div class="blog-date">
			</div>
		</a>
		<h1><?php echo $page->title()->html() ?></h1>
		<?php echo $page->text()->kirbytext() ?>
	</div>

</div>

<?php snippet('meta-bar') ?>

<?php snippet('footer') ?>