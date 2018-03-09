<template>
  <div class='stock-section'>
    <div class="columns">
      <div class="column">
        {{ stockInfo.name }}
      </div>
      <div class="column">
        <h4>Current Price</h4>
        {{ stockInfo.price_eth }} ({{ stockInfo.percent_change_24h}})
      </div>
      <div class="column">
        <h4 class="is-uppercase">24H Volumne</h4>
        {{ this.dayVolume || 234 }}
      </div>
      <div class="column">
        <button>BUY STUFF</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      stockInfo: null,
      dayVolume: null
    }
  },
  methods: {
    getStock () {
      axios.get('https://api.coinmarketcap.com/v1/ticker/sense/?convert=ETH')
        .then((response) => {
          this.stockInfo = response.data[0]
        })
    }
  },
  created () {
    this.getStock()
  }
}
</script>

<style scoped>

</style>
