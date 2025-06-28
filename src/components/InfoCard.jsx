import React from 'react'

const InfoCard = ({img, title, text}) => {
  return (
    <div className='bg-white shadow rounded w-60 overflow-hidden'>
        <img src={img} alt={title}  className='h-32 w-full object-cover'/>
        <div className='p-4'>
            <h3 className='font-semibold text-mb mb-2'>{title}</h3>
            <p className='text-sm text-gray-600'>{text}</p>
            <button className='mt-3 px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-300'>{text}
                Read more
            </button>
        </div>
    </div>
  )
}

export default InfoCard