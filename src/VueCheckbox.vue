<template>
  <label
    v-show="label"
    :class="labelClass"
  >
    {{ label }}
  </label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @change="updateCheckbox"
    type="checkbox"
  >
</template>
<script>
  export default {
    name: 'VueCheckbox',

    inheritAttrs: false,

    props: {
      label: {
        type: String,
        default: ''
      },
      labelClass: {
        type: String,
        default: ''
      },
      modelValue: {
        type: Boolean,
        default: false
      }
    },

    setup (props, { emit }) {
      const updateCheckbox = (event) => {
        const checked = event.target.checked
        emit('update:modelValue', checked)
      }

      return {
        updateCheckbox
      }
    }
  }
</script>
