<template>
  <div>
    <component
      :value="modelValue"
      @change="$emit('update:modelValue', option.value)"
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
  </div>
</template>

<script>
export default {
  name: 'VueRadioGroup',

  emits: ['update:modelValue'],

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
  }
}
</script>
