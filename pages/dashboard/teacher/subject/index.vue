<template>
  <div>
    <div class="dashboard-page-one">
      <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
          <h3>All Subjects</h3>
          <ul>
            <li>
              <nuxt-link to="/dashboard/teacher">Home</nuxt-link>
            </li>
            <li>Subjects</li>
          </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        <!-- All Subjects Area Start Here -->
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Add New Subject</h3>
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
                    <div class="col-md-12 col-lg-6 form-group">
                      <label>Subject Name *</label>
                      <input
                        type="text"
                        placeholder
                        class="form-control"
                        v-model.trim="newSubject.name"
                      />
                    </div>
                    <div class="col-md-12 col-lg-6 form-group">
                      <label>Subject Type *</label>
                      <select class="form-control" v-model="newSubject.type">
                        <option value="null" disabled>Please Select</option>

                        <option>Academic</option>
                        <option>Practical</option>
                        <option>Theory</option>
                        <option>Club</option>
                      </select>
                    </div>
                    <div class="col-md-12 col-lg-6 form-group">
                      <label>Subject code *</label>
                      <b-form-input
                        placeholder="Create a code eg English_101"
                        v-model="newSubject.code"
                      ></b-form-input>
                    </div>
                    <div class="col-md-12 col-lg-6 form-group">
                      <label>Assign Teacher</label>
                      <select class="form-control" v-model="newSubject.teacher">
                        <option value="null">Please Select</option>
                        <option
                          v-for="teacher in teachers"
                          :key="teacher._id"
                          :value="teacher._id"
                        >{{teacher.firstName}} {{teacher.lastName}}</option>
                      </select>
                    </div>
                    <div class="col-12 form-group mg-t-8">
                      <button
                        @click.prevent="addSubject"
                        type="submit"
                        class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      >Save</button>
                      <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-12">
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>All Subjects</h3>
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
                      <input type="text" placeholder="Search by Exam ..." class="form-control" />
                    </div>
                    <div class="col-lg-3 col-12 form-group">
                      <input type="text" placeholder="Search by Subject ..." class="form-control" />
                    </div>
                    <div class="col-lg-3 col-12 form-group">
                      <input type="text" placeholder="dd/mm/yyyy" class="form-control" />
                    </div>
                    <div class="col-lg-2 col-12 form-group">
                      <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                    </div>
                  </div>
                </form>
                <div v-if="subjects">
                  <!-- <b-table responsive :fields="records.fields" :items="records.items">
                   
                    <template v-slot:cell(teacher)="data">
                      <nuxt-link
                        :to="`/dashboard/teacher/teacher/${data.item._id}`"
                      >{{data.item.teacher}}</nuxt-link>
                    </template>
                  </b-table>-->
                  <b-table-simple responsive>
                    <b-thead>
                      <b-tr>
                        <b-th>Name</b-th>
                        <b-th>Code</b-th>
                        <b-th>Type</b-th>
                        <b-th>Teacher</b-th>
                        <b-th></b-th>
                      </b-tr>
                    </b-thead>
                    <b-tbody>
                      <b-tr v-for="item in records.items" :key="item._id">
                        <td>{{item.name}}</td>
                        <td>{{item.code}}</td>
                        <td>{{item.type}}</td>
                        <td v-if="item.teacher">
                          <nuxt-link
                            :to="'/dashboard/teacher/teacher/'+item.teachers_id"
                          >{{item.teacher}}</nuxt-link>
                        </td>
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
                              <a
                                class="dropdown-item"
                                href="#"
                                v-b-modal.assignTeacher
                                @click.prevent="toggleModal(item.code)"
                              >
                                <i class="fas fa-redo-alt text-orange-peel pr-3"></i> Assign Teacher
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                @click.prevent="deleteSubject(item._id)"
                              >
                                <i class="fas fa-times text-orange-red pr-3"></i> Delete Subject
                              </a>
                              <a class="dropdown-item" href="#">
                                <i class="fas fa-check text-dark-pastel-green pr-3"></i> Approve Application
                              </a>

                              <a class="dropdown-item" href="#">
                                <i class="fas fa-cog text-orange-peel pr-3"></i> Assign Subject
                              </a>
                            </div>
                          </div>
                        </td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modals -->
        <div>
          <b-modal v-model="showModal" id="assignTeacher">
            <b-form>
              <b-form-group>
                <label>Subject</label>
                <b-form-input v-model="subject"></b-form-input>
              </b-form-group>
              <b-form-group>
                <label>Select Teacher</label>
                <b-select v-model="teacher">
                  <option value="null">Select a Teacher</option>
                  <option
                    v-for="teacher in teachers"
                    :key="teacher._id"
                    :value="teacher._id"
                  >{{teacher.firstName}} {{teacher.lastName}}</option>
                </b-select>
              </b-form-group>
            </b-form>
            <template v-slot:modal-footer>
              <b-button variant="success" @click="assignTeacher">Good</b-button>
              <b-button variant="danger" @click="showModal=!showModal">Cancel</b-button>
            </template>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";
export default {
  name: "Subject",
  layout: "teacher",
  data() {
    return {
      newSubject: {
        name: null,
        type: null,
        teacher: null,
        code: null
      },
      teacher: null,
      subject: null,
      showModal: false
    };
  },
  computed: {
    ...mapGetters({
      subjects: "subjects/subjects",
      teachers: "teachers/teachers",
      classes: "class/classes"
    }),
    records() {
      let subjects = this.subjects;
      let fields = ["name", "code", "type", "teacher"];
      let items = subjects.map(s => {
        return {
          _id: s._id,
          name: s.name,
          teacher: s.teacher
            ? `${s.teacher.firstName} ${s.teacher.lastName}`
            : "",
          code: s.code,
          type: s.type,
          teachers_id: s.teacher ? s.teacher._id : ""
        };
      });
      return { fields, items };
    }
  },
  methods: {
    async addSubject() {
      await this.$store.dispatch("subjects/addSubject", this.newSubject);
    },
    toggleModal(code) {
      (this.subject = code), (this.showModal = !this.showModal);
    },
    async deleteSubject(id) {
      let sub = await Axios.delete(
        `${process.env.baseUrl}/api/subject/delete/${id}`
      )
        .then(data => data)
        .catch(err => err);
      console.log(sub);
    },
    async assignTeacher() {
      // this.$bvModal.show("assignTeacher");
      this.showModal = false;
      let teacher = this.teacher;
      let code = this.subject;
      if (teacher && code) {
        let result = await Axios.post(
          `${process.env.baseUrl}/api/subject/assignteacher`,
          {
            code,
            teacher
          }
        )
          .then(({ data }) => data)
          .catch(err => err);
        alert(result.msg);
        console.log(result);
        this.$router.go();
      } else {
        alert("Please select a teacher");
      }
    }
  }
};
</script>

<style>
</style>