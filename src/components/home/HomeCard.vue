<script>
// import { toRefs } from "vue";
export default {
  props: ["title", "subtitle", "buttontext", "to"],
  //   setup(props) {
  //     const { title, subtitle, buttontext, to } = toRefs(props);
  //     return {
  //       title,
  //       subtitle,
  //       buttontext,
  //       to,
  //     };
  //   },
};
</script>

<template>
  <div class="tile is-parent has-text-centered">
    <article class="tile is-child box">
      <p class="title is-2">{{ title }}</p>
      <p class="subtitle mt-3 is-4">{{ subtitle }}</p>
      <base-button :text="buttontext" :to="to"></base-button>
    </article>
  </div>
</template>