<template>
  <div>
    <label
      v-show="label"
      :class="labelClass"
    >
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="updateInput"
    >
  </div>
</template>

<script>
export default {
  name: 'VueInput',

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: '',
    },
    labelClass: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    }
  },

  setup (props, { emit }) {
    const updateInput = (event) => {
      const value = event.target.value
      emit('update:modelValue', value)
    }

    return {
      updateInput
    }
  }
}
</script>
