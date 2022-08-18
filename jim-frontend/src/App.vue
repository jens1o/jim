<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAppBackgroundStore } from "./stores/appBackground";

const appBackground = useAppBackgroundStore();
</script>

<template>
  <main class="min-h-full min-w-full" v-bind:style="{
    background: appBackground.background
  }">
    <header>
      <h1 class="text-3xl">Good morning, Jens</h1>
    </header>

    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
