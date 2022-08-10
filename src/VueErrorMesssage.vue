<template>
  <div>
    <p class="errorMessage">
      {{ errorMesssage }}
    </p>
  </div>
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
