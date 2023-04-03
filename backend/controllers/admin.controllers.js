const Course = require("../models/courseModel")
const File = require("../models/fileModel")
const Withdrawal = require("../models/withdrawalModel")
const User = require("../models/userModel")

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
        const publicPath = `public/${filename}`

        const file = new File({
            name: filename,
            path: publicPath,
        });

        try {
            await file.save();
            res.status(201).json(file);
        } catch (err) {
            res.status(500).json({ message: "could not save the file" })
        }
    });
};

exports.get_withdrawal = async (req, res) => {
    try {
        const withdrawal = await Withdrawal.find({ status: "pending" }).populate({
            path: 'user',
            select: '-role -password -courses'
        }).populate({
            path: "course",
            select: '-students -withdrawals'
        })

        console.log("quitting")
        console.log(withdrawal)
        res.status(200).json(withdrawal)
    } catch (e) {
        console.log(e)
    }
}

exports.approve_withdrawal = async (req, res) => {
    const { user_id, course_id, withdrawal_id } = req.body;

    try {
        const withdrawal = await Withdrawal.findByIdAndUpdate(
            withdrawal_id,
            { status: 'approved' },
            { new: true }
        );

        const user = await User.findByIdAndUpdate(
            user_id,
            { $pull: { courses: course_id } },
            { new: true }
        );

        const course = await Course.findByIdAndUpdate(
            course_id,
            { $pull: { students: user_id } },
            { new: true }
        );

        res.status(200).json({
            message: 'Withdrawal approved and course removed from user and student removed from course',
            withdrawal,
            user,
            course,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
