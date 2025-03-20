<script setup lang="ts">
import type {Proyecto} from "../../models/types"
import Card from "primevue/card"
import Chip from "primevue/chip"
import {skills} from "../../models/constants"
defineProps<{proyecto:Proyecto}>()
const flapskills = new Map(
    Object.values(skills)
        .flatMap(map => [...map])
);
console.log(flapskills)
</script>

<template>
<div>
  <Card>
    <template #title><a target="_blank" :href="proyecto.url"><h6>{{proyecto.name}} <span><i class="pi pi-arrow-circle-right" style="color: inherit"></i></span></h6></a></template>
    <template #subtitle>
        <div >
          <ul class="stack" >
            <Chip v-for="t in proyecto.stack" :key="t">
              <span v-html="flapskills.get(t)"></span>
              <span style="font-size: var(--size-xs)" >{{ t }}</span>
            </Chip>
          </ul>
        </div>
    </template>
    <template #header>
      <img :src="proyecto.image" :alt="'imagen '+proyecto.image" width="100%" height="400px"/>
    </template>
    <template #content>
      <main ><slot/></main>
    </template>
  </Card>
</div>
</template>

<style scoped>
svg{
  height: 20px;
  width: auto;

}
h6{
  padding-block: 1rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--danger-ligth);
  border-bottom: 1px solid var(--danger-ligth);
  span{
    height: fit-content;
    color: inherit;
    font-size: var(--size-xl);
  }
  &:hover{
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
  }
}
span{
  display: flex;
  align-items: center;
}
.p-chip{
 display: flex;
  align-items: center;
  gap:0.5rem
}
.p-card{
  overflow: hidden;
}
.stack{
  padding: 2rem 0;
  display: flex;
  gap: 1rem 3rem;
  flex-wrap: wrap;
}
</style>
<style>
svg{
  height: 20px;
  fill: white;
  width: auto;
}
.p-card-body{
  padding: 0 1rem !important;
  padding-bottom: 0rem !important;
}
</style>