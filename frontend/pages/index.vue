<template>
  <div class="px-5">
    <div>
      <h2 class="fs-1 py-5 text-md-start lh-1 text-white">UIの悪さを体験してみよう！</h2>
    </div>
    <div>
      <p class="fs-4 lh-lg text-white">
      あなたは<span class="text-danger">制限時間内(2:00)</span>にこのサイトにサインアップすることができるでしょうか？<br />
      直観的に操作しやすいUIのルールにあえて反して、最悪なUIを作りました。
      普段意識しないで利用しているUIの大切さを実感できるでしょう。</p>
    </div>
    <Row class="pt-5 d-flex align-items-center">
      <Col col="9">
      <p class="fs-3 text-white">右矢印を押して始めてください
        <nuxt-link to="/SignUpPage" class="link-offset-2 link-underline link-underline-opacity-0 text-white">→</nuxt-link></p>
    </Col>
      <Col col="3">
      <img src="@/assets/arrow.png" @click="rotate">
      </Col>
  </Row>
   </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const angle = ref(0);
const rotate = () => {
  const img = document.querySelector("img");
  if (img !== null) {
  angle.value += 90;
  img.style.transform = `rotate(${angle.value}deg)`;
  }
};
</script>
