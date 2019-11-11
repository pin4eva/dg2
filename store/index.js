import moment from "moment";
import Cookies from "js-cookie";
let day = moment().format("dddd");

let weekNumber = localStorage.getItem("weekNumber") || 0;
weekNumber = parseInt(weekNumber);

if (day == "Monday") {
  weekNumber = weekNumber + 1;
}

export const state = () => ({
  day: day,
  weekNumber: weekNumber || null
});

export const mutations = {
  // mutation
  setWeek(state, paylaod) {
    state.weekNumber = paylaod;
    localStorage.setItem("weekNumber", paylaod);
  }
};

export const actions = {
  // Actions
};

export const getters = {
  // getters
  loggedIn(state) {
    return state.teachers.loggedIn;
  },
  token: state => state.teachers.token,
  day: state => state.day,
  weekNumber: state => state.weekNumber
};
