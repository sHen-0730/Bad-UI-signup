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
<input id="number" type="number" />
</Col>
  </Row>
</template>

<script setup lang="ts">
definePageMeta({ layout: "main-layout" })
</script>