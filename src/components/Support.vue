<template>
  <div id="support-page" class="roadmap page-bg">
    <div class="pagebar pagebar-support">
      <h1 class="header-text">Support</h1>
    </div>
    <div class="stem-container container">
      <template>
        <section class="support-section" v-for="question in questions" :key="question.id">
          <b-collapse class="card" :open="isOpen">
            <div slot="trigger" slot-scope="props" class="card-header">
              <p class="support-header-title">
                  {{ question.question }}
              </p>
              <a class="card-header-icon">
                <b-icon
                    :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <div class="separator"></div>
                <div class="support-answer" v-html="question.answer"></div>
              </div>
            </div>
          </b-collapse>
        </section>
      </template>
      <div class="bottom-cta has-text-centered">
        <h2 class="page-header">More Help?</h2>
        <a href="https://t.me/SenseToken" class="button main-button">Join Telegram</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      questions: [
        {
          'question': 'How is SENSE used and why is it needed?',
          'id': 1,
          'answer': 'SENSE serves as a unit of exchange for all live interactions, bots, program tools and data contributions across the SENSE network and applications. SENSE creates quantifiable value for the knowledge work everyone contributes and enables this human capital to be exchanged globally.'
        },
        {
          'question': 'What is the point of SENSE if I’m not a developer?',
          'id': 2,
          'answer': 'Along with the thriving Sensay community, there are many bots, brands, and businesses signing up to adopt SENSE to directly incentivize users for their knowledge.'
        },
        {
          'question': 'Why use Blockchain for knowledge attribution?',
          'id': 3,
          'answer': 'As believers in the decentralization, blockchain based knowledge attribution is key to other blockchain enabled technologies, including distributed identity. Blockchain facilitates a level playing field for recording data transactions between humans and software as the barriers between human and computer intelligence further dissolve.'
        },
        {
          'question': 'How can I earn SENSE if I missed the token sale?',
          'id': 4,
          'answer': 'Currently you can earn SENSE by converting your Sensay Coins earned by helping others on Sensay. Learn more about the Sensay Coin Redemption period<a href=”http://bit.ly/SensayCoinRedemption”> here </a> 👈 <br/>You can also earn SENSE by using applications which harness the SENSE API.'
        },
        {
          'question': 'Which wallets support SENSE?',
          'id': 5,
          'answer': 'Any ERC-20 compatible wallet will support SENSE. For desktop, we suggest MyEtherWallet or MetaMask. For mobile, we suggest Jaxx.'
        },
        {
          'question': 'How can I display SENSE in my wallet?',
          'id': 6,
          'answer': 'Make sure the wallet your SENSE is being sent to is ERC-20 compatible. To display SENSE, we suggest reviewing the wallet’s official documentation for displaying custom tokens.'
        },
        {
          'question': 'This basic information may be needed to display SENSE:',
          'id': 7,
          'answer': 'Contract address: 0x6745fAB6801e376cD24F03572B9C9B0D4EdDDCcf <br/>Token name: Sense <br/>Token/Ticker symbol: SENSE<br/>Decimals: 8'
        },
        {
          'question': 'How can I get in touch with the SENSE team?',
          'id': 8,
          'answer': 'Drop by the <a href=”https://t.me/SenseToken”>SENSE Telegram group</a> and say hi to us and our awesome community. You can also <a href=”mailto: tokensale@sensetoken.com”>e-mail</a> the team any time. For official SENSE announcements, make sure you join our <a href=”https://t.me/sense_announcements”> Telegram announcements channel</a>.'
        },
        {
          'question': 'What positions is SENSE hiring for right now?',
          'id': 9,
          'answer': 'We are always looking for talented & ambitious people to join our team of awesome humans.  To see positions we’re hiring for, check out <a href=”https://sense.breezy.hr/”> our careers listings <a>.'
        }
      ]
    }
  }
}
</script>
