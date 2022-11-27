<script>
// import highlevel from "./task1/deepdive.png";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: ["taskKey", "stepKey"],
  setup() {
    const step = ref({});
    const nextStep = ref({});
    const store = useStore();

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

    return {
      step,
      nextStep,
      getStepData,
    };
  },

  watch: {
    "$route.params.stepKey": function (stepKey) {
      if (stepKey) {
        this.getStepData(stepKey);
      }
    },
  },
  created() {
    this.getStepData(this.stepKey);
  },
};
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
