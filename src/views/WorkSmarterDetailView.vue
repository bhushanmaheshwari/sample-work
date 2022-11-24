<script>
import { ref } from "vue";
import highlevel from "./../assets/task2/highlevel.png";

export default {
  setup() {
    const worksmarterInfo = ref({
      title: "Work Smarter Detail",
      subtitle:
        "Faced with an existing system that uses a coupled templating engine like Smarty or Twig, how would you go about planning and executing a strategy for migrating the product to a headless frontend? Assume an existing PHP backend REST API is already available or can be extended to support it.",
    });

    return {
      worksmarterInfo,
      highlevel,
    };
  },
  mounted() {
    const bc = [
      { text: "Home", route: "/", class: "" },
      {
        text: "Work Smarter",
        route: "/worksmarter/highlevel",
        class: "is-active",
      },
    ];
    this.$store.dispatch("tasks/setBc", bc);
  },
};
</script>

<template>
  <section>
    <base-deepdive
      :title="'Missing Pieces of Productivity'"
      :subtitle="`We have often think about improving productivity, and whether it could be personal productivity or organization's, it has potential to exponentially improve well-being, sense of purpose, sustainability and engagement.`"
      :image="highlevel"
      :next-title="''"
      :next-subtitle="''"
      :next-to="''"
      :next-button-text="''"
    />
  </section>
</template>


<style scoped>
</style>