import moment from "moment";
import Cookies from "js-cookie";
import Axios from "axios";
// import cookie from "~/plugins/cookie";
let day = moment().format("dddd");
// let profile = Cookies.get("Profile");
// let profile = localStorage.getItem("Profile");
export const state = () => ({
  day: day,
  loggedIn: false,
  token: Cookies.get("Token") || "",
  profile: Cookies.get("Profile") || ""
});

export const mutations = {
  // mutation
  setLoggedIn(state, payload) {
    state.loggedIn = payload;
  },
  setProfile(state, payload) {
    state.profile = payload;
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
  day: state => state.day,
  profile: state => state.profile || state.teachers.user || state.parents.user
  // test: state => state.teachers.user
};
