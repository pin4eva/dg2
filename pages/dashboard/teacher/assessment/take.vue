<template>
  <div>
    <div>
      <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
          <h3>Record grade</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Record grades</li>
          </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        <!-- Exam Schedule Area Start Here -->
        <div class="row">
          <div class="col-4-xxxl col-12" v-if="addRecord">
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Add New Record</h3>
                  </div>
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      >...</a
                    >

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
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Record Name</label>
                      <input
                        type="text"
                        v-model="assessment.type"
                        class="form-control"
                      />
                    </div>
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Select Subject *</label>
                      <select class="form-control" v-model="selectedSubject">
                        <option value="null">Please Select</option>
                        <option
                          v-for="subject in subjects"
                          :key="subject._id"
                          :value="{ _id: subject._id, name: subject.name }"
                          >{{ subject.name }}</option
                        >
                      </select>
                    </div>

                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Total Score</label>
                      <input
                        type="number"
                        v-model.number="assessment.totalScore"
                        class="form-control"
                      />
                      <!-- <i class="far fa-clock"></i> -->
                    </div>
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Select Date</label>
                      <input
                        v-model="assessment.date"
                        type="date"
                        class="form-control"
                      />
                      <!-- <Datepicker /> -->
                      <!-- <i class="far fa-calendar-alt"></i> -->
                    </div>
                    <div class="col-12 form-group mg-t-8">
                      <button
                        type="submit"
                        @click.prevent="addRecord = false"
                        class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      >
                        Save
                      </button>
                      <button
                        type="reset"
                        class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-8-xxxl col-12" v-if="!addRecord">
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Set Record for {{ selectedSubject.name }}</h3>
                  </div>
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      >...</a
                    >

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
                      <input
                        type="text"
                        placeholder="Search by Exam ..."
                        class="form-control"
                      />
                    </div>
                    <div class="col-lg-3 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Search by Subject ..."
                        class="form-control"
                      />
                    </div>
                    <div class="col-lg-3 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Search by Date ..."
                        class="form-control"
                      />
                    </div>
                    <div class="col-lg-2 col-12 form-group">
                      <button
                        type="submit"
                        class="fw-btn-fill btn-gradient-yellow"
                      >
                        SEARCH
                      </button>
                    </div>
                  </div>
                </form>
                <div class="table-responsive">
                  <form>
                    <b-table-simple>
                      <b-thead>
                        <b-tr>
                          <b-th>Students</b-th>

                          <b-th>Score</b-th>
                          <b-th>Grade</b-th>
                          <b-th>Remark</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr v-for="student in data" :key="student._id">
                          <b-td>
                            {{ student.name }}
                          </b-td>
                          <b-td>
                            <b-form-input
                              type="number"
                              v-model="student.score"
                            ></b-form-input>
                          </b-td>
                          <b-td>
                            <b-form-input
                              v-model="student.grade"
                            ></b-form-input>
                          </b-td>
                          <b-td>
                            <b-form-input
                              v-model="student.remark"
                            ></b-form-input>
                          </b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                    <b-button variant="success" @click="recordData"
                      >Record</b-button
                    >
                  </form>
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
// import Datepicker from "vue-datepicker";
import { mapGetters } from "vuex";
import Axios from "axios";
export default {
  name: "TakeAssessment",
  layout: "teacher",
  //   components: { Datepicker },
  data() {
    return {
      selectedSubject: {},
      assessment: {},
      addRecord: true
    };
  },
  computed: {
    ...mapGetters({
      subjects: "subjects/subjects",
      myClass: "teachers/myClass"
    }),
    data: {
      get: function() {
        let myClass = this.myClass.students;
        let students = myClass.map(student => {
          return {
            name: `${student.firstName} ${student.lastName} `,
            score: null,
            grade: "",
            remark: "",
            student: student._id
          };
        });
        return students;
      }
    }
  },
  methods: {
    async recordData() {
      let data = this.data;
      let record = this.assessment;
      let mapData = data.map(d => {
        return {
          student: d.student,
          score: d.score,
          grade: d.grade,
          remark: d.remark
        };
      });
      let assessment = await Axios.post(
        `${process.env.baseUrl}/api/assessment/new`,
        {
          totalScore: record.totalScore,
          type: record.type,
          subject: this.selectedSubject,
          className: this.myClass._id,
          date: record.date,
          records: mapData
        }
      ).catch(err => err);

      console.log(assessment);
    }
  }
};
</script>

<style></style>
