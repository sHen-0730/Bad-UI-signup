<template>
  <div class="countdown-timer">
    <p>{{ minutes }}:{{ displaySeconds }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCountdownTimer } from "~/composables/useCountdownTimer";

// 5分からカウントダウンする
const { minutes, displaySeconds, stopTimer } = useCountdownTimer(300);
</script>