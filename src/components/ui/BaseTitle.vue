<script>
export default {
  props: ["title", "subtitle", "titleimage"],
};
</script>

<template>
  <div class="my-6 py-6">
    <div class="content is-large">
      <h1 class="title is-1 has-text-link">{{ title }}</h1>
      <p class="subtitle is-3 my-2" :innerHTML="subtitle"></p>
    </div>
    <!-- <div>
      <img :src="titleimage" :alt="title" />
    </div> -->
  </div>
</template>