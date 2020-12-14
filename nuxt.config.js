import path from 'path'
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(__dirname, 'config/.env.production') })
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, 'config/.env.development') })
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vue-nuxt-sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['ant-design-vue/dist/antd.css', 'swiper/swiper-bundle.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/antd-ui' },
    { src: '~/plugins/axios-accessor', ssr: true },
    { src: '~/plugins/vue-awesome-swiper', ssr: true },
    { src: '~/plugins/vue-plugin-load-script.js', ssr: false },
    { src: '~/plugins/vue-infinite-loading', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    [
      '@nuxtjs/dotenv',
      // {
      //   filename:
      //     process.env.NODE_ENV === 'production'
      //       ? './config/.env.production'
      //       : './config/.env.development',
      // },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    // baseURL: 'https://reqres.in',
  },

  proxy: [
    [
      '/api-test',
      {
        target: 'https://reqres.in',
        pathRewrite: { '^/api-test': '/api' },
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  publicRuntimeConfig: {},
  privateRuntimeConfig: {},
}
