import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './src',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

export default {
  install(Vue, options) {
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)

      const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
      )

      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}

