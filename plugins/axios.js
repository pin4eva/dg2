import axios from "axios";

export default ({ store }) => {
  axios.defaults.headers.common["Authorization"] = token;
};
