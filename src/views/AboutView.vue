<script setup>
import SiteHeader from "../components/SiteHeader.vue";
</script>

<template>
  <header>
    <site-header />
  </header>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
