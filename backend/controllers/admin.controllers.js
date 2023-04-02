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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });
