<template>
  <v-container>
    <div class="display-4">Bonjour</div>
    <ValidationObserver
      v-slot="{ invalid }"
      tag="form"
      @submit.prevent="envoyer"
    >
      <v-form>
        <v-row class="text-center">
          <v-col cols="6">
            <ValidationProvider rules="required" name="nom" v-slot="{ errors}">
              <v-text-field
              label="Nom"
              prepend-icon="mdi-phone"
              append-icon="mdi-close"
              :messages="['Saisissez votre nom']"
              v-model.lazy.trim="nom"
              :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>

          <v-col cols="6">
            <ValidationProvider rules="required" name="prénom" v-slot="{ errors}">
              <v-text-field
              label="Prénom"
              prepend-icon="mdi-phone"
              append-icon="mdi-close"
              :messages="['Saisissez votre nom']"
              v-model.lazy.trim="prenom"
              :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <ValidationProvider rules="email|required" name="email" v-slot="{ errors }">
              <v-text-field
              prepend-icon="mdi-at"
              v-model="email"
              label="E-mail"
              required
              :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="4">
            <v-text-field
            type=date
            v-model="naissance"
            label="Date de naissance"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <ValidationProvider rules="min_value:18|required" name="age" v-slot="{ errors }">
              <v-text-field
              type="number"
              label="Age (ans)"
              hint="Indiquez votre age en années"
              v-model="age"
              :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="md-3 sm-6">
            <v-radio-group v-model="niveau">
              <v-radio
              v-for="(niveau, index) in niveaux"
              :key="index"
              :label="`Type ${niveau.nom}`"
              :value="niveau.nom"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="md-3 sm-6">
            <v-checkbox
            v-for="langage in all_langages"
            v-model="langages"
            :label="langage"
            :value= "langage"
            :key="langage"
            ></v-checkbox>
          </v-col>
          <v-col cols="md-3 sm-6">
            <v-file-input
            label="Photo d'identité"
            counter
            show-size
            v-model="photo"
            accept="image/*"
            @change="chargerPhoto"
            >
          </v-file-input>
          <template>
            <img :src="url" width="100px" alt="">
          </template>
        </v-col>
      </v-row>
      <v-row>
        <v-btn color="primary" submit :disabled="invalid">Envoyer</v-btn>
      </v-row>
    </v-form>
  </ValidationObserver>
</v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      niveau: [],
      langages: [],
      prenom: '',
      nom: '',
      email: '',
      naissance: '',
      age: '',
      photo: [],
      url: null,
      niveaux: [
      {nom : 'débutant'},
      {nom : "confirmé"},
      {nom : "professionnel"},
      ],
      all_langages: [
      "php", "javascript", "html", "css"
      ]
    }),
    methods:{
      chargerPhoto() {
        if(this.photo !== null) {
          this.url= URL.createObjectURL(this.photo)
        }
        else {
          this.url = null;
        }
      },
      async envoyer() {
        const isValid = await this.$refs.monForm.validate();

        if(isValid) {
          const destinataire = this.listeDestinataires.find(dest =>
            dest.value === this.destinataire
          );
          const mail = destinataire.mail

          console.log(destinataire + " : " + mail);
          console.log(isValid);
        }
      }
    }
  }
</script>
