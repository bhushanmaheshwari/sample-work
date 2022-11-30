<script setup>
import { defineProps } from "vue";
const props = defineProps(["bc"]);
</script>

<template>
  <nav class="breadcrumb has-arrow-separator is-large" aria-label="breadcrumbs">
    <ul>
      <li v-for="x in bc" :key="x.text">
        <router-link :to="x.route" :class="x.class">{{ x.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>