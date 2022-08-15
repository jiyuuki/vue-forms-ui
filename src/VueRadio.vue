<template>
  <input
    v-bind="$attrs"
    :value="value"
    @change="updateRadio"
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

  inheritAttrs: false,

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
  },

  setup (props, { emit }) {
    const updateRadio = (event) => {
      const checked = event.target.checked
      emit('update:modelValue', checked)
    }

    return {
      updateRadio
    }
  }
}
</script>
