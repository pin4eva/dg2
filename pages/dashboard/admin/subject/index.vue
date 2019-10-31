<template>
  <div>
    <div class="dashboard-page-one">
      <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
          <h3>All Subjects</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Subjects</li>
          </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        <!-- All Subjects Area Start Here -->
        <div class="row">
          <div class="col-md-12 col-lg-4">
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
                    <div class="col-md-6 col-lg-12 col-12 form-group">
                      <label>Subject Name *</label>
                      <input
                        type="text"
                        placeholder
                        class="form-control"
                        v-model="newSubject.subject"
                      />
                    </div>
                    <div class="col-md-6 col-lg-12 col-12 form-group">
                      <label>Subject Type *</label>
                      <select class="form-control" v-model="newSubject.type">
                        <option value>Please Select</option>
                        <option>Club</option>
                        <option>Academic</option>
                        <option>Practical</option>
                        <option>Theory</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-lg-12 col-12 form-group">
                      <label>Select Class *</label>
                      <select class="form-control" v-model="newSubject.className">
                        <option>Please Select</option>
                        <!-- <option v-for="c in classes" :key="c._id" :value="c._id">{{c.name}}</option> -->
                      </select>
                    </div>
                    <div class="col-md-6 col-lg-12 col-12 form-group">
                      <label>Select Teacher</label>
                      <select class="form-control" v-model="newSubject.teacher">
                        <option>Please Select</option>
                        <!-- <option
                          v-for="teacher in teachers"
                          :key="teacher._id"
                          :value="teacher._id"
                        >{{teacher.firstName}} {{teacher.lastName}}</option>-->
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
          <div class="col-md-12 col-lg-8">
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
                        <th>Subject Name</th>
                        <th>Subject Type</th>
                        <th>Class</th>

                        <th>Teacher</th>
                      </tr>
                    </thead>
                    <tbody v-if="subjects">
                      <tr v-for="subject in subjects" :key="subject._id">
                        <td>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">{{subject.serialNO}}</label>
                          </div>
                        </td>
                        <td>{{subject.subject}}</td>
                        <td>{{subject.type}}</td>
                        <td v-if="subject.className">{{subject.className.name}}</td>

                        <td v-if="subject.teacher">
                          <nuxt-link
                            :to="`/dashboard/admin/teacher/${subject.teacher._id}`"
                          >{{subject.teacher.firstName}} {{subject.teacher.lastName}}</nuxt-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- All Subjects Area End Here -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Subject",
  layout: "admin",
  data() {
    return {
      newSubject: {}
    };
  },
  computed: {
    ...mapGetters({
      subjects: "subjects/subjects",
      teachers: "teachers/teachers",
      classes: "class/classes"
    })
  },
  methods: {
    async addSubject() {
      await this.$store.dispatch("subjects/addSubject", this.newSubject);
    }
  }
};
</script>

<style>
</style>