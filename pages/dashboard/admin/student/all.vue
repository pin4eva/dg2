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
          <div class="table-responsive">
            <table class="table display text-nowrap">
              <thead>
                <tr>
                  <th>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input checkAll" />
                      <label class="form-check-label">ReqNO</label>
                    </div>
                  </th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Class</th>

                  <th>Date Of Admission</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="students">
                <tr v-for="student in students" :key="student._id" @dblclick="selected(student)">
                  <td>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" />
                      <label class="form-check-label">{{student.reqNO}}</label>
                    </div>
                  </td>
                  <td class="text-center">
                    <img :src="student.image" alt="student" width="30" height="30" />
                  </td>
                  <td>
                    <nuxt-link
                      :to="`/dashboard/admin/student/${student._id}`"
                    >{{student.firstName}} {{student.lastName}}</nuxt-link>
                  </td>
                  <td>{{student.gender}}</td>
                  <td>
                    <nuxt-link
                      :to="`/dashboard/admin/class/${student.currentClass._id}`"
                    >{{student.currentClass.name}}</nuxt-link>
                  </td>

                  <td>{{moment(student.admittedOn).format("YYYY-MM-DD") }}</td>
                  <td>{{student.phone}}</td>
                  <td>{{student.address}}</td>
                </tr>
              </tbody>
            </table>
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
    async deleteStudent() {},
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