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
          <li>Student Admit Form</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Admit Form Area Start Here -->
      <div class="card height-auto">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>Add New Teacher</h3>
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
          <form class="new-added-form">
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>First Name *</label>
                <input type="text" placeholder class="form-control" v-model="teacher.firstName" />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Last Name *</label>
                <input type="text" placeholder class="form-control" v-model="teacher.lastName" />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Gender *</label>
                <select class="form-control" v-model="teacher.gender">
                  <option value>Please Select Gender *</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Date Of Birth *</label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  class="form-control air-datepicker"
                  v-model="teacher.dob"
                />

                <i class="far fa-calendar-alt"></i>
              </div>

              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Religion *</label>
                <select class="form-control" v-model="teacher.religion">
                  <option value>Please Select Religion *</option>
                  <option value="1">Islam</option>

                  <option value="3">Christian</option>

                  <option value="3">Others</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Address</label>
                <input placeholder class="form-control" v-model="teacher.address" />
              </div>

              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Staff ID</label>
                <input type="text" placeholder class="form-control" v-model="teacher.staffID" />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Phone</label>
                <input type="text" placeholder class="form-control" v-model="teacher.phone" />
              </div>
              <div class="col-lg-6 col-12 form-group">
                <label>Short BIO</label>
                <textarea
                  class="textarea form-control"
                  name="message"
                  id="form-message"
                  cols="10"
                  rows="9"
                  v-model="teacher.bio"
                ></textarea>
              </div>
              <div class="col-lg-6 col-12 form-group mg-t-30">
                <label class="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                <input type="file" class="form-control-file" />
              </div>
              <div class="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                  @click.prevent="addTeacher"
                >Save</button>
                <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- Admit Form Area End Here -->
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Add-Teacher",
 layout: "teacher",
  data() {
    return {
      teacher: {}
    };
  },
  methods: {
    async addTeacher() {
      await Axios.post(`${process.env.baseUrl}/api/teacher/new`, this.teacher)
        .then(data => {
          if (data.status == 200) {
            alert(`Added ${data.data.firstName} successfully`);
            this.teacher = {};
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>