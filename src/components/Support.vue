<template>
  <div class="roadmap page-bg">
    <div class="pagebar pagebar-support">
      <h1 class="header-text">Support</h1>
    </div>
    <div class="stem-container container">
      <template>
        <section>
          <b-collapse class="card">
            <div slot="trigger" slot-scope="props" class="card-header">
              <p class="card-header-title">
                  Component
              </p>
              <a class="card-header-icon">
                <b-icon
                    :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>#buefy</a>.
              </div>
            </div>
          </b-collapse>
          <b-collapse class="card">
            <div slot="trigger" slot-scope="props" class="card-header">
              <p class="card-header-title">
                  Component
              </p>
              <a class="card-header-icon">
                <b-icon
                    :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>#buefy</a>.
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

}
</script>
