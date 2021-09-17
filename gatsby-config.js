module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.cntrinidad.me',
    title: 'cntrinidad',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-113712213-1',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
      __key: 'data',
    },
  ],
};
