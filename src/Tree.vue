<template>
  <div>
    <span>{{ branch.label }}</span>
    <span
      v-show="hasChildren"
    >
      🌠
    </span>
    <!-- add toggle function to show or hide children -->
    <!-- try to use a flat array -->
  </div>
  <div 
    v-if="hasChildren"
    :style="{ marginLeft:  `${addSpacing}px`}"
  >
    <Tree
      v-for="child in branch.children"
      :key="child.id"
      :branch="child"
      :spacing="addSpacing"
    />
  </div>
</template>

<script>
import { computed, onMounted, getCurrentInstance } from 'vue'

export default {
  name: 'Tree',

  props: {
    branch: {
      type: Object,
      required: true
    },
    spacing: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const hasChildren = computed(() => props.branch?.children?.length > 0)
    const addSpacing = computed(() => props.spacing + 10 )
    
    return {
      hasChildren,
      addSpacing
    }
  }
}
</script>
