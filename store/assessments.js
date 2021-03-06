import Axios from "axios";

const state = () => ({
  assessments: [],
  classRec: [],
  result: null,
  nextRow: true
});

const getters = {
  assessments: state => state.assessments || [],
  classRec: state => state.classRec || [],
  result: state => state.result,
  nextRow: state => state.nextRow
};
const mutations = {
  addAssessments(state, payload) {
    state.assessments = payload;
  },
  setClassRec(state, payload) {
    state.classRec = payload;
  },
  setResult(state, payload) {
    state.result = payload;
  },
  setNextRow(state, payload) {
    state.nextRow = payload;
  }
};
const actions = {
  getAssessments: async ({ commit }) => {
    await Axios.get(`${process.env.baseUrl}/api/assessment`)
      .then(({ data }) => {
        commit("addAssessments", data);
      })
      .catch(err => new Error(err));
  },
  classAssessment: async ({ commit }, payload) => {
    await Axios.get(`${process.env.baseUrl}/api/assessment/${payload}`)
      .then(({ data }) => {
        commit("setClassRec", data);
      })
      .catch(err => new Error(err));
  }
};

export { getters, mutations, actions, state };
