<template>
  <div id="utility-page" class="utility page-bg">
    <div class="pagebar pagebar-utility">
      <h1 class="header-text">Utility</h1>
    </div>
    <div class="stem-container container">
      <div class="columns">
        <div class="column">
          <div class="square-section">
            <div class="flex-container">
              <div class="flex-column">
                <p class="util-text is-uppercase">Consumers</p>
              </div>
              <div class="flex-column">
                <img class="util-img" src="http://via.placeholder.com/70x80" alt="">
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-1">Attribute</h4>
                <p class="global-text">{{ utility.attribute }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <div class="flex-container">
              <div class="flex-column">
                <p class="util-text is-uppercase">Humans</p>
              </div>
              <div class="flex-column">
                <img class="util-img" src="http://via.placeholder.com/70x80" alt="">
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-2">Earn</h4>
                <p class="global-text">{{ utility.earn }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <div class="flex-container">
              <div class="flex-column">
                <p class="util-text is-uppercase">Businesses</p>
              </div>
              <div class="flex-column">
                <img class="util-img" src="http://via.placeholder.com/70x80" alt="">
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-3">Access</h4>
                <p class="global-text">{{ utility.access }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <div class="flex-container">
              <div class="flex-column">
                <p class="util-text is-uppercase">Developers</p>
              </div>
              <div class="flex-column">
                <img class="util-img" src="http://via.placeholder.com/70x80" alt="">
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-4">Build</h4>
                <p class="global-text">{{ utility.build }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="bottom-cta has-text-centered">
        <h2 class="page-header">Learn More</h2>
        <a href="" class="button main-button">Make Sense</a>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      utility: {
        attribute: 'SENSE enables you to attribute the data you generate online as your own, as your ETH address is your new data wallet',
        earn: 'Get SENSE for sharing the app data your generate everyday and each time your data is accessed by anyone on the SENSE Network',
        access: 'Spend SENSE to access human knowledge and contact the humans behind that data on the SENSE Network',
        build: 'SENSE Platform is a messaging protocol enabling existing centralized applications and future dApp users to make SENSE'
      }
    }
  }
}
</script>
