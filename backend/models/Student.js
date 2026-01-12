import mongoose from 'mongoose';


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
        }
    ]
})

const Student = mongoose.model("Student", studentSchema);
export default Student;