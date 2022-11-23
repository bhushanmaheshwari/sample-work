<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<template>
  <section class="box section">
    <div class=" content is-large">
      <h1>{{ title }}</h1>
      <p :innerHTML="subtitle">
      </p>
    </div>
  </section>
</template>