module.exports = {
  pathPrefix: `/grids-and-modules`,

  __experimentalThemes: [
    [
      "gatsby-theme-signalwerk",
      {
        root: __dirname,
      }
    ]
  ],

  siteMetadata: {
    title: 'Blog',
    author: 'Alexander Bönninger',
    authorUrl: 'http://alexanderboenninger.de/',
  },
};
