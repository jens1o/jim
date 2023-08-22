<script setup lang="ts">
import DateTime from './DateTime.vue';
</script>

<template>
    <div class="mb-3 bg-white rounded-xl p-2 grid grid-rows-3 grid-cols-5 gap-2">
        <p
            :class="['row-span-3', 'text-base', 'md:text-2xl', 'font-bold', 'self-center', 'justify-self-center', getCssColorClass()]">
            {{ formattedAmount() }}
        </p>
        <DateTime class="col-span-4 self-center" :datetime="datetime!" />
        <h2 class="font-bold col-span-4">{{ label }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        amount: Number,
        datetime: String,
        label: String,
    },
    methods: {
        formattedAmount(): string {
            const formatter = new Intl.NumberFormat('de', {
                currency: 'EUR',
                // currencySign: 'EUR',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            return formatter.format(this.amount!) + ' €';
        },
        getCssColorClass(): string {
            if (this.amount! >= 0) {
                return 'text-green-700';
            } else {
                return 'text-red-500';
            }
        }
    }
});
</script>