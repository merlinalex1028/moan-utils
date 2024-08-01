// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  stylistic: {
    overrides: {
      'style/comma-dangle': ['error', 'never']
    }
  }
})
