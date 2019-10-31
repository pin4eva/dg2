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
                      <label class="form-check-label">Staff ID</label>
                    </div>
                  </th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>Date Of Birth</th>
                  <th>Phone</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="teacher in teachers" :key="teacher._id">
                  <td>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" />
                      <label class="form-check-label">#{{teacher.staffID}}</label>
                    </div>
                  </td>
                  <td class="text-center">
                    <img src="/dashboard/img/figure/student2.png" alt="student" />
                  </td>
                  <td>{{teacher.firstName}} {{teacher.lastName}}</td>
                  <td>{{teacher.gender}}</td>
                  <td>{{teacher.address}}</td>

                  <td>{{teacher.dob}}</td>

                  <td>{{teacher.phone}}</td>
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
  name: "All-Teacher",
 layout: "teacher",
  computed: {
    ...mapGetters({
      teachers: "teachers/teachers"
    })
  },
  mounted() {
    console.log(this.teachers);
  }
};
</script>

<style>
</style>