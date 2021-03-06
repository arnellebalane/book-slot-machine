<template>
  <h1 :class="{hidden: !isDone}">
    You are
    <span>defeated!</span>
  </h1>

  <SlotMachine :choices="choices" @start="start" @done="done" />
</template>

<script setup>
import { ref } from 'vue';
import SlotMachine from '@components/SlotMachine.vue';
import image1 from '@images/1.jpg';
import image2 from '@images/2.jpg';
import image3 from '@images/3.jpg';
import image4 from '@images/4.jpg';
import image5 from '@images/5.jpg';
import image6 from '@images/6.jpg';
import image7 from '@images/7.jpg';
import image8 from '@images/8.jpg';
import image9 from '@images/9.jpg';

const choices = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
  { id: 9, image: image9 },
];

const isDone = ref(false);
const start = () => (isDone.value = false);
const done = () => (isDone.value = true);
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
}

@keyframes rotate {
  from {
    transform: rotateX(0turn);
  }

  to {
    transform: rotateX(1turn);
  }
}
</style>
<style scoped>
h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vh;
  font-family: 'Inter', sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
}

h1.hidden {
  opacity: 0;
}

h1 span {
  font-size: 4.8rem;
  font-weight: 700;
  color: red;
}
</style>
