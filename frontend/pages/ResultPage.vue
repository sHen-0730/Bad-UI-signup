<template>
  <div class="px-5">
    <div v-if="complete">
      <h2 class="fs-1 py-5 text-md-start lh-1 text-white">サインアップできました！<br />おめでとうございます！</h2>
    </div>
    <div v-else>
      <h2 class="fs-1 py-5 text-md-start lh-1 text-white">制限時間がなくなりました</h2>
    </div>
    <div>
      <p class="fs-3 lh-lg text-white">
      UIが悪くなってしまうと、ここまで使いにくくなってしまいます。<br />
      普段利用しているWebサイトの使いやすさ、ストレスのないデザインを改めて見直す機会になればと思います。</p>
    </div>
    <div class="mt-5" style="text-align: center;">
    <nuxt-link to="/"> <b-button
    button="success"
    @click="reset"
    size="lg"
    padding="3"
    >
   始めに戻る</b-button>
    </nuxt-link>
    </div>
   </div>
</template>

<script setup lang="ts">
const complete = useState("complete")

const reset = () => {
  complete.value = false;
}
</script>
