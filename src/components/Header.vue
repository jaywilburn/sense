<template>
  <div class="header-section">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-anchor" href="">
            SENSE
          </a>
          <div class="navbar-burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
          <div class="navbar-end">
            <div class="navbar-item">
              <a class="anchor utility" href="#utility-page" v-smooth-scroll>Utility</a>
            </div>
            <div class="navbar-item">
              <a class="anchor vision" href="#vision-page" v-smooth-scroll>Vision</a>
            </div>
            <div class="navbar-item">
              <a class="anchor roadmap" href="#roadmap-page" v-smooth-scroll>Roadmap</a>
            </div>
            <div class="navbar-item">
              <a class="anchor team" href="#team-page" v-smooth-scroll>Team</a>
            </div>
            <div class="navbar-item">
              <a class="anchor news" href="#news-page" v-smooth-scroll>News</a>
            </div>
            <div class="navbar-item">
              <a class="anchor support" href="#support-page" v-smooth-scroll>Support</a>
            </div>
            <div class="navbar-item">
              <a class="anchor whitepaper sense-button" href="https://sensetoken.com/pdfs/sensetoken_whitepaper_en.pdf">Whitepaper</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
</div>
</template>

<script>
export default {
  data () {
    return {
      navIsActive: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.navIsActive = !this.navIsActive
    }
  }
}
</script>
