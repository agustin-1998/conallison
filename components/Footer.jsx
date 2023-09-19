import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className='w-full bg-white p-7'>
                <ul className='max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between md:space-x-5 space-y-5 md:space-y-0'>
                    <li>
                        <Link href={'http://conallison.com/'} target='_blank'>
                            <Image src={'/assets/conallison.jpg'} width={200} height={50} alt='conallison-logo' />
                        </Link>
                    </li>
                    <div className='flex flex-col lg:flex-row md:space-x-5 space-y-5 md:space-y-0 text-lg'>
                        <li>
                            <span className='text-black'>E-mail: </span>
                            <Link href={'mailto:mailto:conallison@conallison.com'} className='text-black underline hover:text-blue-700'>
                                conallison@conallison.com
                            </Link>
                        </li>
                        <li className='flex space-x-3'>
                            <span className='text-black'><Image src={'/assets/wpp-icon.png'} width={30} height={30} loading='lazy' alt='whatsapp-icon' /></span>
                            <Link href={'https://wa.me/5491122974908'} className='text-black underline hover:text-blue-700'>
                                +54 91122974908
                            </Link>
                        </li>
                    </div>
                </ul>
            </footer>
        </>
    )
}
