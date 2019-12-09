<template>
  <div>
    <div class="container">
      <!-- Menu -->
      <div class="mt-5">
        <div class="row gutters-20">
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="dashboard-summery-one mg-b-20">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="item-icon bg-light-green">
                    <i class="flaticon-mail text-green"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <div class="item-title">
                      <a href="#">New Scroll Message</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="dashboard-summery-one mg-b-20">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="item-icon bg-light-blue">
                    <i class="flaticon-settings text-blue"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <div>New term</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="dashboard-summery-one mg-b-20">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="item-icon bg-light-yellow">
                    <i class="flaticon-couple text-orange"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="item-content">
                    <div class="item-title">Parents</div>
                    <div class="item-number">
                      <span>5,690</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="dashboard-summery-one mg-b-20">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="item-icon bg-danger">
                    <i class="flaticon-list text-warning"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="item-content">
                    <div class="item-title">Parents</div>
                    <div class="item-number">
                      <span>5,690</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Menue end -->
      <div class="mt-4">
        <div class="card" v-if="page==1">
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-lg-4 col-md-12">
                  <div class="form-group">
                    <label>Term</label>
                    <b-select v-model="settings.term">
                      <option value="null">Select Term</option>
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
      page: 1,
      settings: {
        term: null,
        resumption: null,
        closing: null
      }
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