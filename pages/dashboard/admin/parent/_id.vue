<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Parents</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/admin">Home</nuxt-link>
          </li>
          <li>Parent Details</li>
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
                <span class="font-italic">{{parent.name}}</span>
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
              <img :src="parent.image" alt="dp" v-if="parent.image" width="280" height="330" />
              <img src="/dashboard/img/figure/student1.jpg" alt="Parent" v-else />
            </div>
            <div class="item-content">
              <div class="header-inline item-header">
                <h3 class="text-dark-medium font-medium">{{parent.name}}</h3>
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
                      <td class="font-medium text-dark-medium">{{parent.name}}</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td class="font-medium text-dark-medium">{{parent.role}}</td>
                    </tr>

                    <tr>
                      <td>Occupation:</td>
                      <td class="font-medium text-dark-medium">{{parent.occupation}}</td>
                    </tr>
                    <tr>
                      <td>E-mail:</td>
                      <td class="font-medium text-dark-medium">{{parent.email}}</td>
                    </tr>

                    <tr>
                      <td>Address:</td>
                      <td class="font-medium text-dark-medium">{{parent.address}}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td class="font-medium text-dark-medium">{{parent.phone}}</td>
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
import { mapGetters } from "vuex";
import Axios from "axios";
export default {
  name: "Single-Parent",
  layout: "admin",
  computed: {
    ...mapGetters({
      parent: "parents/parent"
    })
  },
  async fetch({ params, store }) {
    return await Axios.get(
      `${process.env.baseUrl}/api/parent/single/${params.id}`
    )
      .then(({ data }) => {
        store.commit("parents/setParent", data);
      })
      .catch(err => new Error(err));
  }
};
</script>

<style>
</style>