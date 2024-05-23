import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex gap-2.5">
    <Image src="/img/logo.svg" alt="Логотип" width={29} height={20} />
    <Image
      src="/img/SkyFitnessPro.svg"
      alt="Логотип"
      width={183}
      height={29}
    />
  </div>
  )
}
// используется в хедере, модалках, автоизации, реге и прочее.
//модалки я сделаю сам. 
export default Logo