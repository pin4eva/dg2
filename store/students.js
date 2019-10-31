// import { getStudents } from "@/apollo/queries";
// import { start } from "repl";
import axios from "axios";

export const state = () => ({
  loading: false,
  students: [],
  student: {}
});

export const mutations = {
  // mutation
  setLoading(state, payload) {
    state.loading = payload;
  },
  setStudents(state, payload) {
    state.students = payload;
  },
  setStudent(state, payload) {
    state.student = payload;
  },
  addStudent: (state, payload) => {
    state.students.push(payload);
  }
};

export const actions = {
  // Actions
  async getStudents({ commit }) {
    await axios
      .get(`${process.env.baseUrl}/api/student`)
      .then(({ data }) => {
        commit("setStudents", data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async addStudent({ commit }) {
    await axios
      .post(`${process.env.baseUrl}/api/student/new`, payload)
      .then(data => {
        console.log(data);
      })
      .catch(err => new Error(err));
  },
  async getStudent({ commit }, id) {
    await axios
      .get(`${process.env.baseUrl}/api/student/${id}`)
      .then(({ data }) => {
        commit("setStudent", data);
      })
      .catch(err => new Error(err));
  }
};

export const getters = {
  // getters
  students: state => state.students,
  student: state => state.student
};
