export const home = (req, res) => {
  res.render("home", { pageTitle: "HOME" });
};

export const board = (req, res) => {
  res.render("board", { pageTitle: "BOARD" });
};

export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail" });
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile" });
};
