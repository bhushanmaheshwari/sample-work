<script>
import { RouterView } from "vue-router";
import SiteHeader from "./components/layout/SiteHeader.vue";

export default {
  components: { SiteHeader },
  setup() {},
};
</script>

<template>
  <section class="container is-fluid">
    <site-header></site-header>
    <section class="section">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </section>
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
</style>
