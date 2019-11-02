import axios from "axios";

export const state = () => ({
  loading: false,
  classes: [],
  sessions: [],
  session: {},
  singleClass: {},
  status: false
});

export const mutations = {
  // mutation
  setLoading(state, payload) {
    state.loading = payload;
  },
  setClasses(state, payload) {
    state.classes = payload;
  },
  setClass(state, payload) {
    state.singleClass = payload;
  },
  setSessions(state, payload) {
    state.sessions = payload;
  },
  setSession(state, payload) {
    state.sessions = payload;
  },
  setStatus(state, payload) {
    state.status = payload;
  },
  addClass: (state, payload) => {
    state.classes.push(payload);
  },
  addSession(state, payload) {
    state.sessions.push(payload);
  }
};

export const actions = {
  // Actions
  async getClasses({ commit }) {
    commit("setLoading", true);
    commit("setStatus", false);
    await axios
      .get(`${process.env.baseUrl}/api/class`)
      .then(({ data }) => {
        if (data) {
          commit("setClasses", data);
          commit("setStatus", true);
          commit("setLoading", false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  getSessions: async ({ commit }) => {
    commit("setLoading", true);
    await axios
      .get(`${process.env.baseUrl}/api/class/session`)
      .then(({ data }) => {
        commit("setSessions", data);
        commit("setLoading", false);
      })
      .catch(err => new Error(err));
  },
  async addClass({ commit }, payload) {
    commit("setLoading", true);
    await axios
      .post(`${process.env.baseUrl}/api/class/new`, payload)
      .then(({ data }) => {
        if (data._id) {
          commit("addClass", data);
          commit("setLoading", false);
          alert("SUCCESS !");
        } else {
          alert("TRY AGAIN !");
        }
        // console.log("From Store", data);
      })
      .catch(err => {
        alert(err.message);
      });
  },
  async addSession({ commit }, payload) {
    commit("setLoading", true);
    await axios
      .post(`${process.env.baseUrl}/api/class/session/new`, payload)
      .then(({ data }) => {
        commit("addSession", data);
        commit("setLoading", false);
      });
  }
};

export const getters = {
  // getters
  classes: state => state.classes,
  singleClass: state => state.singleClass,
  sessions: state => state.sessions,
  loading: state => state.loading
};
