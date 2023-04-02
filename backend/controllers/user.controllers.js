const Course = require("../models/courseModel")
const User = require("../models/userModel")

exports.enroll = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const userId = req.user._id

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