<script>
import { ref } from "vue";
export default {
  setup(props) {
    const buttonText = ref(props.text);
    const to = ref(props.to);

    return {
      buttonText,
      to,
    };

  },
};
</script>

<template>
  <router-link :to="to" class="button is-large">{{ buttonText }}</router-link>
</template>