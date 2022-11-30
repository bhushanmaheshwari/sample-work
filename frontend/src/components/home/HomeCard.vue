<script setup>
import { defineProps } from "vue";
const props = defineProps(["title", "buttontext", "to", "image"]);
</script>

<template>
  <router-link :to="to">
    <div class="tile is-parent has-text-centered">
      <article class="tile is-child box">
        <p class="title is-2">{{ title }}</p>
        <p class="subtitle is-4">{{ buttontext }}</p>
        <img class="local-card" :src="image" :alt="title" />
      </article>
    </div>
  </router-link>
</template>

<style scoped>
.local-card {
  width: 200px;
}
</style>