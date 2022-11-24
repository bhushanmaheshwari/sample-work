<script>
import deepdive from "./../assets/task1/deepdive.png";
export default {
  setup() {
    return {
      deepdive,
    };
  },
  mounted() {
    const bc = [
      { text: "Home", route: "/", class: "" },
      { text: "Strategize", route: "/strategy/need" },
      { text: "High-level planning", route: "/strategy/highlevel" },
      {
        text: "Detailed Analysis",
        route: "/strategy/highlevel",
        class: "is-active",
      },
    ];

    this.$store.dispatch("tasks/setBc", bc);
  },
};
</script>

<template>
  <section>
    <h1 class="title is-3 has-text-grey">Detailed Implementation Strategy</h1>
    <img :src="deepdive" alt="asda" />
  </section>
</template>
