<template>
  <div class="slot-machine">
    <SlotMachineSlot :choices="randomize(choices)" :starting="starting" @done="done" />
    <SlotMachineSlot :choices="randomize(choices)" :starting="starting" @done="done" />
    <SlotMachineSlot :choices="randomize(choices)" :starting="starting" @done="done" />

    <img src="@images/handle.png" :class="{ starting }" @click="start" @transitionend="end" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SlotMachineSlot from '@components/SlotMachineSlot.vue';

const props = defineProps({
  choices: Array,
  default: () => [],
});
const emit = defineEmit(['done', 'start']);

let doneCounter = 0;
const starting = ref(false);
const start = () => {
  doneCounter = 0;
  starting.value = true;
  emit('start');
};
const end = () => {
  starting.value = false;
};
const done = () => {
  doneCounter += 1;
  if (doneCounter === 3) {
    emit('done');
  }
};

const randomize = (choices) => {
  return [...choices].sort((a, b) => Math.random() - 0.5);
};
</script>

<style scoped>
.slot-machine {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  perspective: 1500px;
  transform-style: preserve-3d;
}

.slot-machine-slot {
  margin: 0 2rem;
}

img {
  height: 30rem;
  margin-left: 3rem;
  margin-right: -12rem;
  transform-origin: center center;
  transition: transform 500ms ease;
}

img.starting {
  transform: rotateX(180deg);
}
</style>
