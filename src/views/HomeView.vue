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

    const strategize = ref({
      title: task1.title,
      subtitle: task1.description,
      text: "How our migration strategy should be?",
      to: "/strategy/need",
      color: "has-text-link",
      image: strategyImage,
    });

    const worksmarter = ref({
      title: task2.title,
      subtitle: task2.description,
      text: "What can help us be more productive?",
      to: "/worksmarter/highlevel",
      color: "has-text-link",
      image: worksmarterImage,
    });

    const about = ref({
      title: "Architecture",
      subtitle: `Let's have a sneak peek on the overall <span class="tag is-size-6 is-primary">architecture</span> of the website, and may be some inputs if you'd like to convey!   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, uibusdam quia beatae quis rem numquam repellat neque maxime! Repellendus excepturi odio quaerat sequi! Dolorem illo quasi placeat modi, accusantium officia!`,
      text: "Know more behind the scenes",
      to: "/about",
      color: "has-text-link",
      image: aboutImage,
    });

    return {
      strategize,
      worksmarter,
      about,
    };
  },
  mounted() {
    this.$store.dispatch("tasks/setBc", []);
  },
};
</script>


<template>
  <section class="mb-4 pb-4">
    <home-banner />
    <section class="hero has-text-grey is-medium has-text-centered">
      <section class="">
        <div class="hero-body">
          <p class="title is-1 has-text-grey-dark">Demonstration</p>
          <p class="mt-2 subtitle is-3 has-text-grey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, quibusdam quia beatae quis rem numquam repellat neque
            maxime! Repellendus excepturi odio quaerat sequi! Dolorem illo quasi
            placeat modi, accusantium officia!
          </p>
        </div>
        <div class="mb-4 columns">
          <home-card
            class="column"
            :title="strategize.title"
            :subtitle="strategize.subtitle"
            :buttontext="strategize.text"
            :to="strategize.to"
            :color="strategize.color"
            :image="strategize.image"
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
        </div>
      </section>
    </section>
    <div class="mb-4">
      <home-card
        :title="about.title"
        :subtitle="about.subtitle"
        :buttontext="about.text"
        :to="about.to"
        :color="about.color"
        :image="about.image"
      />
    </div>
  </section>
</template>
