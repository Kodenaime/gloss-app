import React from 'react'

import data from '../../../Data/about.json'

const About = () => {
  return (
    <div className='w-[1200px] mx-auto py-[4%]'>
        <div className="flex items-start gap-20">
            <div className="w-[50%]">
                <span className='text-[1rem] font-normal text-blue uppercase'>{ data.title }</span>
                <h2 className='text-[4rem] font-bold leading-snug text-main mb-2'>{ data.heading }</h2>
                <p className='text-[1.1rem] font-medium text-gray mb-8'>{ data.description }</p>
                <a className='bg-main text-white px-5 py-3 rounded-lg hover:bg-blue transition-all duration-200 ease-linear' href={ data.link.href }>{ data.link.text }</a>
            </div>

            <div className="w-[50%] grid grid-cols-auto-fit-18rem gap-6">
                {
                    data.features.map((item, index) => (
                        <div key={index} className="">
                            <img src={require(`../../../assets/${item.image}`)} alt={item.title} />
                            <h3>{ item.title }</h3>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default About