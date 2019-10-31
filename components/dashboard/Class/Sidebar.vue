<template>
  <div>
    <!-- Sidebar starts here -->
    <div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
      <div class="mobile-sidebar-header d-md-none">
        <div class="header-logo">
          <a href="index.html">
            <img src="img/logo1.png" alt="logo" />
          </a>
        </div>
      </div>
      <div class="sidebar-menu-content">
        <ul class="nav nav-sidebar-menu sidebar-toggle-view">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/admin">
              <i class="flaticon-dashboard"></i>
              <span>Dashboard</span>
            </nuxt-link>
          </li>
          <li class="nav-item sidebar-nav-item">
            <a href="#" class="nav-link">
              <i class="flaticon-classmates"></i>
              <span>Students</span>
            </a>
            <ul class="nav sub-group-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/student/all">
                  <i class="fas fa-angle-right"></i>
                  <span>All Student</span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/student/add">
                  <i class="fas fa-angle-right"></i>
                  <span>Add Student</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item sidebar-nav-item">
            <a href="#" class="nav-link">
              <i class="flaticon-multiple-users-silhouette"></i>
              <span>Teachers</span>
            </a>
            <ul class="nav sub-group-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/teacher">
                  <i class="fas fa-angle-right"></i>All
                  Teachers
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/teacher/add">
                  <i class="fas fa-angle-right"></i>Add
                  Teacher
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item sidebar-nav-item">
            <a href="#" class="nav-link">
              <i class="flaticon-couple"></i>
              <span>Parents</span>
            </a>
            <ul class="nav sub-group-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/parent/">
                  <i class="fas fa-angle-right"></i>All
                  Parent
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/parent/add">
                  <i class="fas fa-angle-right"></i>Add
                  Parent
                </nuxt-link>
              </li>
            </ul>
          </li>

          <li class="nav-item sidebar-nav-item">
            <a href="#" class="nav-link">
              <i class="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
              <span>Class</span>
            </a>
            <ul class="nav sub-group-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/class/">
                  <i class="fas fa-angle-right"></i>All
                  Classes
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/class/add">
                  <i class="fas fa-angle-right"></i>Add New
                  Class
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard/admin/class/routine">
                  <i class="flaticon-calendar"></i>
                  <span>
                    Class
                    Routine
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/admin/subject">
              <i class="flaticon-open-book"></i>
              <span>Subject</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="flaticon-checklist"></i>
              <span>Attendence</span>
            </a>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/admin/exam">
              <i class="flaticon-shopping-list"></i>
              <span>Exam</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/admin/notice">
              <i class="flaticon-script"></i>
              <span>Notice</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/admin/message">
              <i class="flaticon-chat"></i>
              <span>Messeage</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="flaticon-settings"></i>
              <span>Account</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="stylus">
#sideBar {
  display: grid;
  grid-template-rows: 10% 1fr;
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