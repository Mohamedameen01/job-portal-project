import React from 'react'
import bgImg from "/assets/images/study-abroad/bg-logo.jpg"
import logoImg from "/assets/images/study-abroad/logo.png"

function IconBox() {
  return (
    <div style={{backgroundImage: `url(${bgImg})`}} className='w-full h-full bg-no-repeat bg-cover rounded-2xl'>
        <div className="p-5 grid justify-center gap-4">
            <img src={logoImg} className='mx-auto object-cover' />
            <h3 className='text-center text-2xl font-bold tracking-wide'>Assured Approval- <br />
            Guaranteed</h3>
            <button className='w-fit mx-auto px-5 py-3 bg-[#20c997] hover:bg-[#0091ff] text-white font-semibold rounded-lg'>Get in Touch</button>
        </div>
    </div>
  )
}

export default IconBox