<template>
  <p class="errorMessage">
    {{ errorMesssage }}
  </p>
</template>

<script>
export default {
  name: 'VueErrorMessage',

  props: {
    errorMesssage: {
      type: String,
      default: ''
    }
  }
}
</script>
