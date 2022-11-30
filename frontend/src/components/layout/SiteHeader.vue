<script setup>
import { ref, defineProps, onUpdated, onBeforeMount } from "vue";
import { gsap } from "gsap";
import logo from "./../../assets/logo.png";

const developer = ref("Bhushan Maheshwari");
const animate = () => {
  gsap.to(".animation-box", { rotation: 360, duration: 5, repeat: 5 });
};
const downloadFile = "/Work Sample - Final Version - Bhushan Maheshwari.pdf";

const props = defineProps({
  largeMode: {
    default: false,
    type: Boolean,
    required: false,
  },
});

onUpdated(() => {
  animate();
});

onBeforeMount(() => {
  animate();
});
</script>

<template>
  <section>
    <section
      v-if="largeMode"
      class="hero is-medium has-text-centered pt-4 mt-4"
    >
      <router-link to="/">
        <img
          @click="animate"
          class="animation-box"
          :src="logo"
          style="max-height: 110px"
        />
      </router-link>
      <div>
        <p
          class="is-size-2 has-text-weight-bold is-uppercase has-text-grey-dark"
        >
          Ask Nicely
        </p>
        <p
          class="is-size-4 has-text-weight-semibold is-uppercase has-text-grey"
        >
          Work Sample
          <a class="ml-1 is-size-5" :href="downloadFile" target="_blank"
            ><span class="icon">
              <i class="fa fa-download"></i>
            </span>
          </a>
        </p>
      </div>
    </section>
    <section v-else class="pt-4 mt-4 ml-3">
      <div class="is-flex is-align-items-center">
        <router-link to="/">
          <img
            @click="animate"
            class="animation-box"
            :src="logo"
            style="max-height: 80px"
          />
        </router-link>
        <div class="ml-4">
          <p
            class="
              is-size-3
              has-text-weight-bold
              is-uppercase
              has-text-grey-dark
            "
          >
            Ask Nicely
          </p>
          <p
            class="
              is-size-6
              has-text-weight-semibold
              is-uppercase
              has-text-grey
            "
          >
            Work Sample
          </p>
        </div>
      </div>
    </section>
    <hr />
  </section>
</template>