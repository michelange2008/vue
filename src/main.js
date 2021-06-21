import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import {ValidationProvider, extend } from 'vee-validate';

import { localize } from 'vee-validate';
import fr from 'vee-validate/dist/locale/fr.json';
import { required, email, min, max, alpha_spaces} from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
extend('min', min);
extend('alpha_spaces', alpha_spaces);
extend('max', max);

// Install French locales.
localize( 'fr', fr);


Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
