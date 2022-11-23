<script>
import { ref } from "vue";
import { gsap } from "gsap";
import logo from "./../../assets/logo.png";

export default {
  setup() {
    const developer = ref("Bhushan Maheshwari");
    const animate = () => {
      gsap.to(".animation-box", { rotation: 360, duration: 5, repeat: 100 });
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
  <section class="is-flex is-align-items-center">
    <router-link to="/" class="navbar-item">
      <img @click="animate" class="animation-box" :src="logo" style="max-height: 100px" />
    </router-link>
  </section>
</template>