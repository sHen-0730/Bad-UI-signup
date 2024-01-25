<template>
  <div style="background-color: #06C38B; height: 100vh;">
    <Container class="pt-5">
      <Row justify-content="between">
        <Col class="mt-5" col="8" offset="md-1">
          <Progress>
            <ProgressBar
              striped
              background-color="success"
              animated
              :value="75"
            />
          </Progress>
          <b-div
            rounded
            class="my-4"
            style="
              width: 100%;
              height: 700px;
              background-color: white;
            "
          >
            <slot />
          </b-div>
        </Col>
        <Col class="mt-4" col="md-3">
          <Col col="7" offset="md-5" class="mb-5">
            <CountdownButton />
          </Col>
          <NextbuttonGroup v-model="isValid" @next="onNext" />
        </Col>
      </Row>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex"; //Vuexストアをインポート

const router = useRouter();
const store = useStore();
const isValid = computed(() => store.state.isValid); //VuexストアからisValidの値を取得する

const onNext = () => {
  //パスワードが正しい場合
  //パスワードが正しい場合
  if (isValid.value) {
    router.push("/CAPTCHAPage");
  } else {
    //パスワードが間違っている場合
    alert("パスワードのルールが間違っています");
  }
};
</script>
