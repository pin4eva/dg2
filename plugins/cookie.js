import axios from "axios";
import Cookies from "js-cookie";

// export default ({ store }) => {
//   const teacher = Cookies.get("Teacher");
//   if (teacher) {
//     const teacher1 = JSON.parse(teacher);
//     //   console.log("Teacher cokkie", teacher1);
//     store.commit("teachers/setTeacher", teacher1);
//     store.commit("teachers/setLoggedIn", true);
//   } else {
//     store.commit("teachers/setLoggedIn", false);
//   }
// };

export default async ({ store }) => {
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
    // let className = await axios
    //   .post(`${process.env.baseUrl}/api/class/single/${t.className}`)
    //   .then(({ data }) => data)
    //   .catch(err => new Error(err));
    // console.log(t.teacher.className);
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
