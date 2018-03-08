<template>
  <div class='stock-section'>
    <div class="columns">
      <div class="column">
        STUFF
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
      axios.get('https://api.bancor.network/0.1/currencies/SENSE/ticker?fromCurrencyCode=BNT')
        .then((response) => {
          this.stockInfo = response.data.data
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
