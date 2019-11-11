<template>
  <div>
    <div class="container">
      <div class="mt-4">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Week Number</label>
                    <b-input-group>
                      <b-form-input
                        type="number"
                        placeholder="set week number"
                        v-model.number="week"
                      ></b-form-input>
                      <b-input-group-append>
                        <b-button @click.prevent="setWeek" variant="success">Set Week</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Resumption date</label>
                    <b-input-group>
                      <b-form-input type="date" placeholder="set week number" v-model="resumption"></b-form-input>
                      <b-input-group-append>
                        <b-button @click.prevent="setResumption" variant="success">Set Resumption</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Closing date</label>
                    <b-input-group>
                      <b-form-input type="date" v-model="closing"></b-form-input>
                      <b-input-group-append>
                        <b-button @click.prevent="setClosing" variant="success">Set Closing</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "admin",
  name: "Settings",
  data() {
    return {
      week: null,
      resumption: null,
      closing: null
    };
  },
  computed: {
    ...mapGetters({
      weekNumber: "weekNumber"
    })
  },
  methods: {
    setWeek() {
      this.$store.commit("setWeek", this.week);
    },
    setResumption() {
      alert("Resumption");
    },
    setClosing() {
      alert("Closing");
    }
  }
};
</script>

<style>
</style>