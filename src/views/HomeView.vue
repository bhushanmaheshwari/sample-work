<script setup>
import { RouterLink } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import WorkSampleList from "../components/WorkSampleList.vue";
</script>

<template>
  <header>
    <site-header />
  </header>
  <main>
    <work-sample-list />
  </main>
  <footer>
    <RouterLink to="/about">How this works?</RouterLink>
  </footer>
</template>
