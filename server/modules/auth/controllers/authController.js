import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Employee from "../../user/models/employeeSchema.js";

export const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await Employee.findOne({ email });

    if (!employee) {
      return res.status(400).json({ message: "Employee Not Found" });
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = await jwt.sign(
      { id: employee._id, name: employee.name },
      process.env.JWT_CODE,
      { expiresIn: "2d" }
    );
    res.status(201).json({ token, employee });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const registerEmployee = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const employee = await Employee.findOne({ email });

    if (employee) {
      return res.status(400).json({ message: "Email Already Exists" });
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    const newEmployee = new Employee({
      username,
      email,
      password: hasedPassword,
    });
    await newEmployee.save();
    return res.status(200).json({ message: "Employee Registration Completed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
