import moment from "moment";
import Cookies from "js-cookie";
let day = moment().format("dddd");

export const state = () => ({
  token: null,
  loggedIn: false,
  profile: ""
});

export const mutations = {
  // mutation
  setAuth(state, paylaod) {
    state.token = paylaod;
  },
  setLoggedIn(state, paylaod) {
    state.loggedIn = paylaod;
  },
  setProfile(state, paylaod) {
    state.profile = paylaod;
  }
};

export const actions = {
  // Actions
};

export const getters = {
  // getters
};
