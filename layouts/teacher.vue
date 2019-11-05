<template>
  <div>
    <div id="dashboard">
      <div id="page1">
        <Navbar :user="teacher" pageHome="/dashboard/admin" />
        <div class="d-flex">
          <Sidebar id="sidebar" />
          <nuxt class="bg-ash w-100" />
        </div>
        <footer class="footer-wrap-layout1">
          <div class="copyright">
            © Copyrights
            <a href="#">Dinnygreen International School</a> 2019. All rights reserved. Designed by
            <a href="#">SkiaDev</a>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/dashboard/Admin/Navbar";
import Sidebar from "@/components/dashboard/Teacher/Sidebar";
import { mapActions, mapGetters } from "vuex";
// import dt from "datatables";

export default {
  components: { Navbar, Sidebar },
  data() {
    return {
      // pageHome:"/dashboard"
    };
  },
  computed: {
    ...mapGetters({
      teacher: "teachers/teacher",
      admin: ""
    }),
    user() {
      return {};
    }
  },
  methods: {
    ...mapActions({
      Students: "students/getStudents",
      Teachers: "teachers/getTeachers",
      Parents: "parents/getParents",
      sessions: "class/getSessions",
      classes: "class/getClasses",
      subjects: "subjects/getSubjects"
    })
  },
  created() {
    this.Students();
    this.Teachers();
    this.Parents();
    this.sessions();
    this.classes();
    this.subjects();
  },
  head() {
    return {
      script: [
        { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        },
        {
          src:
            "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" >
@import '~/static/dashboard/fonts/flaticon.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.0/css/all.css';
@import '../assets/stylus/dashboard';

.btn {
  border-radius: 0;
}

#dashboard {
  height: 100vh;
}
</style>

