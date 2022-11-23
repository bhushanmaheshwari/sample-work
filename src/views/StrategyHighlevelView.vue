<script>
export default {
  setup() {
    const strategize = {
      text: "Strategize Deep dive 1",
      to: "/strategy/deepdive/1",
    };
    return {
      strategize,
    };
  },
};
</script>

<template>
  <section>
    <h1>This is strategy high level page</h1>
    <base-button :text="strategize.text" :to="strategize.to"></base-button>
    <br />
  </section>
</template>
