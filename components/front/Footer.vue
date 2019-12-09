<template>
  <footer class="theme-green" id="front">
    <div class="container">
      <div class="footer-top border-bottom pt-5">
        <div class="row">
          <div class="col-lg-3 col-md-6" data-aos="fade-in" data-aos-duration="1050">
            <div class="d-flex justify-content-center">
              <nuxt-link to="/">
                <img src="/main.png" width="90" class="img-fluid mb-3" alt="DinnyGreen" />
              </nuxt-link>
            </div>
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC.
            </p>
            <ul class="social-icon d-flex justify-content-between">
              <li>
                <a href="javascript:">
                  <i class="fa fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="fa fa-skype"></i>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6" data-aos="fade-in" data-aos-duration="550">
            <h5 class="font-weight-bold mb-3">Quick Links</h5>
            <ul>
              <li>
                <nuxt-link to="/">
                  <i class="fa fa-angle-double-right mr-2"></i>Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about">
                  <i class="fa fa-angle-double-right mr-2"></i>About Us
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/student">
                  <i class="fa fa-angle-double-right mr-2"></i>Student Corner
                </nuxt-link>
              </li>
              <li>
                <a href="faculties.html">
                  <i class="fa fa-angle-double-right mr-2"></i>Faculties
                </a>
              </li>
              <li>
                <a href="achievement.html">
                  <i class="fa fa-angle-double-right mr-2"></i>Achievenment
                </a>
              </li>
              <li>
                <a href="career.html">
                  <i class="fa fa-angle-double-right mr-2"></i>Career
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <i class="fa fa-angle-double-right mr-2"></i>Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-md-5 mb-4" data-aos="fade-in" data-aos-duration="1050">
            <h5 class="font-weight-bold mb-3">Recent News</h5>
            <div class="row">
              <div class="col-md-4 col-sm-2 col-2 mb-2 pr-0">
                <img src="/images/thumb_1.jpg" class="img-fluid" alt="Gallery" />
              </div>
              <div class="col-md-4 col-sm-2 col-2 mb-2 pr-0">
                <img src="/images/thumb_2.jpg" class="img-fluid" alt="Gallery" />
              </div>
              <div class="col-md-4 col-sm-2 col-2 mb-2 pr-0">
                <img src="/images/thumb_3.jpg" class="img-fluid" alt="Gallery" />
              </div>
              <div class="col-md-4 col-sm-2 col-2 pr-0">
                <img src="/images/thumb_4.jpg" class="img-fluid" alt="Gallery" />
              </div>
              <div class="col-md-4 col-sm-2 col-2 pr-0">
                <img src="/images/thumb_5.jpg" class="img-fluid" alt="Gallery" />
              </div>
              <div class="col-md-4 col-sm-2 col-2 pr-0">
                <img src="/images/thumb_6.jpg" class="img-fluid" alt="Gallery" />
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 pl-lg-5 mb-md-5"
            data-aos="fade-in"
            data-aos-duration="1050"
          >
            <h5 class="font-weight-bold mb-3">Contact Us</h5>
            <ul class="address-icon">
              <li class="mb-3">
                <i class="fa fa-map-marker mr-3 color-ash"></i> 24 Webilor, Off
                Power Encounter.
              </li>
              <li class="mb-3">
                <i class="fa fa-phone mr-3 color-ash"></i>+234 8099 7777 33
              </li>
              <li class="mb-3">
                <i class="fa fa-envelope color-ash mr-3"></i>support@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-footer py-3 d-flex justify-content-between">
        <p class="mb-0">All Rights Reserved by Dinnygreen.</p>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <a href="javascript:">Terms of use</a>
          </li>
          <li class="list-inline-item">
            <a href="javascript:">Privacy policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Home-Footer"
};
</script>

<style lang="stylus"></style>
