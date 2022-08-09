<template>
  <div>
    <label
      v-show="label"
      :class="labelClass"
    >
      {{ label }}
    </label>
    <input
      :value="modelValue"
      v-bind="$attrs"
      @input="updateInput"
      :class="inputClass"
    >
  </div>
</template>

<script>
export default {
  name: 'VueInput',

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
<style scoped></style>
