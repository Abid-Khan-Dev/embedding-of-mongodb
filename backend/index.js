import express from 'express';
import cors from 'cors'
import Student from './models/Student.js';
import connectDb from './config/db.js';
const app = express();


app.use(cors())
connectDb()
app.use(express.json());

// get all Students
app.get('/students', async (req, res) => {
    try {
        const students = Student.find()
        return res.status(200).json({ students })
    } catch (error) {
        return res.status(500).json(error.message)

    }
})

app.post('/students', async (req, res) => {
    try {
        console.log(req.body);
        await Student.create(req.body)
    } catch (error) {
        return res.status(500).json(error.message)

    }
})

app.listen(3000, () => {
    console.log('Backend is running on Port 3000');

})