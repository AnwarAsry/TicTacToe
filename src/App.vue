<script setup lang="ts">
import { ref } from 'vue';
import Cell from './components/Cell.vue';
import type { ICellData } from './models/ICellData';

const grid = ref([
	null, null, null,
	null, null, null,
	null, null, null
])

const checkMatch = (grid: ICellData[], a: number, b: number, c: number) => {
	// Check if all the cells have matching markers
	return grid[a] && grid[a].marker === grid[b].marker && grid[a].marker === grid[c].marker;
}

const checkWinner = (grid: ICellData[]) => {
	const winningConditions = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], 	// Rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], 	// Columns
		[0, 4, 8], [2, 4, 6]             	// Diagonals
	];

	winningConditions.forEach(condition => {
		// Cell positions
		const [a, b, c] = condition;

		// If they have same markers
		if (checkMatch(grid, a, b, c)) {
			console.log("WIN WIN WIN");
		}
	})

	console.log("no winner");
}

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