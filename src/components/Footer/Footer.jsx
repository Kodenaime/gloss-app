import React from 'react'

import data from '../../Data/footer.json'

const Footer = () => {
  return (
    <div className='bg-blue py-[6%] text-white'>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 text-center">

        <div className="mb-7">
            <ul className='flex gap-32 justify-center text-[1.2rem]'>
              {
                data.links.map((item, index) => (
                  <li className='hover:text-black transition-all duration-200 ease-linear' key={index}><a href={item.href}>{ item.title }</a></li>
                ))
              }
            </ul>
        </div>

        <div className='mb-7 flex justify-center gap-10 items-center'>
          <ul className="flex justify-center gap-10 text-[1.3rem] font-bold">
            <li>{ data.contacts.phone }</li>
            <li>{ data.contacts.email }</li>
          </ul>

          <div >
            <ul className="flex justify-center gap-5 text-[1.3rem]">
              {
                data.medias.map((media, socialIndex) => (
                  <li key={socialIndex}><a href={media.hrefs}><i className={ media.iconClass }></i></a></li>
                ))
              }
            </ul>
          </div>

        </div>

        <div className="">{ data.copy }</div>

      </div>
    </div>
  )
}

export default Footer