<script setup lang="ts">
const emit = defineEmits<{
    (e: "resetGame"): void
}>();

</script>

<template>
    <button
        class="px-4 py-2 text-white font-bold rounded border-b-4 border-blue-700 bg-blue-500 hover:bg-blue-400 hover:border-blue-500"
        @click="emit('resetGame')">
        Play again
    </button>
</template>