<script>
import { ref } from "vue";

export default {
  setup() {
    const worksmarterInfo = ref({
      title: "Work Smarter Detail",
      subtitle:
        "Faced with an existing system that uses a coupled templating engine like Smarty or Twig, how would you go about planning and executing a strategy for migrating the product to a headless frontend? Assume an existing PHP backend REST API is already available or can be extended to support it.",
    });

    return {
      worksmarterInfo,
    };
  },
};
</script>

<template>
  <section class="section">
    <base-title
      :title="worksmarterInfo.title"
      :subtitle="worksmarterInfo.subtitle"
    ></base-title>
  </section>
</template>
