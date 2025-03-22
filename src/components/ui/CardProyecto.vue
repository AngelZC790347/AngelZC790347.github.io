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
</script>

<template>
  <div class="card">
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
        <img :src="proyecto.image" :alt="'imagen ' + proyecto.image" width="100%" height="350" />
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
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

.card {
  background: #191c29;
  position: relative;
  border-radius: 12px;
  display: flex;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
}

.card::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  /*  background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);*/
  background: var(--danger-ligth);
  opacity: 1;
  transition: opacity .5s;
}

.card::before {
  content: "";
  width: 101%;
  height: 101%;
  border-radius: 8px;

  background: var(--danger-ligth);
  position: absolute;
  z-index: -1;
  top: -0.5%;
  left: -0.5%;
}

.card:hover {
  & h6 {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
    fill: var(--primary);
  }

  &::before {
    background-image: linear-gradient(var(--rotate), var(--primary) 43%, var(--accent)) !important;
    background: unset;
    animation: spin 2.5s linear infinite;
  }

  &::after {
    background-image: linear-gradient(var(--rotate), var(--primary), var(--accent)) !important;
    background: unset;
    animation: spin 2.5s linear infinite;
  }

}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }

  100% {
    --rotate: 360deg;
  }
}

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
  width: 100%;
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