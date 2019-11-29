<template>
  <section class="contact-section">
    <div class="container">
      <div
        class="sec-title text-center mb-3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>Join team Dinnygreen</h2>
        <div class="divider">
          <span class="fa fa-mortar-board"></span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12">
          <div
            class="career-form p-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="border-line"></div>
            <h3 class="font-weight-bold color-orange">Drop Message</h3>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="exampleInputName">Name</label>
                  <input
                    class="form-control"
                    id="exampleInputName"
                    placeholder="Enter Name"
                    type="text"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleInputEmail1">Email Address</label>
                  <input
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Email"
                    type="email"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="exampleInputNumber">Phone Number</label>
                  <input
                    class="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter Number"
                    type="email"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputState">Position</label>
                  <select class="form-control" id="inputState">
                    <option selected>Choose...</option>
                    <option>Position 1</option>
                    <option>Position 2</option>
                    <option>Position 3</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="exampleInputMessage">Message</label>
                <textarea
                  class="form-control"
                  id="exampleInputMessage"
                  placeholder="Message"
                ></textarea>
              </div>

              <div class="form-group">
                <label>
                  <span class="mb-0 resume">Drop Your Resume</span>
                  <input
                    class="form-control-file pl-0 d-none border-0"
                    id="resume"
                    name="resume"
                    type="file"
                  />
                </label>
              </div>
              <button class="btn theme-orange border-0" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Career-Page"
};
</script>

<style></style>
