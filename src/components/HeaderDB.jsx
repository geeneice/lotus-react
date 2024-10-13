import React from 'react'
import flowB from '../assets/flowbite_search-solid.png'
import africanMan from '../assets/AfricanMan.png' 
import vector from '../assets/vector.png'


const HeaderDB = ({text, navName}) => {
  return (
    <div className='bg-white flex justify-between px-4 py-4 rounded-lg'>
      <div className='flex place-items-center gap-4'>
        <h1 className='font-medium text-[20px] border-r pr-4 border-gray'>{navName}</h1>
        <img src={flowB} alt="" />
        <p>Search</p>
      </div>

      <div className='flex place-items-center gap-4'>
        <h3>{text}</h3>
        <img src={africanMan} alt="" />
        <img  src={vector} alt="" />



      </div>
    </div>
  )
}

export default HeaderDB