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
    <h1 class="title is-3 has-text-grey">
      Let's understand High-level Strategy
    </h1>
    <img :src="highlevel" alt="asdf" />
    <base-page-footer :text="strategy.text" :to="strategy.to" />
  </section>
</template>
