<template>
  <div>
    <div class="dashboard-content-one" v-if="single">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>{{single.name}}</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/teacher/class">All Class</nuxt-link>
          </li>
          <li>{{single.name}}</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Student Table Area Start Here -->
      <div class="card height-auto">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>Students in {{single.name}}</h3>
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
          <div class="row gutters-20 my-3">
            <div class="col-lg-4 col-md-12">
              <button class="btn btn-success w-100">Mark Students as Present</button>
            </div>
            <div class="col-lg-4 col-md-12">
              <div>
                <button
                  type="button"
                  class="btn btn-primary w-100"
                  v-b-modal.assignTeacher
                >Assign a Teacher</button>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <button class="btn btn-danger w-100">Remove Students</button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table display text-nowrap">
              <thead>
                <tr>
                  <th>
                    <div>
                      <input type="checkbox" class="form-check-input checkAll" />
                      <label class="form-check-label">ReqNO</label>
                    </div>
                  </th>
                  <th>Photo</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Date Of Birth</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="single">
                <tr v-for="student in single.students" :key="student._id">
                  <td>
                    <div class>
                      <input type="checkbox" class="form-check-input" v-model="ids" />
                      <label class="form-check-label pl-3">{{student.reqNO}}</label>
                    </div>
                  </td>
                  <td class="text-center">
                    <img :src="student.image" alt="student" width="30" height="30" />
                  </td>
                  <td>
                    <nuxt-link
                      :to="`/dashboard/teacher/student/${student._id}`"
                    >{{student.firstName}}</nuxt-link>
                  </td>
                  <td>{{student.middleName}}</td>
                  <td>{{student.lastName}}</td>

                  <td>{{moment(student.dob).format("DD-MM-YYYY")}}</td>
                  <td>{{student.phone}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Student Table Area End Here -->
    </div>
    <div>
      <!-- Using modifiers -->

      <!-- The modal -->
      <b-modal id="assignTeacher" ref="modal" title="Select a teacher" @ok="handleOk">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-select v-model="teacher">
            <option :value="null" disabled>Select a Teacher</option>
            <option
              v-for="teacher in teachers"
              :key="teacher._id"
              :value="teacher._id"
            >{{teacher.profile.firstName}} {{teacher.profile.lastName}}</option>
          </b-form-select>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  layout: "teacher",
  name: "Single-Class",
  data() {
    return {
      ids: [],
      teacher: "",
      className: this.$route.params.id
    };
  },
  computed: {
    ...mapGetters({
      single: "class/singleClass",
      classes: "class/classes",
      students: "students/students",
      teachers: "teachers/teachers"
    })
  },
  methods: {
    handleOk() {
      Axios.post(`${process.env.baseUrl}/api/class/assignTeacher`, {
        className: this.className,
        teacher: this.teacher
      })
        .then(({ data }) => {
          if (data.classStatus) {
            alert("Assigned successfully");
          }
        })
        .catch(err => alert(err.message));
    },
    resetModal() {
      console.log("Reset");
    },
    async activateModal(id) {
      const el = await document.querySelector(`${id}`);
      el.classList.toggle("modal", "fade");
      console.log(el);
    },
    selected(id) {
      let ids = this.ids;
      if (!ids.includes(id)) {
        ids.push(id);
        console.log(ids);
      }
    },
    async promoteStudents() {
      let students = this.ids;
      students.map(student => {
        return Axios.put(`${process.env.baseUrl}/api/student/promote`, {
          student: student,
          className: this.className
        }).then(data => {
          console.log(data);
        });
      });
    }
  },
  async fetch({ params, store }) {
    return await Axios.get(
      `${process.env.baseUrl}/api/class/single/${params.id}`
    )
      .then(({ data }) => {
        store.commit("class/setClass", data);
      })
      .catch(err => new Error(err));
  }
};
</script>

<style>
</style>