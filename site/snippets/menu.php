<nav id="top">

  <ul>
    <a class="home-link" href="<?php echo $site->url(); ?>"></a>
    <?php foreach($pages->visible() as $p): ?>
    <li <?php e($p->isOpen(), ' class="current"') ?>>
      <?php if($p == 'class'): ?>
      	<a href="<?php echo $p->children()->first()->url() ?>"><?php echo $p->title()->html() ?></a>
      <?php else : ?>
      	<a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
      <?php endif ?>
    </li>
    <?php endforeach ?>
    <a class="info-link" href="info"></a>
  </ul>

</nav>