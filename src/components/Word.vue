<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  word: {
    type: String,
    required: true
  },
  tip: {
    type: String
  },
  checkLyrics: {
    type: Function,
    required: true
  },
  stage: {
    type: String
  }
});

const { word, tip, checkLyrics, stage } = toRefs(props);
</script>

<template>
  <div class="word">
    <div class="word-letters">
      <div 
        class="word-letter" 
        v-for="(letter, index) in word.split('')" 
        :key="index"
      >
        {{ checkLyrics(letter) || stage === 'hanged' ? letter : (letter.match(/[^\s]/) ? '' : letter) }}
      </div>
    </div>
    <div class="tips">
      <span class="tip-label">Dica:</span> 
      <span class="tip-content">{{ tip }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/global.scss';

.word {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .word-letters {
    display: flex;
    margin-bottom: 30px;
  }

  .word-letter {
    height: 30px;
    width: 30px;
    margin: 0px 10px;
    border-bottom: 1px solid $white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px; /* Ajuste o tamanho conforme necessário */
  }

  .tip-label {
    font-weight: bold;
    margin-right: 10px;
  }
}
</style>



