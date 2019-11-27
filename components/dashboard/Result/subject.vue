<template>
  <b-tr @mouseenter="removeButton=true" @mouseleave="removeButton=false">
    <b-td>
      <!-- <b-form-select
        :options="options"
        v-model="newSub.subject"
        class="form-control"
       
      ></b-form-select>-->
      <select name id class="form-control">
        <option value="null">Select Subject</option>
        <option v-for="option in subjects" :key="option._id" :value="option._id">{{option.name}}</option>
      </select>
    </b-td>
    <b-td>
      <b-form-input type="number" min="1" class="form-control" v-model.number="newSub.score"></b-form-input>
    </b-td>
    <b-td>
      <b-form-input type="number" min="1" class="form-control" v-model.number="newSub.totalScore"></b-form-input>
    </b-td>
    <b-td>
      <b-form-input class="form-control" v-model="newSub.grade"></b-form-input>
    </b-td>
    <b-td>
      <b-form-input class="form-control" v-model="newSub.remark"></b-form-input>
    </b-td>
    <b-td v-if="removeButton">
      <a href="#" @click.prevent="add">
        <i class="fas fa-minus-circle text-danger"></i>
      </a>
      <a href="#" @click.prevent="add">
        <i class="fas fa-plus-circle text-primary"></i>
      </a>
    </b-td>
  </b-tr>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SingleSubjectComp",
  data() {
    return {
      newSub: {},
      removeButton: false
    };
  },
  props: {
    subject: Object
  },
  computed: {
    ...mapGetters({
      subjects: "subjects/subjects"
    })
  },
  methods: {
    add() {
      this.$emit("addRes", this.newSub);
    }
  }
};
</script>

<style>
</style>