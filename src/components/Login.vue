<template>
  <v-dialog v-model="dialog" scrollable  max-width="300px" id="login">
    <template v-slot:activator="{ on }">
      <v-btn dark v-on="on" icon @click="dialog = true">
        <v-icon>mdi-account</v-icon>
      </v-btn> 
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Email" required></v-text-field>
            </v-col>

            <v-col cols="12" id="password">
              <v-text-field
                model="password"
                label="Password"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.emailMatch]"
                hint="At least 8 characters"
                @click:append="show = !show"
                v-model="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <!--terms and service-->

      </v-card-text>
      <v-card-actions>

<router-link to="/register" target=”_blank”>
       <v-btn
        color="green darken-5"
        class="ma-2"
       @click="dialog = false"
        small text
        >
        Create new profile!
        </v-btn>
       </router-link>
         <v-spacer></v-spacer>
        <v-btn v-on="on" color="green darken-5" large text @click="dialog = false">Login</v-btn>
      </v-card-actions>
      <v-card-actions>
          <small>(Profile creation opens a new tab)</small>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data: () => ({
    drawer: null,
    dialog: false,
    dialog2: false,
    inner: false,
    show: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    min: 1,
    max: 100,
    slider: 40,
    range: [-20, 70],
  }),
};
</script>

<style lang="scss">


</style>




