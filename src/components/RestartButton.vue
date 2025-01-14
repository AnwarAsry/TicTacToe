<script setup lang="ts">
const emit = defineEmits<{
    (e: "resetGame"): void
}>();

</script>

<template>
    <button
        class="px-4 py-2 rounded-lg border-b-4 border-blue-700 text-white font-bold bg-blue-500 hover:bg-blue-400 hover:border-blue-500"
        @click="emit('resetGame')">
        Play again
    </button>
</template>