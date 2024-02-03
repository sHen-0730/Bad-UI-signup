<template>
  <Row justify-content="center">
  <p class="pt-3 text-center fw-bold">画面に表示されている数字を入力してください。<br>
これは、あなたが人間であることを確認するためのものです。</p>
  <Col col="9" class="mt-3">
  <Carousel 
   dark
   control
   ride="false"
   touch="false">
    <CarouselInner>
      <CarouselItem  interval="0">
        <CarouselItemImage
          width="200"
          src="@/assets/CAPTCHA1.jpg"
        />
      </CarouselItem>
      <CarouselItem interval="1">
        <CarouselItemImage
          width="200"
          src="@/assets/CAPTCHA2.jpg"
        />
      </CarouselItem>
      <CarouselItem interval="1">
        <CarouselItemImage
          width="200"
          src="@/assets/CAPTCHA3.jpg"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
</Col>
<b-div margin="y-3" style="text-align: center;">
<b-label padding="e-3">数字を入力してください</b-label>
<input type="number" v-model="number" />
<b-p margin="t-3" text-color="danger" v-if="result">数字が間違っています</b-p>
<Col col="6" offset="md-3">
<NextbuttonGroup @next="checkNumber" />
</Col>
</b-div>
  </Row>
</template>

<script setup lang="ts">
definePageMeta({ layout: "main-layout" })
import { useRouter } from "vue-router";

const router = useRouter();
const number = ref(0);
const result = ref(false); 
const complete = useState("complete", () => false);

const checkNumber = () => { 
  if (number.value === 121) {
    complete.value = true; 
    router.push("/ResultPage");
  } 
  else{
    result.value = true;
  }
}

// 検証ボタンが押されたときに実行される関数
// // 検証結果を保持する変数
// const result = ref(null);
// const validate = async () => {
//   // APIに数字を送って結果を受け取る
//   const { data } = await useFetch("/api/validate-number", {
//     method: "POST",
//     body: JSON.stringify(number.value),
//   });
//   // 結果を変数に代入する
//   result.value = data;
//   // 入力された数字が正しいかどうかを判定する
//   if (result.value.isValid) {
//     navigateTo('/ResultPage')
//   }
// };

</script>