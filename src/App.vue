<template>
  <v-app>

    <v-app-bar class="primary">App bar</v-app-bar>
    <v-main>
    <HelloWorld></HelloWorld>

    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
