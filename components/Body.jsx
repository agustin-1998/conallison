import Image from 'next/image'
import React from 'react'

const Body = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center flex-1 space-y-5 px-3 lg:px-0 mx-auto mt-6 sm:mt-9 md:mb-9'>
                <figure>
                    <Image 
                        src={'/assets/muge-2.jpg'} 
                        width={700} 
                        height={700}  
                        alt='conallison-logo-1' 
                        loading='lazy' 
                        quality={20} 
                    />
                </figure>
                <figure>
                    <Image 
                        src={'/assets/muge-1.jpg'} 
                        width={700} 
                        height={700} 
                        alt='conallison-logo-2' 
                        loading='lazy' 
                        quality={20}
                    />
                </figure>
                <figure>
                    <Image 
                        src={'/assets/muge-3.jpg'} 
                        width={700} 
                        height={700} 
                        alt='conallison-logo-3' 
                        loading='lazy' 
                        quality={20}
                    />
                </figure>
            </div>
        </>
    )
}

export default Body