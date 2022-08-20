<script lang="ts" setup>

</script>

<template>
    <section :class="cssClasses">
        <slot></slot>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        size: String,
    },
    computed: {
        /**
         * Returns the needed css classes based on the given size
         */
        cssClasses() {
            const cssClasses = ['p-2', 'rounded-3xl', 'bg-white'];

            switch (this.size) {
                case 's':
                    cssClasses.push('aspect-square');
                    break;
                case 'm':
                    cssClasses.push('bg-red-500');
                    break;
                case 'l':
                    cssClasses.push('col-span-2');
                    break;
                case 'xl':
                    cssClasses.push('row-span-2', 'col-span-2');
                    break;
            }

            return cssClasses;
        }
    }
});
</script>