<?php snippet('header') ?>
<?php snippet('menu') ?>

<div id="town"></div>

<a href="workshops/name-generator">
	<div id="naming-workshop"></div>
</a>

<div id="greeting" class="large">
	<?php echo $page->text()->kirbytext() ?>
</div>

<?php snippet('footer') ?>