const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email })

    if (existingUser) return res.status(409).json({ message: "Email already exists" })

    const user = new User();
    if (role) user.role = role;
    user.name = name;
    user.email = email;
    user.password = password;

    await user.save();
    const { password: hashedPassword, ...newUser } = user.toJSON()
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY)
    res.status(201).json({ "user": newUser, "token": token })
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (!user) return res.status(404).json({ message: "invalid Credentials" })

    const isMatched = user.matchPassword(password)
    if (!isMatched) return res.status(404).json({ message: "Invalid Credential" })

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY)

    const { password: hashedPassword, ...newUser } = user.toJSON()
    res.json({ "token": token, "user": newUser })
}



