<template>
  <div class="container">
    <!--  -->
    <div class="row">
      <div class="col-lg-4 col-sm-12" id="loginAs">
        <h3 class="text-center text-uppercase">Login As</h3>
        <div class="row">
          <div class="col-lg-12 col-md-6 my-2">
            <button
              type="button"
              @click="page = 1"
              class="btn btn-success py-3 d-block w-100"
            >Teacher</button>
          </div>
          <div class="col-lg-12 col-md-6 my-2">
            <button
              type="button"
              @click="page = 2"
              class="btn btn-warning py-3 d-block w-100"
            >Student</button>
          </div>
          <div class="col-lg-12 col-md-6 my-2">
            <button type="button" @click="page = 3" class="btn btn-danger py-3 d-block w-100">Admin</button>
          </div>
          <div class="col-lg-12 col-md-6 my-2">
            <button
              type="button"
              @click="page = 4"
              class="btn btn-primary py-3 d-block w-100"
            >Parent</button>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-sm-12">
        <div class="wrapper" id="loginForm">
          <!-- Teacher's Login -->
          <div v-if="page==1">
            <h3 class="text-center text-uppercase font-weight-bold">Teacher's login page</h3>
            <form>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" v-model="teacher.staffID" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" v-model="teacher.password" />
              </div>
              <button
                @click.prevent="loginTeacher"
                type="submit"
                class="btn btn-success d-block w-100"
              >Submit</button>
            </form>
          </div>
          <!-- Parents Login -->
          <div v-if="page==4">
            <h3 class="text-center text-uppercase font-weight-bold">Parent's login page</h3>
            <form>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" v-model="parent.username" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" v-model="parent.password" />
              </div>
              <button
                @click.prevent="loginParent"
                type="submit"
                class="btn btn-success d-block w-100"
              >Submit</button>
            </form>
          </div>
          <!-- Student  -->
          <div v-if="page==2">
            <h3 class="text-center text-uppercase font-weight-bold">Student's login page</h3>
            <form>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" v-model="student.username" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" v-model="student.password" />
              </div>
              <button
                @click.prevent="loginStudent"
                type="submit"
                class="btn btn-success d-block w-100"
              >Submit</button>
            </form>
          </div>
          <!-- Admin -->
          <div v-if="page==3">
            <h3 class="text-center text-uppercase font-weight-bold">Admin's login page</h3>
            <form>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" v-model="admin.username" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" v-model="admin.password" />
              </div>
              <button
                @click.prevent="loginAdmin"
                type="submit"
                class="btn btn-success d-block w-100"
              >Submit</button>
            </form>
          </div>
          <div class="my-4">
            <div class="text-center">
              <p>
                Not registered?
                click
                <nuxt-link to="/register" class="text-primary">here to register</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import cookie from "js-cookie";
import { mapGetters, mapActions } from "vuex";
import Axios from "axios";
export default {
  name: "Login-Page",
  // layout: "login",
  data() {
    return {
      teacher: {},
      parent: {},
      student: {},
      admin: {},
      page: 1
    };
  },
  computed: {
    ...mapGetters({
      //
    })
  },
  methods: {
    ...mapActions({
      teacherLogin: "teachers/login"
    }),
    async loginStudent() {},
    async loginParent() {
      this.$store.dispatch("parents/login", this.parent);
    },
    async loginAdmin() {},
    async loginTeacher() {
      this.$store.dispatch("teachers/login", this.teacher);
    }
  },
  mounted() {
    cookie.remove("Profile");
    cookie.remove("Token");
  }
};
</script>

<style lang="stylus"></style>