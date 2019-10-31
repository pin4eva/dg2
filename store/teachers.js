import axios from "axios";

export const state = () => ({
  loading: false,
  teachers: [],
  teacher: {},
  status: null
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
  },
  addTeacher: (state, payload) => {
    state.teachers.push(payload);
  },
  setStatus: (state, payload) => {
    state.status = payload;
  }
};

export const actions = {
  // Actions
  nuxtServerinit({ commit }) {
    axios
      .get(`${process.env.baseUrl}/api/teacher`)
      .then(({ data }) => {
        console.log("dispatched from nuxtServerInit:", data);

        commit("setTeachers", data);
      })
      .catch(err => {
        console.log(err);
      });
  },
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
  async addTeacher({ commit }, payload) {
    commit("setLoading", true);
    const teacher = await axios
      .post(`${process.env.baseUrl}/api/teacher/new`, payload)
      .then(({ data }) => {
        return data;
      })
      .catch(err => new Error(err));
    commit("addTeacher", teacher);
    commit("setLoading", false);
  },
  async login({ commit }, payload) {
    await axios
      .post(`${process.env.baseUrl}/api/teacher/login`, payload)
      .then(({ data }) => {
        if (data.success) {
          commit("setTeacher", data);
          this.$router.push("/dashboard/admin");
        } else {
          commit("setStatus", false);
        }
      })
      .catch(err => {
        new Error(err);
      });
  },
  async register({ commit }, payload) {
    const newTeacher = await axios
      .post(`${process.env.baseUrl}/api/teacher/register`, payload)
      .then(data => {
        return data;
      })
      .catch(err => new Error(err));
    if (newTeacher) {
      commit("setStatus", true);
    } else {
      commit("setStatus", false);
    }
  }
};

export const getters = {
  // getters
  teachers: state => state.teachers,
  teacher: state => state.teacher,
  loading: state => state.loading,
  status: state => state.status
};
