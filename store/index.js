import moment from "moment";
import Cookies from "js-cookie";
// import cookie from "~/plugins/cookie";
let day = moment().format("dddd");

export const state = () => ({
  day: day,
  loggedIn: false,
  token: Cookies.get("Token") || ""
});

export const mutations = {
  // mutation
  setLoggedIn(state, payload) {
    state.loggedIn = payload;
  }
};

export const actions = {
  // Actions
  async logout({ commit }) {
    this.$router.push("/");
    await Cookie.remove("Token");
  }
};

export const getters = {
  // getters
  loggedIn: state =>
    state.loggedIn || state.teachers.loggedIn || state.parents.loggedIn,
  token: state => state.token,
  day: state => state.day
};
