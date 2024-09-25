import Image from 'next/image'
import React from 'react'
import Muge_1 from '../public/assets/muge-1.jpg'
import Muge_2 from '../public/assets/muge-2.jpg'
import Muge_3 from '../public/assets/muge-3.jpg'

const Body = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center flex-1 space-y-5 px-3 lg:px-0 mx-auto mt-6 sm:mt-9 mb-9'>
                <figure>
                    <Image 
                        src={Muge_2} 
                        width={700} 
                        height={700}  
                        alt='muge-logo-1' 
                        loading='lazy' 
                        quality={20} 
                    />
                </figure>
                <figure>
                    <Image 
                        src={Muge_1} 
                        width={700} 
                        height={700} 
                        alt='muge-logo-2' 
                        loading='lazy' 
                        quality={20}
                    />
                </figure>
                <figure>
                    <Image 
                        src={Muge_3} 
                        width={700} 
                        height={700} 
                        alt='muge-logo-3' 
                        loading='lazy' 
                        quality={20}
                    />
                </figure>
            </div>
        </>
    )
}

export default Body