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
      { text: "Strategy", route: "/strategy/need" },
      { text: "Migration Journey", route: "/strategy/highlevel" },
      {
        text: "Building Blocks",
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
     <base-deepdive
      :title="'Building blocks - Underlying Strategy'"
      :subtitle="'Strategizing a department level migration involves contribution from all stakeholders including leadership, product team, and engineering team. Many decisions are part of this process, like appropriate technology, change management, impact on revenue, etc.'"
      :image="deepdive"
      :next-title="''"
      :next-subtitle="''"
      :next-to="''"
      :next-button-text="''"
    />
  </section>
</template>
