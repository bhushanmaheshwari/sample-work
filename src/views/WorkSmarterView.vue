<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const { title, description } = store.getters["tasks/task2"];

    const worksmarterInfo = ref({
      title,
      subtitle: description,
    });

    const worksmarterDetail = {
      text: "Work Smarter Detail",
      to: "/worksmarter/1",
    };

    return {
      worksmarterDetail,
      worksmarterInfo,
    };
  },
  mounted() {
    const bc = [
      { text: "Home", route: "/", class: "" },
      { text: "Work Smarter", route: "", class: "is-active" },
    ];
    this.$store.dispatch("tasks/setBc", bc);
  },
};
</script>

<template>
  <section class="">
    <base-title
      :title="worksmarterInfo.title"
      :subtitle="worksmarterInfo.subtitle"
    ></base-title>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </section>
</template>
