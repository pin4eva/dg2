let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
export const state = () => ({
  day: day
});

export const mutations = {
  // mutation
};

export const actions = {
  // Actions
};

export const getters = {
  // getters
  loggedIn(state) {
    return state.teachers.loggedIn;
  },
  token: state => state.teachers.token,
  day: state => state.day
};
