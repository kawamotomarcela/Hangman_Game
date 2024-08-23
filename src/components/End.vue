<script setup>
import { onMounted, onBeforeUnmount, toRefs } from 'vue';

const props = defineProps({
  stage: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  playAgain: {
    type: Function,
    required: true
  }
});

const { stage, text, playAgain } = toRefs(props);

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    playAgain.value();
  }
};

onMounted(() => {
  window.addEventListener('keyup', handleKeyPress);
});

onBeforeUnmount(() => {
  window.removeEventListener('keyup', handleKeyPress);
});
</script>

<template>
 <div class="end">
  <div :class="`end-text ${stage}`">
    {{ text }}
  </div>
  <button class="end-botão" @click="playAgain">
    Jogar Novamente
  </button>
 </div>
</template>

<style lang="scss">
@import '../assets/scss/global.scss';

.end-text {
  margin: 20px 0px;
  font-size: 24px;
  font-weight: bold;
}

.end-text.hanged {
  color: $red;
}

.end-text.winner {
  color: $green;
}
</style>

