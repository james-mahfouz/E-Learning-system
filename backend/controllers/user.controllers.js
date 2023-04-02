const Course = require("../models/courseModel")
const User = require("../models/userModel")
const File = require("../models/fileModel")
const Withdrawal = require("../models/withdrawalModel")

exports.enroll = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const userId = req.user._id

        const user_check = await User.findById(userId);
        if (user_check.courses.includes(courseId)) {
            return res.status(400).json({
                message: `User ${userId} is already enrolled in course ${courseId}`,
            });
        }

        const course = await Course.findByIdAndUpdate(courseId, {
            $push: { students: userId }
        })

        const user = await User.findByIdAndUpdate(userId, {
            $push: { courses: courseId }
        })

        res.status(200).json({
            message: `User ${userId} enrolled in course ${courseId}`,
            data: { course, user }
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.get_files = async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json({ data: files });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.get_courses = async (req, res) => {
    try {
        const courses = await Course.find({}, { _id: 1, name: 1 });
        res.status(200).json({ data: courses })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

exports.get_enrolled_courses = async (req, res) => {
    const userId = req.user._id
    try {
        const user = await User.findById(userId).populate('courses', "-students -withdrawals -__v")
        res.status(200).json(user.courses)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Server error" })
    }
}

exports.addWithdrawalForm = async (req, res) => {
    const courseId = req.params.courseId
    const userId = req.user._id
    console.log(userId)
    try {
        const withdrawal = new Withdrawal({
            course: courseId,
            user: userId,
        })

        await withdrawal.save()

        res.status(200).json({ message: "Withdrawal form sent successfully" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Server error" })
    }
}