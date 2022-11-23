<script>
import need from "./../assets/task1/need.png";
export default {
  setup() {
    const strategize = {
      text: "Strategize High level",
      to: "/strategy/highlevel",
    };
    return {
      strategize,
      need,
    };
  },
};
</script>

<template>
  <section>
    <img :src="need" alt="asdfasd" />
    <div class="tile">
      <base-button :text="strategize.text" :to="strategize.to"></base-button>
      <br />
    </div>
  </section>
</template>
