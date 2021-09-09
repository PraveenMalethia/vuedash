import colors from "vuetify/es5/util/colors";
let development = process.env.NODE_ENV !== 'production'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - dashboard",
    title: "dashboard",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  target: "static",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    '@nuxtjs/toast',
    '@nuxtjs/auth-next',

    // uncomment below to enable nuxt auth services
    // '@nuxtjs/auth-next',
  ],
  toast: {
    position: 'bottom-right',
    duration: 2000,
  },

  axios: {
    baseURL: development
      ? 'http://127.0.0.1:8000'
      : 'https://your-backend-api.com',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: 'Vuetify Dashboard',
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.indigo.darken1,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // ---- uncomment below section to customize the loading bar on top of screen -----

  // loading: {
  //   color: '#2563eb',
  //   height: '5px',
  // },


  // ---- uncomment below section to customize or adding the auth in this website -----
  // auth: {
  //   vuex: {
  //     namespace: 'auth',
  //   },
  //   strategies: {
  //     local: {
  //       scheme: 'refresh',
  //       endpoints: {
  //         login: {
  //           url: development
  //             ? 'http://127.0.0.1:8000/auth/login/'
  //             : 'https://your-backend-api.com/auth/login/',
  //           method: 'POST',
  //         },
  //         refresh: {
  //           url: development
  //             ? 'http://127.0.0.1:8000/auth/token/refresh/'
  //             : 'https://your-backend-api.com/auth/token/refresh/',
  //           method: 'post',
  //         },
  //         logout: {
  //           url: development
  //             ? 'http://127.0.0.1:8000/auth/logout/'
  //             : 'https://your-backend-api.com/auth/logout/',
  //           method: 'GET',
  //         },
  //         user: {
  //           url: development
  //             ? 'http://127.0.0.1:8000/auth/user/'
  //             : 'https://your-backend-api.com/auth/user/',
  //           method: 'GET',
  //         },
  //       },
  //       token: {
  //         property: 'access',
  //       },
  //       refreshToken: {
  //         property: 'refresh',
  //         data: 'refresh',
  //         maxAge: 60 * 60 * 24 * 5,
  //       },
  //       user: {
  //         autoFetch: true,
  //         property: false,
  //       },
  //     },
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/login',
  //     callback: '/login',
  //     home: '/',
  //   },
  // },

  // ---- uncomment below section to enable auth middleware in this website -----
  // router: {
  //   middleware: ['auth']
  // },
};
