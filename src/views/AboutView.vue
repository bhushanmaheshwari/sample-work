<script>
import architecture from "./../assets/about/about.png";
import { ref } from "vue";
export default {
  setup() {
    const headerInfo = ref({
      title: "Architecture",
      subtitle:
        "Faced with an existing system that uses a coupled templating engine like Smarty or Twig, how would you go about planning and executing a strategy for migrating the product to a headless frontend? Assume an existing PHP backend REST API is already available or can be extended to support it.",
    });

    const bc = ref([
      { text: "Home", route: "/", class: "" },
      { text: "About", route: "", class: "is-active" },
    ]);

    return {
      architecture,
      headerInfo,
      bc
    };
  },
};
</script>

<template>
  <section>
    <base-bc :bc="bc" />
    <base-title
      :title="headerInfo.title"
      :subtitle="headerInfo.subtitle"
    ></base-title>
    <img :src="architecture" />
  </section>
</template>