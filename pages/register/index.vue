<template>
  <div class="container">
    <!-- 0113867306 -->
    <div id="successPage" v-if="success">
      <div class="wrapper">
        <div class="text-center">
          <h6>Successful</h6>
          <p>You have Successfully registered as a staff in Dinnygreen International School.</p>
          <p>Please keep your APPLICATION ID safe</p>
          <p>
            <b>ApplicationID:</b>
            <span class="applicationID">{{applicationID}}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="row" v-else>
      <div class="col-lg-4 col-sm-12" id="loginAs">
        <h3 class="text-center text-uppercase">Register As</h3>
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
            <button
              type="button"
              @click="page = 3"
              class="btn btn-danger py-3 d-block w-100"
            >Other Staff</button>
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
            <h3 class="text-center text-uppercase font-weight-bold">Teacher's registration page</h3>
            <form>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="bob@example.com"
                  v-model="teacher.email"
                />
              </div>
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Example: bobby"
                  v-model="teacher.username"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="strong password"
                  v-model="teacher.password"
                />
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="repeat password"
                  v-model="teacher.password2"
                />
              </div>
              <div class="form-group">
                <label>First Name **</label>
                <input class="form-control" placeholder="Emeka" v-model="teacher.firstName" />
              </div>
              <div class="form-group">
                <label>Last Name **</label>
                <input class="form-control" placeholder="Adamu" v-model="teacher.lastName" />
              </div>
              <div class="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Month Day Year"
                  v-model="teacher.dob"
                />
              </div>
              <div class="form-group">
                <label>Religion</label>
                <select class="form-control" v-model="teacher.religion">
                  <option>Christian</option>
                  <option>Religion</option>
                </select>
              </div>
              <div class="form-group">
                <label>Gender</label>
                <select class="form-control" v-model="teacher.gender">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="form-group">
                <label>Marital Status</label>
                <select class="form-control" v-model="teacher.maritalStatus">
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
              <div class="form-group">
                <label for>Phone Number**</label>
                <input
                  placeholder="08099777733"
                  type="text"
                  class="form-control"
                  v-model="teacher.phone"
                />
              </div>
              <div class="form-group">
                <label for>Address**</label>
                <input
                  placeholder="123 GRA Road, Port Harcourt, Rivers State"
                  type="text"
                  class="form-control"
                  v-model="teacher.address"
                />
              </div>
              <button
                @click.prevent="registerTeacher"
                type="submit"
                class="btn btn-success d-block w-100"
              >Register now</button>
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
              >Register now</button>
            </form>
          </div>
          <div class="my-4">
            <div class="text-center">
              <p>
                Already registered?
                click
                <nuxt-link to="/login" class="text-primary">here to login</nuxt-link>
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
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "register-Page",
  // layout: "login",
  data() {
    return {
      teacher: {},
      parent: {},
      student: {},
      admin: {},
      page: 1,
      success: false,
      applicationID: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      // applicationID: "teachers/applicationID" || ""
    })
  },
  methods: {
    ...mapActions({
      teacherLogin: "teachers/login"
    }),
    async loginStudent() {},
    async loginParent() {},
    async loginAdmin() {},
    async registerTeacher() {
      let teacher = this.teacher;
      if (!teacher.password && !teacher.email && !teacher.username) {
        alert("please check your username,email or password");
      }
      if (teacher.password != teacher.password2) {
        alert("confirmation password is not the same as first password");
      } else {
        await axios
          .post(`${process.env.baseUrl}/api/teacher/register`, this.teacher)
          .then(({ data }) => {
            console.log(data);
            if (data.success == true) {
              this.applicationID = data.teacher.applicationNO;
              this.success = true;
              commit("teachers/addTeacher", data.teacher);
            } else if (data.success == false) {
              this.$swal({
                type: "error",
                title: "Try again",
                text: `${data.msg}`,
                position: "top-end"
              });
            }
          })
          .catch(err => new Error(err));
      }
    }
  }
};
</script>

<style lang="stylus">
.applicationID {
  font-size: 1rem;
  letter-spacing: 1rem;
  margin-left: 1rem;
  text-transform: uppercase;
}
</style>