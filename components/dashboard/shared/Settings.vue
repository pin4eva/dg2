<template>
  <div>
    <div class="container">
      <div class="mt-4">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-lg-4 col-md-12">
                  <div class="form-group">
                    <label>Term</label>
                    <b-select v-model="settings.term">
                      <!-- <option value="null">Select Term</option> -->
                      <option>First Term</option>
                      <option>Second Term</option>
                      <option>Third Term</option>
                    </b-select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="form-group">
                    <label>Resumption date</label>
                    <b-form-input
                      type="date"
                      placeholder="set week number"
                      v-model="settings.resumption"
                    >
                      <!-- <i class="fas fa-calendar-alt"></i> -->
                    </b-form-input>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="form-group">
                    <label>Closing date</label>
                    <b-form-input type="date" v-model="settings.closing"></b-form-input>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <b-button variant="success" @click="newTerm">Submit</b-button>
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
  layout: "teacher",
  name: "Settings",
  data() {
    return {
      week: null,
      resumption: null,
      closing: null,
      settings: {}
    };
  },
  computed: {
    ...mapGetters({
      // weekNumber: "weekNumber"
    })
  },
  methods: {
    setWeek() {
      this.$store.commit("setWeek", this.week);
    },
    newTerm() {
      this.$store.dispatch("settings/update", this.settings);
    }
  }
};
</script>

<style>
</style>