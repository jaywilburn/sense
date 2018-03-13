<template>
  <div id="team-page" class="roadmap page-bg">
    <div class="pagebar pagebar-team">
      <h1 class="header-text">Team</h1>
    </div>
    <div id="demo">
      <div v-show="active">Show</div>
      <div v-on:mouseover="active = !active">
        <h1>Hover me!</h1>
      </div>
    </div>

    <div class="stem-container container">
      <div class="columns">
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">

            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Angel Jose</h5>
                <p class="team-position">Backend</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Ariel-10.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Ariel Jalali</h5>
                <p class="team-position">Science</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Brandon_1.png" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Brandon Heimstra</h5>
                <p class="team-position">Partnerships</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Crystal-01.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Crystal Rose</h5>
                <p class="team-position">CEO</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">

            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Jay Wilburn </h5>
                <p class="team-position">Frontend</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Eli-02.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Eli Schrank</h5>
                <p class="team-position">Community</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Eyal-06.png" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Eyal Toledano</h5>
                <p class="team-position">Operations</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Grover-11.png" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Grover Light</h5>
                <p class="team-position">Product</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Ross-04.png" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Ross Geesman</h5>
                <p class="team-position">Backend</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Shaili-08.png" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Shalili Jalali</h5>
                <p class="team-position">Culture</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/stef-01.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Stef Telford</h5>
                <p class="team-position">CTO</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Core</h4>
            <div class="team-circle-section">
              <img class="bitmoji" src="../assets/team/Nelson-01.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Nelson Hernandez</h5>
                <p class="team-position">Dev Ops</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Advisor</h4>
            <div class="team-circle-section">
              <img class="advisor" src="../assets/advisors/brock.png" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Brock Pierce</h5>
                <p class="team-position">EOS</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Advisor</h4>
            <div class="team-circle-section">
              <img class="advisor" src="../assets/advisors/chris.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Chris Meiss</h5>
                <p class="team-position">TenX</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Advisor</h4>
            <div class="team-circle-section">
              <img class="advisor" src="../assets/advisors/craig.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Craig Sellars</h5>
                <p class="team-position">Tether</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Advisor</h4>
            <div class="team-circle-section">
              <img class="advisor" src="../assets/advisors/gavin.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Dr. Gavin Wood</h5>
                <p class="team-position">Ethereum</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Advisor</h4>
            <div class="team-circle-section">
              <img class="advisor" src="../assets/advisors/gailia.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Galia Benartzi</h5>
                <p class="team-position">Bancor</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Advisor</h4>
            <div class="team-circle-section">
              <img class="advisor" src="../assets/advisors/gil.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Gil Penchina</h5>
                <p class="team-position">Flight Ventures</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Advisor</h4>
            <div class="team-circle-section">
              <img class="advisor" src="../assets/advisors/nick.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Nick Sullivan</h5>
                <p class="team-position">ChangeCoin</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="square-section">
            <h4 class="roadmap-header">Advisor</h4>
            <div class="team-circle-section">
              <img class="advisor" src="../assets/advisors/simon.jpg" alt="">
            </div>
            <div class="columns">
              <div class="column is-two-thirds">
                <h5 class="team-name mesh-color-2">Simon Dixon</h5>
                <p class="team-position">CTO</p>
              </div>
              <div class="column social-set">
                <!-- <a class="social-icons" href="#"><icon width="20" height="20" :glyph="Twitter"></icon></a>
                <a class="social-icons" href="#"><icon width="20" height="20" :glyph="LinkedIn"></icon></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-cta has-text-centered">
        <h2 class="page-header">Join Sense</h2>
        <a href="https://jobs.makesense.com" class="button main-button">View Roles</a>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
// import Twitter from '../assets/sense/Twitter_Logo_Blue copy.svg'
// import LinkedIn from '../assets/sense/linked.svg'
export default {
  components: {
    Icon
  },
  data () {
    return {
      active: false
    }
  }
}
</script>
