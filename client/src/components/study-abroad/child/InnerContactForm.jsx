import React from 'react'
import { MdOutlineDialpad } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { SlCreditCard } from "react-icons/sl";
import suitCap from "/assets/images/study-abroad/suitandcap.png"; 

function InnerContactForm() {
    const options = ["Student Visa", "Tourist Visa", "Commercial Visa", "Residence Visa", "Working Visa"]
  return (
    <div className='bg-[#edf3f5] pt-5 pb-3'>
        <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[60px]">
            <div className="my-5 bg-white grid xl:grid-cols-2">
                <div className="grid gap-4 px-[20px] md:px-[50px] py-5 z-0">
                    <div className="flex gap-2 items-center">
                        <span className='text-green-500 text-xl font-black'><MdOutlineDialpad /></span>
                        <h6 className='uppercase text-xs font-semibold tracking-wide'>contactus</h6>
                    </div>
                    <h3 className='lg:w-4/6 text-2xl font-black tracking-wide'>Do you have questions or went more
                    information?</h3>

                    <form className='grid gap-4'>
                        <div className="grid xl:grid-cols-2 gap-3">
                            <div className="relative flex items-center">
                                <span className='absolute left-3 text-xl text-slate-500'><GoPerson /></span>
                                <input type="text" placeholder='Jhon Doel' className='w-full px-4 py-3 ps-5 placeholder:text-slate-400 border-2 focus:outline-none focus:bg-[#edf3f5] rounded-lg' />
                            </div>
                            <div className="relative flex items-center">
                                <span className='absolute left-3 text-xl text-slate-500'><MdOutlineAlternateEmail /></span>
                                <input type="email" placeholder='jhondoel@gmail.com' className='w-full px-4 py-3 ps-5 placeholder:text-slate-400 border-2 focus:outline-none focus:bg-[#edf3f5] rounded-lg' />
                            </div>
                        </div>

                        <div className="grid xl:grid-cols-2 gap-3">
                            <div className="relative flex items-center">
                                <span className='absolute left-3 text-xl text-slate-500'><SlCreditCard/></span>
                                <select className='w-full px-4 py-3 ps-5 text-slate-500 border-2 focus:outline-none focus:bg-[#edf3f5] rounded-lg' >
                                    {options.map((item, ind) => (
                                        <option key={ind} className=''>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative flex items-center">
                                <span className='absolute left-3 text-xl text-slate-500'><FiPhoneCall /></span>
                                <input type="text" placeholder='8867584758' className='w-full px-4 py-3 ps-5 placeholder:text-slate-400 border-2 focus:outline-none focus:bg-[#edf3f5] rounded-lg' />
                            </div>
                        </div>

                        <div className="relative flex">
                            <span className='absolute top-5 left-3 text-xl text-slate-500'><LuMessagesSquare /></span>
                            <textarea rows={5} className="w-full px-4 py-3 ps-5 border-2 focus:outline-none focus:bg-[#edf3f5] rounded-lg" placeholder='Write Your Message...'></textarea>
                        </div>
                        <button className='px-5 py-3 w-fit bg-[#0c9] text-white font-semibold rounded-lg'>
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="hidden xl:block z-10">
                    <img src={suitCap} className='h-full object-fill' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default InnerContactForm