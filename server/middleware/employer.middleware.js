export const checkEmployerRole = async (req, res, next) => {
  try {
    const user = req.user;

    if (user.role !== "Employer") {
      return res
        .status(400)
        .json({ message: "There is something wrong with role selection" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
