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
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>Write New Message</h3>
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
                  <div class="col-12 form-group">
                    <label>Title</label>
                    <input type="text" placeholder class="form-control" v-model="newMessage.title" />
                  </div>
                  <div class="col-12 form-group">
                    <label>Recipient</label>
                    <input type="text" placeholder class="form-control" v-model="newMessage.to" />
                  </div>
                  <div class="col-12 form-group">
                    <label>Message</label>
                    <textarea
                      class="textarea form-control"
                      name="message"
                      id="form-message"
                      cols="10"
                      rows="9"
                      v-model="newMessage.body"
                    ></textarea>
                  </div>
                  <div class="col-12 form-group mg-t-8">
                    <button
                      type="submit"
                      class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      @click.prevent.once="sendMessage"
                    >Save</button>
                    <button
                      @click="newMessage={}"
                      type="reset"
                      class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                    >Reset</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Message",
  layout: "admin",
  data() {
    return {
      newMessage: {}
    };
  },
  methods: {
    async sendMessage() {
      const message = await Axios.post(
        `${process.env.baseUrl}/api/message/new`,
        {
          title: this.newMessage.title,
          body: this.newMessage.body,
          to: this.newMessage.to,
          from: "TAA/2019/3"
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
    }
  }
};
</script>

<style>
</style>