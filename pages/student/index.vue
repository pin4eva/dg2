<template>
  <section class="student">
    <div class="container">
      <div class="sec-title text-center mb-3" data-aos="fade-up" data-aos-duration="1000">
        <span class="title">Student</span>

        <h2>Student List Here</h2>
        <div class="divider">
          <span class="fa fa-mortar-board"></span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <search-form @onSearch="searchStudent"></search-form>

          <!-- <div class="search-student border px-4 py-3">
            <h4 class="font-weight-bold color-orange">Search Student</h4>
            <form>
              <div class="form-group">
                <label>Academic session</label>
                <select id="exampleDepartment" class="form-control" v-model="selectedSession">
                  <option value="null">Choose...</option>
                  <option
                    v-for="session in sessions"
                    :key="session._id"
                    :value="session._id"
                  >{{session.session}}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Class</label>
                <select class="form-control" v-model="selectedClass">
                  <option value="null">Choose...</option>
                  <option v-for="c in classes" :key="c._id" :value="c._id">{{c.name}}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Student Name</label>
                <input
                  type="text"
                  v-model="searchString"
                  class="form-control"
                  placeholder="Enter Student Name"
                />
              </div>

              <button
                @click.prevent="searchStudent"
                type="submit"
                class="btn theme-orange border-0 mt-2"
              >Search Now</button>
            </form>
          </div>

          <div class="video my-4" data-aos="zoom-in" data-aos-duration="1000">
            <img class="img-fluid" src="/images/event_1.jpg" alt="video" />
            <a
              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
              data-fancybox="gallery"
              class="video-btn text-white"
            >
              <i class="fa fa-play-circle fa-3x"></i>
            </a>
          </div>-->
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="d-flex justify-content-center my-5" v-if="loading">
            <b-spinner variant="success" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
          </div>
          <div class="row" v-else>
            <StudentCard
              class="col-md-6 mb-4"
              :student="student"
              v-for="student in students"
              :key="student._id"
            />
          </div>
          <div class="d-flex justify-content-between mt-5">
            <a href="#">
              <i class="fas fa-arrow-left fa-2x color-orange"></i>
            </a>
            <a href="#">
              <i class="fas fa-arrow-right fa-2x color-orange"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StudentCard from "@/components/front/StudentCard";
import SearchForm from "@/components/front/SearchStudentForm";
import { mapGetters } from "vuex";
import Axios from "axios";
export default {
  name: "Student-Page",
  components: { StudentCard, SearchForm },
  data() {
    return {
      selectedSession: null,
      selectedClass: null,
      loading: false,
      searchString: "",
      student: null
    };
  },
  computed: {
    ...mapGetters({
      // students: "students/students",
      sessions: "class/sessions",
      session: "class/session"
    }),
    classes: {
      get: function() {
        return this.session.classes;
      }
    },
    students() {
      let student = this.student;
      let classes = this.$store.state.class.singleClass.students;
      let allStudents = this.$store.state.students.students;
      if (student) return student;
      if (classes) {
        return classes;
      } else return allStudents;
    }
  },
  watch: {
    selectedSession(v) {
      this.$store.dispatch("class/getSession", v);
    },
    selectedClass(v) {
      this.student = null;
      this.$store.dispatch("class/getClass", v);
    }
  },
  methods: {
    getClass() {
      this.$store.dispatch("class/");
    },
    getSession() {
      this.$store.dispatch("class/getSession", this.selectedSession);
    },
    async searchStudent(v) {
      // let { data } = await Axios.get(
      //   `${process.env.baseUrl}/api/student/search`,
      //   {
      //     params: {
      //       searchString: this.searchString
      //     }
      //   }
      // ).catch(err => new Error(err));
      this.student = v;
    }
  }
};
</script>

<style></style>
