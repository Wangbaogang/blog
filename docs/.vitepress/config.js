export default {
    title: 'VitePress',
    description: 'Just playing around.',

    base: '/blog/',  // https://foo.github.io/bar/

    themeConfig: {
        siteTitle: 'My Blog',
        nav: [
            { text: 'Guide', link: '/guide' },
            {
              text: 'Dropdown Menu',
              items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
              ]
            }
          ],
        siderbar: [
            {
                text: 'Algo',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                ]
            }
        ]
    }
  }