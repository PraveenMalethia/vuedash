<template>
  <v-container>
    <div class="d-flex justify-center mb-10 mt-10">
      <h2 class="center">Add Order</h2>
    </div>
    <v-row class="mt-10">
      <v-col cols="12" sm="12" lg="4">
        <v-timeline dense clipped>
          <v-timeline-item
            fill-dot
            class="white--text mb-6"
            color="orange"
            large
          >
          <span>Processes</span>
          </v-timeline-item>

          <v-timeline-item
            class="mb-4"
            color="grey"
            icon-color="grey lighten-2"
            small
          >
            <v-row justify="space-between">
              <v-col cols="7"> This order was archived. </v-col>
              <v-col class="text-right" cols="5"> 15:26 EDT </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item class="mb-4" small>
            <v-row justify="space-between">
              <v-col cols="7">
                <v-chip class="white--text ml-0" color="purple" label small>
                  APP
                </v-chip>
                Digital Downloads fulfilled 1 item.
              </v-col>
              <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item class="mb-4" color="grey" small>
            <v-row justify="space-between">
              <v-col cols="7">
                Order confirmation email was sent to John Leider
                (john@vuetifyjs.com).
              </v-col>
              <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item class="mb-4" hide-dot>
            <v-btn class="mx-0"> Resend Email </v-btn>
          </v-timeline-item>

          <v-timeline-item class="mb-4" color="grey" small>
            <v-row justify="space-between">
              <v-col cols="7">
                A $15.00 USD payment was processed on PayPal Express Checkout
              </v-col>
              <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="grey" small>
            <v-row justify="space-between">
              <v-col cols="7">
                John Leider placed this order on Online Store (checkout
                #1937432132572).
              </v-col>
              <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="12" xs="12" md="12" lg="8">
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Submit Order Details
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            Configure Process for this order
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            Mange Order
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="green" @click="e6 = 1"> Create </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      events: [],
      input: null,
      nonce: 0,
    };
  },

  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
  },

  methods: {
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(" ")
              .map((v) => v.charAt(0))
              .join("")}`;
          }
        ),
      });

      this.input = null;
    },
  },
};
</script>