<template>
  <div>
    <div>
      <!-- <h1 class="text-center">Message page</h1> -->
      <Messages @onSubmit="sendMessage" :user="parent" />
    </div>
  </div>
</template>

<script>
import Messages from "@/components/dashboard/shared/Message";
import { mapGetters } from "vuex";
export default {
  layout: "parent",
  name: "MessagePage",
  components: { Messages },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters({
      parent: "parents/parent"
    })
  },
  methods: {
    async sendMessage(v) {
      const message = await Axios.post(
        `${process.env.baseUrl}/api/message/new`,
        {
          title: v.title,
          body: v.body,
          to: v.to,
          from: this.parent.username
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