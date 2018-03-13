<template>
  <div id="app">
    <StockSection />
    <Header/>
    <HomeSection/>
    <Utility />
    <Vision />
    <Roadmap />
    <Team />
    <News />
    <Support />
    <Footer />
  </div>
</template>

<script>
import StockSection from './components/StockSection'
import HomeSection from './components/HomeSection'
import Header from './components/Header'
import Utility from './components/Utility'
import Vision from './components/Vision'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import News from './components/News'
import Support from './components/Support'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    StockSection,
    Header,
    HomeSection,
    Utility,
    Vision,
    Roadmap,
    Team,
    News,
    Support,
    Footer
  }
}
</script>
<style lang="scss" src="./app.scss"></style>
