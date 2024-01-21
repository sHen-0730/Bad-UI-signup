<template>
  <Row>
  <Col col="10" offset="md-1">
  <Carousel 
   dark
   control
   ride="false"
   touch="false">
    <CarouselInner>
      <CarouselItem  interval="0">
        <CarouselItemImage
          width="400"
          src="https://source.unsplash.com/random/1920x1080?sig=1"
        />
      </CarouselItem>
      <CarouselItem interval="1">
        <CarouselItemImage
          width="400"
          src="https://source.unsplash.com/random/1920x1080?sig=2"
        />
      </CarouselItem>
      <CarouselItem interval="1">
        <CarouselItemImage
          width="400"
          src="https://source.unsplash.com/random/1920x1080?sig=3"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
</Col>
  </Row>
</template>

<script setup>
definePageMeta({ layout: "main-layout" })
</script>