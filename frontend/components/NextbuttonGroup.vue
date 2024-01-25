<template>
      <Row padding="t-5" justify-content="center">
        <Col col="6" position="relative">
          <b-button
            button="danger"
            position="absolute"
        :top="50"
        :start="50"
        translate="middle"
            class="px-4 text-white-50"
            @click="next"
          >
            次へ
          </b-button>
        </Col>
        <Col col="4">
          <b-button
            button="success"
            toggle="popover"
            placement="left"
            size="lg"
            content="次に進むボタンは左のボタンです"
            class="px-4"
          >
            Help
          </b-button>
        </Col>
      </Row>
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
