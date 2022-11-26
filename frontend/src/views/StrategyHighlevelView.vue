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
        text: "Migration Journey",
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
      :subtitle="'Moving from monolithic/decoupled to headless would reduce technical operational risk and should also enhance flexibility, performance, customization, omnichannel experience, and future strategic growth.'"
      :image="highlevel"
      :next-title="'Building blocks'"
      :next-subtitle="'There are numerous action items to consider, and from my experience, I would like to classify and discuss three main categories - Foundational Elements, Continuous Development and Integration, and Long-term Vision and Planning.'"
      :next-to="strategy.to"
      :next-button-text="''"
    />
  </section>
</template>
