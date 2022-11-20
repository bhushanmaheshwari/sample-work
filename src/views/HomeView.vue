<script setup>
import { RouterLink } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import WorkSampleList from "../components/WorkSampleList.vue";
</script>

<template>
  <header>
    <site-header />
  </header>
  <main>
    <work-sample-list />
  </main>
  <section class="hero is-light is-medium">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title is-1">How it works</p>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit,
          nisi, maiores aperiam quisquam aliquam at corrupti expedita
          consectetur enim doloremque dolor animi sapiente numquam eaque. Totam
          deserunt unde earum?
        </p>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li class="is-active"><a>Overview</a></li>
            <li><a>Modifiers</a></li>
            <li><a>Grid</a></li>
            <li><a>Elements</a></li>
            <li><a>Components</a></li>
            <li><a>Layout</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>
