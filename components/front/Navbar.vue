<template>
  <div>
    <header class="top-header py-2">
      <div class="container-fluid">
        <div class="row align-content-center">
          <div class="col-xl-3 col-lg-4 col-md-12 text-left top-btn">
            <button type="button" class="btn theme-orange">Admission</button>
            <button type="button" class="btn theme-orange">Quick Inquery</button>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 py-2 font-weight-bold f-15 announcement">
            <i class="fa fa-bullhorn mr-3"></i>
            <span>Announcement</span>
          </div>
          <div class="col-xl-7 col-lg-5 col-md-8">
            <p class="marquee">
              <span>School resumes on the 21st of January 2020 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente?</span>
            </p>
          </div>
        </div>
      </div>
    </header>
    <header class="main-header">
      <nav class="d-flex justify-content-between container-fluid align-items-center">
        <div class="logo">
          <nuxt-link to="/">
            <img src="/main.png" class="ml-3" alt="logo" width="90" />
          </nuxt-link>
        </div>
        <div class="items mr-3">
          <ul class="navbar-na mr-auto d-flex">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dashboard/admin">Dashboard</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Front-Navbar"
};
</script>

<style>
.marquee {
  color: white;
}
</style>