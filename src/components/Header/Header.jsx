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

        <div className="w-full max-w-[1200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-4">
            <div className="">
                <h1 className='text-[4.4rem] font-bold leading-snug mb-4'>
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
                {/* <p dangerouslySetInnerHTML={`{_html: data.description.text}`} /> */}
                <p className='text-lg text-gray-700 leading-relaxed space-y-4 mb-6'>Extreact real business value from social media. Ensuring the best return <br /> 
                  on investement for your bespoke SEO campaign requirement.</p>
                <div className="flex items-center gap-7">
                    {
                        data.buttons.map((button, index) => (
                            <a href={button.link} key={index} className='bg-main text-white rounded-md py-3 px-7 text-base transition-all duration-200 ease-linear hover:bg-blue'>{ button.text }</a>
                        ))
                    }
                </div>
            </div>
            <div className="">
                <img src={ image } alt="" className="w-full" />
            </div>
        </div>
     
    </div>
  )
}

export default Header