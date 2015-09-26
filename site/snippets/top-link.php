<div id="top">
	<?php if($page->parent()->isInvisible() == '1'): ?>
		<a href="<?php echo $site->homePage()->url() ?>" class="top-link"></a>
	<?php else: ?>	
		<a href="<?php echo $page->parent()->url() ?>" class="top-link"></a>
	<?php endif?>
</div>