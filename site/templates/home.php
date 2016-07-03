<?php snippet('header') ?>
<?php snippet('menu') ?>

<div id="bouncer-container">
  <div id="bouncer">
    <a href="http://summer2016.veryinteractive.net">
    	<div style="height: 160px; width: 160px; display: inline-block; background: #FDEE2F; border-radius: 50%;" class="sun"></div>
    </a>
  </div>
</div>

<div id="town"></div>

<div id="greeting" class="large">
	<?php echo $page->text()->kirbytext() ?>
</div>

<?php snippet('footer') ?>