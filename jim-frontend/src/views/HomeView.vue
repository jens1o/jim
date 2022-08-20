<script setup lang="ts">
import HomeTile from '../components/HomeTile.vue';
import WeatherTile from '../components/WeatherTile.vue';
import BalanceTile from '../components/BalanceTile.vue';
import EventAndHabitsTile from '../components/EventAndHabitsTile.vue';
</script>

<template>
  <main class="grid grid-cols-3 md:grid-cols-7 gap-3 auto-cols-fr auto-rows-fr">
    <HomeTile size="xl">
      map container
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

</script>