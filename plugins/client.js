import Vue from "vue";
import AOS from "aos";
import _ from "lodash";
import moment from "moment";
// import Datepicker from "vue-datepicker";
import VueMomentLib from "vue-moment-lib";

Vue.use(VueMomentLib, { moment: moment });
Vue.use(_);
// Vue.component("date-picker", Datepicker);

AOS.init();
Vue.filter("lower", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toLowerCase() + value.slice(1);
});
