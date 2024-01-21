<template>
  <div class="countdown-timer">
    <p class="fs-1">{{ minutes }}:{{ displaySeconds }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCountdownTimer } from "~/composables/useCountdownTimer";

const { minutes, displaySeconds, stopTimer } = useCountdownTimer(300);
</script>