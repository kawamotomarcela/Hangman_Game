<script>
import Forca from './Hangman.vue';
import Word from './Word.vue';
import Keyboard from './Keyboard.vue';
import End from './End.vue';

export default {
  name: "Game",
  components: {
    Forca,
    Word,
    Keyboard,
    End
  },
  props: {
    errors: {
      type: Number,
      required: true
    },
    word: {
      type: String,
      required: true
    },
    tip: {
      type: String,
    },
    checkLyrics: {
      type: Function,
      required: true
    },
    stage: {
      type: String,
      required: true
    },
    letters: {
      type: Array,
      required: true
    },
    play: {
      type: Function,
      required: true
    },
    playAgain: {
      type: Function,
    }
  }
};
</script>

<template>
  <div class="game">

    <Forca 
    :errors="errors"
     />

    <word
      :word="word"
      :tip="tip"
      :checkLyrics="checkLyrics"
      :stage="stage"
    />

    <keyboard
       v-if="stage !== 'hanged' && stage !== 'winner'"
      :letters="letters"
      :checkLyrics="checkLyrics"
      :play="play"
    />

    <End
      v-if="stage === 'hanged' || stage === 'winner'"
      :stage="stage"
      :text="stage === 'winner' ? 'Parabéns, você acertou!' : 'Fim de jogo, tente novamente =('"
      :playAgain="playAgain"
    />

  </div>
</template>

<style lang="scss">
@import "../assets/scss/global.scss";
</style>


