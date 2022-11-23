<script>
export default {
  setup() {
    const strategize = {
      text: "Strategize High level",
      to: "/strategy/highlevel",
    };
    return {
      strategize,
    };
  },
};
</script>

<template>
  <section>
    <base-button :text="strategize.text" :to="strategize.to"></base-button>
    <br />
  </section>
</template>
