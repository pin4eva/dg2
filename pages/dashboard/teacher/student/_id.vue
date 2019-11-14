<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Students</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/teacher/student/all">All Students</nuxt-link>
          </li>
          <li>Student Details</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Student Details Area Start Here -->
      <div class="card height-auto" ref="printArea">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>
                About
                <span
                  class="font-italic font-weight-normal"
                >{{student.firstName}} {{student.lastName}}</span>
              </h3>
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
          <div class="single-info-details">
            <div class="item-img">
              <img
                :src="student.profile.image"
                alt="dp"
                v-if="student.profile.image"
                width="280"
                height="330"
              />
              <img src="/dashboard/img/figure/student1.jpg" alt="student" v-else />
            </div>
            <div class="item-content">
              <div class="header-inline item-header">
                <h3
                  class="text-dark-medium font-medium"
                >{{student.firstName}} {{student.middleName}} {{student.lastName}}</h3>
                <div class="header-elements">
                  <ul>
                    <li @click.prevent="editStudent">
                      <a href="#">
                        <i class="far fa-edit"></i>
                      </a>
                    </li>
                    <li @click.prevent="printPDF">
                      <a href="#">
                        <i class="fas fa-print"></i>
                      </a>
                    </li>
                    <li @click.prevent="downloadPDF">
                      <a href="#">
                        <i class="fas fa-download"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale
                word moun taiery.Aliquam erat volutpaturabiene natis massa sedde sodale
                word moun taiery.
              </p>
              <div class="info-table table-responsive">
                <table class="table text-nowrap">
                  <tbody v-if="student.profile">
                    <tr>
                      <td>Registration NO:</td>
                      <td class="font-medium text-dark-medium">{{student.reqNO}}</td>
                    </tr>
                    <tr>
                      <td>Name:</td>
                      <td
                        class="font-medium text-dark-medium"
                      >{{student.firstName}} {{student.middleName}} {{student.lastName}}</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td class="font-medium text-dark-medium">{{student.profile.gender}}</td>
                    </tr>
                    <tr v-for="parent in student.parents" :key="parent._id">
                      <td>{{parent.role}}:</td>
                      <td class="font-medium text-dark-medium">
                        <tr v-if="student.parent">
                          <td>Name:</td>
                          <td>{{parent.name}}</td>
                        </tr>
                        <tr>
                          <td>Phone:</td>
                          <td>{{parent.phone}}</td>
                        </tr>
                      </td>
                    </tr>

                    <tr>
                      <td>Date Of Birth:</td>
                      <td
                        class="font-medium text-dark-medium"
                      >{{$moment(student.dob).format("DD/MM/YYYY")}}</td>
                    </tr>
                    <tr>
                      <td>Religion:</td>
                      <td class="font-medium text-dark-medium">{{student.profile.religion}}</td>
                    </tr>

                    <tr>
                      <td>Blood Group:</td>
                      <td class="font-medium text-dark-medium">{{student.profile.bloodGroup}}</td>
                    </tr>
                    <tr>
                      <td>Admission Date:</td>
                      <td class="font-medium text-dark-medium">{{student.admittedON}}</td>
                    </tr>
                    <tr v-if="student.currentClass.name">
                      <td>Class:</td>
                      <td class="font-medium text-dark-medium">{{student.currentClass.name}}</td>
                    </tr>

                    <tr>
                      <td>Address:</td>
                      <td class="font-medium text-dark-medium">{{student.profile.address}}</td>
                    </tr>
                    <tr v-for="parent in student.parents" :key="parent._id">
                      <td>{{parent.role}}:</td>
                      <td>{{parent.name}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Student Details Area End Here -->
    </div>
  </div>
</template>
                              <!-- TODO
                                1. Download Vue-html-papper,
                                2.Update Student profile,
                                3. Create a generate student admission letter page
                               -->

<script>
import Axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Single-Student",
  layout: "teacher",
  data() {
    return {
      editMode: false
    };
  },
  computed: {
    ...mapGetters({
      student: "students/student"
    })
  },
  methods: {
    downloadPDF() {},
    printPDF() {},
    async editStudent() {}
  },
  async fetch({ store, params }) {
    return await Axios.get(
      `${process.env.baseUrl}/api/student/single/${params.id}`
    )
      .then(({ data }) => {
        store.commit("students/setStudent", data);
      })
      .catch(err => new Error(err));
    // return store.dispatch("students/getStudent", { id: params.id });
  }
};
</script>

<style>
</style>