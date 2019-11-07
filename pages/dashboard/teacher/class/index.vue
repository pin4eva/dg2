<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>My Class</h3>
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
        <div class="col-xl-12 col-md-12">
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
              <div>
                <b-table-simple striped hover>
                  <b-thead>
                    <b-tr>
                      <b-th>
                        <b-form-checkbox></b-form-checkbox>
                      </b-th>
                      <b-th>Name</b-th>
                      <b-th>Teacher</b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr v-for="c in classes" :key="c._id">
                      <b-td>
                        <b-form-checkbox></b-form-checkbox>
                      </b-td>
                      <b-td>{{c.name}}</b-td>
                      <b-td>{{c.teacher.profile.firstName}}</b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
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
  name: "MyClass",
  layout: "teacher",
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
    }),
    classTable() {
      let classes = this.classes;
      const fields = [
        {
          key: "name",
          sortable: true
        },
        {
          key: "teacher",
          sortable: false
        },
        {
          key: "session",
          sortable: false
        }
      ];
      const data = classes.map(c => {
        return {
          name: c.name,
          teacher: c.teacher.profile.firstName,
          session: c.session.session,
          _id: c._id
        };
      });
      return {
        data,
        fields
      };
    }
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
    },
    clicked(d) {
      console.log(d);
    }
  }
};
</script>

<style>
</style>