const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/UserModel");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  // console.log(req.cookies);
  // console.log(token);
  if (!token) {
    return res.status(401).json({ status: false,message:"Login to view your dashboard" });
  }
  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UserModel.findById(data.id);
    // console.log(user);
    if (!user) return res.json({ status: false,message:"user not found!" });

    req.user = user; // Attach user to req
    next(); // Move to next middleware or route
  } catch (err) {
    return res.json({ status: false });
  }
};
