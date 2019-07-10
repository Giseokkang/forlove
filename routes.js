// Global

const HOME = "/";
const BOARD = "/board";

// User

const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/editProfile";

const routes = {
  home: HOME,
  board: BOARD,

  user: USER,
  userDetail: id => {
    if (id) {
      return `/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE
};

export default routes;
