<script>

export default {
  props: ["title", "subtitle"],
};
</script>

<template>
  <div class="content is-medium">
    <h1>{{ title }}</h1>
    <p>
      {{ subtitle }}
    </p>
  </div>
</template>