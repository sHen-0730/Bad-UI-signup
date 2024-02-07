<template>
  <Row justify-content="center">
    <p class="py-4 text-center fw-bold">ユーザ名とパスワードを設定してください</p>
    <Col col="6">
      <BForm>
        <BFormControl margin="b-5">
          <BFormLabel>Username</BFormLabel>
          <BFormInput v-model="username" type="text" />
        </BFormControl>
        <BFormControl margin="y-5">
          <BFormLabel>Password</BFormLabel>
          <BFormInput
            v-model="password"
            type="password"
            v-on:focus="hideRules"
            v-on:blur="showRules"
          />
        </BFormControl>
        <b-p padding="b-4" text-color="danger" v-if="alert">パスワードのルールが間違っています。</b-p>
        <BFormText padding="b-3" v-for="rule in rules" :style="style">{{rule.text}}</BFormText>
        <NextbuttonGroup :is-valid="isValid" @next="onNext" />
      </BForm>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { ref,watchEffect } from "vue";
import { useRouter } from "vue-router";
import { validatePassword } from "../composables/validatePassword";

const username = ref("");
const password = ref("");
const router = useRouter();
const isValid = ref(false);
const alert = ref(false);

watchEffect(() => {
  isValid.value = validatePassword(username.value, password.value);
});

const rules = ([
  { text: "パスワードは12文字以上である必要があります" },
  { text: "パスワードにはUsernameに使用している文字を使う必要があります" },
  { text: "パスワードには英字の大文字を含めることができます" },
  { text: "パスワードには英字の小文字、数字、記号(!@#$%^&*)を含めなければなりません" },
]);

const style = ref({
  display: "block",
});

//BFormText要素を非表示
const hideRules = () => {
  style.value.display = "none";
};

const showRules = () => {
  // BFormText要素を表示
  style.value.display = "block";
};

const onNext = () => {
  if (isValid.value) {
    router.push("/CAPTCHAPage");
  } else if(!alert.value){
    alert.value = !alert.value;
    }
};

definePageMeta({ layout: "main-layout" })
</script>

