<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Teacher</h3>
        <ul>
          <nuxt-link to="/dashboard/teacher">Home</nuxt-link>
          <li>Teacher Details</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Student Table Area Start Here -->
      <div class="card height-auto">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>
                About
                <span
                  class="font-italic"
                >{{teacher.profile.firstName}} {{teacher.profile.lastName}}</span>
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
              <img :src="student.image" alt="dp" v-if="teacher.image" width="280" height="330" />
              <img src="/dashboard/img/figure/teacher.jpg" alt="teacher" v-else />
            </div>
            <div class="item-content">
              <div class="header-inline item-header">
                <h3 class="text-dark-medium font-medium">{{teacher.firstName}} {{teacher.lastName}}</h3>
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
                  <tbody v-if="teacher">
                    <tr>
                      <td>Name:</td>
                      <td
                        class="font-medium text-dark-medium"
                      >{{teacher.profile.firstName}} {{teacher.profile.lastName}}</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td class="font-medium text-dark-medium">{{teacher.profile.gender}}</td>
                    </tr>

                    <tr>
                      <td>E-mail:</td>
                      <td class="font-medium text-dark-medium">{{teacher.profile.email}}</td>
                    </tr>
                    <tr>
                      <td>Subjects:</td>
                      <td class="font-medium text-dark-medium">
                        <tr v-for="subject in teacher.subjects" :key="subject._id">
                          <td>{{subject.subject}}</td>
                        </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Class:</td>
                      <td class="font-medium text-dark-medium">{{teacher.class}}</td>
                    </tr>

                    <tr>
                      <td>staffID:</td>
                      <td class="font-medium text-dark-medium">{{teacher.staffID}}</td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td class="font-medium text-dark-medium">{{teacher.profile.address}}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td class="font-medium text-dark-medium">{{teacher.profile.phone}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Student Table Area End Here -->
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Single-Teacher",
  layout: "teacher",
  computed: {
    ...mapGetters({
      teacher: "teachers/teacher"
    })
  },
  async fetch({ params, store }) {
    return await Axios.get(
      `${process.env.baseUrl}/api/teacher/single/${params.id}`
    )
      .then(({ data }) => {
        store.commit("teachers/setTeacher", data);
        // console.log(data);
      })
      .catch(err => new Error(err));
  }
};
</script>

<style>
</style>