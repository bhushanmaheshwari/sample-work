<script>
import HomeBanner from "./../components/home/HomeBanner.vue";
import HomeCard from "./../components/home/HomeCard.vue";
import { useStore } from "vuex";

export default {
  components: { HomeBanner, HomeCard },

  setup() {
    const store = useStore();
    const tasks = store.getters["tasks/getBasicTasks"];
    const title = "Work Demo";
    const description = `We will be discussing two work items - firstly, strategizing the
            migration from templating engine to a modern JavaScript framework,
            and, secondly, how can we improve the productivity of the
            engineering department. Additionally, if time permits, would like to
            briefly talk about the architecture of this demo website.`;
    return {
      tasks,
      title,
      description,
    };
  },

  mounted() {
    this.$store.dispatch("tasks/getData");
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
          <p class="title is-1 has-text-grey-dark">{{ title }}</p>
          <p class="mt-2 subtitle is-3 has-text-grey">
            {{ description }}
          </p>
        </div>
        <div class="mb-4 columns">
          <home-card
            v-for="task in tasks"
            :key="task.taskKey"
            class="column"
            :title="task.title"
            :buttontext="task.shortDescription"
            :to="task.defaultPath"
            :image="task.homepageImage"
          />
        </div>
      </section>
    </section>
  </section>
</template>
