<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Students</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Student Details</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Student Details Area Start Here -->
      <div class="card height-auto">
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
              <img src="/dashboard/img/figure/student1.jpg" alt="student" />
            </div>
            <div class="item-content">
              <div class="header-inline item-header">
                <h3
                  class="text-dark-medium font-medium"
                >{{student.firstName}} {{student.middleName}} {{student.lastName}}</h3>
                <div class="header-elements">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="far fa-edit"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-print"></i>
                      </a>
                    </li>
                    <li>
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
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td
                        class="font-medium text-dark-medium"
                      >{{student.firstName}} {{student.middleName}} {{student.lastName}}</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td class="font-medium text-dark-medium">{{student.gender}}</td>
                    </tr>
                    <tr>
                      <td>Parents:</td>
                      <td class="font-medium text-dark-medium">
                        <tr v-for="parent in student.parents" :key="parent._id">
                          <td>{{parent.role}}</td>
                          <td>{{parent.name}}</td>
                        </tr>
                      </td>
                    </tr>

                    <tr>
                      <td>Date Of Birth:</td>
                      <td
                        class="font-medium text-dark-medium"
                      >{{moment(student.dob).format("DD/MM/YYYY")}}</td>
                    </tr>
                    <tr>
                      <td>Religion:</td>
                      <td class="font-medium text-dark-medium">{{student.religion}}</td>
                    </tr>
                    <tr>
                      <td>Father Occupation:</td>
                      <td class="font-medium text-dark-medium">Graphic Designer</td>
                    </tr>
                    <tr>
                      <td>E-mail:</td>
                      <td class="font-medium text-dark-medium">jessiarose@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Admission Date:</td>
                      <td class="font-medium text-dark-medium">07.08.2019</td>
                    </tr>
                    <tr>
                      <td>Class:</td>
                      <td class="font-medium text-dark-medium">2</td>
                    </tr>
                    <tr>
                      <td>Section:</td>
                      <td class="font-medium text-dark-medium">Pink</td>
                    </tr>
                    <tr>
                      <td>Roll:</td>
                      <td class="font-medium text-dark-medium">10005</td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td class="font-medium text-dark-medium">House #10, Road #6, Australia</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td class="font-medium text-dark-medium">+ 88 98568888418</td>
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

<script>
import Axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Single-Student",
  layout: "teacher",
  computed: {
    ...mapGetters({
      student: "students/student"
    })
  },
  async fetch({ store, params }) {
    return await Axios.get(
      `${process.env.baseUrl}/api/student/single/${params.id}`
    )
      .then(({ data }) => {
        store.commit("students/setStudent", data);
      })
      .catch(err => new Error(err));
    // store.commit();
  }
};
</script>

<style>
</style>