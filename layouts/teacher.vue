<template>
  <div>
    <div id="dashboard">
      <div id="page1">
        <Navbar :profile="teacher.profile" pageHome="/dashboard/teacher" />
        <div class="d-flex">
          <Sidebar id="sidebar" root="/dashboard/teacher" />
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
import moment from "moment";

import Navbar from "@/components/dashboard/Admin/Navbar";
import Sidebar from "@/components/dashboard/Admin/Sidebar";
import { mapActions, mapGetters } from "vuex";
// import dt from "datatables";

export default {
  components: { Navbar, Sidebar },
  middleware: "loggedIn",
  data() {
    return {
      // pageHome:"/dashboard"
    };
  },
  computed: {
    ...mapGetters({
      teacher: "teachers/teacher"
    })
  },
  methods: {
    ...mapActions({
      Students: "students/getStudents",
      Teachers: "teachers/getTeachers",
      Parents: "parents/getParents",
      sessions: "class/getSessions",
      classes: "class/getClasses",
      subjects: "subjects/getSubjects"
      // settings: "settings/getSettings"
    })
  },
  created() {
    this.Students();
    this.Teachers();
    this.Parents();
    this.sessions();
    this.classes();
    this.subjects();
    // this.settings();
  }
  // head() {
  //   return {
  //     script: [
  //       { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
  //       {
  //         src:
  //           "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  //       },
  //       {
  //         src:
  //           "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  //       }
  //     ]
  //   };
  // }
};
</script>
<style lang="stylus" >
@import '~/static/dashboard/fonts/flaticon.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.0/css/all.css';
@import '../assets/stylus/front';

.btn {
  border-radius: 0;
}
</style>

