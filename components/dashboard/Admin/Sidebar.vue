<template>
  <div>
    <!-- Sidebar starts here -->
    <div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
      <div class="mobile-sidebar-header d-md-none">
        <div class="header-logo">
          <nuxt-link :to="root">
            <img src="/main.png" alt="logo" />
          </nuxt-link>
        </div>
      </div>

      <div class="sidebar-menu-content">
        <ul class="nav nav-sidebar-menu sidebar-toggle-view">
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="root">
              <i class="flaticon-dashboard"></i>
              <span>Dashboard</span>
            </nuxt-link>
          </li>

          <li v-if="profile=='Admin'" class="nav-item sidebar-nav-item">
            <a href="#" v-b-toggle.collapseStudent class="nav-link" data-toggle="collapse">
              <i class="flaticon-classmates"></i>
              <span>Students</span>
            </a>
            <b-collapse id="collapseStudent" accordion="collapseStudent">
              <ul class="nav sub-group-menu">
                <li class="nav-item">
                  <nuxt-link class="nav-link" :to="root+'/student/all'">
                    <i class="fas fa-angle-right"></i>
                    <span>All Student</span>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/student/add">
                    <i class="fas fa-angle-right"></i>
                    <span>Add Student</span>
                  </nuxt-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li v-if="profile=='Admin'" class="nav-item sidebar-nav-item">
            <a href="#" class="nav-link" v-b-toggle.collapseTeacher data-toggle="collapse">
              <i class="flaticon-multiple-users-silhouette"></i>
              <span>Teachers</span>
            </a>
            <b-collapse id="collapseTeacher" accordion="collapseTeacher">
              <ul class="nav sub-group-menu">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/teacher">
                    <i class="fas fa-angle-right"></i>All
                    Teachers
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/teacher/add">
                    <i class="fas fa-angle-right"></i>Add
                    Teacher
                  </nuxt-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li v-if="profile=='Admin'" class="nav-item sidebar-nav-item">
            <a href="#" v-b-toggle.collapseParent class="nav-link" data-toggle="collapse">
              <i class="flaticon-couple"></i>
              <span>Parents</span>
            </a>
            <b-collapse id="collapseParent" accordion="collapseParent">
              <ul class="nav sub-group-menu">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/parent/">
                    <i class="fas fa-angle-right"></i>All
                    Parent
                  </nuxt-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="nav-item sidebar-nav-item" v-if="profile=='Teacher' || profile=='Admin'">
            <a href="#" v-b-toggle.collapseClass class="nav-link" data-toggle="collapse">
              <i class="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
              <span>Class</span>
            </a>
            <b-collapse id="collapseClass" accordion="collapseClass">
              <ul class="nav sub-group-menu">
                <li class="nav-item" v-if="profile=='Admin'">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/class/">
                    <i class="fas fa-angle-right"></i>All
                    Classes
                  </nuxt-link>
                </li>
                <li class="nav-item" v-if="profile=='Teacher'">
                  <nuxt-link class="nav-link" :to="root+'/class/myclass'">
                    <i class="fas fa-angle-right"></i>
                    My Class
                  </nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link class="nav-link" :to="root+'/class/routine'">
                    <i class="flaticon-calendar"></i>
                    <span>
                      Class
                      Routine
                    </span>
                  </nuxt-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <!-- Attendance -->
          <li class="nav-item sidebar-nav-item" v-if="profile=='Teacher' || profile=='Admin'">
            <a href="#" v-b-toggle.collapseAttendance class="nav-link" data-toggle="collapse">
              <i class="flaticon-checklist"></i>
              <span>Attendance</span>
            </a>
            <b-collapse id="collapseAttendance" accordion="collapseAttendance">
              <ul class="nav sub-group-menu">
                <li class="nav-item" v-if="profile=='Teacher'">
                  <nuxt-link class="nav-link" :to="root+'/attendance/take'">
                    <i class="fas fa-angle-right"></i>
                    Take Attendance
                  </nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link to="/dashboard/teacher/attendance" class="nav-link">
                    <i class="fas fa-angle-right"></i>

                    <span>View Attendence</span>
                  </nuxt-link>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="nav-item" v-if="profile=='Teacher' || profile=='Admin'">
            <nuxt-link class="nav-link" :to="root+'/assessment'">
              <i class="flaticon-shopping-list"></i>
              <span>Assessment</span>
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="profile=='Parent' ">
            <nuxt-link class="nav-link" :to="root+'/attendance'">
              <i class="flaticon-checklist"></i>
              <span>Attendance</span>
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="profile=='Teacher' || profile=='Admin'">
            <nuxt-link class="nav-link" :to="root+'/subject'">
              <i class="flaticon-open-book"></i>
              <span>Subject</span>
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="profile=='Parent'">
            <nuxt-link class="nav-link" :to="root+'/children'">
              <i class="flaticon-user"></i>
              <span>My Children</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" :to="root+'/notice'">
              <i class="flaticon-script"></i>
              <span>Notice</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="root+'/message'">
              <i class="flaticon-chat"></i>
              <span>Messeage</span>
            </nuxt-link>
          </li>

          <li class="nav-item" v-if="profile=='Admin'">
            <nuxt-link :to="root+'/settings'" class="nav-link">
              <i class="flaticon-settings"></i>
              <span>Settings</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="root+'/account'" class="nav-link">
              <i class="flaticon-settings"></i>
              <span>Account</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "js-cookie"
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  props: ["root"],
  data(){
    return{
      profile:cookie.get("Profile") || null
    }
  }

  // computed: {
  //   ...mapGetters({
  //     profile: "profile"
  //   })
  // }
};
</script>

<style lang="stylus">
#sideBar {
  display: grid;
  // grid-template-rows: 10% 1fr;
  height: 100vh;

  .brand-header {
    // grid-area: top;
    background: #EFA600;

    .barndMenu {
      height: 100%;
    }
  }

  .nav-items {
    // grid-area: bottom;
    background-color: #102954;
  }
}
</style>