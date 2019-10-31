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
          <li>New Teacher form</li>
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
                <label>Title *</label>
                <select class="form-control" v-model="teacher.title">
                  <option value>Please Select Gender *</option>
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Ms</option>
                  <option>Miss</option>
                </select>
              </div>
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
                <img :src="imagePreview" alt="studentPic" v-if="imagePreview" />
                <span class="d-block">Upload Student Photo (150px X 150px)</span>
                <label class="text-dark-medium py-3 btn btn-success form-control-file text-light">
                  <input type="file" @change="imageProcess" hidden />
                  Upload Image
                </label>
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
  layout: "admin",
  data() {
    return {
      teacher: {},
      image: "",
      imagePreview: ""
    };
  },
  methods: {
    async addTeacher() {
      await this.$store
        .dispatch("teacher/addTeacher", this.teacher)
        .then(() => {
          this.$swal("Added");
        });
      // const formData = new FormData();
      // const image = this.image;
      // formData.append("image", image);
      // await Axios.post(`${process.env.baseUrl}/api/teacher/new`, this.teacher)
      //   .then(data => {
      //     if (data.status == 200) {
      //       alert(`Added ${data.data.firstName} successfully`);
      //       this.teacher = {};

      //       if (data.data._id) {
      //         Axios.put(
      //           `${process.env.baseUrl}/api/teacher/upload/${data.data._id}`,
      //           formData,
      //           {
      //             headers: {
      //               "Content-Type": "multipart/form-data"
      //             }
      //           }
      //         )

      //           .catch(err => console.log(err));
      //       }
      //     }
      //   })
      //   .catch(err => console.log(err));
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
  }
};
</script>

<style>
</style>