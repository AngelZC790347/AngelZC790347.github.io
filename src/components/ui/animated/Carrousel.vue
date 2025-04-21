<script lang="ts" setup>
import Carousel from "primevue/carousel";
import CardProyecto from "../CardProyecto.astro";
defineProps<{
  items: Array<any>;
}>();
</script>
<template>
  <Carousel :value="items">
    <template #item="slotProp">
      <slot />
    </template>
  </Carousel>
</template>
