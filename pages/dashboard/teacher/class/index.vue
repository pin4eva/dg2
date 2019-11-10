<template>
  <div>
    <div class="dashboard-content-one">
      <!-- <div class="text-right">{{day}}</div> -->
      <div class="breadcrumbs-area">
        <h3>My Class</h3>

        <ul>
          <li>
            <nuxt-link to="/dashboard/admin">Home</nuxt-link>
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
                <button class="btn btn-primary" @click.prevent.once="attendance">Mark As Present</button>
                <button class="btn btn-success">Mark Present</button>
                <button class="btn btn-warning">Send Notice</button>
              </div>
              <b-table-simple striped hover>
                <b-thead>
                  <b-tr>
                    <b-th>
                      <b-form-checkbox v-model="selectAll"></b-form-checkbox>
                    </b-th>
                    <b-th>Reg. NO</b-th>
                    <b-th>Name</b-th>
                    <b-th>Phone No</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr v-for="student in myClass.students" :key="student._id">
                    <b-td>
                      <b-form-checkbox
                        :value="{student:student._id,attended:true}"
                        v-model="students"
                      ></b-form-checkbox>
                    </b-td>
                    <b-td>{{student.regNO}}</b-td>
                    <b-td>
                      <nuxt-link
                        :to="`student/${student._id}`"
                      >{{student.firstName}} {{student.lastName}}</nuxt-link>
                    </b-td>
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
    record: {
      get: function() {
        return false;
      },
      set(v) {
        let students = this.myClass.students;
        console.log(v);
        const data = students.forEach(s => {
          student: s._id;
          attended: true;
        });
        // const newdata = data.map(d => {
        //   let student = v.student;
        //   let attended = v.attended;
        //   return {
        //     student,
        //     attended
        //   };
        // });
        const result = _.map(data, s => _.asign({}, s, { attended: false }));
        this.all = result;
      }
    }
  },
  watch: {
    all(v) {
      console.log(v);
      let students = this.myClass.students;
      let data = students.map(s => {
        let student = s._id || v.student;
        let attended = v.attended || true;
      });
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
  },

  mounted() {
    this.all = this.record;
  }
};
</script>

<style>
</style>