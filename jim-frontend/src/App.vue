<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAppBackgroundStore } from "./stores/appBackground";

const appBackground = useAppBackgroundStore();
</script>

<template>
  <main class="min-h-full min-w-full p-5 overflow-hidden" v-bind:style="{
    background: appBackground.background
  }">
    <header class="mx-auto my-8 max-w-screen-2xl">
      <h1 class="text-3xl font-sans font-thin text-white">
        Good morning, Jens
      </h1>
    </header>

    <RouterView class="pb-20 max-w-screen-2xl mx-auto" />

    <footer class="max-w-screen-2xl mx-auto bg-white w-full h-16 rounded-t-3xl fixed bottom-0 left-0 right-0">
      <nav class="grid grid-rows-1 grid-cols-6 gap-5 w-full h-full place-items-center">
        <a>home</a>
        <a>crm</a>
        <a>activity history</a>
        <a>calendar</a>
        <a>payments</a>
        <a>new expense</a>
      </nav>
    </footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
