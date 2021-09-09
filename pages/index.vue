<template>
  <v-container>
    <div class="d-flex justify-center mb-10 mt-10">
      <h2 class="center">Dashboard</h2>
    </div>
    <v-row class="mt-10">
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="2">
        <LeftCard/>
      </v-col>

      <v-col cols="12" xs="12" sm="12" lg="8" xl="8">
        <CenterCard/>
      </v-col>

      <v-col cols="12" xs="12" sm="8" md="6" lg="4" xl="2">
        <RightCard/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted() {
  }
}
</script>