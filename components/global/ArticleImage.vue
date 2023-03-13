<template>
    <nuxt-img
          :src="src"
          format="webp"
          fit="cover"
          :alt="alt"
          loading="lazy"
    />
</template>
<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
}
</script>