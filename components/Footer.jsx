import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className='w-full bg-white p-4 sm:p-7'>
                <ul className='max-w-5xl mx-auto flex flex-col items-center justify-center sm:justify-between sm:flex-row space-y-5 sm:space-y-0'>
                    <li>
                        <Link href={'http://muge.com.ar/'} target='_blank'>
                            <Image src={'/assets/muge.webp'} width={480} height={192} alt='muge-logo' style={{ width: 'auto', height: 'auto', maxWidth: '200px' }} />
                        </Link>
                    </li>
                    <div className='flex items-center justify-center space-x-5 text-lg'>
                        <li className='flex space-x-3 hover:border-b hover:border-b-black'>
                            <Link href={'https://www.muge.com.ar'} target='_blank'>
                                <Image src={'/assets/cart.svg'} width={30} height={30} loading='lazy' alt='cart-icon' />
                            </Link>
                        </li>
                        <li className='flex space-x-3 hover:border-b hover:border-b-black'>
                            <Link href={'mailto:comercioexterior@conallison.com'}>
                                <Image src={'/assets/email-icon.svg'} width={30} height={30} loading='lazy' alt='email-icon' />
                            </Link>
                        </li>
                        <li className='flex space-x-3 hover:border-b hover:border-b-black'>
                            <Link href={'https://u.wechat.com/kEtsNUXP5vNeZ9lEl5GZKlY?s=2'} target='_blank'>
                                <Image src={'/assets/wechat-icon.svg'} width={30} height={30} loading='lazy' alt='wechat-icon' />
                            </Link>
                        </li>
                        <li className='flex items-center space-x-2 hover:border-b hover:border-b-black'>
                            <div className='flex items-center'>
                                <Link href={'https://wa.me/5491123310789'} target='_blank' className='flex items-center space-x-1'>
                                    <Image src={'/assets/wpp-icon.png'} width={25} height={25} loading='lazy' alt='whatsapp-sales' />
                                    <span className='text-xs text-gray-600'>Export Sales</span>
                                </Link>
                            </div>
                        </li>
                        <li className='flex space-x-3 hover:border-b hover:border-b-black'>
                            <Link href={'https://www.instagram.com/Muge_carnes/'} className='text-black underline hover:text-blue-700' target='_blank'>
                                <Image src={'/assets/instagram-icon.svg'} width={30} height={30} loading='lazy' alt='instagram-icon' />
                            </Link>
                        </li>
                    </div>
                </ul>
            </footer>
        </>
    )
}
