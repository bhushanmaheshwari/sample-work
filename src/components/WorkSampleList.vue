<script setup>
import WorkSampleCard from "./WorkSampleCard.vue";
</script>

<template>
  <div class="section">
    <div class="container">
      <div class="columns is-multiline">
        <work-sample-card class="column m-3 is-6-tablet is-6-desktop" />
        <work-sample-card class="column m-3 is-5-tablet is-5-desktop" />
        <work-sample-card class="column m-3 is-3-tablet is-4-desktop" />
        <work-sample-card class="column m-3 is-4-tablet is-3-desktop" />
        <work-sample-card class="column m-3 is-3-tablet is-4-desktop" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>