<script setup lang="ts">
</script>

<template>
    <div class="text-center grid grid-cols-5 grid-rows-1 h-full relative items-center">
        <p class="font-semibold text-lg hidden lg:block">{{ humanReadableCurrentDate }}</p>
        <div class="col-span-5 lg:col-span-4">
            ...
        </div>
        <p class="text-gray-400 uppercase font-bold tracking-tight absolute bottom-0 left-0 right-0">
            Events and Habits
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            humanReadableCurrentDate: "",
        };
    },
    mounted() {
        this.humanReadableCurrentDate = this.getHumanReadableCurrentDate();

        this.setUpTimerForNextDay();
    },
    methods: {
        setUpTimerForNextDay() {
            const now = new Date();
            const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            const millisecondsRemainingOnThisDay = +nextDay - +now;

            setTimeout(() => {
                this.onNewDay();
            }, millisecondsRemainingOnThisDay);
        },
        onNewDay() {
            console.log("onNewDay()");

            // refresh displayed date
            this.humanReadableCurrentDate = this.getHumanReadableCurrentDate();

            this.setUpTimerForNextDay();
        },
        getHumanReadableCurrentDate() {
            const formatter = new Intl.DateTimeFormat(void 0, {
                month: "2-digit",
                day: "2-digit",
            })

            return formatter.format(new Date());
        }
    }
});
</script>