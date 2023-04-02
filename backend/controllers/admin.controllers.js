const Course = require("../models/courseModel")
const File = require("../models/fileModel")

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

exports.upload_file = async (req, res) => {
    req.upload.single('file')(req, res, async function (err) {
        if (err) {
            console.log("hello world")
        }

        const { filename, path: filePath } = req.file;
        const file = new File({
            name: filename,
            path: filePath,
        });

        try {
            await file.save();
            res.status(201).json(file);
        } catch (err) {
            // Handle error
        }
    });
};

