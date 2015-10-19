<ul class="projects">
	<?php foreach($pages->find('projects')->children()->visible()->sortBy('project_code') as $project): ?>
	<li>
		<a href="<?php echo $project->url() ?>" style="background: <?php echo $project->color() ?>; border-bottom: 1px solid <?php echo $project->color() ?>">
			<span class="project-code"><?php echo $project->project_code()->html() ?></span>
			 ... <?php echo $project->title()->html() ?>
		</a>
	</li>
	<?php endforeach ?>
</ul>