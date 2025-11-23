import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 bg-primary/3 '>

        <div className='flex flex-col items-center justify-center  py-10 border-b border-gray-500/30' >
            <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
            <p className='max-w-[590px] mt-6 text-center'>Immerse yourself in a library of thought-provoking content where every article unlocks a new possibility. This is your exclusive destination for the rare knowledge and inspiration required to elevate your daily life.</p>
        </div>

        {/*<div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
            

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {footer_data.map((section, index)=> (
                    <div key={index}>
                        <h3 className='font-semibold text-base text-graty-900 md:mb-5 mb-2'>{section.title}</h3>
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link, i)=> (
                                <li key={i}>
                                    <a href='#' className='hover:underline transition'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>



        </div>*/}
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 QuickBlog  Karmugilan - All Right Reserved.</p>
    </div>
  )
}

export default Footer
