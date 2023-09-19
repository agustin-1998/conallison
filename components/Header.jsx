import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className='w-full fixed top-0 bg-white p-3 mx-auto'>
                <nav className='max-w-5xl mx-auto'>
                    <ul className='flex justify-between items-center'>
                        <li>
                            <Link href={'http://conallison.com/'} target='_blank'>
                                <Image src={'/assets/conallison.jpg'} width={200} height={50}  alt='conallison-logo' loading='lazy' />
                            </Link> 
                        </li>
                        <li>
                            <Link href={'http://conallison.com/'} target='_blank'>
                                <Image src={'/assets/muge.webp'} width={200} height={50}  alt='conallison-logo' loading='lazy' />
                            </Link> 
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header