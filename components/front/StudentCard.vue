<template>
  <div class="student-block">
    <div class="student-img">
      <nuxt-link :to="'/student/'+student._id">
        <img :src="student.image" class="img-fluid d-block m-auto" :alt="student.firstName" />
      </nuxt-link>
    </div>
    <div class="student-desc" data-aos="fade-up" data-aos-duration="1000">
      <div class="border-line"></div>
      <div class="std_desc_one text-center pt-3">
        <h6 class="font-weight-bold color-orange">{{student.firstName}} {{student.lastName}}</h6>
        <h6>
          <b>ID:</b>
          {{student.regNO}}
        </h6>
      </div>
      <div class="std_desc_two text-center">
        <h6>
          <b>Class:</b>
          {{student.currentClass}}
        </h6>
        <h6>
          <b>Dep:</b>Business Management
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCard",
  props: {
    student: Object
  }
};
</script>

<style>
</style>