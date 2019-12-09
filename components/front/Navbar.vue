<template>
  <div>
    <header class="top-header py-2">
      <div class="container-fluid">
        <div class="row align-content-center">
          <div class="col-xl-3 col-lg-4 col-md-12 text-left top-btn">
            <button type="button" class="btn theme-orange">Admission</button>

            <nuxt-link to="/login" class="btn theme-orange" tag="button">Login to portal</nuxt-link>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 py-2 font-weight-bold f-15 announcement">
            <i class="fa fa-bullhorn mr-3"></i>
            <span>Announcement</span>
          </div>
          <div class="col-xl-7 col-lg-5 col-md-8">
            <p class="marquee">
              <span>
                School resumes on the 21st of January 2020 Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Maiores, sapiente?
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>

    <header class="main-header" id="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <nuxt-link to="/" class="navbar-brand">
            <img src="/main.png" width="80" class="img-fluid" alt="Dinnygreen" />
          </nuxt-link>

          <span class="navbar-toggler">
            <i class="fas fa-bars ti-align-left fa-large text-success2 fa-2x" @click="openNav"></i>
          </span>
          <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li
                :class="link.child ? 'dropdown nav-item' : 'nav-item'"
                v-for="link in links.menu"
                :key="link.title"
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  aria-expanded="false"
                  role="button"
                  data-toggle="dropdown"
                  v-if="link.child"
                >{{link.title}}</a>
                <div class="dropdown-menu" v-if="link.child">
                  <nuxt-link
                    :to="item.url"
                    v-for="item in link.child"
                    :key="item.title"
                    class="dropdown-item"
                  >{{item.title}}</nuxt-link>
                </div>
                <nuxt-link class="nav-link" :to="link.url" v-if="!link.child">{{link.title}}</nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- end main header -->
    <!-- start side menu -->
    <div id="mySidenav" class="sidenav" @blur="closeNav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <div class="sidenav-links pt-4">
        <div v-for="(link, i) in links.menu" :key="link.title">
          <div v-if="link.child">
            <button class="dropdown-btn" :class="'d'+i" @click="dropdownToggle(i)">
              {{link.title}}
              <i class="fa fa-caret-down"></i>
              <div class="dropdown-container" ref="peter">
                <nuxt-link :to="item.url" v-for="item in link.child" :key="item.tile">
                  <i class="fa fa-caret-right mr-3"></i>
                  {{item.title}}
                </nuxt-link>
              </div>
            </button>
          </div>

          <div v-if="!link.child">
            <nuxt-link :to="link.url">{{link.title}}</nuxt-link>
          </div>
        </div>
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
      state: false,
      routeName: null,
      title: null,
      link: [
        { url: "/", title: "Home" },
        {
          url: this.routeName == "index" ? "/about" : "/#about_us",
          title: "About"
        },
        {
          url: "/student",
          title: "Students Corner",
          child: [
            { url: "/student", title: "Students List" },
            { url: "/student/result", title: "Results" },
            { url: "/student/course", title: "Course" }
          ]
        },
        { url: "/gallery", title: "Gallery" },
        { url: "/blog", title: "Blogs" },
        { url: "/contact", title: "Contact" }
      ]
    };
  },

  watch: {
    $route: "currentRoute"
  },
  computed: {
    links() {
      let menu = this.link;
      // li = links.map(link => link);
      const dropdown = menu.filter(link => link.child);
      let items = menu.filter(link => !link.child);
      return { items, dropdown, menu };
    }
  },
  methods: {
    openNav() {
      const sidenav = document.querySelector("#mySidenav");
      const body = document.querySelector("body");
      sidenav.style.width = "40%";
      body.style.backgroundColor = "rgba(0,0,0,0.4)";
      this.state = !this.state;
    },

    closeNav() {
      $("#mySidenav").css({ width: "0" });
      $("body").css({ "background-color": "white" });
      this.state = !this.state;
    },

    currentRoute() {
      this.$nextTick(() => {
        this.routeName = this.$route.name;
      });
    },
    dropdownToggle(i) {
      let elem = document.querySelector(`.d${i}`);
      elem = elem.querySelector(".dropdown-container");
      elem.classList.toggle("d-block");
      elem.classList.add("fade-in");
      // console.log(elem);
    }
  },
  mounted() {
    //   const body = document.querySelector("body");
    //   const sidenav = document.querySelector("#mySidenav");
    //   console.log("width :", sidenav.style.width);
  }
};
</script>

<style lang="stylus" >
.open-state {
  width: 40%;
}

.close-state {
  width: 0;
}
</style>

