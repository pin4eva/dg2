import Vue from "vue";
import AOS from "aos";
import _ from "lodash";
import moment from "moment";
// require("vue-moment");
import VueMomentLib from "vue-moment-lib";

Vue.use(VueMomentLib, { moment: moment });
Vue.use(_);

AOS.init();
