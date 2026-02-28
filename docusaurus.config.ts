import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Coin',
  tagline: 'P2P Token Exchange on Solana — Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://coin-agent-exchange.github.io',
  baseUrl: '/coin-docs/',
  trailingSlash: false,

  organizationName: 'coin-agent-exchange',
  projectName: 'coin-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/coin-agent-exchange/coin-docs/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/coin-social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Coin',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'productSidebar',
          position: 'left',
          label: 'Product',
        },
        {
          type: 'docSidebar',
          sidebarId: 'architectureSidebar',
          position: 'left',
          label: 'Architecture',
        },
        {
          type: 'docSidebar',
          sidebarId: 'engineeringSidebar',
          position: 'left',
          label: 'Engineering',
        },
        {
          href: 'https://github.com/coin-agent-exchange',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'PRD', to: '/product/prd' },
            { label: 'Roadmap', to: '/product/roadmap' },
            { label: 'Architecture Decisions', to: '/architecture/adr-001' },
          ],
        },
        {
          title: 'Repositories',
          items: [
            { label: 'coinV1-dex (Monorepo)', href: 'https://github.com/coin-agent-exchange/coinV1-dex' },
            { label: 'coin-docs', href: 'https://github.com/coin-agent-exchange/coin-docs' },
          ],
        },
        {
          title: 'Team',
          items: [
            { label: 'Discord', href: 'https://discord.gg/coin-exchange' },
            { label: 'GitHub Org', href: 'https://github.com/coin-agent-exchange' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Coin. Confidential — Internal Team Only.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['rust', 'toml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
