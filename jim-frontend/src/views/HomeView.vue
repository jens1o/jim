<script setup lang="ts">
import HomeTile from '../components/HomeTile.vue';
</script>

<template>
  <main class="grid grid-cols-3 md:grid-cols-6 gap-5">
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