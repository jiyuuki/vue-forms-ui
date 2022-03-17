<template>
   <label
    v-show="label"
    :class="labelClass"
  >
    {{ label }}
  </label>
  <input
    v-model="modelValue"
    v-bind="$attrs"
    @change="$emit('update.modelValue', $event.target.checked)"
    type="checkbox"
    :class="inputClass"
  >
  <VueErrorMesssage :errorMesssage="errorMesssage" />
</template>
<script>
  export default {
    name: 'VueCheckbox',

    props: {
      label: {
        type: String,
        default: ''
      },
      labelClass: {
        type: String,
        default: ''
      },
      inputClass: {
        type: String,
        default: ''
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      errorMesssage: {
      type: String,
      defalut: ''
    }
    }
  }
</script>
<style scoped></style>
