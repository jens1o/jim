<script setup lang="ts">
import BalanceTile from '../components/BalanceTile.vue';
import EventAndHabitsTile from '../components/EventAndHabitsTile.vue';
import HomeTile from '../components/HomeTile.vue';
import MapTile from '@/components/MapTile.vue';
import WeatherTile from '../components/WeatherTile.vue';
</script>

<template>
  <main class="grid grid-cols-3 md:grid-cols-7 gap-3 auto-cols-fr auto-rows-fr">
    <HomeTile size="xl">
      <MapTile />
    </HomeTile>
    <HomeTile size="s">
      <WeatherTile />
    </HomeTile>
    <HomeTile size="s">
      <BalanceTile />
    </HomeTile>
    <HomeTile size="l">
      <EventAndHabitsTile />
    </HomeTile>
    <HomeTile size="l">
      ...
    </HomeTile>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppTitleStore } from '@/stores/appTitle';

export default defineComponent({
  mounted() {
    const appTitleStore = useAppTitleStore();

    appTitleStore.updateTitle(this.gatherAppTitle());
  },
  methods: {
    gatherAppTitle() {
      const hours = new Date().getHours();

      let humanReadableTimeOfDay: string;
      if (hours <= 10) {
        humanReadableTimeOfDay = 'Morning';
      } else if (hours <= 15) {
        humanReadableTimeOfDay = 'Day';
      } else if (hours <= 20) {
        humanReadableTimeOfDay = 'Evening';
      } else {
        humanReadableTimeOfDay = 'Night';
      }

      return `Good ${humanReadableTimeOfDay}, Jens!`;
    }
  }
});
</script>