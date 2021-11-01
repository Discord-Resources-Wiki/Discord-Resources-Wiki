// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Discord Resources Wiki',
  tagline: 'A list of ton of useful discord resources and utilities for all type of users, from beginners to power users.',
  url: 'https://discordresources.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rydixulous',
  projectName: 'Discord-Resources-n-More',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rydixulous/Discord-Resources-n-More/edit/main/docs/',
          path: 'wiki',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Discord Resources Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-small.png',
        },
        items: [
          {
            href: 'https://github.com/rydixulous/Discord-Resources-n-More',
            label: 'GitHub',
            position: 'right',
          },
            {
            href: 'https://discord.gg/AJX6cVWeJg',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
