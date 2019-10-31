<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>All Class</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/admin">Home</nuxt-link>
          </li>
          <li>Routine</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Class Routine Area Start Here -->
      <div class="row">
        <div class="col-xl-12 col-12">
          <div class="card height-auto">
            <div class="card-body">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>Take Action today</h3>
                </div>
              </div>
              <form class="new-added-form">
                <div class="row">
                  <div class="col-md-12 col-lg-6 form-group">
                    <button class="btn btn-success w-100 py-4">Take Attendance</button>
                  </div>
                  <div class="col-md-12 col-lg-6 form-group">
                    <button class="btn btn-success w-100 py-4">Take Attendance</button>
                  </div>

                  <div class="col-md-12 col-lg-6 form-group">
                    <button class="btn btn-success w-100 py-4">Take Attendance</button>
                  </div>
                  <div class="col-md-12 col-lg-6 form-group">
                    <button class="btn btn-success w-100 py-4">Take Attendance</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card height-auto">
            <div class="card-body">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>Class Routine</h3>
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
              <div class="table-responsive">
                <table class="table display text-nowrap">
                  <thead>
                    <tr>
                      <th>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input checkAll" />
                          <label class="form-check-label">ID</label>
                        </div>
                      </th>
                      <th>Class</th>
                      <th>Section</th>
                      <th>Session</th>
                      <th>Teacher</th>
                      <th>Attendance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="c in classes" :key="c._id">
                      <td>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                          <label class="form-check-label">{{c.serialNO}}</label>
                        </div>
                      </td>
                      <td>{{c.name}}</td>
                      <td>{{c.section}}</td>
                      <td>{{c.session.session}}</td>
                      <td>
                        <nuxt-link
                          :to="'/dashboard/admin/teacher/'+c.teacher._id"
                        >{{c.teacher.firstName}} {{c.teacher.lastName}}</nuxt-link>
                      </td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <a href="#">
                            <i class="fa fa-plus text-success"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-minus text-danger"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Class Routine Area End Here -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Class-Index",
  layout: "teacher",
  data() {
    return {
      newClass: {}
    };
  },
  computed: {
    ...mapGetters({
      classes: "class/classes",
      sessions: "class/sessions",
      teachers: "teachers/teachers"
    })
  },
  methods: {
    async addClass() {
      await this.$store
        .dispatch("class/addClass", this.newClass)
        .then(data => console.log("From page", data));
    }
  }
};
</script>

<style>
.btn {
  font-size: 15px;
}
</style>