<script>
import { ref } from 'vue';
export default {
  setup() {
    const worksmarterInfo = ref({
      title: "Work Smarter",
      subtitle:
        "Faced with an existing system that uses a coupled templating engine like Smarty or Twig, how would you go about planning and executing a strategy for migrating the product to a headless frontend? Assume an existing PHP backend REST API is already available or can be extended to support it.",
    });

    const worksmarterDetail = {
      text: "WorkSmarterDetail",
      to: "/worksmarter/1",
    };
    return {
      worksmarterDetail,
      worksmarterInfo,
    };
  },
};
</script>

<template>
  <section>
    <base-title
      :title="worksmarterInfo.title"
      :subtitle="worksmarterInfo.subtitle"
    ></base-title>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-2">
        <article class="tile is-child box">
          <!-- Put any content you want -->
        </article>
      </div>
      <div class="tile is-vertical">
        <div class="tile is-child box">
          <base-button
            :text="worksmarterDetail.text"
            :to="worksmarterDetail.to"
          ></base-button>
          <br />
          <div>
            <router-view v-slot="slotProps">
              <transition name="route" mode="out-in">
                <component :is="slotProps.Component"></component>
              </transition>
            </router-view>
          </div>
        </div>
      </div>
      <div class="tile is-vertical is-2">
        <article class="tile is-child box">
          <!-- Put any content you want -->
        </article>
      </div>
    </div>
  </section>
</template>
