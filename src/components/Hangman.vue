<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  errors: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="forca">
    <img :src="`https://raw.githubusercontent.com/william-costa/wdev-hangman-game-resources/master/images/hangman/${errors}.svg`" alt = "img boneco da forca"/>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/global.scss';

.forca img{
    height: 150px;
}
</style>