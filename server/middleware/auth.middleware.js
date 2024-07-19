import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization-user"];

    if (!authHeader) {
      return req
        .status(401)
        .json({ message: "Authoriazation header not found" });
    }

    const token = authHeader.split(" ")[1];
    console.log("Token", token);

    if (!token) {
      return res
        .status(401)
        .json({ message: "No Token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_CODE);
    if (!decoded) {
      return res.status(401).json({ message: "Can't verify token" });
    }
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
