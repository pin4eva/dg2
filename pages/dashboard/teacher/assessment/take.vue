<template>
  <div>
    <div>
      <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
          <h3>Examination</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Exam Schedule</li>
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
                  <a href="#" @click.prevent="nextRow=!nextRow">
                    <i class="fas fa-arrow-right fa-2x"></i>
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
                      <span class="font-bold">{{student.info.name}}</span>
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
                <form class="mg-b-20">
                  <div class="row gutters-8">
                    <div class="col-lg-4 col-12 form-group">
                      <select class="form-control" v-model="newSub.subject">
                        <option value="null">Select a subject</option>
                        <option v-for="subject in subjects" :key="subject._id">{{subject.name}}</option>
                      </select>
                    </div>
                    <div class="col-lg-4 col-12 form-group">
                      <input
                        type="number"
                        placeholder="Score"
                        class="form-control"
                        v-model.number="newSub.score"
                      />
                    </div>
                    <div class="col-lg-4 col-12 form-group">
                      <input
                        type="number"
                        placeholder="totalScore"
                        class="form-control"
                        v-model.number="newSub.totalScore"
                      />
                    </div>
                    <div class="col-lg-4 col-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Grade.. e.g. A, B or C .. "
                        v-model="newSub.grade"
                      />
                    </div>
                    <div class="col-lg-4 col-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Remark or comment"
                        v-model="newSub.remark"
                      />
                    </div>
                    <div class="col-lg-4 col-12">
                      <b-button block variant="warning" @click.prevent="addSubject">Add</b-button>
                    </div>
                  </div>
                </form>
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
                    <b-tbody>
                      <b-tr v-for="s in subjectList" :key="s._id">
                        <b-td>{{s.subject}}</b-td>
                        <b-td>{{s.score}}</b-td>
                        <b-td>{{s.totalScore}}</b-td>
                        <b-td>{{s.grade}}</b-td>
                        <b-td>{{s.remark}}</b-td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                  <b-button
                    v-if="subjectList.length"
                    variant="success"
                    block
                    @click.prevent="onSubmit"
                  >Save Record</b-button>
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
      nextRow: true,
      subjectList: [],
      term: null,
      type: null,
      student: {
        info: null
      },
      newSub: {
        subject: null,
        score: null,
        grade: null,
        remark: null
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
    removeRow(i) {
      console.log(i);
    },
    addSubject() {
      let subject = this.newSub;
      if (
        !subject.subject ||
        !subject.score ||
        !subject.grade ||
        !subject.grade ||
        !subject.remark
      ) {
        return alert("Please fill all input field");
      }
      this.subjectList.push(subject);
      this.newSub = {};
    },
    async onSubmit() {
      let subjectList = this.subjectList;
      let student = this.student.info._id;
      let data = subjectList.map(d => {
        return {
          subject: d.subject,
          score: d.score,
          remark: d.remark,
          grade: d.grade
        };
      });
      let info = {
        student: student,
        className: this.myClass._id,
        data: data,
        term: this.term,
        type: this.type
      };
      let result = await Axios.post(
        `${process.env.baseUrl}/api/assessment/new`,
        info
      )
        .then(({ data }) => data)
        .catch(err => new Error(err));
      alert("Submitted ! ");
      this.nextRow = !this.nextRow;
      this.subjectList = [];
      console.log(result);
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