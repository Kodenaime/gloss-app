import React from 'react'

import data from '../../Data/footer.json'

const Footer = () => {
  return (
    <div className='bg-blue py-[6%] text-white'>
      <div className="">

        <div className="">
            <ul>
              {
                data.links.map((item, index) => (
                  <li key={index}><a href={item.href}>{ item.title }</a></li>
                ))
              }
            </ul>
        </div>

        <div>
          <li>{ data.contacts.phone }</li>
          <li>{ data.contacts.email }</li>

          <div className="">
            <ul>
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