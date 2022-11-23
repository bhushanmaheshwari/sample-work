<script>
import BaseButton from "../components/ui/BaseButton.vue";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  components: { BaseButton },

  setup() {
    const store = useStore();
    const task1 = store.getters["tasks/task1"];
    const task2 = store.getters["tasks/task2"];

    const strategize = ref({
      title: task1.title,
      subtitle: task1.description,
      text: "Strategize",
      to: "/strategy/need",
    });

    const worksmarter = ref({
      title: task2.title,
      subtitle: task2.description,
      text: "Work Smarter",
      to: "/worksmarter",
    });

    const about = {
      text: "If yes, click here!",
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
    <section class="hero is-large has-text-info is-white">
      <div class="hero-body welcome-text">
        <p class="title is-1">Hello, Good morning!</p>
        <p class="subtitle is-2">Things we are going to dicuss today.</p>
      </div>
    </section>

    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{ strategize.title }}</p>
            <p class="subtitle">{{ strategize.subtitle }}</p>
            <base-button
              :text="strategize.text"
              :to="strategize.to"
            ></base-button>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{ worksmarter.title }}</p>
            <p class="subtitle">{{ worksmarter.subtitle }}</p>
            <base-button
              :text="worksmarter.text"
              :to="worksmarter.to"
            ></base-button>
          </article>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-light">
      <div class="hero-body">
        <p class="title">How this website works?</p>
        <p class="subtitle">
          Are you interested in knowing how this website is working behind the
          scenes?
        </p>
        <base-button :text="about.text" :to="about.to"></base-button>
      </div>
    </section>
  </section>
</template>
