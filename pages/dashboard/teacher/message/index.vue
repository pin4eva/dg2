<template>
  <div>
    <Messages @onSubmit="sendMessage" :user="teacher" />
  </div>
</template>

<script>
import Messages from "@/components/dashboard/shared/Message";
import { mapGetters } from "vuex";
import Axios from "axios";
export default {
  name: "Message",
  layout: "teacher",
  components: { Messages },
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
    // submit(v) {
    //   console.log(v);
    // },
    async sendMessage(v) {
      const message = await Axios.post(
        `${process.env.baseUrl}/api/message/new`,
        {
          title: v.title,
          body: v.body,
          to: v.to,
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
    }
    // toggleBody(id) {
    //   // console.log(id);
    //   let classes = document.querySelector(".m" + id);
    //   classes.classList.toggle("d-block");
    // }
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