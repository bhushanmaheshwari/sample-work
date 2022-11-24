<script>
// import { ref } from "vue";
export default {
  props: ["to", "text"],
  // setup(props) {
  //   const buttonText = ref(props.text);
  //   const to = ref(props.to);

  //   return {
  //     buttonText,
  //     to,
  //   };
  // },
};
</script>

<template>
  <section class="local-page-footer">
    <section class="hero is-medium has-background-link-light">
      <div class="hero-body">
        <p class="title is-2 has-text-dark-grey">Let's deepdive even further</p>
        <p class="subtitle is-4 has-text-grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit
          explicabo culpa dignissimos. Soluta at ipsam id temporibus corrupti
          itaque, enim beatae asperiores sit veniam dignissimos, tempora culpa,
          saepe repellendus?
        </p>
        <router-link class="button is-large is-link" :to="to">{{
          text
        }}</router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
.local-page-footer {
  margin-top: 8rem;
  margin-bottom: 15rem;
}
</style>