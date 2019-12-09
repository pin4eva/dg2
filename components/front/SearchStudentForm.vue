<template>
  <div>
    <div class="search-student border px-4 py-3">
      <h4 class="font-weight-bold color-orange">Search Student</h4>
      <form>
        <!-- <div class="form-group">
                <label for="exampleIDNumber">ID Number</label>
                <input type="text" class="form-control" placeholder="Enter Your ID" />
        </div>-->
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
    </div>
  
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";
export default {
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
      //   this.student = !this.student;
      this.$store.dispatch("class/getClass", v);
    }
  },
  methods: {
    async searchStudent() {
      let { data } = await Axios.get(
        `${process.env.baseUrl}/api/student/search`,
        {
          params: {
            searchString: this.searchString
          }
        }
      ).catch(err => new Error(err));
      this.$emit("onSearch", data);
      //   this.student = data;
    }
  }
};
</script>

<style lang="stylus" scoped >
.peter {
  h3 {
    color: red;
  }
}
</style>