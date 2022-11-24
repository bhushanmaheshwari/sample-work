<script>
import highlevel from "./../assets/task1/highlevel.png";
export default {
  setup() {
    const strategize = {
      text: "Strategize Deep dive 1",
      to: "/strategy/deepdive",
    };
    return {
      strategize,
      highlevel,
    };
  },
  mounted() {
    const bc = [
      { text: "Home", route: "/", class: "" },
      { text: "Strategize", route: "/strategy/need" },
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
    <base-page-footer :text="strategize.text" :to="strategize.to" />
  </section>
</template>
