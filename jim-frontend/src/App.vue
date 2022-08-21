<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAppBackgroundStore } from "./stores/appBackground";
import HomeIcon from "./components/icons/HomeIcon.vue";
import PeopleIcon from "./components/icons/PeopleIcon.vue";
import ClockIcon from "./components/icons/ClockIcon.vue";
import CalendarIcon from "./components/icons/CalendarIcon.vue";
import WalletIcon from "./components/icons/WalletIcon.vue";
import CardIcon from "./components/icons/CardIcon.vue";

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

    <RouterView class="pb-15 max-w-screen-2xl mx-auto" />

    <footer class="max-w-screen-2xl mx-auto bg-white w-full h-16 rounded-t-3xl fixed bottom-0 left-0 right-0 px-4">
      <nav class="grid grid-rows-1 grid-cols-6 h-full place-items-center text-gray-500">
        <RouterLink to="/" activeClass="text-black">
          <HomeIcon class="h-full w-8" />
        </RouterLink>
        <RouterLink to="/crm" activeClass="text-black">
          <PeopleIcon class="h-full w-8" />
        </RouterLink>
        <RouterLink to="/activities" activeClass="text-black">
          <ClockIcon class="h-full w-8" />
        </RouterLink>
        <RouterLink to="/calendar" activeClass="text-black">
          <CalendarIcon class="h-full w-8" />
        </RouterLink>
        <RouterLink to="/expenses" activeClass="text-black">
          <WalletIcon class="h-full w-8" />
        </RouterLink>
        <RouterLink to="/expenses/new" activeClass="text-black">
          <CardIcon class="h-full w-8" />
        </RouterLink>
      </nav>
    </footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
