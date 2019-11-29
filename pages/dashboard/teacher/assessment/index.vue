<template>
  <div>
    <div>
      <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
          <h3>View Assessment</h3>
          <ul>
            <li>
              <nuxt-link :to="{name:'dashboard-teacher'}">Home</nuxt-link>
            </li>
            <li>Assessment</li>
          </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        <!-- Exam Schedule Area Start Here -->
        <div class="row" v-if="nextRow">
          <div class="col-12 col-xl-12">
            <div class="card height-auto">
              <div class="card-body">
                <h3>Create record for</h3>
                <div class="row">
                  <div class="col-xl-4 col-12 form-group">
                    <select class="form-control" v-model="student.info">
                      <option value="null">Select Student</option>
                      <option
                        v-for="student in myClass.students"
                        :key="student._id"
                        :value="{name:`${student.firstName} ${student.lastName}`,_id:student._id}"
                      >{{student.firstName}} {{student.lastName}}</option>
                    </select>
                  </div>
                  <div class="col-xl-4 col-12 form-group">
                    <select class="form-control" v-model="term">
                      <option value="null">Select term</option>
                      <option>First term</option>
                      <option>Second term</option>
                      <option>Third term</option>
                    </select>
                  </div>
                  <div class="col-xl-4 col-12 form-group">
                    <select class="form-control" v-model="type">
                      <option value="null">Select type of assessment</option>
                      <option>First test</option>
                      <option>Second test</option>
                      <option>Exam</option>
                    </select>
                  </div>
                </div>
                <div class="text-right">
                  <a href="#" @click.prevent="next">
                    <i class="fas fa-arrow-right fa-2x text-warning"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-12-xxxl col-12">
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>
                      Creating new record for
                      <!-- <span class="font-bold">{{student.info.name}}</span> -->
                    </h3>
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

                <div class="table-responsive">
                  <b-table-simple responsive>
                    <b-thead>
                      <b-tr>
                        <b-th scope="col">Subjects</b-th>
                        <b-th scope="col">Score</b-th>
                        <b-th scope="col">Total Score</b-th>
                        <b-th scope="col">Grade</b-th>
                        <b-th scope="col">Remark</b-th>
                        <b-th></b-th>
                      </b-tr>
                    </b-thead>
                    <b-tbody></b-tbody>
                  </b-table-simple>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Exam Schedule Area End Here -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Subject from "@/components/dashboard/Result/subject";
import Axios from "axios";
export default {
  name: "Assessment-Index",
  layout: "teacher",
  components: { Subject },
  data() {
    return {
      nextRow: false,
      term: null,
      type: null,
      student: {
        info: null
      }
    };
  },
  computed: {
    ...mapGetters({
      myClass: "teachers/myClass",
      assessments: "assessments/assessments",
      subjects: "subjects/subjects"
    })
  },
  methods: {
    next() {
      if (!this.student.info || !this.term || !this.type) {
        return alert("Please fill all input");
      }
      this.nextRow = !this.nextRow;
    }
  },
  created() {
    // this.$store.dispatch("assessments/classAssessment", this.myClass._id);
    // console.log(this.myClass._id);
  }
};
</script>

<style>
</style>