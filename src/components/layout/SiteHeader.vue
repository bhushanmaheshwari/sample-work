<script>
import { ref } from "vue";
import logo from "./../../assets/logo.png";
export default {
  setup() {
    const developer = ref("Bhushan Maheshwari");
    return {
      logo,
      developer,
    };
  },
};
</script>

<template>
  <nav class="navbar has-shadow is-light">
    <div class="navbar-brand is-flex is-align-items-center">
      <router-link to="/" class="navbar-item">
        <img :src="logo" style="max-height: 100px" />
      </router-link>
      <div>
        <h1>Developed by :</h1>
        <h1>{{ developer }}</h1>
      </div>
    </div>
  </nav>
</template>