import axios from "axios";
import _ from "lodash";
const cookie = require("js-cookie");

export const state = () => ({
  loading: false,
  teachers: [],
  teacher: {},
  profile: {},
  status: null,
  applicationID: "",
  loggedIn: false
});

export const mutations = {
  // mutation
  setLoading(state, payload) {
    state.loading = payload;
  },
  setTeachers(state, payload) {
    state.teachers = payload;
  },
  setTeacher(state, payload) {
    state.teacher = payload;
    state.profile = payload.profile;
  },
  addTeacher: (state, payload) => {
    state.teachers.push(payload);
  },
  deleteTeacher(state, payload) {
    const teachers = state.teachers;
    _.remove(teachers, { _id: payload });
  },
  setStatus: (state, payload) => {
    state.status = payload;
  },
  setAppID(state, payload) {
    state, (applicationID = payload);
  },
  setLoggedIn(state, payload) {
    state.loggedIn = payload;
  }
};

export const actions = {
  // Actions

  async getTeachers({ commit }) {
    await axios
      .get(`${process.env.baseUrl}/api/teacher`)
      .then(({ data }) => {
        commit("setTeachers", data);
      })
      .catch(err => {
        new Error(err);
      });
  },
  async getTeacher({ commit }, payload) {
    await axios
      .get(`${process.env.baseUrl}/api/teacher/single/${payload}`)
      .then(({ data }) => {
        commit("setTeacher", data);
        cookie.set("Teacher", data);
        if (data.isAdmin) {
          this.$router.push("/dashboard/admin");
        } else {
          this.$router.push("/dashboard/teacher");
        }
      })
      .catch(err => {
        new Error(err);
      });
  },
  async addTeacher({ commit }, payload) {
    commit("setLoading", true);
    await axios
      .post(`${process.env.baseUrl}/api/teacher/new`, payload)
      .then(({ data }) => {})
      .catch(err => new Error(err));
  },
  async login({ commit }, payload) {
    const profile = await axios
      .post(`${process.env.baseUrl}/api/teacher/login`, payload)
      .then(({ data }) => data)
      .catch(err => err);
    if (profile.success) {
      const teacher = await axios
        .get(
          `${process.env.baseUrl}/api/teacher/single/${profile.teacher.userID}`
        )
        .then(({ data }) => data)
        .catch(err => err);

      if (teacher) {
        cookie.set("Teacher", teacher, { expires: 7 });
        commit("setTeacher", teacher);
        commit("setLoggedIn", true);

        alert(`Welcome ${teacher.profile.firstName}`);
        if (teacher.isAdmin) {
          this.$router.push("/dashboard/admin");
        } else {
          this.$router.push("/dashboard/teacher");
        }
      }
    } else {
      alert(`${profile.msg}`);
    }
  },
  async register({ commit }, payload) {
    const teacher = await axios
      .post(`${process.env.baseUrl}/api/teacher/register`, payload)
      .then(({ data }) => {
        return data;
      })
      .catch(err => new Error(err));
    commit("addTeacher", teacher);
    commit("setAppID", teacher.applicationNO);
    commit("setLoading", false);
  },
  async logout({ commit }) {
    this.$router.push("/");
    await cookie.remove("Teacher");
    // this.$router.push("/dashboard/admin");

    // commit("setLoggedIn", false);
  }
};

export const getters = {
  // getters
  teachers: state => state.teachers,
  teacher: state => state.teacher,
  loading: state => state.loading,
  status: state => state.status,
  profile: state => state.profile,
  applicationID: state => state.applicationID
};
