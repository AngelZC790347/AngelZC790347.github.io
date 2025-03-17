<script setup lang="ts">
import {useScroll} from "@vueuse/core";
import {onMounted, ref, watch} from "vue";
const{x,y,isScrolling} = useScroll(document)
const animEl = ref(null)
const{animation} = defineProps({
  animation:String
})
const isVisible = (el)=>{
  let distance= el.getBoundingClientRect()
  return  distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
}
onMounted(()=>{
  animEl.value.classList.add(animation);
}
)
watch(y, (newY) => {
  console.log(isVisible(animEl.value));
  if (isVisible(animEl.value)) {
    animEl.value.classList.add(animation);
  }else {
    animEl.value.classList.remove(animation);
  }
});
</script>

<template>
  <div class="animation-appear" ref="animEl">
    <slot ></slot>
  </div>
</template>

<style scoped>

</style>