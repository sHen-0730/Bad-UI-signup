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
        <BFormText padding="b-3" v-for="rule in rules" :style="style">{{
          rule.text
        }}</BFormText>
                  <NextbuttonGroup :is-valid="isValid.value" @next="onNext" />
      </BForm>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { ref,watchEffect } from "vue";
const username = ref("");
const password = ref("");
import { useRouter } from "vue-router";
import { validatePassword } from "../composables/validatePassword";
const router = useRouter();
const isValid = ref(false);

watchEffect(() => {
  isValid.value = validatePassword(username.value, password.value);
});

const rules = ([
  { text: "パスワードは12文字以上である必要があります" },
  { text: "パスワードにはUsernameに使用している文字を使う必要があります" },
  { text: "パスワードには英字の大文字を含めることができますが、必ずしも必要ではありません。"},
  { text: "パスワードには英字の小文字、数字、記号のすべてを含めなければなりません" },
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
  //パスワードが正しい場合
  if (isValid.value) {
    router.push("/CAPTCHAPage");
  } else {
    //パスワードが間違っている場合
    alert("パスワードのルールが間違っています");
  }
};

definePageMeta({ layout: "main-layout" })
</script>

