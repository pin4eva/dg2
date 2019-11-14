<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Parents</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/teacher">Home</nuxt-link>
          </li>
          <li>All Parents</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Student Table Area Start Here -->
      <div class="card height-auto">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>All Parents Data</h3>
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
                <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
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
                      <label class="form-check-label">ParentID</label>
                    </div>
                  </th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Phone</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="parent in parents" :key="parent._id">
                  <td>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" />
                      <label class="form-check-label">#{{parent.serialNO}}</label>
                    </div>
                  </td>
                  <td class="text-center">
                    <img src="/dashboard/img/figure/student2.png" alt="parent" />
                  </td>
                  <td>
                    <nuxt-link :to="'/dashboard/teacher/parent/'+parent._id">{{parent.name}}</nuxt-link>
                  </td>
                  <td>{{parent.role}}</td>
                  <td>{{parent.phone}}</td>
                  <td>{{parent.email}}</td>
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
import { mapGetters } from "vuex";
export default {
  name: "All-Parent",
  layout: "teacher",
  computed: {
    ...mapGetters({
      parents: "parents/parents"
    })
  }
};
</script>

<style>
</style>