<script>
import HomeBanner from "./../components/home/HomeBanner.vue";
import HomeCard from "./../components/home/HomeCard.vue";

import worksmarterImage from "./../assets/home/hero-bg-about.jpg";
import aboutImage from "./../assets/home/hero-bg-worksmarter.jpg";
import strategyImage from "./../assets/home/hero-bg-strategy.jpg";

import { ref } from "vue";
import { useStore } from "vuex";
export default {
  components: { HomeBanner, HomeCard },

  setup() {
    const store = useStore();
    const task1 = store.getters["tasks/task1"];
    const task2 = store.getters["tasks/task2"];

    const strategy = ref({
      title: task1.title,
      subtitle: task1.description,
      text: "How well our migration strategy is aligned?",
      to: "/strategy/need",
      color: "has-text-link",
      image: strategyImage,
    });

    const worksmarter = ref({
      title: task2.title,
      subtitle: task2.description,
      text: "What can help us to be more productive?",
      to: "/worksmarter/highlevel",
      color: "has-text-link",
      image: worksmarterImage,
    });

    const about = ref({
      title: "Architecture",
      subtitle: ``,
      text: "Do you want to know more about this website?",
      to: "/about",
      color: "has-text-link",
      image: aboutImage,
    });

    return {
      strategy,
      worksmarter,
      about,
    };
  },
  mounted() {
    this.$store.dispatch("tasks/setBc", []);
    this.$store.dispatch("tasks/setHomePage", true);
  },
  unmounted() {
    this.$store.dispatch("tasks/setHomePage", false);
  },
};
</script>


<template>
  <section class="container mb-4 pb-4">
    <home-banner />
    <section class="hero has-text-grey is-medium has-text-centered">
      <section class="">
        <div class="hero-body">
          <p class="title is-1 has-text-grey-dark">Work Demo</p>
          <p class="mt-2 subtitle is-3 has-text-grey">
           We will be discussing on two work items - firstly, strategizing the migration from templating engine to modern JavaScript framework, and, secondly, how can we improve productivity of the engineering department. Additionally, if time permits, would like to briefly talk about the architecture of this demo website.
          </p>
        </div>
        <div class="mb-4 columns">
          <home-card
            class="column"
            :title="strategy.title"
            :subtitle="strategy.subtitle"
            :buttontext="strategy.text"
            :to="strategy.to"
            :color="strategy.color"
            :image="strategy.image"
          />
          <home-card
            class="column"
            :title="worksmarter.title"
            :subtitle="worksmarter.subtitle"
            :buttontext="worksmarter.text"
            :to="worksmarter.to"
            :color="worksmarter.color"
            :image="worksmarter.image"
          />
          <home-card
            class="column"
            :title="about.title"
            :subtitle="about.subtitle"
            :buttontext="about.text"
            :to="about.to"
            :color="about.color"
            :image="about.image"
          />
        </div>
      </section>
    </section>
  </section>
</template>
