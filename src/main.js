import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import {ValidationProvider, ValidationObserver, extend } from 'vee-validate';

import { localize } from 'vee-validate';
import fr from 'vee-validate/dist/locale/fr.json';
import { required, email, min, max, alpha_spaces, min_value} from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
extend('min', min);
extend('alpha_spaces', alpha_spaces);
extend('max', max);
extend('min_value', min_value);

// Install French locales.
localize( 'fr', fr);


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
