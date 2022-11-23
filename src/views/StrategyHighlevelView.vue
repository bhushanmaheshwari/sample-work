<script>
import highlevel from "./../assets/task1/highlevel.png";
export default {
  setup() {
    const strategize = {
      text: "Strategize Deep dive 1",
      to: "/strategy/deepdive/1",
    };
    return {
      strategize,
      highlevel
    };
  },
};
</script>

<template>
  <section>
    <img :src="highlevel" alt="asdf" />
    <base-button :text="strategize.text" :to="strategize.to"></base-button>
    <br />
  </section>
</template>
