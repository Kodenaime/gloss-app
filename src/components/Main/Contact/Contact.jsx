import React from 'react'

import data from '../../../Data/contact.json'

const Contact = () => {
  return (
    <div className='mx-w-[1200px] mx-auto py-[4%]'>
        <div className="flex items-center justify-between">
            <div className=""><img src={require(`../../../assets/${data.analysis.image.src}`)} className='w-[100%]' /></div>

            <div className="">
                <span className='text-gray text-[1rem] uppercase'>{ data.analysis.title }</span>
                <h2>{ data.analysis.head }</h2>
                <p>{ data.analysis.desc }</p>

                <div className="flex flex-col items-start gap-5 p-10 bg-grayLight rounded-3xl">
                    {
                        data.analysis.form.fields.map((field, index) = (
                            <input key={index} type={field.type} placeholder={field.placeholder} className='' />
                        ))
                    }
                    <input type={data.analysis.form.buttons.type} 
                      value={data.analysis.form.buttons.value}  
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact