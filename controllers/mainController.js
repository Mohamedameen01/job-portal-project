export const getHomePage = (req, res) => {
  res.render("main", { title: "Home" });
};

export const getAboutPage = (req, res) => {
  res.render("main", { title: "About" });
};

export const getContactPage = (req, res) => {
  res.render("main", { title: "Contact" });
};
