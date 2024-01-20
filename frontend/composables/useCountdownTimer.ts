import { ref, watch, computed } from "vue";

// 残り時間をカウントダウンする関数
export const useCountdownTimer = (initialSeconds: number) => {
  // 残り時間を表すdataプロパティ
  const seconds = ref(initialSeconds);

  // setup関数の中でタイマーを開始
  // timerIdの型をNodeJS.Timeoutにする
  let timerId: NodeJS.Timeout;
  timerId = setInterval(() => {
    seconds.value--;
  }, 1000);

  // watchプロパティで残り時間を監視
  watch(seconds, (value) => {
    if (value === 0) {
      // タイマーを停止
      clearInterval(timerId);
    }
  });

  // 残り時間を分と秒に変換する算出プロパティ
  const minutes = computed(() => {
    return Math.floor(seconds.value / 60)
      .toString()
      .padStart(2, "0");
  });
  // secondsをdisplaySecondsに変更
  const displaySeconds = computed(() => {
    return (seconds.value % 60).toString().padStart(2, "0");
  });

  // タイマーを停止する関数
  const stopTimer = () => {
    clearInterval(timerId);
  };

  // 分と秒に変換した算出プロパティとタイマーを停止する関数を返す
  // displaySecondsを返すように変更
  return { minutes, displaySeconds, stopTimer };
};
