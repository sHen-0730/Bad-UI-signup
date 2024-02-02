import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";

// 残り時間をカウントダウンする関数
export const useCountdownTimer = (initialSeconds: number, self: any) => {
  // 残り時間を表すdataプロパティ
  const seconds = ref(initialSeconds);

  // setup関数の中でタイマーを開始
  // timerIdの型をNodeJS.Timeoutにする
  let timerId: NodeJS.Timeout;
 
// タイマーの更新間隔を100ミリ秒に変更
timerId = setInterval(() => {
  seconds.value -= 0.1;
}, 100);

// 残り時間を0.1で割って小数点以下1桁に変更
const minutes = computed(() => {
  return Math.floor(seconds.value / 60)
    .toString()
    .padStart(2, "0");
});
const displaySeconds = computed(() => {
  return (seconds.value % 60).toFixed(1).padStart(4, "0");
});

// 残り時間が0以下になったらタイマーを停止する
watch(seconds, (value) => {
  if (value <= 0) {
    clearInterval(timerId);
    navigateTo("/ResultPage");
  }
});

  // タイマーを停止する関数
  const stopTimer = () => {
    clearInterval(timerId);
  };

  // 分と秒に変換した算出プロパティとタイマーを停止する関数を返す
  // displaySecondsを返すように変更
  return { minutes, displaySeconds, stopTimer };
};
