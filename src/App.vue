<script setup lang="ts">
import { ref } from 'vue';
import Cell from './components/Cell.vue';
import type { ICellData } from './models/ICellData';
import type { IPlayer } from './models/IPlayers';
import PlayerForm from './components/PlayerForm.vue';

const grid = ref<ICellData[] | null[]>([
	null, null, null,
	null, null, null,
	null, null, null
])

const checkMatch = (grid: ICellData[] | null[], a: number, b: number, c: number): boolean | null => {
	// Check if all the cells have matching markers
	return grid[a] && grid[a].marker === grid[b]?.marker && grid[a].marker === grid[c]?.marker;
}

const checkWinner = (grid: ICellData[] | null[]): string | null => {
	const winningConditions = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], 	// Rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], 	// Columns
		[0, 4, 8], [2, 4, 6]             	// Diagonals
	];

	for (let i = 0; i < winningConditions.length; i++) {
		// Cell positions
		const [a, b, c] = winningConditions[i];

		// If they have same markers
		if (checkMatch(grid, a, b, c)) {
			console.log("winner");
			// Win
			return grid[a]?.marker!
		}
	}

	// Draw/No winner
	return null;
}

// State for currentPlayer
const currentPlayer = ref("X")

// Player move
const makeMove = (index: number) => {
	// Prevent move if the cell is taken
	if (grid.value[index] !== null) return;
	// Set the cell to the current player's marker
	grid.value[index] = { marker: currentPlayer.value };

	// Check for a winner
	const result = checkWinner(grid.value);

	if (result) {
		console.log("win win win")
	} else {
		// Switch player if no winner yet
		currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
	}
}

const players = ref<IPlayer[]>([])

const addPlayers = (playersToAdd: IPlayer[]) => {
	if (playersToAdd.length == 2) {
		players.value = playersToAdd;
	}
}

</script>

<template>
	<PlayerForm v-if="players.length !== 2" :players="players" @addPlayers="addPlayers" />
	<section v-else class="flex justify-center items-centers">
		<div class="w-fit grid grid-cols-3 grid-rows-3 gap-2">
			<Cell v-for="(cell, index) in grid" :key="index" :cell="cell" :cellPosition="index"
				@place-marker="makeMove">
				{{ cell?.marker }}
			</Cell>
		</div>
	</section>
</template>