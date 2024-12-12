import React from 'react'

import data from '../../../Data/pricing.json'

const Pricing = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-[4%] text-center'>
        <div className="mb-6">
            <span className='text-blue font-medium uppercase'>{ data.section.title }</span>
            <h2 className='text-main font-bold text-[3.5rem] leading-snug mb-6'>The Best Solutions <br /> For Our Clients</h2>
            {/* <h2>{ data.section.head }</h2> */}
        </div>

        <div className="flex justify-center gap-10">
            {
                data.plans.map((item, index) => (
                    <div className={`w-[100%] h-[600px] p-5 rounded-3xl flex flex-col justify-center ${ index === 1 ? 'bg-blue' : 'bg-grayLight'}`} key={index}>
                        <span className={`text-[1.1rem] font-medium ${index === 1 ? 'text-white' : 'text-blue'}`}>{ item.name }</span>
                        <h4 className={`text-[4rem] font-bold mb-3 ${index === 1 ? 'text-white' : 'text-blue'}`}>{ item.price }</h4>
                        {
                            item.features.map((feature, featureindex) => (
                                <li key={featureindex} className={`list-none mb-[1.5rem] text-[1.1rem] ${index === 1 ? 'text-white' : 'text-blue'}`}>{feature }</li>
                            ))
                        }
                        <a className={`text-[1.2rem] font-bold 1-[100%] p-3 mt-10 inline-grid rounded-lg text-white transition-all duration-200 hover:bg-gray ${index === 1 ? 'bg-black' : 'bg-blue'}`} href={item.linker}>{ item.texter }</a>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Pricing