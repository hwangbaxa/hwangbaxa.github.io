module.exports = {
  siteMetadata: {
    title: `Skelter Labs Design System`,
    name: `Skelter Labs`,
    siteUrl: `https://hwangbaxa.github.io`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/codebushi/gatsby-theme-document`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/HuntaroSan`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [
    { resolve: `gatsby-theme-document` }
  ]
};
