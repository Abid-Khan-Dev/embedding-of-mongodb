import express from 'express';
import cors from 'cors'
import Student from './models/Student.js';
import connectDb from './config/db.js';
import Teacher from './models/Teacher.js';
const app = express();


app.use(cors())
connectDb()
app.use(express.json());

// get all Students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find()
        return res.status(200).json({ students })
    } catch (error) {
        return res.status(500).json(error.message)

    }
})

app.post('/students', async (req, res) => {
    try {
        console.log(req.body);

        await Student.create(req.body);
    } catch (error) {
        return res.status(500).json(error.message)

    }
})




app.get('/teachers', async (req, res) => {
    try {
        const teachers = await Teacher.find()
        return res.status(200).json({ teachers })
    } catch (error) {
        return res.status(500).json(error.message)

    }
})



app.post('/teachers', async (req, res) => {
    try {
        console.log(req.body);

        await Teacher.create(req.body);
        return res.status(201).json({ msg: 'Teacher is Created' })
    } catch (error) {
        return res.status(500).json(error.message)

    }
})


app.listen(3000, () => {
    console.log('Backend is running on Port 3000');

})