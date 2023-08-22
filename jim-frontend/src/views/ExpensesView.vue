<script setup lang="ts">
import Expense from '../components/Expense.vue';
// TODO: Do we really want to display expenses (as in, negative money flow) here or also income?
// WHat would be the right term to also include positive money flow?
</script>

<template>
    <section class="rounded my-8">
        <ol>
            <li v-for="expenseData of getExpenses()">
                <Expense :amount="expenseData.amount" :datetime="expenseData.datetime" :label="expenseData.label" />
            </li>
        </ol>
    </section>
</template>

<script lang="ts">
import { useAppTitleStore } from '@/stores/appTitle';
import { defineComponent } from 'vue';

type TExpense = { amount: number, datetime: string, label: string };

export default defineComponent({
    methods: {
        getExpenses(): TExpense[] {
            let expenses = [];

            // For now, random test data will do.
            for (let i = 0; i < 5; i++) {
                expenses.push({
                    amount: Number((Math.random() * 200 - 100).toFixed(2)),
                    datetime: new Date().toISOString(),
                    label: `Expense ${i}`
                });
            }

            return expenses;
        },
    },
    mounted() {
        const appTitle = useAppTitleStore();

        appTitle.updateTitle("Expenses");

        // TODO: Update app background to another gradient
    },
});
</script>