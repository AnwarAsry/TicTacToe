<script setup lang="ts">
const props = defineProps<{
    cell: { marker: string } | null;
    // Receive the cell index from the parent
    cellPosition: number;
}>();

const emit = defineEmits<{
    (e: "placeMarker", i: number): void;
}>();
</script>

<template>
    <span
        class="size-32 flex justify-center items-center border-2 rounded-lg text-8xl font-bold uppercase transition-colors ease-in"
        :class="{
            'cursor-default': props.cell !== null,
            'cursor-pointer hover:bg-blue-50/5': props.cell === null
        }" @click="emit('placeMarker', props.cellPosition)">
        <slot></slot>
    </span>
</template>