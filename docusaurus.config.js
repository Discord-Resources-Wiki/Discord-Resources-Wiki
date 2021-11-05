// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const userWidgetInlinePlugin = require("./src/plugins/userWidgetInlinePlugin");
const inviteWidgetPlugin = require("./src/plugins/inviteWidgetPlugin");
const linebreakPlugins = require("./src/plugins/linebreakPlugin");
const blogAuthorWidgetPlugin = require("./src/plugins/blogAuthorWidgetPlugin");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Discord Resources Wiki',
    tagline: 'A list of tons of useful discord resources and utilities for all types of users, from beginners to power users.',
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
                    editUrl: 'https://github.com/rydixulous/Discord-Resources-n-More/edit/main/',
                    path: 'wiki',
                    routeBasePath: '/',
                    remarkPlugins: [
                        linebreakPlugins,
                        inviteWidgetPlugin,
                        userWidgetInlinePlugin
                    ]
                },
                blog: {
                    path: 'blog',
                    routeBasePath: '/blog/',
                    showReadingTime: true,
                    remarkPlugins: [
                        linebreakPlugins,
                        inviteWidgetPlugin,
                        blogAuthorWidgetPlugin,
                        userWidgetInlinePlugin]
                },
                theme: {
                    customCss: [
                        require.resolve('inter-ui/inter.css'),
                        require.resolve('./src/css/custom.css')
                    ],
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
                        to: 'blog',
                        label: 'Blog',
                        position: 'left',
                    },
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

    plugins: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                docsDir: 'wiki',
                docsRouteBasePath: '/',
                indexDocs: true,
                indexBlog: false,
                indexPages: false,
                highlightSearchTermsOnTargetPage: false
            }
        ]
    ]
};

module.exports = config;
