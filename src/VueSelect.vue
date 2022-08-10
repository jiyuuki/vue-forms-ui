<template>
  <div>
    <label
      v-show="label"
      :class="labelClass"
    >
      {{ label }}
    </label>
    <select
      v-bind="$attrs"
      :value="modelValue"
      @change="updateSelect"
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
    <VueErrorMesssage
      :error-messsage="errorMesssage"
    />
  </div>
</template>

<script>
export default {
  name: 'VueSelect',

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
    },
    errorMesssage: {
      type: String,
      default: ''
    }
  },

  setup (props, { emit }) {
    const updateSelect = (event) => {
      const selected = event.target.checked
      emit('update:modelValue', selected) 
    }

    return {
      updateSelect
    }
  }
}
</script>
