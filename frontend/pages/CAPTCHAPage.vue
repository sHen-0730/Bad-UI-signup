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
          src="https://source.unsplash.com/random/1920x1080?sig=1"
        />
      </CarouselItem>
      <CarouselItem interval="1">
        <CarouselItemImage
          width="200"
          src="https://source.unsplash.com/random/1920x1080?sig=2"
        />
      </CarouselItem>
      <CarouselItem interval="1">
        <CarouselItemImage
          width="200"
          src="https://source.unsplash.com/random/1920x1080?sig=3"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
</Col>
<Col>
<label for="number">数字を入力してください</label>
<input id="number" type="number" v-model="number" />
<button @click="validate">検証する</button>
<p v-if="result != null && !result.isValid"> 数字が間違っています。 
</p>
</Col>
  </Row>
</template>

<script setup lang="ts">
definePageMeta({ layout: "main-layout" })
const number = ref(0);
 
// 検証結果を保持する変数
const result = ref(null);
 
// 検証ボタンが押されたときに実行される関数
const validate = async () => {
  // APIに数字を送って結果を受け取る
  const { data } = await useFetch("/api/validate-number", {
    method: "POST",
    body: JSON.stringify(number.value),
  });
  // 結果を変数に代入する
  result.value = data;
  // 入力された数字が正しいかどうかを判定する
  if (result.value.isValid) {
    // 正しい場合はLastPage.vueに遷移する
    navigateTo('/')
  }
};
</script>