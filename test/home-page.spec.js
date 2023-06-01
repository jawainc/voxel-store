import { createPage, setupTest } from '@nuxt/test-utils'

describe('ssr', () => {
  setupTest({ browser: true })

  it('renders the index page', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

    expect(html).toContain('Welcome to Voxel')
  })
})
