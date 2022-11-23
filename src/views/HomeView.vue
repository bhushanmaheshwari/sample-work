<script>
import BaseButton from "../components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  setup() {
    const strategize = {
      text: "Strategize",
      to: "/strategy/need",
    };
    const worksmarter = {
      text: "Work Smarter",
      to: "/worksmarter",
    };
    const about = {
      text: "About",
      to: "/about",
    };
    return {
      strategize,
      worksmarter,
      about,
    };
  },
};
</script>


<template>
  <section>
    <base-button :text="strategize.text" :to="strategize.to"></base-button>
    <br />
    <base-button :text="worksmarter.text" :to="worksmarter.to"></base-button>
    <br />
    <base-button :text="about.text" :to="about.to"></base-button>
  </section>
</template>
