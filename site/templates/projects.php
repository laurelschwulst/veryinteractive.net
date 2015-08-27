<?php snippet('header') ?>
<?php snippet('menu') ?>

<div class="container">

	<div class="document">
		<?php echo $page->text()->kirbytext() ?>
		<?php snippet('projects-list') ?>
	</div>

</div>

<?php snippet('meta-bar') ?>

<?php snippet('footer') ?>