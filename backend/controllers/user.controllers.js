const Course = require("../models/courseModel")
const User = require("../models/userModel")
const File = require("../models/fileModel")

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