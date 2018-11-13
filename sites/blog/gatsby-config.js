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
    title: 'Grids and modules',
    author: 'Stefan Huber',
    authorUrl: 'http://signalwerk.ch/',
  },
};
