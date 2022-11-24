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
     <base-deepdive
      :title="'Core Building blocks'"
      :subtitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odi explicabo culpa dignissimos. Soluta at ipsam id temporibus corrupti itaque, enim beatae asperiores sit veniam dignissimos, tempora culpa, saepe repellendus?'"
      :image="deepdive"
      :next-title="''"
      :next-subtitle="''"
      :next-to="''"
      :next-button-text="''"
    />
  </section>
</template>
