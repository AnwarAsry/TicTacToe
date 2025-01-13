<script setup lang="ts">
import { ref } from 'vue';
import Cell from './components/Cell.vue';

const grid = ref([
	null, null, null,
	null, null, null,
	null, null, null
])

</script>

<template>
	<section class="flex justify-center items-centers">
		<div class="w-fit grid grid-cols-3 grid-rows-3 gap-2">
			<Cell v-for="(cell, index) in grid" :key="index" :cell="cell">
				{{ cell }}
			</Cell>
		</div>
	</section>
</template>