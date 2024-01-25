<template>
  <b-div
    rounded
    class="my-5"
    style="
      width: 100%;
      height: 130px;
      background-color: white;
    "
  >
    <div class="pt-5">
      <Row>
        <Col>
          <b-button
            button="danger"
            class="ms-4 px-4 text-white-50"
            @click="next"
          >
            次へ
          </b-button>
        </Col>
        <Col>
          <b-button
            button="success"
            toggle="popover"
            placement="left"
            content="次に進むボタンは左のボタンです"
            class="px-4"
          >
            Help
          </b-button>
        </Col>
      </Row>
    </div>
  </b-div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["next"]);
const props = defineProps({
  modelValue: Boolean, //親コンポーネントから受け取った値を保持するprop
});

const next = () => {
  emit("next", props.modelValue); //modelValueの値をemitする
};
</script>
