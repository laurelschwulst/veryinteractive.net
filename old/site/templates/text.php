<?php snippet('header') ?>
<?php snippet('top-link') ?>

<div class="container">

	<div class="metadata">

		<?php if(!$page->selected_image()->empty()): ?>
		<div class="selected-image">
			<img src="<?php echo $page->selected_image()->toFile()->url() ?>">
		</div>
		<?php endif ?>

		<h1><?php echo $page->title()->html() ?><?php echo $page->subtitle()->html() ?></h1>

		<span class="byline"><?php echo $page->author_first()->html() ?> <?php echo $page->author_last()->html() ?></span><?php if(!$page->year()->empty()): ?>,
		<span class="year"><?php echo $page->year()->html() ?></span><?php endif ?>

		<div class="byline-extra"><?php echo $page->further_authors()->html() ?></div>

		<!-- <div class="space"></div> -->

		<?php if ($page->hasDocuments()): ?>
			<div class="pdf">
			<?php if (1 == $page->hasDocuments()): ?>
				Download PDF:
				<?php else : ?>
				Download PDFs:
			<?php endif ?>
				<?php foreach($page->documents()->filterBy('extension', 'pdf') as $pdf): ?>
					<a href="<?php echo $pdf->url() ?>"><?php echo $pdf->filename() ?></a>
				<?php endforeach ?>
			</div>
		<?php endif ?>
		
		<div class="download-sentence">
			<?php echo $page->download_sentence()->kirbytext() ?>
		</div>

		<div class="further-metadata">
			<?php echo $page->further_metadata()->kirbytext() ?>
		</div>
	</div>

	<?php if(!$page->text()->empty()): ?>
		<div class="text">
		  <?php echo $page->text()->kirbytext() ?>
		</div>
	<?php endif ?>

</div>

<?php snippet('meta-bar') ?>

<?php snippet('footer') ?>