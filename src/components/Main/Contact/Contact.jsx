import React from 'react'

import data from '../../../Data/contact.json'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-[4%]'>
        <div className="flex items-center justify-between">
            <div className=""><img src={require(`../../../assets/${data.analysis.image.src}`)} className='w-[100%]' /></div>

            <div className="">
                <span className='text-gray text-[1rem] uppercase'>{ data.analysis.title }</span>
                <h2 className='mb-3 text-[3.5rem] font-bold leading-snug'>{ data.analysis.head }</h2>
                <p className='text-[1.1rem] font-medium text-gray mb-8'>{ data.analysis.desc }</p>

                <div className="flex flex-col items-start gap-5 p-10 bg-grayLight rounded-3xl">
                    {
                       data.analysis.form.fields.map((field, index) => (
                        <input key={index} type={field.type} placeholder={field.placeholder} className='bg-white w-[100%] p-4 rounded-lg' />
                       ))
                    }
                    <input type={data.analysis.form.buttons.type} 
                      value={data.analysis.form.buttons.value}  
                      className='bg-black text-white w-[100%] p-4 rounded-lg hover:bg-blue transition-all duration-200 ease-linear cursor-pointer'
                    />
                </div>
            </div>

        </div>
    </div>
   
  )
}

export default Contact