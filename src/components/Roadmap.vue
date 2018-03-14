<template>
  <div id="roadmap-page" class="roadmap page-bg">
    <div class="pagebar pagebar-roadmap">
      <h1 class="header-text">Roadmap</h1>
    </div>
    <div class="stem-container container sense-container">
      <div class="columns">
        <div class="column roadmap" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <div class="square-section">
            <h4 class="roadmap-header">Q1</h4>
            <div class="circle-section">
              <img class="vector-rm" src="../assets/roadmap/contact.svg" alt="vector-brain">
              <img class="half" src="../assets/roadmap/half2.svg" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-1">Contact v1 </h4>
                <p class="global-text">{{ roadmap.contact }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column roadmap" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <div class="square-section">
            <h4 class="roadmap-header">Q2</h4>
            <div class="circle-section">
              <img class="vector-rm" src="../assets/roadmap/sdk.svg" alt="vector-brain">
              <img class="energy-cell" src="../assets/roadmap/open.svg" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-2">Attribute SDKs</h4>
                <p class="global-text">{{ roadmap.attribute }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column roadmap" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <div class="square-section">
            <h4 class="roadmap-header">Q3</h4>
            <div class="circle-section">
              <img class="vector-rm" src="../assets/roadmap/belong.svg" alt="vector-brain">
              <img class="energy-cell" src="../assets/roadmap/open.svg" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-1">Access v2</h4>
                <p class="global-text">{{ roadmap.access }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column roadmap" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <div class="square-section">
            <h4 class="roadmap-header">Q4</h4>
            <div class="circle-section">
              <img class="vector-rm" src="../assets/roadmap/clarify.svg" alt="vector-brain">
              <img class="energy-cell" src="../assets/roadmap/full.svg" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-4">Clarify v1 </h4>
                <p class="global-text">{{ roadmap.clarify }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-cta has-text-centered">
        <h2 class="page-header">Sense Progress</h2>
        <a href="https://medium.com/sensay" class="button main-button">Read Blog</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      roadmap: {
        contact: 'Marrying a wallet address with a method of contact to create Contact Locker v1',
        attribute: 'Web & Mobile Attribution SDKs to help applications make SENSE',
        access: 'Platform to access human data and/or contact the humans behind that data',
        clarify: 'Enables developers to make decision making bots, route-enabled recorded intents'
      }
    }
  }
}
</script>
