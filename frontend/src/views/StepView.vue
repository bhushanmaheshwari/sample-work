<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

const nextStep = ref({});
const step = ref({});

const getStepData = (stepKey) => {
  store
    .dispatch("tasks/getStep", {
      stepKey,
    })
    .then((response) => {
      step.value = response.step;
      nextStep.value = response.nextStep;
    });
};

onMounted(() => {
  const stepKey = route.params.stepKey;
  getStepData(stepKey);
});

watch(route, (r) => {
  const stepKey = route.params.stepKey;
  if (stepKey) {
    getStepData(stepKey);
  }
});
</script>

<template>
  <section>
    <base-deepdive
      :title="step?.title"
      :subtitle="step?.description"
      :image="step?.imageUrl"
      :next-title="nextStep?.prefaceTitle"
      :next-subtitle="nextStep?.prefaceDescription"
      :next-to="`${nextStep?.stepKey}`"
    />
  </section>
</template>
