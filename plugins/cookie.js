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

export default ({ store }) => {
  const token = Cookies.get("Token");
  if (token) {
    store.commit("teachers/setToken", token);
  }
};
