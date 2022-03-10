<template>
  <label
    v-show="label"
    :class="labelClass"
  >
    {{ label }}
  </label>
  <input
    v-model="modelValue"
    v-bind="{
      ...$attrs,
      onInput: ($event => {
        $emit('update:modelValue', $event.target.value)
      })
    }"
    :class="inputClass"
  >
</template>

<script>
export default {
  name: 'VueInput',

  emits: ['update:modelValue'],

  props: {
    label: {
      type: String,
      default: '',
    },
    labelClass: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    }
  }
}
</script>
<style scoped></style>
