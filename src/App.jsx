import React from 'react'
import UserCard from './components/UserCard'
import InfoCard from './components/InfoCard'
import { users, infoCards } from './components/Data'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 pt-10'>
      <h1 className='text-3xl font-bold text-center mb-8'>User Cards</h1>
      <div className='flex flex-wrap justify-center gap-6 mb-12'>
        {users.map((user, index) => (
          <UserCard
            key={index}
            img={user.img}
            name={user.name}
            job={user.job}
            department={user.department}
            date={user.date}
          />
        ))}
      </div>

      <h1 className='text-3xl font-bold text-center mb-8'>Info Cards</h1>
      <div className='flex flex-wrap justify-center gap-6 mb-12'>
        {infoCards.map((info, index) => (
          <InfoCard
            key={index}
            img={info.img}
            title={info.title}
            text={info.text}
          />
        ))}
      </div>
    </div>
  )
}

export default App