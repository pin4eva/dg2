<template>
  <section class="contact-section">
    <div class="container">
      <div
        class="sec-title text-center mb-3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span class="title">Get In Touch</span>
        <h2>We’d Love To Here From You</h2>
        <div class="divider">
          <span class="fa fa-mortar-board"></span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <div
            class="contact-form p-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div class="border-line"></div>
            <h3 class="font-weight-bold color-orange">Drop Message</h3>
            <form>
              <div class="form-group">
                <label>Name</label>
                <input
                  class="form-control"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input
                  class="form-control"
                  placeholder="Enter Email"
                  type="email"
                />
                <small class="form-text text-muted" id="emailHelp"
                  >We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input
                  class="form-control"
                  placeholder="Enter Number"
                  type="email"
                />
              </div>
              <div class="form-group">
                <label>Message</label>
                <input
                  class="form-control"
                  placeholder="Message"
                  type="email"
                />
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">Check me out</label>
              </div>
              <button class="btn theme-orange border-0 mt-4" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 ml-minus">
          <div
            class="media p-3 align-items-center theme-blue mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div class="media-body text-left">
              <h6 class="color-orange font-weight-bold mb-1">Address</h6>
              <p class="mb-0">
                24 Webilor street, Power encounter estate, off Easr-West road,
                Port Harcourt
              </p>
            </div>
            <img
              class="img-fluid contact-icon"
              data-aos="zoom-in"
              data-aos-duration="1050"
              src="/images/icons/location.png"
              alt="Location"
            />
          </div>
          <div
            class="media p-3 align-items-center theme-blue mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div class="media-body text-left">
              <h6 class="color-orange font-weight-bold mb-1">Email</h6>
              <p class="mb-0">dinnyintschl@yahoo.com</p>
            </div>
            <img
              class="img-fluid contact-icon"
              data-aos="zoom-in"
              data-aos-duration="1500"
              src="/images/icons/mail.png"
              alt="Mail"
            />
          </div>
          <div
            class="media p-3 align-items-center theme-blue"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div class="media-body text-left">
              <h6 class="color-orange font-weight-bold mb-1">Contact Number</h6>
              <p class="mb-0">+234 816 669 5743</p>
            </div>
            <img
              class="img-fluid contact-icon"
              data-aos="zoom-in"
              data-aos-duration="1050"
              src="/images/icons/call.png"
              alt="Call"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact-Page"
};
</script>

<style></style>
