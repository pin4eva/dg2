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
        <nuxt-link
          tag="button"
          class="btn btn-success mb-3"
          to="/dashboard/teacher/attendance"
        >View Register</nuxt-link>
      </div>
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

            <div>
              <b-table-simple>
                <b-thead>
                  <b-tr>
                    <b-th>
                      <b-form-checkbox disabled></b-form-checkbox>
                    </b-th>
                    <b-th>Reg. NO</b-th>
                    <b-th>Name</b-th>
                    <b-th>Status</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr v-for="student in students" :key="student.student">
                    <b-td>
                      <b-form-checkbox v-model="student.attended"></b-form-checkbox>
                    </b-td>
                    <b-td>{{student.regNO}}</b-td>
                    <b-td>{{student.name}}</b-td>
                    <b-td>{{student.attended ? "Present" : "Absence"}}</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
              <button
                type="button"
                role="button"
                class="btn btn-warning"
                @click.prevent="attendance"
              >Take Attendance</button>
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
const _ = process.client ? require("lodash") : undefined;
export default {
  name: "AttendancePage",
  layout: "teacher",
  data() {
    return {
      students: [],

      day: moment().format("dddd"),
      month: moment().format("MMMM")
    };
  },

  computed: {
    ...mapGetters({
      loading: "class/loading",
      myClass: "teachers/myClass",
      week: "settings/week",
      term: "settings/settings"
    })
  },
  methods: {
    async attendance() {
      const students = this.students;
      if (!this.term && !this.week) {
        return alert("Please select a term and fill the week number");
      } else {
        // console.log(this.myClass._id);
        const attendance = await Axios.post(
          `${process.env.baseUrl}/api/attendance/new`,
          {
            className: this.myClass._id,
            day: this.day,
            month: this.month,
            students: students,
            week: this.week,
            term: this.term.term
          }
        )
          .catch(err => new Error(err))
          .then(({ data }) => {
            if (data) {
              alert("SUCCESS !");
            }
          });
      }
    }
  },
  mounted() {
    let myclass = this.myClass.students;
    let students = myclass.map(s => {
      return {
        student: s._id,
        name: `${s.firstName} ${s.lastName}`,
        attended: true,
        regNO: s.regNO
      };
    });
    this.students = students;
  }
};
</script>

<style>
</style>