import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex gap-2.5">
        <Image src="/img/logo.svg" alt="Логотип" width={29} height={20} />
        <Image
          src="/img/SkyFitnessPro.svg"
          alt="Логотип"
          width={183}
          height={29}
        />
      </div>
    </Link>
  )
}

export default Logo