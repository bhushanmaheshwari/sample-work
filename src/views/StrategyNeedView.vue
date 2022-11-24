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
      :title="'Understanding Problem '"
      :subtitle="'As a first step, we would evaluate the need of the migration, underlying implications and if we are really ready to proceed.'"
      :image="need"
      :next-title="'Migration journey'"
      :next-subtitle="`Either way, rest assured, these dependencies will increase with time, if we want to scale up or add new features, making this monolithic and 'decoupled' architecture more complex`"
      :next-to="strategy.to"
      :next-button-text="''"
    />
  </section>
</template>
