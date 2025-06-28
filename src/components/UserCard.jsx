import React from 'react'

const UserCard = ({img, name, job, department, date}) => {
  return (
    <div className='bg-white p-4 rounded shadow w-60 text-center'>
        <img src={img} alt={name} className='w-24 h-24 mx-auto rotate-full object-cover mb-2'/>
        <h2 className='font-semibold'>{name}</h2>
        <p className='text-sm  text-gray-600'>{job}</p>
        <p className='text-xs  text-gray-400'>{department}</p>
        <p className='text-xs  text-gray-400'>{date}</p>
    </div>
  )
}

export default UserCard