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
    <h1 class="title is-3 has-text-grey">
      What is the need for migration here?
    </h1>
    <img class="local-need-image" :src="need" alt="What is the need for migration here?" />
    <base-page-footer :text="strategy.text" :to="strategy.to" />
  </section>
</template>

<style scoped>
.local-need-image {
  width: 97%;
}
</style>
