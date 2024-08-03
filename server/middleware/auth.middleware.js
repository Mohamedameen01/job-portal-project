import jwt from "jsonwebtoken";
import User from "../models/user.schema.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization-user"];

    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Authoriazation header not found" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "No Token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_CODE);

    if (!decoded) {
      return res.status(401).json({ message: "Can't verify token" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
