<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="6" align-self="center">
        <v-img
          src="/svg/login.svg"
          max-height="70%"
          max-width="70%"
          alt="login"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="12" lg="6" align-self="center">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            label="Username"
            required
            outlined
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            outlined
            required
            label="Password"
            hint="At least 8 characters"
            v-model="password"
            :type="show ? 'text' : 'password'"
            :error-messages="passwordErrors"
            @click:append="show = !show"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          ></v-text-field>
          <v-btn class="mr-4" color="primary" @click="submit"> submit </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength,minLength } from "vuelidate/lib/validators";
export default {
  auth: false,
  mixins: [validationMixin],
  layout: "auth",
  validations: {
    name: { required, maxLength: maxLength(10) },
    password: { required ,minLength :minLength(8) },
  },

  data: () => ({
    name: "",
    password: "",
    show: false
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Username is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at most 8 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid){
        this.$router.push("/");
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.password = "";
      this.minLength = "";
    },
  },
};
</script>

<style>
</style>