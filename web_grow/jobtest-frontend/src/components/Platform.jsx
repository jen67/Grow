import React from 'react'
import personalized from '../assets/11.png'

function Platform() {
  return (
    <div className='w-full bg-white py-11 px-4'>
        <header className='uppercase font-bold text-xl md:text-4xl sm:text-3xl text-center pb-4 '>why use our platform</header>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={personalized} alt="/" />
            <div className='flex flex-col justify-center'>
                <h2 className='font-bold text-[#00df9a] text-xl mx-auto'>Personalized Interview Training</h2>
                <p>Tailor your interview preparation with personalized training sessions, ensuring you focus on areas that matter most for your target job.</p>
            </div>
        </div>
    </div>
  )
}

export default Platform
