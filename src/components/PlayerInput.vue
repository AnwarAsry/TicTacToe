<script setup lang="ts">

const props = defineProps<{
    label: string;
    modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

// Update the model value when input changes
const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
    <div class="flex flex-col gap-2">
        <label :for="label" class="text-xl font-semibold">
            {{ label }}
        </label>
        <input :id="label" type="text" :value="props.modelValue" @input="updateValue"
            class="min-w-64 py-2 px-3 outline-none border rounded-lg focus:border-sky-500">
    </div>
</template>