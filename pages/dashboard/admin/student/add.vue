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
          <li>Student Admission Form</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Admit Form Area Start Here -->
      <div class="card height-auto">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>Add New Students</h3>
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
                <input type="text" placeholder class="form-control" v-model="newStudent.firstName" />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Middle Name *</label>
                <input type="text" placeholder class="form-control" v-model="newStudent.middleName" />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Last Name</label>
                <input type="text" placeholder class="form-control" v-model="newStudent.lastName" />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Gender *</label>
                <select class="form-control" v-model="newStudent.gender">
                  <option value>Please Select Gender *</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Date Of Birth *</label>
                <input type="date" v-model="newStudent.dob" class="form-control" />
                <!-- <i class="far fa-calendar-alt"></i> -->
              </div>

              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Blood Group *</label>
                <select class="form-control" v-model="newStudent.bloodGroup">
                  <option value>Please Select Group *</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Religion *</label>
                <select class="form-control" v-model="newStudent.religion">
                  <option value>Please Select Religion *</option>
                  <option>Islam</option>

                  <option>Christian</option>

                  <option>Others</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Address</label>
                <input placeholder class="form-control" v-model="newStudent.address" />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Class *</label>
                <select class="form-control" v-model="newStudent.currentClass">
                  <option value>Please Select Class *</option>
                  <option v-for="c in classes" :key="c._id" :value="c._id">{{c.name}}</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Admission Year</label>
                <input placeholder="2018" v-model="newStudent.admittedON" class="form-control" />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Registration NO</label>
                <input type="text" placeholder="SAA/2018/002" class="form-control" disabled />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Phone</label>
                <input type="text" placeholder class="form-control" v-model="newStudent.phone" />
              </div>
              <div class="col-lg-6 col-12 form-group">
                <label>Short BIO</label>
                <textarea
                  v-model="newStudent.bio"
                  class="textarea form-control"
                  name="message"
                  id="form-message"
                  cols="10"
                  rows="9"
                ></textarea>
              </div>
              <div class="col-lg-6 col-12 form-group mg-t-30">
                <!-- <label class="text-dark-medium">Upload Student Photo (150px X 150px)</label> -->
                <img :src="imagePreview" alt="studentPic" v-if="imagePreview" />
                <label class="btn btn-primary py-3 custom-file-control d-inline">
                  Upload Image
                  <input
                    type="file"
                    class="custom-file-input d-none"
                    @change="imageProcess"
                  />
                </label>
              </div>
              <div class="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                  @click.prevent.once="addStudent"
                >Save</button>
                <button
                  @click.prevent="newStudent=''"
                  type="reset"
                  class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                >Reset</button>
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
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Add-Student",
  layout: "admin",
  data() {
    return {
      newStudent: {},
      image: "",
      imagePreview: ""
    };
  },
  computed: {
    ...mapGetters({
      classes: "class/classes"
    })
  },
  methods: {
    async addStudent() {
      let newStudent = this.newStudent;
      let image = this.image;
      let formData = new FormData();
      formData.append("image", image);
      if (image) {
        let student = await axios
          .post(`${process.env.baseUrl}/api/student/new`, {
            ...newStudent
          })
          .then(({ data }) => {
            return data;
          })
          .catch(err => new Error(err));

        if (student) {
          console.log(student);
          let result = await axios
            .put(
              `${process.env.baseUrl}/api/student/upload/${student.student.profile}`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              }
            )
            .then(({ data }) => {
              return data;
            });
          alert("SUCCESS");
          // this.$store.commit("students/addStudent", student);
          this.newStudent = {};
        } else {
          alert(student.err);
        }
      } else {
        alert("Please add image");
      }
    },
    imageProcess({ target: { files = [] } }) {
      this.image = files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );
      if (this.image) {
        if (/\.(jpe?g|png|)$/i.test(this.image.name)) {
          reader.readAsDataURL(this.image);
        }
      }
    }
  },
  mounted() {}
};
</script>

<style>
</style>