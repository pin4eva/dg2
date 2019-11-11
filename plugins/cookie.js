import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
let day = moment().format("dddd");

export default async ({ store }) => {
  /**
   * Weak Number and day check
   */
  // let weekNumber = Cookies.get("weekNumber");
  // if (weekNumber) {
  //   if (day == "Monday") {
  //     weekNumber = Number(weekNumber) + 1;
  //     store.commit("setWeek", weekNumber);

  //     Cookies.set("weekNumber", weekNumber);
  //   }
  // }
  /**
   *  Teachers Auth
   */
  let token = Cookies.get("Token");
  let teacher = Cookies.get("Teacher");
  axios.defaults.headers.common["Authorization"] = token;

  if (token) {
    store.commit("teachers/setToken", token);
    if (teacher) {
      store.commit("teachers/setTeacher", teacher);
    }
    const t = await axios
      .get(`${process.env.baseUrl}/api/teacher/me`, {
        headers: {
          Authorization: token
        }
      })
      .then(({ data }) => {
        store.commit("teachers/setTeacher", data.teacher);
        store.commit("teachers/setLoggedIn", true);
        return data;
      })
      .catch(err => err);

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
    store.commit("teachers/setLoggedIn", false);
  }
};
