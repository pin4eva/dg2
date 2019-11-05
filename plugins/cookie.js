import axios from "axios";
import Cookies from "js-cookie";

export default ({ store }) => {
  const teacher = Cookies.get("Teacher");
  const teacher1 = JSON.parse(teacher);
  //   console.log("Teacher cokkie", teacher1);
  store.commit("teachers/setTeacher", teacher1);
};
