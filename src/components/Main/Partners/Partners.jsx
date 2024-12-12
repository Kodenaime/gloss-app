import React from 'react'

import data from '../../../Data/partners.json'

const Partners = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-[4%] text-center'>
        <div className="">
            <span className='text-blue uppercase text-[1rem]'>{ data.section.title }</span>
            <h2 className='mt-[0.5rem] text-[3.5rem] font-bold heading-sung mb-[4rem]'>Entrusted Us With <br /> Website Promotion</h2>
        </div>

        <div className="grid2 text-center items-center">
            {
              data.logos.map((item, index) => (
                <div className="flex justify-center" key={index}>
                  <img src={require(`../../../assets/${item.src}`)} alt={item.alt} className='w-[140px] hover:-translate-y-1 duration-200 ease-linear transform'  />
                </div>
              ))
            }
        </div>

    </div>
  )
}

export default Partners