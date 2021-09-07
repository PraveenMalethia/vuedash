<template>
  <v-app dark id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item in links" :key="item.id" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-5 mb-5">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-avatar v-if="$vuetify.breakpoint.smAndDown"
        ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
      /></v-avatar>
      <v-spacer></v-spacer>
      <v-switch v-model="$vuetify.theme.dark" inset class="mt-5"></v-switch>
      <v-avatar class="hidden-sm-and-down">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { id: 1, text: "Home", to: "/" },
      { id: 2, text: "Staff", to: "/staff" },
      { id: 3, text: "Orders", to: "/orders" },
    ],
  }),
};
</script>