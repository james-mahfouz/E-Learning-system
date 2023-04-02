const Course = require("../models/courseModel")

exports.createCourse = async (req, res) => {
    const { name } = req.body

    const course = new Course()
    course.name = name
    await course.save()

    res.json(course)
}


exports.get_users_courses = async (req, res) => {
    try {
        const courses = await Course.find().populate({
            path: 'students',
            select: '-role -password -courses'
        });
        res.status(200).json({
            message: "Users fetched successfully",
            data: { courses }
        })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}