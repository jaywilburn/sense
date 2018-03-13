<template>
  <div id="news-page" class="roadmap page-bg">
    <div class="pagebar pagebar-team">
      <h1 class="header-text">News</h1>
    </div>
    <div class="stem-container container">
      <div class="columns">
        <div class="column">
          <a href="https://techcrunch.com/2016/08/02/sensay-chat-platform-raises-4-5m-in-seed-funding-from-nvp/">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="news-img" src="../assets/news/tc.png" alt="">
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
          <a href="https://venturebeat.com/2017/04/25/sensay-wants-to-help-people-buy-and-sell-anonymous-advice/">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="news-img" src="../assets/news/vb.png" alt="">
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
          <a href="https://cryptotim.es/crystal-rose-interview/">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="news-img" src="../assets/news/tct.png" alt="">
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
          <a href="https://blog.icoalert.com/ico-alert-report-sense-2998121ec306?gi=955776d25a8">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="news-img" src="../assets/news/ia.png" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-4">{{ news.ico.headline }}</p>
                <p class="news-excerpt">{{ news.ico.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <a href="https://blog.botlist.co/bridging-the-gap-between-human-intelligence-and-ai-with-sense/">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="news-img" src="../assets/news/bl.png" alt="">
            </div>
            <div class="columns">
              <div class="column">
                <p class="news-headline mesh-color-5">{{ news.botlist.headline }}</p>
                <p class="news-excerpt">{{ news.botlist.excerpt }}</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column">
          <a href="https://www.huffingtonpost.com/entry/59dcd475e4b0a1bb90b83112">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="news-img" src="../assets/news/hp.png" alt="">
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
          <a href="https://cointelegraph.com/press-releases/prominent-institutional-and-angel-contributors-participate-in-senses-token-sale">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="news-img" src="../assets/news/ct.png" alt="">
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
          <a href="https://www.forbes.com/sites/geekgirlrising/2017/09/19/3-women-making-waves-in-the-cryptocurrency-industry/&refURL=https://www.sensetoken.com/&referrer=https://www.sensetoken.com/#655c84807b25">
          <div class="square-section">
            <div class="square-header has-text-centered">
              <img class="news-img" src="../assets/news/f.png" alt="">
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
        <a href="https://brandfolder.com/sensay" class="button main-button">Get Presskit</a>
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
        botlist: {
          headline: 'Bridging the Gap Between Human Intelligence and AI – Sense Token Launches in October',
          excerpt: 'First came Sensay, a Los Angeles-based technology company focusing on…'
        },
        ico: {
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
