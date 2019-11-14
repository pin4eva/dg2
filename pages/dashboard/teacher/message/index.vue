<template>
  <div>
    <div class="dashboard-content-one">
      <!-- Breadcubs Area Start Here -->
      <div class="breadcrumbs-area">
        <h3>Messaging</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Compose Message</li>
        </ul>
      </div>
      <!-- Breadcubs Area End Here -->
      <div class>
        <!-- Add Notice Area Start Here -->
        <div class="row">
          <!-- Add Notice Area Start Here -->
          <div class="col-4-xxxl col-12">
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>Send a message</h3>
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
                <form class="new-added-form">
                  <div class="row">
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>To</label>
                      <input
                        type="text"
                        placeholder="staffID or regNO"
                        class="form-control"
                        v-model="newMessage.to"
                      />
                      <i class="fas fa-user"></i>
                    </div>
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Posted By</label>
                      <input
                        type="text"
                        :placeholder="teacher.profile.username"
                        class="form-control"
                        disabled
                      />
                      <i class="fas fa-user text-success"></i>
                    </div>
                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        placeholder
                        class="form-control"
                        v-model="newMessage.title"
                      />
                    </div>

                    <div class="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Body</label>
                      <textarea
                        class="textarea form-control"
                        name="message"
                        cols="10"
                        rows="9"
                        v-model="newMessage.body"
                      ></textarea>
                    </div>
                    <div class="col-12 form-group mg-t-8">
                      <button
                        @click.once.prevent="sendMessage"
                        type="submit"
                        class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      >Save</button>
                      <button
                        @click.prevent="newMessage = {}"
                        type="reset"
                        class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                      >Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Add Notice Area End Here -->
          <!-- All Notice Area Start Here -->
          <div class="col-8-xxxl col-12">
            <div class="card height-auto">
              <div class="card-body">
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
                <form class="mg-b-20">
                  <div class="row gutters-8">
                    <div class="col-lg-5 col-12 form-group">
                      <input type="text" placeholder="Search by Date ..." class="form-control" />
                    </div>
                    <div class="col-lg-5 col-12 form-group">
                      <input type="text" placeholder="Search by Title ..." class="form-control" />
                    </div>
                    <div class="col-lg-2 col-12 form-group">
                      <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                    </div>
                  </div>
                </form>
                <div class="notice-board-wrap" v-if="teacher.profile.recieved">
                  <div
                    class="notice-list"
                    v-for="message in teacher.profile.recieved"
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
          <!-- All Notice Area End Here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";
export default {
  name: "Message",
  layout: "teacher",
  data() {
    return {
      newMessage: {},
      body: false
    };
  },
  computed: {
    ...mapGetters({
      teacher: "teachers/teacher"
    })
  },
  methods: {
    async sendMessage() {
      const message = await Axios.post(
        `${process.env.baseUrl}/api/message/new`,
        {
          title: this.newMessage.title,
          body: this.newMessage.body,
          to: this.newMessage.to,
          from: this.teacher.staffID
        }
      ).catch(err => err);
      if (message.data.success) {
        alert("SUCCESS !");
        console.log(message);
        this.newMessage = {};
      } else {
        alert(`${message.data}`);
        console.log(message);
      }
    },
    toggleBody(id) {
      // console.log(id);
      let classes = document.querySelector(".m" + id);
      classes.classList.toggle("d-block");
    }
  }
};
</script>

<style lang="stylus">
.notice-title {
  &:hover {
    cursor: pointer;
  }
}
</style>