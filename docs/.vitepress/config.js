
const base = '/docs/'

module.exports = {
  title: 'Pledgecamp Documentation',
  description: 'Pledgecamp API and Developer Documentation',
  repo: 'pledgecamp/pledgecamp-docs',
  base,
  head: [['link', { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }]],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Services', link: '/services/' },
      { text: 'Contracts', link: '/contracts/' },
      { text: 'Utilities', link: '/utilities/' },
      {
        text: 'Links',
        items: [
          {
            text: 'Pledgecamp Home',
            link: 'https://pledgecamp.com/',
          },
          {
            text: 'Github',
            link: 'https://github.com/pledgecamp'
          },
          {
            text: 'Telegram',
            link: 'https://t.me/pledgecamp',
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/pledgecamp',
          },
          {
            text: 'Facebook',
            link: 'https://facebook.com/pledgecamp',
          },
          {
            text: 'Medium (Blog)',
            link: 'https://medium.com/@pledgecamp',
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Services',
          children: [
            {
              text: 'Overview',
              link: '/services/',
            },
            {
              text: 'Frontend',
              link: '/services/frontend/',
              children: [
                {
                  text: 'Contributing',
                  link: '/services/frontend/contributing',
                },
              ],
            },
            {
              text: 'Backend',
              link: '/services/backend/',
              children: [
                {
                  text: 'Contributing',
                  link: '/services/backend/contributing',
                },
                {
                  text: 'API',
                  link: '/services/backend/api',
                },
              ],
            },
            {
              text: 'Blockchain Oracle',
              link: '/services/oracle/',
            },
            {
              text: 'Ethereum Node Server',
              link: '/services/nodeserver/',
            },
            {
              text: 'Token Bridge',
              link: '/services/tokenbridge/',
            },
          ],
        },
        {
          text: 'Contracts',
          link: '/contracts/',
          children: [
            {
              text: 'Usage',
              link: '/contracts/usage',
            },
            {
              text: 'Roadmap',
              link: '/contracts/roadmap',
            },
            {
              text: 'Static Analysis',
              link: '/contracts/analysis',
            },
          ],
        },
        {
          text: 'Utilities',
          link: '/utilities/',
          children: [
            {
              text: 'Infrastructure',
              link: '/utilities/infrastructure'
            },
            {
              text: 'Mailgun Mock',
              link: '/utilities/mailgun-mock'
            },
            {
              text: 'Blockchain Utils',
              link: '/utilities/blockchain-utils',
            },
          ],
        },
      ],
    },
  },
};
