<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Students</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/admin">Home</nuxt-link>
          </li>
          <li>All Students</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Student Table Area Start Here -->
      <div class="card height-auto">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>All Students Data</h3>
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
              <div class="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input type="text" placeholder="Search by Roll ..." class="form-control" />
              </div>
              <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <input type="text" placeholder="Search by Name ..." class="form-control" />
              </div>
              <div class="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input type="text" placeholder="Search by Class ..." class="form-control" />
              </div>
              <div class="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                <button
                  @click.prevent="getStudents"
                  type="submit"
                  class="fw-btn-fill btn-gradient-yellow"
                >SEARCH</button>
              </div>
            </div>
          </form>
          <div class="d-flex justify-content-around mb-3">
            <a href="#">
              <i class="fa fa-trash text-danger" @click.prevent="deleteStudents"></i>
            </a>
            <a href="#">
              <i class="fa fa-edit text-primary"></i>
            </a>
          </div>
          <div class="table-responsive">
            <b-table-simple>
              <b-thead>
                <b-tr>
                  <b-th>
                    <b-form-checkbox></b-form-checkbox>
                  </b-th>
                  <b-th>Reg. No</b-th>
                  <b-th>Name</b-th>
                  <b-th>class</b-th>
                  <b-th>Phone #</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="student in students" :key="student._id">
                  <b-td>
                    <b-form-checkbox></b-form-checkbox>
                  </b-td>
                  <b-td>{{student.regNO}}</b-td>
                  <b-td v-if="student.profile">{{student.profile.firstName}}</b-td>
                  <b-td v-if="student.currentClass">{{student.currentClass.name}}</b-td>
                  <b-td v-if="student.profile">{{student.profile.phone}}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
        </div>
      </div>
      <!-- Student Table Area End Here -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Axios from "axios";

export default {
  name: "All-Student",
  layout: "admin",
  data() {
    return {
      ids: [],
      hover: false
      // students: []
    };
  },
  computed: {
    ...mapGetters({
      students: "students/students"
    })
  },
  methods: {
    getStudents() {
      this.$store.dispatch("students/getStudents");
    },
    async deleteStudents() {
      let students = this.ids;
      await Axios.delete(`${process.env.baseUrl}/api/student/deletemany`, {
        students: students
      })
        .then(({ data }) => {
          console.log(data);
        })
        .catch(err => console.log(err));
    },
    selected(student) {
      async function remove() {
        await Axios.delete(
          `${process.env.baseUrl}/api/student/delete/${student._id}`
        )
          .then(data => {})
          .catch(err => {
            if (err) {
              // alert("NOT SUCCESSFUL");
              console.log(err);
            }
          });
      }
    }
  },
  // async asyncData({store}){
  //   store.dispatch("students/getStudents")
  // },
  mounted() {}
};
</script>

<style>
</style>