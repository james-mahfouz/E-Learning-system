const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email })

    if (existingUser) return res.status(409).json({ message: "Email already exists" })

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;

    await user.save();
    const { password: hashedPassword, ...newUser } = user.toJSON
}