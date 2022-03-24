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
  <VueErrorMesssage
    :error-messsage="errorMesssage"
  />
</template>

<script>
export default {
  name: 'VueRadio',

  emits: ['update:modalValue'],

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
    },
    errorMesssage: {
      type: String,
      default: ''
    }
  }
}
</script>
