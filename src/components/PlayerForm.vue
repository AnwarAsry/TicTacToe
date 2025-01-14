<script setup lang="ts">
import { ref } from 'vue';
import PlayerInput from './PlayerInput.vue';
import type { IPlayer } from '../models/IPlayers';

const emit = defineEmits<{
    (e: "addPlayers", players: IPlayer[]): void;
}>();

const playerOneInp = ref<string>("")
const playerTwoInp = ref<string>("")

const handleSubmit = () => {
    if (!playerOneInp.value.trim() || !playerTwoInp.value.trim()) {
        alert('Please, both, yes?')
        return
    }

    emit("addPlayers", [{ id: 1, name: playerOneInp.value }, { id: 2, name: playerTwoInp.value }])
    playerOneInp.value = "";
    playerTwoInp.value = "";
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="w-fit flex flex-col gap-y-8">
        <div class="flex flex-col gap-y-4">
            <PlayerInput label="Enter Player name for: X" v-model="playerOneInp" />
            <PlayerInput label="Enter Player name for: O" v-model="playerTwoInp" />
        </div>
        <button type="submit"
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Start Game
        </button>
    </form>
</template>