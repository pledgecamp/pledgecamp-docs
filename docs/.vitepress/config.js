
module.exports = {
  title: 'Pledgecamp Documentation',
  description: 'Pledgecamp API and Developer Documentation',
  repo: 'pledgecamp/pledgecamp-docs',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],

  themeConfig: {
    logo: '/logo.svg',
    docsDir: 'docs',
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
            },
            {
              text: 'Backend',
              link: '/services/backend/',
              children: [
                {
                  text: 'API',
                  link: '/services/backend/api',
                },
              ],
            },
            {
              text: 'Blockchain Oracle',
              link: '/services/oracle/',
              children: [
                {
                  text: 'API',
                  link: '/services/oracle/api',
                },
              ]
            },
            {
              text: 'Nodeserver',
              link: '/services/nodeserver/',
              children: [
                {
                  text: 'API',
                  link: '/services/nodeserver/api',
                },
              ],
            },
            {
              text: 'Token Bridge',
              link: '/services/tokenbridge/',
            },
          ],
        },
        {
          text: 'Contributing',
          link: '/contributing/',
          children: [
            {
              text: 'Guidelines',
              link: '/contributing/guidelines',
            },
            {
              text: 'Code Management',
              link: '/contributing/management',
            },
            {
              text: 'Frontend',
              link: '/contributing/frontend',
            },
            {
              text: 'Backend',
              link: '/contributing/backend',
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
