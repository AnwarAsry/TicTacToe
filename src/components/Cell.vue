<script setup lang="ts">
const props = defineProps<{
    cell: { marker: string } | null;
    // Receive the cell index from the parent
	cellPosition: number;
	gameOver: boolean;
}>();

const emit = defineEmits<{
    (e: "placeMarker", i: number): void;
}>();
</script>

<template>
    <span 
    class="size-32 flex justify-center items-center rounded-3xl bg-blue-950" 
    :class="{
        'cursor-default': props.cell !== null || props.gameOver,
		'cursor-pointer': props.cell === null && !props.gameOver
    }" @click="!props.gameOver && emit('placeMarker', props.cellPosition)">
        <slot></slot>
    </span>
</template>