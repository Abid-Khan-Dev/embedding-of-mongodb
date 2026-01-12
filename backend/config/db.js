import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/embedding')
        console.log('MongoDB is Connected');

    } catch (error) {
        console.log(error.message)

    }
}
export default connectDb