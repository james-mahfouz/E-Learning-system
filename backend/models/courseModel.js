const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    withdrawals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Withdrawal',
    }],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course