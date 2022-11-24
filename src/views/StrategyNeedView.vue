<script>
import need from "./../assets/task1/need.png";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const store = useStore();

    const { title, description } = store.getters["tasks/task1"];

    const strategyInfo = ref({
      title,
      subtitle: description,
    });

    const strategy = {
      text: "Strategy High level",
      to: "/strategy/highlevel",
    };
    return {
      strategy,
      need,
      strategyInfo,
    };
  },
  mounted() {
    const bc = [
      { text: "Home", route: "/", class: "" },
      { text: "Strategy", route: "/strategy/need", class: "is-active" },
    ];

    this.$store.dispatch("tasks/setBc", bc);
  },
};
</script>

<template>
  <section>
    <base-title
      :title="strategyInfo.title"
      :subtitle="strategyInfo.subtitle"
    ></base-title>
    <base-deepdive
      :title="'What is the need for migration here?'"
      :subtitle="''"
      :image="need"
      :next-title="'Migration journey'"
      :next-subtitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odi explicabo culpa dignissimos. Soluta at ipsam id temporibus corrupti itaque, enim beatae asperiores sit veniam dignissimos, tempora culpa, saepe repellendus?'"
      :next-to="strategy.to"
      :next-button-text="'Decoupled to Headless'"
    />
  </section>
</template>
