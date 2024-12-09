import React from 'react'

import data from '../../../Data/social.json'

const Social = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-[4%]'>
        <div className="flex items-center">
            <div className="w-[50%] grid">
                {
                    data.metrics.map((item, index) => (
                        <div className="" key={index}>
                            <h4 className='text-blue text-[3.5rem] font-bold mb-1'>{item.value}</h4>
                            <span className='text-gray'>{item.label}</span>
                        </div>
                    ))
                }
            </div>

            <div className="w-[50%]">
                <span className='text-gray text-[1rem] uppercase'>{ data.content.Titler }</span>
                <h2 className='mt-3 mb-3 text-[3.5rem] font-bold leading-snug'>{ data.content.heading }</h2>
                <p className='text-gray font-medium mb-8'>{ data.content.description }</p>
                <a className='bg-blue text-white px-5 py-3 rounded-lg hover:bg-black transition-all duration-200 ease-linear' href={ data.content.hrefs }>{ data.content.linker }</a>
            </div>

        </div>

    </div>
  )
}

export default Social