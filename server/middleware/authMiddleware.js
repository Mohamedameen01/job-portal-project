import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  const token = req.headers["authorization-user"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No Token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_CODE);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
