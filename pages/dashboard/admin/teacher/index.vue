<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Teacher</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/admin">Home</nuxt-link>
          </li>
          <li>Teachers page</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <div class="row">
        <div class="col-xl-4 col-12">
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
                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <label>Title *</label>
                    <select class="form-control" v-model="teacher.title">
                      <option value>Please Select Gender *</option>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                      <option>Miss</option>
                    </select>
                  </div>
                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <label>First Name *</label>
                    <input type="text" placeholder class="form-control" v-model="teacher.firstName" />
                  </div>
                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <label>Last Name *</label>
                    <input type="text" placeholder class="form-control" v-model="teacher.lastName" />
                  </div>
                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <label>Gender *</label>
                    <select class="form-control" v-model="teacher.gender">
                      <option value>Please Select Gender *</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <label>Date Of Birth *</label>
                    <input
                      type="date"
                      placeholder="dd/mm/yyyy"
                      class="form-control air-datepicker"
                      v-model="teacher.dob"
                    />

                    <i class="far fa-calendar-alt"></i>
                  </div>

                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <label>Address</label>
                    <input placeholder class="form-control" v-model="teacher.address" />
                  </div>

                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <label>Staff ID</label>
                    <input type="text" placeholder class="form-control" v-model="teacher.staffID" />
                  </div>
                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <label>Phone</label>
                    <input type="text" placeholder class="form-control" v-model="teacher.phone" />
                  </div>
                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
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
                  <div class="col-xl-12 col-md-6 col-lg-3 form-group">
                    <img :src="imagePreview" alt="studentPic" v-if="imagePreview" />
                    <span class="d-block">Upload Student Photo (150px X 150px)</span>
                    <label
                      class="text-dark-medium py-3 btn btn-success form-control-file text-light"
                    >
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
        </div>
        <div class="col-xl-8 col-md-12">
          <div class="card-body">
            <div class="heading-layout1">
              <div class="item-title">
                <h3>All Teachers</h3>
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
                  <tr
                    v-for="teacher in teachers"
                    :key="teacher._id"
                    @dblclick="deleteTeacher(teacher)"
                  >
                    <td>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" />
                        <label class="form-check-label">#{{teacher.staffID}}</label>
                      </div>
                    </td>
                    <td class="text-center">
                      <img src="/dashboard/img/figure/student2.png" alt="student" />
                    </td>
                    <td>
                      <nuxt-link
                        :to="'/dashboard/admin/teacher/'+teacher._id"
                      >{{teacher.firstName}} {{teacher.lastName}}</nuxt-link>
                    </td>
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
      </div>

      <!-- Student Table Area End Here -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";

export default {
  name: "All-Teacher",
  layout: "admin",
  data() {
    return {
      teacher: {},
      image: "",
      imagePreview: ""
    };
  },
  computed: {
    ...mapGetters({
      teachers: "teachers/teachers"
    })
  },
  methods: {
    deleteTeacher(teacher) {
      async function remove() {
        await Axios.delete(
          `${process.env.baseUrl}/api/teacher/delete/${teacher._id}`
        )
          .then(data => {})
          .catch(err => {
            if (err) {
              // alert("NOT SUCCESSFUL");
              console.log(err);
            }
          });
      }
    },
    async addTeacher() {
      const result = this.$store.dispatch("teachers/addTeacher", this.teacher);
      console.log("Result:", result);
      this.$swal("Added");
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