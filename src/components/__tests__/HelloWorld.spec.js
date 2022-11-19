import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WorkSampleCard from '../WorkSampleCard.vue'

describe('WorkSampleCard', () => {
  it('renders properly', () => {
    const wrapper = mount(WorkSampleCard, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
