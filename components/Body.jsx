import Image from 'next/image'
import React from 'react'

const Body = () => {
    return (
        <>
            <section className='max-w-5xl mx-auto mt-6 sm:mt-9 mb-[27px]'>
                <div className='flex flex-col justify-center items-center space-y-5 px-3 lg:px-0'>
                    <figure>
                        <Image 
                            src={'/assets/poster-1.webp'} 
                            width={700} 
                            height={700}  
                            alt='conallison-logo' 
                            loading='lazy' 
                            quality={20} 
                        />
                    </figure>
                    <figure>
                        <Image 
                            src={'/assets/poster-2.webp'} 
                            width={700} 
                            height={700} 
                            alt='conallison-logo' 
                            loading='lazy' 
                            quality={20}
                        />
                    </figure>
                </div>
            </section>
        </>
    )
}

export default Body