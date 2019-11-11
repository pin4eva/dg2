import moment from "moment";
import Axios from "axios";
import Cookies from "js-cookie";
let att = process.client ? Cookies.get("att") : [];
// att = JSON.stringify()
export const state = () => ({
  month: moment().format("MMMM"),
  att: [] //|| JSON.parse(att)
});

export const mutations = {
  // mutation
  setAtt(state, payload) {
    state.att = payload;
  }
};

export const actions = {
  async getAtt({ commit }, { month, week, className, term }) {
    const att = await Axios.get(`${process.env.baseUrl}/api/attendance/getby`, {
      params: {
        month: month,
        week: week,
        className: className,
        term: term
      }
    })
      .then(({ data }) => data)
      .catch(err => new Error(err));
    if (att.length == 0) {
      return alert("No result found");
    }
    commit("setAtt", att);
    Cookies.set("att", att);
  }
};

export const getters = {
  att: state => state.att
};
