<script>
import architecture from "./../assets/about/about.png";
import { ref } from "vue";
export default {
  setup() {
    const headerInfo = ref({
      title: "Architecture",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum eveniet, fugit asperiores dolore amet eligendi earum. Dolore adipisci reprehenderit animi aut numquam eligendi fugit quod perspiciatis, corporis laboriosam dolorem!",
    });

    return {
      architecture,
      headerInfo,
    };
  },
  mounted() {
    const bc = ref([
      { text: "Home", route: "/", class: "" },
      { text: "About", route: "", class: "is-active" },
    ]);

    this.$store.dispatch("tasks/setBc", bc);
  },
};
</script>

<template>
  <section>
    <base-title
      :title="headerInfo.title"
      :subtitle="headerInfo.subtitle"
    ></base-title>
    <img :src="architecture" />
  </section>
</template>