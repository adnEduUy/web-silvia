import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactLink = () => {
  return (
    <Link
      href="https://wa.me/+59898221632"
      className='inline-flex items-center gap-3 py-1 px-3 rounded bg-[#128c7e]'
    >
      <Image src="/svg/WhatsApp.svg" height={20} width={30} alt="" />
      <span className='font-semibold text-white'>
        comprar
      </span>
    </Link>
  )
}

export default ContactLink