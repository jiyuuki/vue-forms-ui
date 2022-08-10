<template>
  <div>
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
  </div>
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
