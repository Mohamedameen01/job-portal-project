import User from "../../../models/user.schema.js";

export const setUserInfoForm = async (req, res) => {
  try {
    const { image, dob, age, gender, hobbies, interests, qualification } =
      req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (
      !image ||
      !dob ||
      !age ||
      !gender ||
      !hobbies ||
      !interests ||
      !qualification
    ) {
      return res.status(400).json({
        message: "Please provide the information.",
      });
    }

    user.picture = image;
    user.dateOfBirth = dob;
    user.age = age;
    user.gender = gender;
    user.hobbies = hobbies;
    user.interests = interests;
    user.highQualification = qualification;
    await user.save();

    res.status(200).json({ message: "Information Added." });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const setUserRoleSelection = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    user.role = req.body.role;
    await user.save();

    res.status(200).json(user.role);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
