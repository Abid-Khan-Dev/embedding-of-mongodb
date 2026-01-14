
import { useState } from 'react';
import image from '../assets/licensed-image.jfif'
import Model from '../components/Model';
import axios from 'axios';
function Teachers() {
    const [showModel, setShowModel] = useState(false)
    const [form, setForm] = useState({
        name: '',
        phone: '',
        salary: '',

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/teachers', form)
        setShowModel(false)
        setForm({
            name: '',
            phone: '',
            salary: ''
        })
    }

    return (
        <>
            <div className="space-y-6 p-6">
                <div className="flex gap-4 justify-between items-center flex-wrap">
                    <h1 className="text-2xl font-bold text-gray-800"> Teachers</h1>


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
            {showModel && <>
                <div
                    onClick={() => setShowModel(false)}
                    className='fixed inset-0 z-50 bg-black/50 flex justify-center items-center backdrop-blur-xs'>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className='max-w-md w-full bg-white  p-4 rounded-2xl shadow-xl'>
                        <h2 className='text-2xl text-gray-800 font-semibold border-b border-gray-300 pb-2'>Teacher</h2>
                        <form className='mt-10 space-y-3' onSubmit={handleSubmit}>
                            <div>
                                <label className='text-sm font-medium block  text-gray-700 mb-1' htmlFor="name">Name</label>
                                <input className='w-full py-2 px-4 text-gray-700 outline-0 focus:ring focus:ring-blue-600 rounded-xl shadow border border-gray-300' type="text" id='name' name='name' value={form.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label className='text-sm font-medium block  text-gray-700 mb-1' htmlFor="phone">Phone</label>
                                <input className='w-full py-2 px-4 text-gray-700 outline-0 focus:ring focus:ring-blue-600 rounded-xl shadow border border-gray-300' type="tel" id='phone' name='phone' value={form.phone} onChange={handleChange} />
                            </div>

                            <div>
                                <label className='text-sm font-medium block  text-gray-700 mb-1' htmlFor="salary">Salary</label>
                                <input className='w-full py-2 px-4 text-gray-700 outline-0 focus:ring focus:ring-blue-600 rounded-xl shadow border border-gray-300' type="number" id='salary' name='salary' value={form.salary} onChange={handleChange} />
                            </div>

                            <div className='flex justify-end gap-2 '>
                                <button className='py-2 px-3 bg-gray-500 hover:bg-gray-700 rounded-md text-white' onClick={() => setShowModel(false)}>Close</button>
                                <button className='py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white rounded-md' type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default Teachers;