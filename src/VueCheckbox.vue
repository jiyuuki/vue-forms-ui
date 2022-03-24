<template>
  <label
    v-show="label"
    :class="labelClass"
  >
    {{ label }}
  </label>
  <input
    :value="modelValue"
    v-bind="$attrs"
    @change="$emit('update.modelValue', $event.target.checked)"
    type="checkbox"
    :class="inputClass"
  >
  <VueErrorMesssage
    :error-messsage="errorMesssage"
  />
</template>

<script>
export default {
  name: 'VueCheckbox',

  emits: ['update.modelValue'],

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
      type: Boolean,
      default: false,
    },
    errorMesssage: {
      type: String,
      default: '',
    }
  }
}
</script>
