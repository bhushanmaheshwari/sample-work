<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const { title, description } = store.getters["tasks/task2"];

    const worksmarterInfo = ref({
      title,
      subtitle: description,
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
