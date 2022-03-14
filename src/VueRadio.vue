<template>
  <input
    v-model="modelValue"
    :value="value"
    @change="$emit('update:modalValue', value)"
    v-bind="$attrs"
    type="radio"
  >
  <label
    v-show="label"
  >
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'VueRadio',

  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
