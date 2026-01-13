import mongose from 'mongoose'

const teacherSchema = new mongose.Schema({
    name: String,
    phone: Number,
    salary: Number

})

const Teacher = mongose.model('Teacher', teacherSchema)
export default Teacher;