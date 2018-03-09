<template>
  <div id="news-page" class="roadmap page-bg">
    <div class="pagebar pagebar-team">
      <h1 class="header-text">News</h1>
    </div>
    <div class="stem-container container">
      <div class="columns">
        <div class="column">
          <a href="">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-1">{{ news.techCrunch.headline }}</p>
                <p class="news-excerpt">{{ news.techCrunch.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column">
          <a href="">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-2">{{ news.ventureBeat.headline }}</p>
                <p class="news-excerpt">{{ news.ventureBeat.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column">
          <a href="">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-3">{{ news.cryptoTimes.headline }}</p>
                <p class="news-excerpt">{{ news.cryptoTimes.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column">
          <a href="">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-4">{{ news.blank1.headline }}</p>
                <p class="news-excerpt">{{ news.blank1.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <a href="">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-5">{{ news.blank2.headline }}</p>
                <p class="news-excerpt">{{ news.blank2.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column">
          <a href="">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-6">{{ news.huffPost.headline }}</p>
                <p class="news-excerpt">{{ news.huffPost.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column">
          <a href="">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-1">{{ news.coinTelegraph.headline }}</p>
                <p class="news-excerpt">{{ news.coinTelegraph.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column">
          <a href="">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="vision-img" src="http://via.placeholder.com/50x80" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-2">{{ news.forbes.headline }}</p>
                <p class="news-excerpt">{{ news.forbes.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="bottom-cta has-text-centered">
        <h2 class="page-header">Mention Us</h2>
        <a href="" class="button main-button">Get Presskit</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: {
        techCrunch: {
          headline: 'Sensay chat platform raises $4.5m in seed funding from NVP',
          excerpt: 'Sensay, the chatbot startup that lets people ask for advice from fellow users, has today announced the…'
        },
        ventureBeat: {
          headline: 'Sensay wants to help people buy and sell anonymous advice',
          excerpt: 'Sensay is a bot, but its job isn’t to automate human labor or hold a conversation. Every month, Sensay brings…'
        },
        cryptoTimes: {
          headline: 'SENSE Token – An Interview with Founder and CEO Crystal Rose',
          excerpt: 'Sensay is a platform that connects users upon request to other users for real human advice or inspiration. It’s…'
        },
        blank1: {
          headline: 'Bridging the Gap Between Human Intelligence and AI – Sense Token Launches in October',
          excerpt: 'First came Sensay, a Los Angeles-based technology company focusing on…'
        },
        blank2: {
          headline: 'ICO Alert: SENSE',
          excerpt: 'There are three key components of the project: Sensay, A cross-platform messaging application and bot network that allows users and communities to connect'
        },
        huffPost: {
          headline: 'Crypto power players launches digital token aimed at powering human conversation',
          excerpt: 'Crystal Rose has a bold vision – she sees, very clearly, the coming convergence…'
        },
        coinTelegraph: {
          headline: 'Prominent Institutional and Angel Contributors Participate in SENSE',
          excerpt: 'Sensay, a Los Angeles-based tech company that specializes in building distributed messaging…'
        },
        forbes: {
          headline: 'ICOs Are Hot, But Can They Change the Fundraising Game for Women?',
          excerpt: 'Silicon Valley has “disrupted” entire industries in recent years-- from transportation'
        }
      }
    }
  }
}
</script>
