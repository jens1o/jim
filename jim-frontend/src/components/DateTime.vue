<template>
    <time class="text-gray-500 text-sm" :time="datetime">
        {{ formattedDateTime()}}
    </time>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        datetime: String,
    },
    methods: {
        formattedDateTime() {
            const formatter = new Intl.DateTimeFormat('de', {
                weekday: "long",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });

            return formatter.format(new Date(this.datetime!));
        }
    }
});
</script>