<script setup>
import { defineProps } from "vue";
const props = defineProps(["title", "subtitle", "titleimage"]);
</script>

<template>
  <div class="">
    <div class="content is-large">
      <h1 class="title is-1 has-text-link-dark">{{ title }}</h1>
      <p class="subtitle is-4 my-2 local-title-desc" :innerHTML="subtitle"></p>
    </div>
  </div>
</template>