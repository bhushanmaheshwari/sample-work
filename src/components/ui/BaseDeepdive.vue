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
    "nextButtonText",
  ],
};
</script>

<template>
  <section class="section">
    <section class="local-page-section">
      <h1 class="title is-3 has-text-grey">{{ title }}</h1>
      <p class="pt-3 is-size-4 has-text-dark-grey">
        {{ subtitle }}
      </p>
      <img
        class="local-need-image"
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
  margin-top: 1rem;
}
.local-need-image {
  width: 97%;
  margin : 4rem 0;
}
</style>