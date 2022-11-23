<script>
export default {
  props: ["title", "subtitle", "titleimage"],
};
</script>

<template>
  <div class="mb-4 pb-4">
    <div class="content is-large">
      <h1 class="title is-1 has-text-link">{{ title }}</h1>
      <p class="subtitle is-4 my-2 local-title-desc" :innerHTML="subtitle"></p>
    </div>
    <!-- <div>
      <img :src="titleimage" :alt="title" />
    </div> -->
  </div>
</template>

<style scoped>
.local-title-desc {
  max-width: 80%;
}
</style>