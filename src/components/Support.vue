<template>
  <div id="support-page" class="roadmap page-bg">
    <div class="pagebar pagebar-support">
      <h1 class="header-text">Support</h1>
    </div>
    <div class="stem-container container">
      <template>
        <section class="support-section">
          <b-collapse class="card" :open="isOpen">
            <div slot="trigger" slot-scope="props" class="card-header">
              <p class="card-header-title">
                  {{ questions.one }}
              </p>
              <a class="card-header-icon">
                <b-icon
                    :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                {{ questions.oneAnswer }}
              </div>
            </div>
          </b-collapse>
          <b-collapse class="card" :open="isOpen">
            <div slot="trigger" slot-scope="props" class="card-header">
              <p class="card-header-title">
                  {{ questions.two}}
              </p>
              <a class="card-header-icon">
                <b-icon
                    :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                {{ questions.twoAnswer }}
              </div>
            </div>
          </b-collapse>
        </section>
      </template>
      <div class="bottom-cta has-text-centered">
        <h2 class="page-header">More Help?</h2>
        <a href="" class="button main-button">Join Telegram</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      questions: {
        'one': 'How is SENSE used and why is it needed?',
        'oneAnswer': 'Blah blah blah',
        'two': 'What is the point of SENSE if I’m not a developer?',
        'twoAnswer': 'Blah blah blah'
      }
    }
  }
}
</script>
