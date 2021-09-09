<template>
  <v-app dark id="inspire">
    <v-app-bar app flat>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-avatar v-if="$vuetify.breakpoint.smAndDown"
        ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
      /></v-avatar>
      <v-spacer></v-spacer>
      <v-switch v-model="$vuetify.theme.dark" inset class="mt-5"></v-switch>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  auth:false,
  data: () => ({
  }),
}
</script>

<style>

</style>