<template>
  <div>
    <div class="single-student">
      <div class="container">
        <!-- <b-breadcrumb :items="items" class="breadcrums"></b-breadcrumb> -->
        <student-view class="singleItem"></student-view>
      </div>
    </div>
  </div>
</template>

<script>
import StudentView from "@/components/dashboard/shared/SingleStudent";
import Axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "SingleStudent",

  components: { StudentView },
  data() {
    return {
      // student: null
    };
  },
  computed: {
    ...mapGetters({
      student: "students/student"
    }),
    items() {
      return [
        {
          text: "Students List",
          to: "/student"
        },
        {
          text: this.student.firstName,
          to: `/student/${this.student._id}`,
          active: true
        }
      ];
    }
  },
  methods: {
    //
  },
  async fetch({ store, params }) {
    const { data } = await Axios.get(
      `${process.env.baseUrl}/api/student/single/${params.id}`
    )
      // .then(({ data }) => {

      // })
      .catch(err => new Error(err));
    store.commit("students/setStudent", data);
    // return store.dispatch("students/getStudent", { id: params.id });
  }
};
</script>

<style lang="stylus" >
.single-student {
  // margin-bottom: 20rem;
}

.breadcrums {
  background-color: #fff !important;
}
</style>
