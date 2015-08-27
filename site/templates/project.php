<style>
	a.top-link:hover {
		background: <?php echo $page-> color() ?> !important;
	}
</style>

<?php snippet('header') ?>
<?php snippet('top-link') ?>

<body style="background: <?php echo $page-> color() ?>">

<div class="container">

	<div class="document-side project-code">
		<?php echo $page->project_code()->html() ?>
	</div>

	<div class="document">
		<h1><?php echo $page->title()->html() ?></h1>
		<?php echo $page->text()->kirbytext() ?>
	</div>

</div>

<?php snippet('meta-bar') ?>
<?php snippet('footer') ?>