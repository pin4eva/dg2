<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>All Class</h3>
        <ul>
          <li>
            <nuxt-link to="/dashboard/teacher">Home</nuxt-link>
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
      <div class="d-flex justify-content-center" v-if="loading">
        <b-spinner style="width: 3rem; height: 3rem;" label="Loading" variant="success"></b-spinner>
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
                <b-table-simple hover>
                  <b-thead>
                    <b-tr>
                      <b-th>Class</b-th>
                      <b-th>Section</b-th>
                      <b-th>Session</b-th>
                      <b-th>Teacher</b-th>
                      <b-th></b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr v-for="(c,i) in classes" :key="c._id">
                      <b-td>
                        <b-form-input
                          :placeholder="c.name"
                          style="border:none"
                          v-model="newClass.name"
                          v-if="edit==i"
                        ></b-form-input>
                        <span @dblclick="edit=i" v-else>
                          <nuxt-link :to="`/dashboard/teacher/class/${c._id}`">{{c.name}}</nuxt-link>
                        </span>
                      </b-td>
                      <b-td>
                        <b-form-input
                          v-model="newClass.section"
                          :placeholder="c.section"
                          style="border:none"
                          v-if="edit==i"
                        ></b-form-input>
                        <span v-else @dblclick="edit=i">{{c.section}}</span>
                      </b-td>
                      <b-td>{{c.session.session}}</b-td>
                      <b-td v-if="c.teacher">
                        <nuxt-link
                          :to="'/dashboard/teacher/teacher/'+c.teacher._id"
                        >{{c.teacher.firstName}} {{c.teacher.lastName}}</nuxt-link>
                      </b-td>
                      <b-td>
                        <div class="d-flex justify-content-between" v-if="edit==i">
                          <a href="#" @click.prevent="updateClass(c._id)">
                            <i class="fas fa-check text-success"></i>
                          </a>
                          <a href="#" @click="edit=null">
                            <i class="fas fa-times text-danger"></i>
                          </a>
                        </div>
                        <div v-else class="dropdown">
                          <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span class="flaticon-more-button-of-three-dots"></span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" @click.prevent="deleteClass(c)">
                              <i class="fas fa-times text-orange-red pr-3"></i> Delete Class
                            </a>

                            <a
                              class="dropdown-item"
                              href="#"
                              v-b-modal.assignTeacher1
                              @click.prevent="class_id=c._id; showModal=!showModal"
                            >
                              <i class="fas fa-redo-alt text-orange-peel pr-3"></i> Assign Teacher
                            </a>
                            <a class="dropdown-item" href="#" @click.prevent="editClass(c._id)">
                              <i class="fas fa-cog text-primary pr-3"></i> Edit Class
                            </a>
                          </div>
                        </div>
                      </b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div>
        <b-modal v-model="showModal" id="assignTeacher1">
          <b-form>
            <b-form-group>
              <label>Select Teacher</label>
              <b-select v-model="teacher">
                <option value="null">Select a Teacher</option>
                <option
                  v-for="teacher in teachers"
                  :key="teacher._id"
                  :value="teacher.staffID"
                >{{teacher.firstName}} {{teacher.lastName}}</option>
              </b-select>
            </b-form-group>
          </b-form>
          <template v-slot:modal-footer>
            <b-button variant="success" @click="assignTeacher">Assign</b-button>
            <b-button variant="danger" @click="showModal=!showModal">Cancel</b-button>
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
  name: "Class-Index",
  layout: "teacher",
  data() {
    return {
      newClass: {},
      newSession: {},
      openEdit: false,
      teacher: null,
      showModal: false,
      class_id: null,
      edit: null
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
    // toggleModal(code) {
    //   (this.subject = code), (this.showModal = !this.showModal);
    // },
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
    async assignTeacher() {
      let class_id = this.class_id,
        teacher = this.teacher;
      let result = await Axios.post(
        `${process.env.baseUrl}/api/teacher/assignclass`,
        {
          staffID: teacher,
          className: class_id
        }
      )
        .then(data => data)
        .catch(err => err);
      this.showModal = !this.showModal;
      console.log(result);
    },
    async updateClass(id) {
      let result = await Axios.put(
        `${process.env.baseUrl}/api/class/update/${id}`,
        this.newClass
      )
        .then(({ data }) => data)
        .catch(err => err);
      this.edit = null;
      this.$router.go();
      console.log(result);
    }
  }
};
</script>

<style>
</style>