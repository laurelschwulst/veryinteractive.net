<ul class="projects">
	<?php foreach($pages->find('projects')->children()->visible() as $project): ?>
	<li>
		<a href="<?php echo $project->url() ?>" style="background: <?php echo $project->color() ?>; border-bottom: 1px solid <?php echo $project->color() ?>">
			 <?php echo $project->title()->html() ?>
		</a>
	</li>
	<?php endforeach ?>
</ul>