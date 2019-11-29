<template>
  <div>
    <header class="top-header py-2">
      <div class="container-fluid">
        <div class="row align-content-center">
          <div class="col-xl-3 col-lg-4 col-md-12 text-left top-btn">
            <button type="button" class="btn theme-orange">Admission</button>
            <!-- <button type="button" class="btn theme-orange">
              Login to portal
            </button> -->
            <nuxt-link to="/login" class="btn theme-orange" tag="button">
              Login to portal</nuxt-link
            >
          </div>
          <div
            class="col-xl-2 col-lg-3 col-md-4 py-2 font-weight-bold f-15 announcement"
          >
            <i class="fa fa-bullhorn mr-3"></i>
            <span>Announcement</span>
          </div>
          <div class="col-xl-7 col-lg-5 col-md-8">
            <p class="marquee">
              <span
                >School resumes on the 21st of January 2020 Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Maiores, sapiente?</span
              >
            </p>
          </div>
        </div>
      </div>
    </header>
    <header class="main-header" id="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <nuxt-link to="/" class="navbar-brand">
            <img src="/main.png" width="80" class="img-fluid" alt="Edusquad" />
          </nuxt-link>
          <!-- <i class="fas fa-bars fa-2x"></i> -->
          <span class="navbar-toggler">
            <i
              class="fas fa-bars ti-align-left fa-large text-success2"
              @click="openNav"
            ></i>
          </span>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Home</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/#about_us"
                  class="nav-link"
                  v-if="routeName !== 'index'"
                  >About</nuxt-link
                >
                <nuxt-link to="#about_us" class="nav-link" v-else
                  >About</nuxt-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  aria-expanded="false"
                  role="button"
                  data-toggle="dropdown"
                  >Student Corner</a
                >
                <div class="dropdown-menu">
                  <nuxt-link
                    to="/student/result"
                    class="dropdown-item"
                    href="result.html"
                    >Result</nuxt-link
                  >
                  <nuxt-link
                    to="/student"
                    class="dropdown-item"
                    href="student.html"
                    >Student</nuxt-link
                  >
                  <nuxt-link
                    to="/student/course"
                    class="dropdown-item"
                    href="course.html"
                    >Course</nuxt-link
                  >
                </div>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="faculties.html">Faculties</a>
              </li> -->
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/gallery">Gallery</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/blog">Blogs</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/career" class="nav-link">Career</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- end main header -->
    <!-- start side menu -->
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav"
        >&times;</a
      >
      <div class="sidenav-links pt-4">
        <a href="index-2.html">Home</a>
        <button class="dropdown-btn">
          About Us
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-container">
          <a href="about.html">
            <i class="fa fa-caret-right mr-3"></i>Who We Are
          </a>
          <a href="achievement.html">
            <i class="fa fa-caret-right mr-3"></i>Achievement
          </a>
        </div>
        <button class="dropdown-btn">
          Student Corner
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-container">
          <a href="student.html">
            <i class="fa fa-caret-right mr-3"></i>Student
          </a>
          <a href="result.html">
            <i class="fa fa-caret-right mr-3"></i>Result
          </a>
          <a href="course.html">
            <i class="fa fa-caret-right mr-3"></i>Course
          </a>
        </div>
        <a href="faculties.html">Faculties</a>
        <a href="gallery.html">Gallery</a>
        <a href="blog.html">Faculties</a>
        <a href="career.html">Career</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </div>
</template>

<script>
const $ = process.client ? require("jquery") : undefined;
export default {
  name: "Front-Navbar",
  data() {
    return {
      routeName: null
    };
  },

  watch: {
    $route: "currentRoute"
  },

  methods: {
    openNav() {
      $("#mySidenav").css({ width: "250px" });
      $("body").css({ "background-color": "rgba(0,0,0,0.4)" });
    },

    closeNav() {
      $("#mySidenav").css({ width: "0" });
      $("body").css({ "background-color": "white" });
    },

    currentRoute() {
      this.$nextTick(() => {
        this.routeName = this.$route.name;
      });
    }
  }
};
</script>

<style>
.marquee {
  color: white;
}
</style>
