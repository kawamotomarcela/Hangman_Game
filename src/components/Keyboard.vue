<script setup>
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
  letters: {
    type: Array,
    required: true
  },
  checkLyrics: {
    type: Function,
    required: true
  },
  play: {
    type: Function,
    required: true
  }
});

const handleKeydown = (event) => {
  const letter = event.key.toLowerCase();
  if (/^[a-zà-ÿ]$/i.test(letter) && !props.checkLyrics(letter)) {
    props.play(letter);
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div class="keyboard">
    <button 
      class="keyboard-button"
      v-for="(letter, key) in 'abcdefghijklmnopqrstuvwxyzà-ÿ'"
      :key="key"
      :disabled="props.checkLyrics(letter)"
      @click="props.play(letter)">
      {{ letter }}
    </button>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/global.scss';

.keyboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 40px auto;

  .keyboard-button {
    margin: 5px;
    padding: 10px 20px;
    text-transform: uppercase;
    background-color: #4eb380;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #369972;
    }

    &:disabled {
      background-color: #b0b0b0;
      cursor: not-allowed;
    }
  }
}
</style>


