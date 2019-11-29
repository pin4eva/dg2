<template>
  <div>
    <div id="front">
      <Navbar />
      <nuxt id="default" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/front/Navbar";
import Footer from "@/components/front/Footer";
export default {
  components: { Navbar, Footer },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    this.$store.dispatch("class/getSessions");
  },
  head() {
    return {
      link: [
        {
          href:
            "https://fonts.googleapis.com/css?family=Montserrat:400,800&amp;display=swap",
          rel: "stylesheet"
        },

        {
          href:
            "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
          rel: "stylesheet"
        },

        {
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css"
        },
        {
          href: "/css/animate.css"
        },
        {
          // href: "/css/style.css"
        }
      ],
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
        },
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/popper.js"
        },
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.js"
        },
        {
          src: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        },
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
// @import '@/assets/css/bootstrap.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css');
@import '../assets/stylus/front';

#front {
  ul {
    li {
      list-style: none;
    }
  }

  .btn-warning {
    background-color: yellow;
  }
}

#default {
  .btn-success {
    background-color: primary;
    border: primary;
  }
}
</style>