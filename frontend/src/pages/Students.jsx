
import { useState } from 'react';
import image from '../assets/licensed-image.jfif'
import Model from '../components/Model';
import axios from 'axios';
function Students() {
    const [showModel, setShowModel] = useState(false)

    async function handleSubmit(data) {
        // await axios.get()
        console.log(data, 'submit');
        const formatedData = {
            name: data.name,
            rollNo: Number(data.rollNo),
            courses: [
                {
                    courseName: data.courseName,
                    teacherName: data.teacherName
                }
            ],
            teacher: data.teacher

        }
        await axios.post('http://localhost:3000/students', formatedData)
        setShowModel(false)

    }


    return (
        <>
            <div className="space-y-6 p-6">
                <div className="flex gap-4 justify-between items-center flex-wrap">
                    <h1 className="text-2xl font-bold text-gray-800"> Students</h1>


                    <div className="flex-1 flex gap-4 max-w-[500px]">
                        <input type="text" className="px-3 py-2 w-full bg-gray-100  rounded-md outline-0 focus:ring focus:ring-blue-600 focus:text-blue-700  placeholder-gray-400 border border-gray-400" placeholder="Search by name" />

                        <button className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 border border-blue-300 hover:border-gray-400"
                            onClick={() => setShowModel(true)}
                        >Add</button>
                    </div>


                </div>

                <div className="flex mt-20">
                    <div className="border border-gray-300 pl-5 px-2 pt-4 w-[320px]  rounded-lg ">
                        <div className='flex justify-between relative'>
                            <h2 className="text-gray-800 font-semibold text-2xl">item</h2>
                            <div className='h-20 w-20 rounded-md overflow-hidden absolute top-1 right-3'>
                                <img src={image} alt="" className='h-full object-cover w-full' />
                            </div>
                        </div>
                        <div className='flex gap-2 mt-3 text-xs'>
                            <span className='font-medium text-gray-700'>Email</span>
                            <span> Abidkhan2381@gmail.com</span>
                        </div>
                        <div className='flex gap-2 text-xs'>
                            <span className='font-medium text-gray-700'>Email</span>
                            <span> Abidkhan2381@gmail.com</span>
                        </div>
                        <div className='flex gap-2 text-xs'>
                            <span className='font-medium text-gray-700'>Email</span>
                            <span> Abidkhan2381@gmail.com</span>
                        </div>
                        <div className='flex justify-end mt-4 gap-1  border-t border-gray-300 p-2'>
                            <button onClick={() => setShowModel(true)} className='text-gray-700 hover:text-blue-500 px-2 py-1 text-xs border border-gray-400 hover:border-blue-500 rounded-lg '>Edit</button>
                            <button className='text-gray-700  px-2 py-1 border border-gray-500 hover:border-red-600 hover:text-red-600 rounded-lg text-xs'>Delete</button>
                        </div>
                    </div>
                </div>
            </div >
            {showModel && <Model onSubmit={handleSubmit} onClose={() => setShowModel(false)} />}
        </>
    )
}

export default Students;