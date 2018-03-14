<template>
  <div id="vision-page" class="vision page-bg">
    <div class="pagebar pagebar-vision">
      <h1 class="header-text">Vision</h1>
    </div>
    <div class="stem-container container sense-container">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/9w2L_oNrAQs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <h2 class="page-header">Sense Partners</h2>
      <div class="columns">
        <div class="column" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="50">
          <a href="https://www.ethereum.org/">
            <div class="square-section">
              <div class="square-header has-text-centered">
                <img class="vision-img" src="../assets/partners/ether.png" alt="">
              </div>
              <div class="columns">
                <div class="column">
                  <h4 class="vision-header mesh-color-1">SENSE X <span class="global-bold">Ethereum</span></h4>
                  <p class="vision-text">{{ vision.ethereum }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <a href="https://eos.io/">
            <div class="square-section">
              <div class="square-header has-text-centered">
                <img class="vision-img" src="../assets/partners/eos.png" alt="">
              </div>
              <div class="columns">
                <div class="column">
                  <h4 class="vision-header mesh-color-2">SENSE X <span class="global-bold">EOS</span></h4>
                  <p class="vision-text">{{ vision.eos }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
          <a href="https://www.bancor.network/discover">
            <div class="square-section">
              <div class="square-header has-text-centered">
                <img class="vision-img" src="../assets/partners/bancor.png" alt="">
              </div>
              <div class="columns">
                <div class="column">
                  <h4 class="vision-header mesh-color-3">SENSE X <span class="global-bold">Bancor</span></h4>
                  <p class="vision-text">{{ vision.bancor }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <a href="https://jaxx.io/">
            <div class="square-section">
              <div class="square-header has-text-centered">
                <img class="vision-img" src="../assets/partners/jax.png" alt="">
              </div>
              <div class="columns">
                <div class="column">
                  <h4 class="vision-header mesh-color-4">SENSE X <span class="global-bold">JAXX</span></h4>
                  <p class="vision-text">{{ vision.jaxx }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      vision: {
        ethereum: 'Smart contracts will decentralize the world; SENSE is an ERC-20 token operating on the Ethereum blockchain',
        eos: 'The future of enterprise is blockchain-powered: SENSE explores bleeding-edge use cases with the scalable EOS Platform',
        bancor: 'Autonomous, decentralized liquidity for the SENSE utility token and enables it to be exchanged for any ERC-20 token on Bancor ',
        jaxx: 'Affords an easy-to-use desktop and mobile wallet supporting ERC-20 tokens like SENSE, for the holding and transacting'
      }
    }
  }
}
</script>
