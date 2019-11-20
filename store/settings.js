import moment from "moment";
import Cookies from "js-cookie";
import Axios from "axios";
let day = moment().format("dddd");
let weekNumber = 1;
let settings = "5dcbef730c16b641d3c82472";
//let resumption = moment("20191001", "YYYYMMDD"); //.calendar();
//let closing = moment("20191201", "YYYYMMDD"); //.calendar();
// console.log("From settings", closing.diff(Date.now(), "weeks"));
// console.log(moment().diff(resumption, "weeks"));

export const state = () => ({
  settings: {},
  weekNumber: null
});

export const mutations = {
  // mutation
  setWeek(state, paylaod) {
    state.weekNumber = paylaod;
  },
  settings(state, paylaod) {
    state.settings = paylaod;
  }
};

export const actions = {
  // Actions

  async getSettings({ commit }) {
    await Axios.get(
      `${process.env.baseUrl}/api/settings/single/5dcbef730c16b641d3c82472`
    )
      .then(({ data }) => {
        commit("settings", data);
      })
      .catch(err => new Error(err));
  },
  async setWeek({ commit }, paylaod) {
    await Axios.post(`${process.env.baseUrl}/api/settings/setWeek`, {
      settings: settings,
      week: paylaod
    })
      .then(({ data }) => {
        commit("settings", data);
      })
      .catch(err => new Error(err));
  },
  async incWeek({ commit }) {
    await Axios.post(`${process.env.baseUrl}/api/settings/incWeek`, {
      settings: settings
    })
      .then(({ data }) => {
        commit("settings", data);
      })
      .catch(err => new Error(err));
  },
  async update({ commit }, paylaod) {
    await Axios.post(`${process.env.baseUrl}/api/settings/update/${settings}`, {
      ...paylaod
    })
      .then(({ data }) => {
        commit("settings", data);
        if (data) {
          alert("SUCCESS !");
        }
      })
      .catch(err => new Error(err));
  },
  test() {
    console.log("From settings: Test");
  }
};

export const getters = {
  week(state) {
    let resumption = state.settings.resumption;
    let weekNumber = moment().diff(resumption, "weeks");
    return weekNumber;
  },
  settings: state => {
    if (!state.settings) return {};
    return state.settings;
  },
  resumption: state => state.settings.resumption,
  term: state => state.settings.term,
  _id: state => state.settings._id
};
