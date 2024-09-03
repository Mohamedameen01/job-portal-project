import Employee from "../../../models/employee.schema.js";
import Employer from "../../../models/employer.schema.js";
import User from "../../../models/user.schema.js";

export const setUserInfoForm = async (req, res) => {
  try {
    const { image, dob, age, gender, hobbies, interests, qualification } =
      req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);
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
    const userId = req.user._id;
    const { role } = req.body;

    if (!["Employer", "Employee"].includes(role)) {
      return res.status(400).json({ message: "Invalid role selected" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    user.role = role;
    await user.save();

    if (role === "Employer") {
      const isExisted = await Employer.findOne({ employerId: userId });

      if (!isExisted) {
        const employer = new Employer({
          employerId: userId,
        });
        await employer.save();
      }
    } else if (role === "Employee") {
      const isExisted = await Employee.findOne({
        employeeId: userId,
      });

      if (!isExisted) {
        const employee = new Employee({
          employeeId: userId,
        });
        await employee.save();
      }
    }

    res.status(200).json({ message: "Completed", role: user.role });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server Error" });
  }
};

export const getOtherUsers = async (req, res) => {
  try {
    const userId = req.user._id;
    const otherUsers = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );
    return res.status(200).json(otherUsers);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
