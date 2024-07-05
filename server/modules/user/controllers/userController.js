const setUserInfoForm = async (req, res) => {
  try {
    const { image, dob, age, gender, hobbies, interests, qualification } =
      req.body;
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
