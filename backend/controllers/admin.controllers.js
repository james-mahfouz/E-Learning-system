const Course = require("../models/courseModel")

exports.createCourse = async (req, res) => {
    const { name } = req.body

    const course = await Course.create({ name })

    res.json(course)
}