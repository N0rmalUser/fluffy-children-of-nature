export const siteConfig = Object.freeze({
  panelUrl: 'https://панелька.пушистые-дети-природы.рф/panel/clients',
  nav: [
    { label: 'О нас', href: '#about' },
    { label: 'Персонажи', href: '#characters' },
    { label: 'Вступить в стаю', href: '#invite' },
  ],
  invite: {
    host: 'xn-----klcbbcreb4dchnbfqek9gxcn.xn--p1ai',
    port: 443,
    path: '/ws',
    security: 'tls',
    transport: 'ws',
    fragment: 'ПушистыйСервер',
  },
})
