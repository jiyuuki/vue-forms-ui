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
      @change="updateCheckbox"
      type="checkbox"
      :class="inputClass"
    >
  </div>
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
<style scoped></style>
