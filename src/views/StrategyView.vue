<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const { title, description } = store.getters["tasks/task1"];

    const strategyInfo = ref({
      title,
      subtitle: description,
    });

    return {
      strategyInfo,
    };
  },
};
</script>

<template>
  <section>
    <base-bc />
    <base-title
      :title="strategyInfo.title"
      :subtitle="strategyInfo.subtitle"
    ></base-title>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </section>
</template>
