<template>
  <div>
    <!-- Sidebar starts here -->
    <div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
      <div class="mobile-sidebar-header d-md-none">
        <div class="header-logo">
          <nuxt-link to="/dashboard/teacher">
            <img src="/main.png" alt="logo" />
          </nuxt-link>
        </div>
      </div>

      <div class="sidebar-menu-content">
        <ul class="nav nav-sidebar-menu sidebar-toggle-view">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/teacher">
              <i class="flaticon-dashboard"></i>
              <span>Dashboard</span>
            </nuxt-link>
          </li>
          <li class="nav-item sidebar-nav-item">
            <a href="#" v-b-toggle.collapseStudent class="nav-link" data-toggle="collapse">
              <i class="flaticon-classmates"></i>
              <span>Students</span>
            </a>
            <b-collapse id="collapseStudent" accordion="collapseStudent">
              <ul class="nav sub-group-menu">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/student/all">
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
          <li class="nav-item sidebar-nav-item">
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
          <li class="nav-item sidebar-nav-item">
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

          <li class="nav-item sidebar-nav-item">
            <a href="#" v-b-toggle.collapseClass class="nav-link" data-toggle="collapse">
              <i class="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
              <span>Class</span>
            </a>
            <b-collapse id="collapseClass" accordion="collapseClass">
              <ul class="nav sub-group-menu">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/class/">
                    <i class="fas fa-angle-right"></i>All
                    Classes
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/class/myclass">
                    <i class="fas fa-angle-right"></i>
                    My Class
                  </nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/class/routine">
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
          <li class="nav-item sidebar-nav-item">
            <a href="#" v-b-toggle.collapseAttendance class="nav-link" data-toggle="collapse">
              <i class="flaticon-checklist"></i>
              <span>Attendance</span>
            </a>
            <b-collapse id="collapseAttendance" accordion="collapseAttendance">
              <ul class="nav sub-group-menu">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/dashboard/teacher/attendance/take">
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
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/teacher/subject">
              <i class="flaticon-open-book"></i>
              <span>Subject</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/teacher/exam">
              <i class="flaticon-shopping-list"></i>
              <span>Exam</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/teacher/notice">
              <i class="flaticon-script"></i>
              <span>Notice</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/teacher/message">
              <i class="flaticon-chat"></i>
              <span>Messeage</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/dashboard/teacher/settings" class="nav-link">
              <i class="flaticon-settings"></i>
              <span>Settings</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  props: {
    link: Object
  },
  computed: {
    ...mapGetters({
      teacher: "teachers/teacher"
    })
  }
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