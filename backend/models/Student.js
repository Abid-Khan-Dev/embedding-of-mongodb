import mongoose, { mongo } from 'mongoose';


const studentSchema = new mongoose.Schema({
    name: String,
    rollNo: Number,
    courses: [
        {
            courseName: {
                type: String,
                required: true
            },
            teacherName: String,
        },
    ],
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }
})

const Student = mongoose.model("Student", studentSchema);
export default Student;