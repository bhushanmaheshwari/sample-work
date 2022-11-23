<script>
import { ref } from "vue";
import { gsap } from "gsap";
import logo from "./../../assets/logo.png";

export default {
  setup() {
    const developer = ref("Bhushan Maheshwari");
    const animate = () => {
      gsap.to(".animation-box", { rotation: 360, duration: 5, repeat:  5});
    };
    return {
      logo,
      developer,
      animate,
    };
  },
  mounted() {
    this.animate();
  },
};
</script>

<template>
  <section class="hero is-medium has-text-centered container pt-4 mt-4">
    <router-link to="/">
      <img @click="animate" class="animation-box" :src="logo" style="max-height: 100px" />
    </router-link>
    <h1 class="title is-4 is-uppercase">Sample Work</h1>
  </section>
  <hr/>
</template>