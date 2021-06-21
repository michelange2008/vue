import Vue from 'vue';

import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


import fr from 'vuetify/lib/locale/fr';

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
      dark: false,
      default: 'light',
      disable: false,
      options: {
        cspNonce: undefined,
        customProperties: undefined,
        minifyTheme: undefined,
        themeCache: undefined,
      },
      themes: {
        light: {
          primary: "#006557",
          accent: "#32A494",
          error: "#C80711",
          info: "#05806F",
          success: "#006557",
          warning: "#FFBE4E",
        }
      }
    },
    lang: {
      current: 'fr',
      locales: { fr },
    }
});
