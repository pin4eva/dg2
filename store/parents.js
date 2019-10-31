import axios from "axios";

export const state = () => ({
  loading: false,
  parents: [],
  parent: {}
});

export const mutations = {
  // mutation
  setLoading(state, payload) {
    state.loading = payload;
  },
  setParents(state, payload) {
    state.parents = payload;
  },
  setParent(state, payload) {
    state.parent = payload;
  },
  addParents: (state, payload) => {
    state.parents.push(payload);
  }
};

export const actions = {
  // Actions
  nuxtServerinit({ commit }) {
    axios
      .get(`${process.env.baseUrl}/api/parent`)
      .then(({ data }) => {
        console.log("dispatched from nuxtServerInit:", data);

        commit("setparents", data);
      })
      .catch(err => {
        console.log(err);
      });
  },
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
  }
};

export const getters = {
  // getters
  parents: state => state.parents,
  parent: state => state.parent
};
