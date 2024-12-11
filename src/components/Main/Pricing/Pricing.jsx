import React from 'react'

import data from '../../../Data/pricing.json'

const Pricing = () => {
  return (
    <div>
        <div className="">
            <span>{ data.section.title }</span>
            <h2>{ data.section.head }</h2>
        </div>

        <div className="">
            {
                data.plans.map((item, index) => (
                    <div className="" key={index}>
                        <span>{ item.name }</span>
                        <h4>{ item.price }</h4>
                        
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Pricing