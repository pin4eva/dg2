<template>
  <div>
    <div id="wrapper" class="wrapper">
      <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
          <h3>teacher Dashboard</h3>
          <ul>
            <li>
              <nuxt-link to="/dashboard/teacher">Home</nuxt-link>
            </li>
            <li>teacher</li>
          </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        <!-- Dashboard summery Start Here -->
        <div class="row gutters-20">
          <div class="col-xl-4 col-sm-6 col-12">
            <div class="dashboard-summery-one mg-b-20">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="item-icon bg-light-green">
                    <i class="flaticon-classmates text-green"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="item-content">
                    <div class="item-title">Students</div>
                    <div class="item-number">
                      <span>1,50,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 col-12">
            <div class="dashboard-summery-one mg-b-20">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="item-icon bg-light-blue">
                    <i class="flaticon-multiple-users-silhouette text-blue"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="item-content">
                    <div class="item-title">Teachers</div>
                    <div class="item-number">
                      <span>2,250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 col-12">
            <div class="dashboard-summery-one mg-b-20">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="item-icon bg-light-yellow">
                    <i class="flaticon-couple text-orange"></i>
                  </div>
                </div>
                <div class="col-6">
                  <div class="item-content">
                    <div class="item-title">Parents</div>
                    <div class="item-number">
                      <span>5,690</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Dashboard summery End Here -->
        <!-- Dashboard Content Start Here -->
        <div class="row gutters-20">
          <div class="col-lg-12">
            <div class="card dashboard-card-one pd-b-20">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Classes</h3>
                  </div>
                </div>
                <div class="earning-report">
                  <div class="item-content">
                    <div class="single-item pseudo-bg-blue">
                      <h4>Total Primary Classes</h4>
                      <span>40</span>
                    </div>
                    <div class="single-item pseudo-bg-red">
                      <h4>Total Secondary classes</h4>
                      <span>65</span>
                    </div>
                  </div>
                  <div class="dropdown">
                    <a
                      class="date-dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >Jan 20, 2019</a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        @click.prevent="setSession(session.session)"
                        class="dropdown-item"
                        href="#"
                        v-for="session in sessions"
                        :key="session._id"
                      >{{session.session}}</a>
                    </div>
                  </div>
                </div>
                <div>
                  <!-- Put Class list with students here -->
                  <div>
                    <b-table-simple striped hover>
                      <b-thead>
                        <b-tr>
                          <b-th>
                            <b-form-checkbox></b-form-checkbox>
                          </b-th>
                          <b-th>Name</b-th>
                          <b-th>Teacher</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr v-for="c in classes" :key="c._id">
                          <b-td>
                            <b-form-checkbox></b-form-checkbox>
                          </b-td>
                          <b-td>{{c.name}}</b-td>
                          <b-td v-if="c.teacher">{{c.teacher}}</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-6 col-3-xxxl">
            <div class="card dashboard-card-three pd-b-20">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Students</h3>
                  </div>
                </div>
                <div class="doughnut-chart-wrap">
                  <!-- Removed Student Canvas -->
                </div>
                <div class="student-report">
                  <div class="student-count pseudo-bg-blue">
                    <h4 class="item-title">Female Students</h4>
                    <div class="item-number">45,000</div>
                  </div>
                  <div class="student-count pseudo-bg-yellow">
                    <h4 class="item-title">Male Students</h4>
                    <div class="item-number">1,05,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6 col-4-xxxl">
            <div class="card dashboard-card-four pd-b-20">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Event Calender</h3>
                  </div>
                </div>
                <div class="calender-wrap">
                  <div id="fc-calender" class="fc-calender"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-6 col-4-xxxl">
            <div class="card dashboard-card-five pd-b-20">
              <div class="card-body pd-b-14">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Inbox</h3>
                  </div>
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >...</a>

                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-times text-orange-red"></i>Close
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs text-dark-pastel-green"></i>Edit
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-redo-alt text-orange-peel"></i>Refresh
                      </a>
                    </div>
                  </div>
                </div>
                <div class="notice-board-wrap" v-if="teacher.profile.recieved">
                  <div
                    class="notice-list"
                    v-for="message in teacher.profile.recieved.slice(0,3) "
                    :key="message._id"
                  >
                    <div
                      class="post-date bg-danger"
                    >{{ $moment(message.createdAt).format("MMM Do YY") }}</div>
                    <h6 class="notice-title" @click="toggleBody(message._id)">{{message.title}}</h6>
                    <p :class="`m${message._id} d-none`">{{message.body}}</p>
                    <div class="entry-meta">
                      {{message.from.firstName}} /
                      <span>{{ $moment(message.createdAt).startOf().fromNow() }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-6 col-4-xxxl">
            <div class="card dashboard-card-six pd-b-20">
              <div class="card-body">
                <div class="heading-layout1 mg-b-17">
                  <div class="item-title">
                    <h3>Notice Board</h3>
                  </div>
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >...</a>

                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-times text-orange-red"></i>Close
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs text-dark-pastel-green"></i>Edit
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-redo-alt text-orange-peel"></i>Refresh
                      </a>
                    </div>
                  </div>
                </div>
                <div class="notice-box-wrap" v-if="teacher.profile.notice">
                  <div
                    class="notice-list"
                    v-for="notice in teacher.profile.notice "
                    :key="notice._id"
                  >
                    <div
                      class="post-date bg-skyblue"
                    >{{ $moment(notice.createdAt).format("MMM Do YY") }}</div>
                    <h6 class="notice-title">{{notice.content}}</h6>
                    <div class="entry-meta">
                      {{notice.from.firstName}} /
                      <span>{{ $moment(notice.createdAt).startOf().fromNow() }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row gutters-20">
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="card dashboard-card-seven">
              <div class="social-media bg-fb hover-fb">
                <div class="media media-none--lg">
                  <div class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <div class="media-body space-sm">
                    <h6 class="item-title">Like us on facebook</h6>
                  </div>
                </div>
                <div class="social-like">30,000</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="card dashboard-card-seven">
              <div class="social-media bg-twitter hover-twitter">
                <div class="media media-none--lg">
                  <div class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </div>
                  <div class="media-body space-sm">
                    <h6 class="item-title">Follow us on twitter</h6>
                  </div>
                </div>
                <div class="social-like">1,11,000</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="card dashboard-card-seven">
              <div class="social-media bg-gplus hover-gplus">
                <div class="media media-none--lg">
                  <div class="social-icon">
                    <i class="fab fa-google-plus-g"></i>
                  </div>
                  <div class="media-body space-sm">
                    <h6 class="item-title">Follow us on googleplus</h6>
                  </div>
                </div>
                <div class="social-like">19,000</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="card dashboard-card-seven">
              <div class="social-media bg-linkedin hover-linked">
                <div class="media media-none--lg">
                  <div class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </div>
                  <div class="media-body space-sm">
                    <h6 class="item-title">Follow us on linked</h6>
                  </div>
                </div>
                <div class="social-like">45,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "teacher-HomePage",
  layout: "teacher",
  data() {
    return {
      currentSession: "",
      select: {},
      ids: []
    };
  },
  computed: {
    ...mapGetters({
      sessions: "class/sessions",
      classes: "class/classes",
      teacher: "teachers/teacher"
      // profile: "teachers/teachers_profile"
    })
  },
  watch: {
    currentSession(v) {
      console.log(v);
    }
  },
  methods: {
    setSession(s) {
      this.currentSession = s;
      console.log("From methods:", s);
    },
    selected(id) {
      let ids = this.ids;
      if (!ids.includes(id)) {
        ids.push(id);
      }
      console.log("SELECTED:", this.ids);
    },
    deSelected(id) {
      this.ids.pop(id);
      console.log("DESELECTED", id);
    },
    toggleBody(id) {
      // console.log(id);
      let classes = document.querySelector(".m" + id);
      classes.classList.toggle("d-block");
    }
  }
};
</script>

<style lang="stylus"></style>