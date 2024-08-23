<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import './assets/scss/global.scss';
import Form from './components/Form.vue';
import Game from './components/Game.vue';

const screen = ref('inicio');
const stage = ref('word');
const word = ref('');
const tip = ref('');
const errors = ref(0);
const letters = ref([]);
const router = useRouter();

function goToAboutPage() {
  router.push('/about'); 
}

function nextStageStep(value) {
  if (stage.value === 'word') {
    word.value = value;
    stage.value = 'tip';
  } else if (stage.value === 'tip') {
    tip.value = value;
    screen.value = 'game';
  }
}

function checkLyrics(letter) {
  const normalizedLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  return letters.value.some(item => item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === normalizedLetter);
}

function play(letter) {

  const normalizedLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (checkLyrics(normalizedLetter)) return;
  letters.value.push(normalizedLetter);
  checkErrors(normalizedLetter);
}

function checkErrors(letter) {
  const normalizedLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const normalizedWord = word.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (normalizedWord.includes(normalizedLetter)) {
    checkAccuracies();
  } else {
    errors.value++;
    if (errors.value === 6) {
      stage.value = 'hanged';
    }
  }
}

function checkAccuracies() {
  const normalizedWord = word.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const uniqueLetters = [...new Set(normalizedWord.replace(/\s/g, '').split(''))];
  if (uniqueLetters.every(letter => letters.value.map(l => l.toLowerCase()).includes(letter))) {
    stage.value = 'winner';
  } 
}

function playAgain() {
  word.value = '';
  tip.value = '';
  errors.value = 0;
  letters.value = [];
  screen.value = 'inicio';
  stage.value = 'word';
}
</script>

<template>
  <div id="main">
    <h1>Jogo da Forca :D</h1>

    <button v-if="screen === 'inicio'" class="about-button" @click="goToAboutPage">About</button>
  
    <section v-if="screen === 'inicio'" id="inicio">
      <Form 
        v-if="stage === 'word'"
        title="Defina a Palavra"
        button="Próximo"
        :maxLength="20"
        @nextStage="nextStageStep"
      />
      <Form 
        v-if="stage === 'tip'"
        title="Defina a Dica"
        button="Iniciar Jogo"
        :maxLength="40"
        @nextStage="nextStageStep"
      />
    </section>

    <section v-else-if="screen === 'game'" id="game">
      <Game 
        :errors="errors" 
        :word="word"
        :tip="tip"
        :checkLyrics="checkLyrics"
        :stage="stage"
        :letters="letters"
        :play="play"
        :playAgain="playAgain"
      />
    </section>
  </div>
</template>

<style>
#main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>



