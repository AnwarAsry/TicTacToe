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
    <form @submit.prevent="handleSubmit" class="w-fit flex flex-col gap-y-2">
        <PlayerInput label="Enter Player name for: X" v-model="playerOneInp" />
        <PlayerInput label="Enter Player name for: O" v-model="playerTwoInp" />
        <button type="submit" class="">Start Game</button>
    </form>
</template>