<template>
  <div>
    <div class="dashboard-content-one">
      <!-- <div class="text-right">{{day}}</div> -->
      <div class="breadcrumbs-area">
        <h3>Take Attendance Page</h3>

        <ul>
          <li>
            <nuxt-link to="/dashboard/teacher">Home</nuxt-link>
          </li>
          <li>Class Page</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Class Routine Area Start Here -->

      <div class="container">
        <div class="card height-auto">
          <div class="card-body">
            <div class="heading-layout1">
              <div class="item-title">
                <h3>All classes</h3>
              </div>
              <div class="dropdown">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >...</a>

                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-times text-orange-red"></i>Close
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs text-dark-pastel-green"></i>Edit
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-redo-alt text-orange-peel"></i>Refresh
                  </a>
                </div>
              </div>
            </div>
            <form class="mg-b-20">
              <div class="row">
                <div class="col-lg-4 col-12 form-group">
                  <select class="form-control" v-model="newClass">
                    <option value="null">Please select a class</option>
                    <option :value="c._id" v-for="c in classes" :key="c._id">{{c.name}}</option>
                  </select>
                </div>
                <div class="col-lg-4 col-12 form-group">
                  <b-form-select :options="termOptions" v-model="term"></b-form-select>
                </div>
                <div class="col-lg-3 col-12 form-group">
                  <b-form-select v-model="month" :options="monthOption"></b-form-select>
                </div>
                <div class="col-lg-3 col-12 form-group">
                  <b-form-input v-model.number="week" type="number" placeholder="Week Number"></b-form-input>
                </div>
                <div class="col-lg-2 col-12 form-group">
                  <button @click.prevent="getRegister" type="submit" class="btn btn-warning">SEARCH</button>
                </div>
              </div>
            </form>
            <div v-if="attendance.length > 0">
              <b-table-simple responsive bordered>
                <b-thead>
                  <b-tr>
                    <b-th>Students</b-th>
                    <b-th v-for="(a,i) in attendance" :key="i">{{a.day}}</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td variant="primary">
                      <b-tr
                        v-for="student in myClass.students"
                        :key="student._id"
                      >{{student.firstName}}</b-tr>
                    </b-td>

                    <b-td v-for="att in attendance" :key="att._id">
                      <b-tr v-for="a in att.students" :key="a._id">
                        <i
                          :class="a.attended ?'fas fa-check text-success':'fas fa-times text-danger'"
                        ></i>
                      </b-tr>
                    </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";
import moment from "moment";
// const _ = process.client ? require("lodash") : undefined;
export default {
  name: "AttendanceComp",

  data() {
    return {
      term: null,
      termOptions: [
        { value: null, text: "Please select a term", disabled: true },
        { text: "First Term" },
        { text: "Second Term" },
        { text: "Third Term" }
      ],
      monthOption: [
        { value: null, text: "Select Month", disabled: true },
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      week: null,
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month: null,
      loading: false,
      isPresent: false,
      newClass: null
    };
  },

  computed: {
    ...mapGetters({
      myClass: "teachers/myClass",
      attendance: "att/att",
      classes: "class/classes"
    })
  },
  methods: {
    async getRegister() {
      if (this.month && this.week && this.term && this.newClass) {
        this.$store.dispatch("att/getAtt", {
          className: this.newClass,
          month: this.month,
          week: this.week,
          term: this.term
        });
      } else {
        alert("Please select a term, a month and week number");
      }
    }
  },
  created() {
    this.$store.dispatch("class/getClasses");
  }
};
</script>

<style>
</style>