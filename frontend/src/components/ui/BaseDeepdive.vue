<script>
// import { ref } from "vue";
export default {
  props: [
    "title",
    "subtitle",
    "image",
    "nextTitle",
    "nextSubtitle",
    "nextTo",
  ],
};
</script>

<template>
  <section>
    <section class="section card local-page-section">
      <h1 class="title is-3 has-text-grey is-capitalized">{{ title }}</h1>
      <p v-if="subtitle" class="is-size-4 has-text-dark-grey">
        {{ subtitle }}
      </p>
      <img
        class="local-page-image"
        :src="image"
        alt="What is the need for migration here?"
      />
    </section>
    <section class="local-page-section">
      <section
        v-if="nextTitle"
        class="hero has-text-centered has-background-link-light"
      >
        <div class="hero-body">
          <!-- <p class="title is-3 has-text-dark-grey">
            {{ nextTitle }}
          </p> -->
          <p class="is-size-4 mb-6 has-text-grey">{{ nextSubtitle }}</p>

          <router-link
            class="
              button
              is-large is-link-dark is-capitalized
              has-text-weight-semibold
            "
            :to="nextTo"
            >{{ nextTitle }} <i class="ml-2 fa fa-arrow-right"></i
          ></router-link>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>
.local-page-section {
  width: 97%;
  margin: 3rem auto;
}
.local-page-image {
  margin: 4rem 0;
}
@media screen and (min-width: 1400px) and (max-width: 1920px) {
  .local-page-section {
    width: 85%;
  }
}
@media screen and (min-width: 1920px) {
  .local-page-section {
    width: 80%;
  }
}
</style>