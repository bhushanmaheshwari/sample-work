<script>
import highlevel from "./../assets/task1/highlevel.png";
export default {
  setup() {
    const strategy = {
      text: "strategy Deep dive 1",
      to: "/strategy/deepdive",
    };
    return {
      strategy,
      highlevel,
    };
  },
  mounted() {
    const bc = [
      { text: "Home", route: "/", class: "" },
      { text: "Strategy", route: "/strategy/need" },
      {
        text: "High-level planning",
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
      :title="'Migration Journey - decoupled to headless'"
      :subtitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odi explicabo culpa dignissimos. Soluta at ipsam id temporibus corrupti itaque, enim beatae asperiores sit veniam dignissimos, tempora culpa, saepe repellendus?'"
      :image="highlevel"
      :next-title="'Building blocks'"
      :next-subtitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odi explicabo culpa dignissimos. Soluta at ipsam id temporibus corrupti itaque, enim beatae asperiores sit veniam dignissimos, tempora culpa, saepe repellendus?'"
      :next-to="strategy.to"
      :next-button-text="'Towards implementation details'"
    />
  </section>
</template>
