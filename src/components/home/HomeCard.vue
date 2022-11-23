<script>
// import { toRefs } from "vue";
export default {
  props: ["title", "subtitle", "buttontext", "to", "color", "image"],
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
  <router-link :to="to">
    <div class="tile is-parent has-text-centered">
      <article class="tile is-child box">
        <p class="title is-2" :class="color">{{ title }}</p>
        <p class="subtitle is-4">{{ buttontext }}</p>
        <img class="local-card" :src="image" :alt="title" />
        <!-- <div>
          <base-button
            class="has-background-light"
            :text="buttontext"
            
          ></base-button>
        </div> -->
        <!-- <div>
        <p class="has-text-grey mt-3 is-size-5 p-5 is-italic" :innerHTML="subtitle"></p>
      </div> -->
      </article>
    </div>
  </router-link>
</template>

<style scoped>
.local-card {
  width: 300px;
}
</style>