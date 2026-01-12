import React, { useState } from 'react'

function Model({ onClose, onSubmit, }) {
    const [form, setForm] = useState({
        name: '',
        rollNo: '',
        courseName: '',
        teacherName: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form)
    }
    return (
        <div
            onClick={onClose}
            className='fixed inset-0 z-50 bg-black/50 flex justify-center items-center backdrop-blur-xs'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='max-w-md w-full bg-white  p-4 rounded-2xl shadow-xl'>
                <h2 className='text-2xl text-gray-800 font-semibold border-b border-gray-300 pb-2'>Model Title</h2>

                <form className='mt-10 space-y-3' onSubmit={handleSubmit}>
                    <div>
                        <label className='text-sm font-medium block  text-gray-700 mb-1' htmlFor="name">Name</label>
                        <input className='w-full py-2 px-4 text-gray-700 outline-0 focus:ring focus:ring-blue-600 rounded-xl shadow border border-gray-300' type="text" id='name' name='name' value={form.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='text-sm font-medium block  text-gray-700 mb-1' htmlFor="rollNo">Roll No</label>
                        <input className='w-full py-2 px-4 text-gray-700 outline-0 focus:ring focus:ring-blue-600 rounded-xl shadow border border-gray-300' type="number" id='rollNo' name='rollNo' value={form.rollNo} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='text-sm font-medium block  text-gray-700 mb-1' htmlFor="courseName">Courses</label>
                        <select className='w-full py-2 px-4 text-gray-700 outline-0 focus:ring focus:ring-blue-600 rounded-xl shadow border border-gray-300' id='courseName' name='courseName'
                            onChange={handleChange}
                            value={form.courseName}
                        >
                            <option value="" disabled>Select a course</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-sm font-medium block  text-gray-700 mb-1' htmlFor="teacher">Teacher</label>
                        <select className='w-full py-2 px-4 text-gray-700 outline-0 focus:ring focus:ring-blue-600 rounded-xl shadow border border-gray-300' id='teacher' name='teacherName'
                            onChange={handleChange}
                            value={form.teacherName}
                        >
                            <option value="" disabled>Select a teacher</option>
                            <option value="ibrahim">Ibrahim Sir</option>
                            <option value="abid">Abid</option>
                        </select>
                    </div>

                    <div className='flex justify-end gap-2 '>
                        <button className='py-2 px-3 bg-gray-500 hover:bg-gray-700 rounded-md text-white' onClick={onClose}>Close</button>
                        <button className='py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white rounded-md' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Model;