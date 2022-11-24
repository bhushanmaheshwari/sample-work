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

    const strategize = {
      text: "Strategize High level",
      to: "/strategy/highlevel",
    };
    return {
      strategize,
      need,
      strategyInfo,
    };
  },
  mounted() {
    const bc = [
      { text: "Home", route: "/", class: "" },
      { text: "Strategize", route: "/strategy/need", class: "is-active" },
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
    <img :src="need" alt="asdfasd" />
    <base-page-footer :text="strategize.text" :to="strategize.to" />
  </section>
</template>
