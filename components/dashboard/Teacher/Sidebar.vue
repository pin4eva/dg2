<template>
  <div>
    <!-- Sidebar starts here -->
    <div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
      <div class="mobile-sidebar-header d-md-none">
        <div class="header-logo">
          <nuxt-link to="/dashboard/teacher">
            <img src="img/logo1.png" alt="logo" />
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

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/teacher/class">
              <i class="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
              <span>My Class</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/teacher/subject">
              <i class="flaticon-open-book"></i>
              <span>My Subjects</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="flaticon-checklist"></i>
              <span>Attendence</span>
            </a>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard/teacher/exam">
              <i class="flaticon-shopping-list"></i>
              <span>Assessments</span>
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

<style lang="stylus"></style>