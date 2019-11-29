<template>
  <div>
    <section class="result">
      <div class="container">
        <div class="sec-title text-center mb-3" data-aos="fade-up" data-aos-duration="1000">
          <span class="title">Result</span>
          <h2>Dinnygreen result checker</h2>
          <div class="divider">
            <span class="fa fa-mortar-board"></span>
          </div>
        </div>
        <div class="row" v-if="nextRow">
          <div class="col-md-12" data-aos="fade-up" data-aos-duration="1050">
            <form>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="exampleInputEnroll">Your Registration number</label>
                  <b-form-input
                    type="text"
                    class="form-control"
                    v-model="student"
                    placeholder="Enter Your Registration Number"
                    :state="regNO"
                  ></b-form-input>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputStd">Accademic Session</label>
                  <select id="inputStd" class="form-control" :disabled="!regNO" v-model="session">
                    <option value="null">Choose...</option>
                    <option
                      v-for="session in sessions"
                      :key="session._id"
                      :value="session._id"
                    >{{session.session}}</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputStd">Class</label>

                  <select
                    id="inputStd"
                    class="form-control"
                    :disabled="!regNO || !session"
                    v-model="className"
                  >
                    <option value="null">Choose...</option>
                    <option v-for="c in classes" :key="c._id" :value="c._id">{{c.name}}</option>
                  </select>
                </div>
              </div>
              <div class="form-row justify-content-center">
                <button
                  :class="status?'btn btn-secondary read-more mt-3' :' btn theme-orange read-more mt-3'"
                  @click.prevent="next"
                  :disabled="status"
                >
                  Next
                  <i class="fas fa-long-arrow-alt-right pl-2 fa-1x"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-md-12" data-aos="fade-up" data-aos-duration="1050">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label>Term</label>
                  <select class="form-control" v-model="term">
                    <option value="null">Choose...</option>
                    <option>First term</option>
                    <option>Second term</option>
                    <option>Third term</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>Type</label>
                  <select v-model="type" class="form-control" @change="getBtn=!getBtn">
                    <option value="null">Choose...</option>
                    <option>First test</option>
                    <option>Second test</option>
                    <option>Exam</option>
                  </select>
                </div>
              </div>
              <div class="form-row justify-content-center" v-if="getBtn">
                <button
                  @click.once="getBtn=!getBtn"
                  @click.prevent="getResult"
                  class="btn theme-orange read-more mt-3"
                >
                  Get Result
                  <i class="fas fa-long-arrow-alt-right pl-2 fa-1x"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="d-flex justify-content-center">
      <b-spinner
        variant="success"
        style="width: 3rem; height: 3rem;"
        label="Large Spinner"
        v-if="loading"
      ></b-spinner>
    </div>
    <section class="result-box mb-4" v-if="results">
      <div class="container">
        <h2 class="font-weight-bold text-center">Here Is Your Result</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="table-responsive">
              <table class="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="result in results.data" :key="result._id">
                    <td>{{result.subject}}</td>
                    <td>{{result.grade}}</td>
                    <td>{{result.score}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Axios from "axios";
export default {
  name: "Student-Result-Page",
  data() {
    return {
      nextRow: true,
      session: null,
      className: null,
      student: null,
      regNO: null,
      type: null,
      term: null,
      results: null,
      loading: false,
      getBtn: false
    };
  },
  computed: {
    ...mapGetters({
      sessions: "class/sessions",

      single: "class/session"
    }),
    classes() {
      return this.single.classes;
    },
    status() {
      if (this.student && this.session && this.className) {
        return false;
      } else return true;
    }
  },
  watch: {
    session(v) {
      this.getClass(v);
    },
    student(v) {
      this.checkRegNO(v);
    }
  },
  methods: {
    async getClass(v) {
      this.$store.dispatch("class/getSession", v);
    },
    async next() {
      if (!this.student || !this.session || !this.className)
        return alert("Fill all input");

      this.nextRow = !this.nextRow;
    },
    async checkRegNO(v) {
      let { data } = await Axios.get(
        `${process.env.baseUrl}/api/student/reg/`,
        {
          params: {
            student: v
          }
        }
      ).catch(err => new Error(err));
      this.regNO = data.status;
      if (data.status == false) return alert("Invalid Registration number");
      console.log(data);
    },
    async getResult() {
      this.loading = true;
      let student = this.student,
        className = this.className,
        term = this.term,
        type = this.type;

      let { data } = await Axios.get(
        `${process.env.baseUrl}/api/assessment/class`,
        {
          params: {
            className,
            term,
            student,
            type
          }
        }
      ).catch(err => new Error(err));
      this.loading = false;
      if (!data) return alert("Your result is not ready yet");
      this.results = data;

      console.log(data);
    }
  }
};
</script>

<style></style>
