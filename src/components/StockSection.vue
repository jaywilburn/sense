<template>
  <div v-if="stockInfo" class='stock-section stock-ticker is-hidden-mobile'>
    <div class="columns">
      <div class="column coin-header has-text-centered">
        <a href="#">
          <img class="sense-icon" src="../assets/sense/sense-token-icon.png" alt="">
          <h4 class="is-uppercase coin-name">{{ stockInfo.name }}</h4>
        </a>
      </div>
      <div class="column has-text-centered">
        <p class="coin-info is-uppercase">Current Price</p>
        <h4 class="coin-price">{{ stockInfo.price_eth }} ETH <span :class="price">({{ stockInfo.percent_change_24h }})</span></h4>
      </div>
      <div class="column has-text-centered">
        <p class="coin-info is-uppercase">24H Volume</p>
        <h4 class="coin-price">{{ stockInfo['24h_volume_eth'] }}</h4>
      </div>
      <div class="column">
        <a href="https://www.bancor.network/communities/5a3287e193d1f500018b0578/currency" class="button buy-button">
          Buy
        </a>
        <a href="https://www.bancor.network/communities/5a3287e193d1f500018b0578/currency" class="button sell-button">
          Sell
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      stockInfo: null
    }
  },
  methods: {
    getStock () {
      axios.get('https://api.coinmarketcap.com/v1/ticker/sense/?convert=ETH')
        .then((response) => {
          this.stockInfo = response.data[0]
          // console.log(JSON.stringify(this.stockInfo, null, 1))
        })
    }
  },
  created () {
    this.getStock()
  },
  computed: {
    price () {
      return this.stockInfo.percent_change_24 > 0 ? 'price-up' : 'price-down'
    }
  }
}
</script>

<style scoped>

</style>
