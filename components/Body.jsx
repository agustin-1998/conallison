import Image from 'next/image'
import React from 'react'

const Body = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center flex-1 space-y-5 px-3 lg:px-0 mx-auto mt-6 sm:mt-9 mb-9'>
                <figure>
                    <Image 
                        src="/assets/poster-1.webp"
                        width={700} 
                        height={700}  
                        alt='muge-logo-1' 
                        loading='lazy' 
                        quality={60} 
                    />
                </figure>
                <figure>
                    <Image 
                        src="/assets/poster-3.webp"
                        width={700} 
                        height={700} 
                        alt='muge-logo-2' 
                        loading='lazy' 
                        quality={60}
                    />
                </figure>
                <figure>
                    <Image 
                        src="/assets/poster-2.webp"
                        width={700} 
                        height={700} 
                        alt='muge-logo-3' 
                        loading='lazy' 
                        quality={60}
                    />
                </figure>
            </div>
        </>
    )
}

export default Body