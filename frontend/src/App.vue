<script setup>
import SiteHeader from "./components/layout/SiteHeader.vue";
import SiteFooter from "./components/layout/SiteFooter.vue";
import { useStore } from "vuex";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const bc = computed(() => {
  return store.getters["tasks/getBc"];
});
const isHomePage = computed(() => {
  return store.getters["tasks/isHomePage"];
});

watch(route, (to, from) => {
  window.scroll(0, 0);
});
</script>

<template>
  <section class="">
    <site-header :largeMode="isHomePage" />
    <section class="local-container-height">
      <base-bc :bc="bc" />
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </section>
    <site-footer />
  </section>
</template>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.local-container-height {
  min-height: 1000px;
  margin: 0 1rem;
}
@media screen and (min-width: 1280px) {
  .local-container-height {
    margin: 0 5rem;
  }
}
</style>
