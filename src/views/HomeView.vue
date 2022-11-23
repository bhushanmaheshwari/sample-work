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
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <article class="tile is-child box">
            <p class="title">One</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Two</p>
            <p class="subtitle">Subtitle</p>
            <base-button
              :text="strategize.text"
              :to="strategize.to"
            ></base-button>
          </article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <article class="tile is-child box">
            <p class="title">One</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Two</p>
            <p class="subtitle">Subtitle</p>
            <base-button
              :text="worksmarter.text"
              :to="worksmarter.to"
            ></base-button>
          </article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <article class="tile is-child box">
            <p class="title">One</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Two</p>
            <p class="subtitle">Subtitle</p>
            <base-button :text="about.text" :to="about.to"></base-button>
          </article>
        </div>
      </div>
    </section>
  </section>
</template>
