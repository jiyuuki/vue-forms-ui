<template>
  <label
    v-show="label"
    :class="labelClass"
  >
    {{ label }}
  </label>
  <select
    v-bind="{
      ...$attrs,
      onChange: ($event) => {$emit('update:modelValue', $event.target.value)}
    }"
    :value="modelValue"
    :class="seletClass"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'VueSelect',

  emits: ['update:modelValue'],

  props: {
    label: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    seletClass: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    options: {
      type: Array,
      required: true,
    }
  }
}
</script>
