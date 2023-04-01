const Course = require("../models/courseModel")

exports.createCourse = async (req, res) => {
    const { name } = req.body

    //creating course
    const course = new Course()
    course.name = name
    await course.save()

    res.json(course)
}