<template>
  <v-container>
    <div class="d-flex justify-center mb-10 mt-10">
      <h2 class="center">Add Staff</h2>
    </div>
    <v-row class="mt-10">
      <v-col cols="12" xs="12" offset-md="4">
        <v-card max-width="600" elevation="10">
          <v-card-title>
            <span class="headline">Staff Information</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    v-model="staff.name"
                    label="Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    v-model="staff.email"
                    label="Email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    v-model="staff.phone"
                    label="Phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    v-model="staff.address"
                    label="Address"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    v-model="staff.salary"
                    label="Salary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    outlined
                    v-model="staff.position"
                    label="Position"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Date"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="staff.date_of_birth"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large color="primary" @click="addStaff">Add</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      staff: {
        name: "",
        email: "",
        phone: "",
        address: "",
        salary: "",
        position: "",
        date_of_birth: "",
      },
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    addStaff() {
      if (this.$refs.form.validate()) {
        // this.$store.dispatch("addStaff", this.staff);
        this.$router.push("/staff");
      }
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style>
</style>