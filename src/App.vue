<script setup lang="ts">
import { ref } from 'vue';
import Cell from './components/Cell.vue';
import type { ICellData } from './models/ICellData';
import type { IPlayer } from './models/IPlayers';
import PlayerForm from './components/PlayerForm.vue';
import RestartButton from './components/RestartButton.vue';

const grid = ref<ICellData[] | null[]>([
	null, null, null,
	null, null, null,
	null, null, null
])

// State to play again
const playAgain = ref<boolean>(false)

const players = ref<IPlayer[]>([])

// State for currentPlayer
const currentPlayer = ref("X")

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

// Player move
const makeMove = (index: number) => {
	// Prevent move if the cell is taken
	if (grid.value[index] !== null) return;
	// Set the cell to the current player's marker
	grid.value[index] = { marker: currentPlayer.value };

	// Check for a winner
	const result = checkWinner(grid.value);

	// If winner
	if (result) {
		console.log("win win win")
		playAgain.value = true;
		return
	}

	// If no winner and every cell is taken
	if (grid.value.every(cell => cell !== null)) {
		playAgain.value = true;
		return
	}

	// Switch player if no winner yet
	currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
}

const addPlayers = (playersToAdd: IPlayer[]) => {
	if (playersToAdd.length == 2) {
		players.value = playersToAdd;
	}
}

const resetGame = () => {
	// Clear the grid
	grid.value = Array(9).fill(null);
	// Change to starting player
	currentPlayer.value = 'X';
	// Reset the play again button state
	playAgain.value = false;
}

</script>

<template>
	<PlayerForm v-if="players.length !== 2" :players="players" @addPlayers="addPlayers" />
	<section v-else class="flex flex-col items-center gap-12">
		<p class="px-5 py-2 text-2xl font-semibold rounded-lg bg-gray-500">{{ currentPlayer }} TURN</p>
		<div class="w-fit p-3 grid grid-cols-3 grid-rows-3 gap-3 rounded-3xl bg-[#268AFF] shadow-lg">
			<Cell v-for="(cell, index) in grid" :key="index" :cell="cell" :cellPosition="index"
				@place-marker="makeMove">
				{{ cell?.marker }}
			</Cell>
		</div>

		<RestartButton v-if="playAgain" @reset-game="resetGame" />
	</section>
</template>