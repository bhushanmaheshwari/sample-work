<script>
import architecture from "./../assets/about/about.png";
import { ref } from "vue";
export default {
  setup() {
    const headerInfo = ref({
      title: "Architecture",
      subtitle: `Let's have a sneak peek on the high-level <span class="tag is-size-5 has-background-link-light has-text-weight-semibold">architecture</span> of the website, and would really appreciate your <span class="tag is-size-5 has-background-link-light has-text-weight-semibold">feedback</span> and queries!`,
    });

    const architectureInfo = ref({
      title : 'Core Building blocks',
      subtitle : 'This website is hosted on Azure Static Web, empowered by Vue.js, Bulma Css on front end; node.js and expressjs as middle tier; and MongoDB as data store + data api + cognitive search for future scalabilty options.'
    });

    return {
      architecture,
      headerInfo,
      architectureInfo
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
    <base-deepdive
      :title="architectureInfo.title"
      :subtitle="architectureInfo.subtitle"
      :image="architecture"
      :next-title="''"
      :next-subtitle="''"
      :next-to="''"
      :next-button-text="''"
    />
  </section>
</template>