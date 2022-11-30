<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const taskTitle = ref("");
const taskDesc = ref("");

const store = useStore();
const route = useRoute();

const taskKey = route.params.taskKey;
store
  .dispatch("tasks/getTask", {
    taskKey: taskKey,
  })
  .then((response) => {
    taskTitle.value = response.task.title;
    taskDesc.value = response.task.longDescription;
  });
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
