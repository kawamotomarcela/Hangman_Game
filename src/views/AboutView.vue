<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBackToGame() {
  router.push('/');
}
</script>

<template>
  <div class="about-container">
    <div class="about-content">
      <div class="about-text">
        <h1>About Page</h1>
        <h2>Conheça o Jogo da Forca em Vue</h2>
        <p>
          Este é um game de forca feito em Vue com Vite. <br>Desfrute do game e divirta-se! <br>
          Experimente desafiar seus conhecimentos e habilidades com esta aplicação interativa =) .
        </p>
        <button @click="goBackToGame" class="back-button">Voltar para o Jogo</button>
      </div>
      <img src="../assets/img/okuyaso.jpg" alt="Forca" class="about-image">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/global.scss';

.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.about-content {
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 800px;
}

.about-image {
  width: 150px;
  height: 150px;
  margin-left: 20px;
  border-radius: 10px;
}

.about-text {
  color: #b1b0b0;
  flex: 1;
}

h1 {
  font-size: 32px;
  color: rgb(221, 221, 221);
  margin-bottom: 10px;
}

h2 {
  font-size: 20px;
  color: #a5a0a0;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.back-button {
  background-color: #2f6d51;
  color: #ffffff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #369972;
  }
}
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    align-items: center;
  }

  .about-image {
    order: -1; 
    margin-bottom: 20px; 
  }

  .about-text {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>


