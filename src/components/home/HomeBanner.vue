<script>
import hero from "./../../assets/home/hero-bg-home.jpeg";
export default {
  setup() {
    return {
      hero,
    };
  },
};
</script>

<template>
  <section class="hero has-text-info is-white">
    <div class="hero-body welcome-text">
      <div class="is-flex is-align-items-center is-justify-content-space-between">
        <div>
          <p class="title is-1">Hello, Good morning!</p>
          <p class="subtitle is-2">Things that we are going to <span class="is-underlined"> discuss</span> today.</p>
        </div>
        <img class="hero-bg" :src="hero" alt="hero-background" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-bg {
  width: 40%;
}
</style>