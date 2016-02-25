<?php snippet('header') ?>
<?php snippet('menu') ?>

<div class="container">

	<div class="blog-symbol"></div>

    <div class="blog-container">

        <?php foreach($page->children()->visible() as $post): ?>

			<div class="blog-post">
				<a href="<?php echo $post->url() ?>">
					<div class="blog-date"></div>
				</a>
				<h1><?php echo $post->title()->html() ?></h1>
				<?php echo $post->text()->kirbytext() ?>
			</div>

        <?php endforeach ?>

    </div>

</div>



<?php snippet('meta-bar') ?>

<?php snippet('footer') ?>