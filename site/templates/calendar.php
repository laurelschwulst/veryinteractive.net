<?php snippet('header') ?>
<?php snippet('menu') ?>

<div class="container">

    <div class="document">

        <?php echo $page->text()->kirbytext() ?>

        <ul class="calendar">

            <?php foreach($page->children()->visible() as $week): ?>
            <li class="calendar-row">
                <div class="title">
                    <span class="week"><?php echo $week->title()->html() ?></span> ... <?php echo $week->dates()->html() ?>
                    <div class="projects-start-end">
                        <?php if (!$week->project_end()->empty()): ?>
                            &#60;/<?php echo $week->project_end()->html() ?>&#62;
                        <?php endif ?>
                        <?php if (!$week->project_start()->empty()): ?>
                            &#60;<?php echo $week->project_start()->html() ?>&#62;
                        <?php endif ?>
                    </div>
                </div>
                <div class="body">
                    <?php echo $week->text()->kirbytext() ?>
                </div>
            </li>
            <?php endforeach ?>
        </ul>

    </div>

</div>

<?php snippet('meta-bar') ?>
<?php snippet('footer') ?>