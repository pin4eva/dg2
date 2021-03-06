import axios from "axios";
import _ from "lodash";
const cookie = require("js-cookie");
// import store from "./index";

export const state = () => ({
  loading: false,
  teachers: [],
  teacher: {},
  user: null,
  status: null,
  applicationID: "",
  loggedIn: false,
  myClass: {},
  token: ""
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
  },
  setClass(state, payload) {
    state.myClass = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
  setProfile(state, payload) {
    state.user, payload;
    cookie.set("Profile", payload);
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
        // cookie.set("Teacher", data);
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

      .then(({ data }) => {
        return data;
      })
      .catch(err => err);
    if (!profile.success) {
      return alert(profile.msg);
    }

    if (profile.token) {
      commit("setToken", profile.token);
      cookie.set("Token", profile.token);
      let auth = await axios
        .get(`${process.env.baseUrl}/api/teacher/me`, {
          headers: {
            Authorization: profile.token
          }
        })
        .then(({ data }) => data);

      // console.log(profile.token);

      if (auth.teacher) {
        if (auth.teacher.isAdmin) {
          // localStorage.setItem("Profile", "Admin");
          commit("setProfile", "Admin");
        } else {
          // localStorage.setItem("Profile", "Teacher");
          commit("setProfile", "Teacher");
          // cookie.set("Profile", "Teacher");
        }
        alert(`Welcome ${auth.teacher.firstName}`);
        commit("setLoggedIn", true);
        commit("setTeacher", auth.teacher);
        this.$router.push("/dashboard/teacher");
      }
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
    await cookie.remove("Token");
  },
  async myClass({ commit }, payload) {
    const myClass = await axios
      .get(`${process.env.baseUrl}/api/class/single/${payload}`)
      .catch(err => err)
      .then(({ data }) => data);
    commit("setClass", myClass);
  }
};

export const getters = {
  // getters
  teachers: state => state.teachers,
  teacher: state => state.teacher,
  loading: state => state.loading,
  status: state => state.status,
  profile: state => state.profile,
  applicationID: state => state.applicationID,
  myClass: state => state.myClass,
  user: state => state.user
};
