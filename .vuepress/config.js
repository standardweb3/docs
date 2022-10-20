module.exports = {
  title: "Standard Docs",
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
  base: "/",
  description:
    "Standard - The Multichain Standard of Self-Sovereign Identity and finance tools",
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: "theme/components",
      },
    ],
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
  //  https://github.com/znicholasbrown/vuepress-plugin-code-copy
  //  ["vuepress-plugin-code-copy", {
  //    color: "#ffffff",
  //    backgroundColor: "#3e3383",
  //    }
  //  ],
    ["@maginapp/vuepress-plugin-copy-code", {
      color: "#ffffff",
      backgroundColor: "#ffffff",
      align: { bottom: '7px', right: '12px' },
      successText: " ",
      duration: 350,
    }
    ],
    [ 'tabs' ],
  ],
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cloud.typography.com/7420256/6416592/css/fonts.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/img/favicondocs.png",
      },
    ],
    [
      "script",
      {},
      `window.onload = function() {
        requestAnimationFrame(function() {
          if (location.hash) {
            const element = document.getElementById(location.hash.slice(1))

            if (element) {
              element.scrollIntoView()
            }
          }
        })
      }`,
    ],
    [
      "meta",
      {
        property:"og:image",
        content:"/img/osmosis-tile.png",
      },
    ],
  ],
  themeConfig: {
    sidebarDepth: 3,
    smoothScroll: true,
    // overrideTheme: 'dark',
    // prefersTheme: 'dark',
    // overrideTheme: { light: [6, 18], dark: [18, 6] },
    // theme: 'default-prefers-color-scheme',
    logo: "/img/standard-logo-dark.svg",
    logoDark: "/img/standard-logo-light.svg",
    lastUpdated: "Updated on",
    repo: "standardweb3/docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    docsBranch: 'main',
    docsDir: "",
    algolia: {
      apiKey: "3e6613d968e846a6c3e9369b8aae288f", //TODO GET KEY
      indexName: "Standard docs",
      appId: "CVLCSSZAGD"
      // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
    },
    nav: [

      { text: 'Home', link: '/', },
      { text: 'Develop', link: '/developing/',},
      {
        text: "GitHub",
        link: "https://github.com/standardweb3/docs",
        icon: "/img/github.svg",
      },
    ],
    sidebar: {
      "/overview/": [
        {
          title: 'Wallets',
          children: [
          ],
          collapsable: true,
        },
      ],
      '/developing': [
        {
          title: 'Building dApps',
          children: [
            '/developing/dapps/get_started/',
            '/developing/dapps/get_started/quickstart',
          ],
          collapsable: true,
        },
        {
          title: 'Tools',
          children: [
            '/developing/tools/signac/',
          ],
          collapsable: true,
        }
      ],

      "/": [
        {
          title: "Overview",
          children: [
            "/history-and-changes",
            "/awesome/",
          ],
          collapsable: false,
        },
      ],
    },

  },
};
