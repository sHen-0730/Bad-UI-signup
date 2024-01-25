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
          <NextbuttonGroup :is-valid="isValid.value" @next="onNext" />
        </Col>
      </Row>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { validatePassword } from "../composables/validatePassword";

const router = useRouter();

const username = ref("");
const password = ref("");
const isValid = ref(false);

watchEffect(() => {
  isValid.value = validatePassword(username.value, password.value);
});

const onNext = () => {
  //パスワードが正しい場合
  if (isValid.value) {
    router.push("/CAPTCHAPage");
  } else {
    //パスワードが間違っている場合
    alert("パスワードのルールが間違っています");
  }
};
</script>
