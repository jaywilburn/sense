<template>
  <div id="app">
    <Header/>
    <HomeSection/>
    <Utility />
    <Vision />
    <Roadmap />
  </div>
</template>

<script>
import HomeSection from './components/HomeSection'
import Header from './components/Header'
import Utility from './components/Utility'
import Vision from './components/Vision'
import Roadmap from './components/Roadmap'
export default {
  name: 'App',
  components: {
    Header,
    HomeSection,
    Utility,
    Vision,
    Roadmap
  }
}
</script>

<style lang="scss" src="./app.scss"></style>
