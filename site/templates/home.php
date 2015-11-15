<?php snippet('header') ?>
<?php snippet('menu') ?>

<div id="town"></div>

<a href="content/pages/name-generator">
	<div id="naming-workshop"></div>
</a>

<a href="content/pages/coding-from-life/">
	<div id="coding-from-life"></div>
</a>

<div id="greeting" class="large">
	<?php echo $page->text()->kirbytext() ?>
</div>

<?php snippet('footer') ?>