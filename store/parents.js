import axios from "axios";
const cookie = require("js-cookie");
// import auth from "./auth";

export const state = () => ({
  loading: false,
  parents: [],
  parent: {},
  loggedIn: false,
  user: null
});

export const mutations = {
  // mutation
  setLoading(state, payload) {
    state.loading = payload;
  },
  setLoggedIn(state, payload) {
    state.loggedIn = payload;
  },
  setParents(state, payload) {
    state.parents = payload;
  },
  setParent(state, payload) {
    state.parent = payload;
  },
  addParents: (state, payload) => {
    state.parents.push(payload);
  },
  setProfile(state, payload) {
    state.user = payload;
    cookie.set("Profile", payload);
  }
};

export const actions = {
  async getParents({ commit }) {
    await axios
      .get(`${process.env.baseUrl}/api/parent`)
      .then(({ data }) => {
        commit("setParents", data);
      })
      .catch(err => {
        new Error(err);
      });
  },
  async addStudent({ commit }) {
    await axios
      .post(`${process.env.baseUrl}/api/parent/new`, payload)
      .then(data => {
        console.log(data);
      })
      .catch(err => new Error(err));
  },
  async login({ commit }, payload) {
    let parent = await axios
      .post(`${process.env.baseUrl}/api/parent/login`, {
        ...payload
      })
      .then(({ data }) => data)
      .catch(err => err);
    if (!parent.success) return alert(parent.msg);
    let token = parent.token;
    cookie.set("Token", token);
    // cookie.set("Profile", "Parent");
    commit("setProfile", "Parent");
    parent = await axios
      .get(`${process.env.baseUrl}/api/parent/me`, {
        headers: {
          Authorization: token
        }
      })
      .then(({ data }) => data)
      .catch(err => err);
    if (!parent.success) return alert(parent.msg);
    commit("setParent", parent.parent);
    commit("setLoggedIn", true);
    alert(`Welcome ${parent.parent.firstName}`);
    this.$router.push("/dashboard/parent");
  }
};

export const getters = {
  // getters
  parents: state => state.parents,
  parent: state => state.parent
};
