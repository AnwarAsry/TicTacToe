<script setup lang="ts">
const props = defineProps(["cell"]);
</script>

<template>
    <span
        class="size-36 flex justify-center items-center border-2 rounded-lg text-8xl font-bold uppercase transition-colors ease-in"
        :class="{
            'cursor-default': props.cell !== null,
            'cursor-pointer hover:bg-blue-50/5': props.cell === null
        }">
        <slot></slot>
    </span>
</template>