import React from 'react'

import logo from '../../assets/logo.png'
import data from '../../Data/Header.json'
import image from '../../assets/rocket.webp'

const Header = () => {
  return (
    <div className='relative p-8 px-[4%] background bg-cover bg-center h-screen'>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <div><img src={logo} alt="website logo" className='w-[180px]' /></div>

            <div>
                <ul className='flex items-center gap-9'>
                    {
                        data.menus.map((item, index) => (
                            <li key={index}><a className='text-[1.1rem] font-semibold text-main hover:text-white transition-all duration-200 ease-linear' href={ item.link }>{ item.title }</a></li>
                        ))
                    }
                </ul>
            </div> 
        </div>

        <div className="">
            <div className="">
                <h1>
                    {
                        data.header.title.split(' ').map((word, index) => {
                            if (word === data.header.highlight) {
                                return (
                                    <span key={index} className='text-white'>{ word } {' '}</span>
                                );
                            }
                            return `${word} `;
                        })
                    }
                </h1>  
                <p dangerouslySetInnerHTML={`{_html: data.description.text}`} />
                <div className="">
                    {
                        data.buttons.map((button, index) => (
                            <a href={button.link} key={index}>{ button.text }</a>
                        ))
                    }
                </div>
            </div>
            <div className="">
                <img src={ image } alt="" className="w-[500px]" />
            </div>
        </div>
     
    </div>
  )
}

export default Header