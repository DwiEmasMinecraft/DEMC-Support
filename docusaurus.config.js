// @ts-check


// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  //TODO: Finish docs and index with orama
  // plugins: [
  //   [
  //     "@orama/plugin-docusaurus-v3",
  //     {
  //       cloud: {
  //         indexId: "<your_orama_index_id>",
  //         oramaCloudAPIKey: process.env.ORAMA_CLOUD_API_KEY, // Env variable suggested
  //         deploy: true, // Enables deploy while building/starting
  //       },
  //     },
  //   ],
  // ],

  title: "DEMC Support",
  tagline: "DEMC Team",
  favicon: "img/logo.ico",

  // Set the production url of your site here
  url: "https://support.demc.store",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "DEMC Team", // Usually your GitHub org/user name.
  projectName: "DEMC", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/DwiEmasMinecraft/DEMC-Support/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/DwiEmasMinecraft/DEMC-Support/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "DEMC Support",
        logo: {
          alt: "DEMC Logo",
          src: "img/logo.ico",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Support",
          },
          { to: "/blog", label: "News", position: "left" },
          {
            href: "https://github.com/DwiEmasMinecraft",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Support",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Youtube",
                href: "https://youtube.com/@demctv",
              },
              {
                label: "Discord",
                href: "https://discord.gg/9mG5MN8zCz",
              },
              {
                label: "Twitch",
                href: "https://twitch.tv/demclive",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "News",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/DwiEmasMinecraft",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DEMC Team, built with Docasaurus ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
