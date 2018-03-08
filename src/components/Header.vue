<template>
  <div class="header-section">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-anchor" href="">
            SENSE
          </a>
          <div class="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="anchor utility" href="">Utility</a>
          </div>
          <div class="navbar-item">
            <a class="anchor vision" href="">Vision</a>
          </div>
          <div class="navbar-item">
            <a class="anchor roadmap" href="">Roadmap</a>
          </div>
          <div class="navbar-item">
            <a class="anchor team" href="">Team</a>
          </div>
          <div class="navbar-item">
            <a class="anchor news" href="">News</a>
          </div>
          <div class="navbar-item">
            <a class="anchor support" href="">Support</a>
          </div>
          <div class="navbar-item">
            <a class="anchor whitepaper" href="">Whitepaper</a>
          </div>
        </div>
      </div>
    </nav>
</div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target
        var $target = document.getElementById(target)
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
export default {

}
</script>
