import axios from "axios";

export const state = () => ({
  loading: false,
  subjects: [],
  subject: {},
  status: false
});

export const mutations = {
  // mutation
  setLoading(state, payload) {
    state.loading = payload;
  },
  setSubjects(state, payload) {
    state.subjects = payload;
  },
  setSubject(state, payload) {
    state.subject = payload;
  },
  addSubject: (state, payload) => {
    state.subjects.push(payload);
  },
  setStatus(state, payload) {
    state.status = payload;
  }
};

export const actions = {
  // Actions

  async getSubjects({ commit }) {
    await axios
      .get(`${process.env.baseUrl}/api/subject`)
      .then(({ data }) => {
        commit("setSubjects", data);
      })
      .catch(err => {
        new Error(err);
      });
  },
  async getSubject({ commit }, id) {
    await axios
      .get(`${process.env.baseUrl}/api/subject/single/${id}`)
      .then(data => {
        if (data.status == 200) {
          commit("setSubject", data.data);
          commit("setSubject", data.data);
        }
      })
      .catch(err => {
        new Error(err);
      });
  },
  async addSubject({ commit }, payload) {
    commit("setLoading", true);

    let newSubject = await axios
      .post(`${process.env.baseUrl}/api/subject/new`, payload)
      .then(({ data }) => {
        alert("SUCCESS !");
        return data;
      });
    if (!newSubject._id) {
      return alert("Failed to create new subject");
    } else {
      commit("addSubject", newSubject);
      commit("setLoading", false);
    }
  }
};

export const getters = {
  // getters
  subjects: state => state.subjects,
  subject: state => state.subject
};
