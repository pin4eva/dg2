<template>
  <div>
    <div class="dashboard-content-one" v-if="single">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>{{single.name}}</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/admin/class">All Class</nuxt-link>
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
          <div class="row gutters-20 my-3">
            <div class="col-lg-4 col-md-12">
              <button class="btn btn-success w-100">Mark Students as Present</button>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="modal-box">
                <button
                  type="button"
                  class="btn btn-warning w-100 modal-trigger"
                  uk-toggle="target:#promoteModal"
                >Promote Students</button>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <button class="btn btn-danger w-100">Remove Students from class</button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table display text-nowrap">
              <thead>
                <tr>
                  <th>
                    <div>
                      <input type="radio" class="form-check-input checkAll" />
                      <label class="form-check-label pl-3">ReqNO</label>
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
                      <input type="radio" class="form-check-input" @input="selected(student._id)" />
                      <label class="form-check-label pl-3">{{student.reqNO}}</label>
                    </div>
                  </td>
                  <td class="text-center">
                    <img :src="student.image" alt="student" width="30" height="30" />
                  </td>
                  <td>
                    <nuxt-link :to="`/dashboard/admin/student/${student._id}`">{{student.firstName}}</nuxt-link>
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
      <!-- Modal Start here -->
      <div>
        <div id="promoteModal" uk-modal>
          <div class="uk-modal-dialog uk-modal-body">
            <div class="mb-4">
              <h3 class="uk-modal-title">Choose Class</h3>
              <select class="form-control col-md-6 d-block" v-model="className">
                <option v-for="c in classes" :key="c._id" :value="c._id">{{c.name}}</option>
              </select>
            </div>
            <div class="text-right">
              <button type="button" @click="promoteStudents" class="uk-button-primary">Promote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  layout: "admin",
  name: "Single-Class",
  data() {
    return {
      ids: [],
      className: ""
    };
  },
  computed: {
    ...mapGetters({
      single: "class/singleClass",
      classes: "class/classes",
      students: "students/students"
    })
  },
  methods: {
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