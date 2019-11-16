import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
let day = moment().format("dddd");

export default async ({ store }) => {
  let token = Cookies.get("Token");
  let profile = Cookies.get("Profile");
  axios.defaults.headers.common["Authorization"] = token;

  if (token) {
    if (profile == "Parent") {
      //
      let parent = await axios
        .get(`${process.env.baseUrl}/api/parent/me`, {
          headers: {
            Authorization: token
          }
        })
        .then(({ data }) => data)
        .catch(err => err);
      store.commit("parents/setParent", parent.parent);
      return store.commit("setLoggedIn", true);
    }
    if (profile == "Teacher") {
      const t = await axios
        .get(`${process.env.baseUrl}/api/teacher/me`, {
          headers: {
            Authorization: token
          }
        })
        .then(({ data }) => {
          store.commit("teachers/setTeacher", data.teacher);
          store.commit("setLoggedIn", true);
          return data;
        })
        .catch(err => err);
      if (!t.teacher) return store.commit("setLoggedIn", false);

      if (t.teacher.className) {
        let className = await axios
          .get(`${process.env.baseUrl}/api/class/single/${t.teacher.className}`)
          .then(({ data }) => data)
          .catch(err => new Error(err));
        store.commit("teachers/setClass", className);
      } else {
        store.commit("teachers/setClass", {});
      }
    } else {
      return store.commit("setLoggedIn", false);
    }
  }
};
