<template>
  <component
    :value="modelValue"
    @change="updateSelect(option)"
    v-for="option in options"
    :key="option"
    :is="vertical ? 'div' : 'span'"
  >
    <VueRadio
      :label="option.label"
      :value="option.value"
      :name="name"
    />
  </component>
</template>

<script>
export default {
  name: 'VueRadioGroup',

  props: {
    name: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    vertical: {
      type: Boolean
    }
  },

  setup (props, { emit }) {
    const updateSelect = (option) => {
      const valueSelected = option.value
      emit('update:modelValue', valueSelected)
    }

    return {
      updateSelect
    }
  }
}
</script>
