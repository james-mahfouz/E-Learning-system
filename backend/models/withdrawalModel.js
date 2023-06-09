const mongoose = require('mongoose');

const withdrawalSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Course',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
});

const Withdrawal = mongoose.model('Withdrawal', withdrawalSchema);
module.exports = Withdrawal;
