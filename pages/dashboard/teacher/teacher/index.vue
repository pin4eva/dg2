<template>
  <div>
    <div class="dashboard-content-one">
      <b-alert show dismissible fade>Dismissible Alert!</b-alert>
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Teacher</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/teacher">Home</nuxt-link>
          </li>
          <li>Teachers page</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->

      <div class="row">
        <div class="col-xl-12 col-md-12">
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
              <table class="table display data-table text-nowrap">
                <thead>
                  <tr>
                    <th>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input checkAll" />
                        <label class="form-check-label">ID</label>
                      </div>
                    </th>

                    <th>Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="teacher in teachers" :key="teacher._id">
                    <td>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" />
                        <label class="form-check-label">{{teacher.staffID}}</label>
                      </div>
                    </td>

                    <td>
                      <nuxt-link
                        :to="'/dashboard/teacher/teacher/'+teacher._id"
                      >{{teacher.profile.firstName}} {{teacher.profile.lastName}}</nuxt-link>
                    </td>
                    <td>{{teacher.profile.gender}}</td>

                    <td>{{teacher.profile.phone}}</td>
                    <td>{{teacher.profile.email}}</td>
                    <td>
                      <div class="dropdown">
                        <a
                          href="#"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span class="flaticon-more-button-of-three-dots"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#" @click.prevent="deleteTeacher(teacher)">
                            <i class="fas fa-times text-orange-red pr-3"></i> Delete Teacher
                          </a>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="approveTeacher(teacher)"
                          >
                            <i class="fas fa-check text-dark-pastel-green pr-3"></i> Approve Application
                          </a>
                          <a
                            class="dropdown-item"
                            v-b-modal.my-modal
                            href="#"
                            @click.prevent="assignClass(teacher)"
                          >
                            <i class="fas fa-redo-alt text-orange-peel pr-3"></i> Assign Class
                          </a>
                          <a class="dropdown-item" href="#" @click.prevent="assignSubject(teacher)">
                            <i class="fas fa-cog text-orange-peel pr-3"></i> Assign Subject
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div>
        <b-modal id="my-modal">
          <p>Assign Class to</p>
          <template v-slot:modal-footer>
            <b-button variant="success" @click="assignClass">Good</b-button>
            <b-button variant="danger">Cancel</b-button>
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";

export default {
  name: "All-Teacher",
  layout: "teacher",
  data() {
    return {
      teacher: {},
      image: "",
      imagePreview: "",
      assignToClass: {}
    };
  },
  computed: {
    ...mapGetters({
      teachers: "teachers/teachers",
      classes: "class/classes"
    })
  },
  methods: {
    deleteTeacher(teacher) {
      this.$swal({
        title: `Are you sure ?`,
        text: `Do you really want to parmently delete ${teacher.firstName} ?`,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#E62C2F",
        cancelButtonColor: "#025939",
        confirmButtonText: "Yes, delete it"
      })
        .then(result => {
          if (result.value) {
            removeTeacher();
            this.$store.commit("teachers/deleteTeacher", teacher._id);
          } else {
            console.log("closed");
          }
        })
        .catch(() => {});
      async function removeTeacher() {
        await Axios.delete(
          `${process.env.baseUrl}/api/teacher/delete/${teacher._id}`
        )
          .then(({ data }) => {
            if (data.success) {
              alert("SUCCESS");
            } else {
              this.$swal({
                type: "error",
                title: "unable to delete teacher"
              });
            }
          })
          .catch(err => {
            if (err) {
              alert(err.message);
            }
          });
      }
    },
    approveTeacher(teacher) {
      this.$swal({
        type: "warning",
        text: `Do you want to approve ${teacher.firstName} as a Teacher ?`,
        showCancelButton: true,
        confirmButtonColor: "#E62C2F",
        cancelButtonColor: "#025939",
        confirmButtonText: "Yes"
      }).then(() => {
        approve();
      });
      async function approve() {
        await Axios.post(`${process.env.baseUrl}/api/teacher/accept`, {
          applicationNO: teacher.applicationNO
        }).then(({ data }) => {
          if (data.success) {
            this.$swal({
              type: "success",
              title: "APPROVED"
            });
          } else {
            this.$swal({
              type: "error",
              title: "Try again"
            });
          }
        });
      }
    },

    async assignClass(teacher) {
      console.log(teacher);
    },
    async assignSubject(teacher) {
      // console.log(teacher._id);
      let code = prompt("Teacher");
      if (!code) return;
      let sub = await Axios.post(
        `${process.env.baseUrl}/api/subject/assignteacher`,
        {
          code: code,
          teacher: teacher._id
        }
      )
        .then(({ data }) => data)
        .catch(err => err);
      // .then(({ data }) => data);
      alert(sub.msg);
      console.log(sub.msg);
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