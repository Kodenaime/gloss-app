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

        </div>

    </div>
  )
}

export default Pricing