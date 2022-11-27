<script>
import { ref } from "vue";
export default {
  props: ["taskKey", "stepKey"],
  setup() {
    const taskTitle = ref("");
    const taskDesc = ref("");
    return {
      taskTitle,
      taskDesc,
    };
  },
  created() {
    this.$store
      .dispatch("tasks/getTask", {
        taskKey: this.taskKey,
      })
      .then((response) => {
        this.taskTitle = response.task.title;
        this.taskDesc = response.task.longDescription;
      });
  },
};
</script>

<template>
  <section>
    <base-title :title="taskTitle" :subtitle="taskDesc"></base-title>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </section>
</template>
