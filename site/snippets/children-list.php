<ul>
	<?php foreach($page->children()->visible() as $child): ?>
	<li>
		<a href="<?php echo $child->url() ?>">
			 <?php echo $child->title()->html() ?>
		</a>
	</li>
	<?php endforeach ?>
</ul>