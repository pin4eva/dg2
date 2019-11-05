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
          <li>Class Page</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <!-- Class Routine Area Start Here -->
      <div class="row" v-if="openEdit">
        <div class="col-md-12">
          <div class="card height-auto">
            <div class="card-body">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>Add New Session</h3>
                </div>
              </div>
              <form class="new-added-form">
                <div class="row">
                  <div class="col-xl-12 col-md-6 col-12 form-group">
                    <label>Session *</label>
                    <input
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="newSession.session"
                    />
                  </div>
                  <div class="col-xl-12 col-md-6 col-12 form-group">
                    <label>Year *</label>
                    <input type="text" placeholder class="form-control" v-model="newSession.year" />
                  </div>

                  <div class="col-12 form-group mg-t-8">
                    <button
                      @click.prevent="addSession"
                      type="submit"
                      class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    >Save</button>
                    <button
                      @click.prevent="openEdit=!openEdit"
                      type="reset"
                      class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                    >Close</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div uk-spinner="ratio: 3" v-if="loading"></div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-12">
          <div class="card height-auto">
            <div class="card-body">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>Add Class</h3>
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
                    <a class="dropdown-item" href="#" @click.prevent="openEdit=!openEdit">
                      <i class="fas fa-times text-orange-red"></i>Add new Session
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
                  <div class="col-xl-12 col-md-6 col-12 form-group">
                    <label>Session *</label>
                    <select class="form-control" v-model="newClass.session">
                      <option value>Please Select</option>
                      <option
                        v-for="session in sessions"
                        :key="session._id"
                        :value="session._id"
                      >{{session.session}}</option>
                    </select>
                  </div>
                  <div class="col-xl-12 col-md-6 col-12 form-group">
                    <label>Class name *</label>
                    <input type="text" placeholder class="form-control" v-model="newClass.name" />
                  </div>

                  <div class="col-xl-12 col-md-6 col-12 form-group">
                    <label>Section *</label>
                    <input type="text" placeholder class="form-control" v-model="newClass.section" />
                  </div>
                  <div class="col-xl-12 col-md-6 col-12 form-group">
                    <label>Select Head Teacher</label>
                    <select class="form-control" v-model="newClass.teacher">
                      <option>Please Select</option>
                      <option
                        v-for="teacher in teachers"
                        :key="teacher._id"
                        :value="teacher._id"
                      >{{teacher.firstName}} {{teacher.lastName}}</option>
                    </select>
                  </div>
                  <div class="col-12 form-group mg-t-8">
                    <button
                      @click.prevent="addClass"
                      type="submit"
                      class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    >Save</button>
                    <button
                      @click.prevent="newClass={}"
                      type="reset"
                      class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                    >Reset</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-xl-8 col-md-12">
          <div class="card height-auto">
            <div class="card-body">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>All classes</h3>
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
                      <td>
                        <nuxt-link :to="`/dashboard/admin/class/${c._id}`">{{c.name}}</nuxt-link>
                      </td>
                      <td>{{c.section}}</td>
                      <td>{{c.session.session}}</td>
                      <td v-if="c.teacher">
                        <nuxt-link
                          :to="'/dashboard/admin/teacher/'+c.teacher._id"
                        >{{c.teacher.firstName}} {{c.teacher.lastName}}</nuxt-link>
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
  layout: "admin",
  data() {
    return {
      newClass: {},
      newSession: {},
      openEdit: false
    };
  },
  computed: {
    ...mapGetters({
      classes: "class/classes",
      loading: "class/loading",
      sessions: "class/sessions",
      teachers: "teachers/teachers"
    })
  },
  methods: {
    async addClass() {
      await this.$store.dispatch("class/addClass", this.newClass);
      if (this.loading == false) {
        // alert("Success !");
        this.newClass = {};
      }
    },
    async addSession() {
      await this.$store.dispatch("class/addSession", this.newSession);
      if (this.loading == false) {
        // alert("Success !");
        this.newSession = {};
      }
    }
  }
};
</script>

<style>
</style>