<script setup lang="ts">
import Card from "primevue/card";
import Chip from "primevue/chip";
import { skills } from "../../models/constants";
import type { Proyecto } from "../../models/types";
defineProps<{ proyecto: Proyecto }>()
const flapskills = new Map(
  Object.values(skills)
    .flatMap(map => [...map])
);
console.log(flapskills)
</script>

<template>
  <div>
    <Card>
      <template #title><a target="_blank" :href="proyecto.url">
          <h6>{{ proyecto.name }} <span><svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg></span></h6>
        </a></template>
      <template #subtitle>
        <div>
          <ul class="stack">
            <Chip v-for="t in proyecto.stack" :key="t">
              <span v-html="flapskills.get(t)"></span>
              <span style="font-size: var(--size-xs)">{{ t }}</span>
            </Chip>
          </ul>
        </div>
      </template>
      <template #header>
        <img :src="proyecto.image" :alt="'imagen ' + proyecto.image" width="100%" height="400px" />
      </template>
      <template #content>
        <main>
          <slot />
        </main>
      </template>
    </Card>
  </div>
</template>

<style scoped>
svg {
  height: 20px;
  width: auto;

}

h6 {
  fill: white;
  padding-block: 1rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--danger-ligth);
  border-bottom: 1px solid var(--danger-ligth);

  span {
    height: fit-content;
    fill: inherit;
    color: inherit;
    font-size: var(--size-xl);
  }

  &:hover {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
    fill: var(--primary);
  }
}

span {
  display: flex;
  align-items: center;
}

.p-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem
}

.p-card {
  overflow: hidden;
}

.stack {
  padding: 2rem 0;
  display: flex;
  gap: 1rem 3rem;
  flex-wrap: wrap;
  fill: white;
}
</style>
<style>
svg {
  height: 20px;
  fill: inherit;
  width: auto;
}

.p-card-body {
  padding: 0 1rem !important;
  padding-bottom: 0rem !important;
}
</style>