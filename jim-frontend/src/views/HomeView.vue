<script setup lang="ts">
import HomeTile from '../components/HomeTile.vue';
</script>

<template>
  <main class="grid grid-cols-3 md:grid-cols-7 gap-6 auto-cols-fr auto-rows-fr">
    <HomeTile size="xl">
      map container
    </HomeTile>
    <HomeTile size="s">
      weather
    </HomeTile>
    <HomeTile size="s">
      balance
    </HomeTile>
    <HomeTile size="l">
      events and habits
    </HomeTile>
    <HomeTile size="l">
      ...
    </HomeTile>
  </main>
</template>

<script lang="ts">

</script>