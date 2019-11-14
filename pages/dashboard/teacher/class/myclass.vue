<template>
  <div>
    <div class="dashboard-content-one">
      <!-- <div class="text-right">{{day}}</div> -->
      <div class="breadcrumbs-area">
        <h3>My Class</h3>

        <ul>
          <li>
            <nuxt-link to="/dashboard/teacher">Home</nuxt-link>
          </li>
          <li>Class Page</li>
        </ul>
      </div>
      <div class="row gutters-20">
        <div class="col-xl-4 col-sm-6 col-12">
          <div class="dashboard-summery-one mg-b-20">
            <div class="row align-items-center">
              <div class="col-6">
                <div class="item-icon bg-light-green">
                  <i class="flaticon-classmates text-green"></i>
                </div>
              </div>
              <div class="col-6">
                <div class="item-content">
                  <div class="item-title">Students</div>
                  <div class="item-number">
                    <span>1,50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 col-12">
          <div class="dashboard-summery-one mg-b-20">
            <div class="row align-items-center">
              <div class="col-6">
                <div class="item-icon bg-light-blue">
                  <i class="flaticon-multiple-users-silhouette text-blue"></i>
                </div>
              </div>
              <div class="col-6">
                <div class="item-content">
                  <div class="item-title">Teachers</div>
                  <div class="item-number">
                    <span>2,250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 col-12">
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
            <form class="mg-b-20">
              <div class="row gutters-8">
                <div class="col-lg-4 col-12 form-group">
                  <input type="text" placeholder="Search by Day ..." class="form-control" />
                </div>
                <div class="col-lg-3 col-12 form-group">
                  <input type="text" placeholder="Search by Class ..." class="form-control" />
                </div>
                <div class="col-lg-3 col-12 form-group">
                  <input type="text" placeholder="Search by Section ..." class="form-control" />
                </div>
                <div class="col-lg-2 col-12 form-group">
                  <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                </div>
              </div>
            </form>
            <div>
              <div class="d-flex justify-content-between mb-3 gutters-20">
                <nuxt-link
                  tag="button"
                  to="class/attendance"
                  class="btn btn-primary"
                >Take Attendance</nuxt-link>
                <button class="btn btn-success">View Register</button>
                <button class="btn btn-warning">Set Class Time table</button>
                <button class="btn btn-warning">Set Exam Time table</button>
              </div>
              <b-table-simple striped hover>
                <b-thead>
                  <b-tr>
                    <b-th>
                      <b-form-checkbox v-model="selectAll"></b-form-checkbox>
                    </b-th>
                    <b-th>Reg. NO</b-th>
                    <b-th>Name</b-th>
                    <b-th>Gender</b-th>
                    <b-th>Phone No</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr v-for="student in myClass.students" :key="student._id">
                    <b-td>
                      <b-form-checkbox
                        :value="{student:student._id,attended:true}"
                        :unchecked-value="records"
                        v-model="students"
                      ></b-form-checkbox>
                    </b-td>
                    <b-td>{{student.regNO}}</b-td>
                    <b-td>
                      <nuxt-link
                        :to="`student/${student._id}`"
                      >{{student.firstName}} {{student.lastName}}</nuxt-link>
                    </b-td>
                    <b-td>{{student.profile.gender}}</b-td>
                    <b-td>{{student.phone}}</b-td>
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
const _ = process.client ? require("lodash") : undefined;
export default {
  name: "MyClass",
  layout: "teacher",
  data() {
    return {
      students: [],
      all: [],
      selected: []
    };
  },

  computed: {
    ...mapGetters({
      loading: "class/loading",
      myClass: "teachers/myClass",
      day: "day"
    }),
    selectAll: {
      get: function() {
        const students = this.myClass.students;
        return students ? this.students.length == students : false;
      },
      set: function(v) {
        let selected = [];
        const students = this.myClass.students;
        if (v) {
          students.forEach(student => {
            selected.push({ student: student._id, attended: true });
          });
        }
        this.students = selected;
      }
    },
    records() {
      let myclass = this.myClass.students;
      let options = myclass.map(o => {
        return {
          student: o._id,
          attended: false
        };
      });
      return options;
    }
  },
  watch: {
    students(a, b) {
      // if (a.length > 0) {
      //   console.log("a:", a);
      // } else {
      //   console.log("b:", b);
      // }
    }
  },
  methods: {
    async attendance() {
      const students = this.students;
      const attendance = await Axios.post(
        `${process.env.baseUrl}/api/attendance/new`,
        {
          className: this.myClass._id,
          day: this.day,
          students: students
        }
      )
        .catch(err => new Error(err))
        .then(({ data }) => data);
      console.log(attendance);
    }
  }
};
</script>

<style>
</style>