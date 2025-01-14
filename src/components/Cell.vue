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
    <span class="size-36 flex justify-center items-center rounded-2xl shadow-cell bg-[#1F3641]" :class="{
        'cursor-default': props.cell !== null,
        'cursor-pointer': props.cell === null
    }" @click="emit('placeMarker', props.cellPosition)">
        <slot></slot>
    </span>
</template>