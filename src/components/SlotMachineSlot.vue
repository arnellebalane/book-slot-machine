<template>
  <ul class="slot-machine-slot" :class="{ animating }" :style="styles" @animationend="end">
    <li v-for="(choice, i) in choices" :key="choice.id" :style="getItemStyles(i)">
      <img :src="choice.image" />
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  choices: {
    type: Array,
    default: () => [],
  },
  starting: Boolean,
});
const emit = defineEmit(['done']);

console.log(props.choices);

watch(
  () => props.starting,
  (value) => {
    if (value) {
      start();
    }
  },
  { immediate: true }
);

const animating = ref(false);
const styles = ref({});
const start = () => {
  const duration = Math.random() * 5000;
  styles.value = {
    'animation-duration': `${duration}ms`,
  };
  animating.value = true;
};
const end = () => {
  animating.value = false;
  emit('done');
};

const getItemStyles = (index) => {
  const rotation = (360 / props.choices.length) * index;
  const radius = 170;
  return {
    transform: `rotateX(${rotation}deg) translateZ(${radius}px)`,
  };
};
</script>

<style scoped>
ul {
  position: relative;
  margin: 0;
  padding: 0;
  width: 10rem;
  height: 12rem;
  list-style: none;

  transform-style: preserve-3d;
  transform-origin: center center;
}

ul.animating {
  animation-name: rotate;
  animation-iteration-count: 5;
  animation-duration: 1s;
  animation-timing-function: linear;
}

li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  transform-origin: center center;
}

li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border: 3px solid #f0f0f0;
}
</style>
