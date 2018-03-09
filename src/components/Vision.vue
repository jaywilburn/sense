<template>
  <div id="vision-page" class="vision page-bg">
    <div class="pagebar pagebar-vision">
      <h1 class="header-text">Vision</h1>
    </div>
    <div class="stem-container container">
      <div class="video">
        <img src="../assets/video.png" alt="" width="700">
      </div>
      <h2 class="page-header">Sense Partners</h2>
      <div class="columns">
        <div class="column">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-1">SENSE X <span class="global-bold">Ethereum</span></h4>
                <p class="global-text">{{ vision.ethereum }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-2">SENSE X <span class="global-bold">EOS</span></h4>
                <p class="global-text">{{ vision.eos }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-3">SENSE X <span class="global-bold">Bancor</span></h4>
                <p class="global-text">{{ vision.bancor }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <h4 class="global-header mesh-color-4">SENSE X <span class="global-bold">JAXX</span></h4>
                <p class="global-text">{{ vision.jaxx }}</p>
              </div>
            </div>
          </div>
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
