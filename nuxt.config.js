module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Caramelldansen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Firebase Authentication Playground' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3f51b5' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/fireauth.js',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL:
      process.env.BASE_URL || 'http://staging-api.erena.com/api'
  },
  /*
  ** Vuetify module configuration
  */
  vuetify: {
    // Vuetify options
    theme: {
      // primary: '#3f51b5',
      primary: '#123456',
      light: '#757de8',
      dark: '#002984',
      accent: '#ce93d8',
      secondary: '#424242',
      info: '#0D47A1',
      warning: '#ffb300',
      error: '#B71C1C',
      success: '#2E7D32'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {}
  },

  router: {
    middleware: 'check-auth'
  }
}
