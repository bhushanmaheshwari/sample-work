<script>
import HomeBanner from "./../components/home/HomeBanner.vue";
import HomeCard from "./../components/home/HomeCard.vue";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  components: { HomeBanner, HomeCard },

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
      text: "Our Architecture",
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
  <section class="container">
    <home-banner />

    <section class="section">
      <div class="tile is-ancestor">
        <home-card
          :title="strategize.title"
          :subtitle="strategize.subtitle"
          :buttontext="strategize.text"
          :to="strategize.to"
        />
        <home-card
          :title="worksmarter.title"
          :subtitle="worksmarter.subtitle"
          :buttontext="worksmarter.text"
          :to="worksmarter.to"
        />
      </div>
    </section>

    <section class="hero is-large has-text-centered">
      <section class="">
        <div class="hero-body">
          <p class="title is-1">Behind the scenes</p>
          <p class="subtitle is-3">
            Let's have a sneak peek on the overall architecture of the website,
            and may be some inputs if you'd like to convey!
          </p>
          <base-button :text="about.text" :to="about.to"></base-button>
        </div>
      </section>
    </section>
  </section>
</template>
