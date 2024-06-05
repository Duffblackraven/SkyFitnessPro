import React from 'react'
import Button from '../button'

const ModalBox = ({ buttonTitle, title, children }: {buttonTitle: string, title: string, children: React.ReactNode}) => {
  return (

    <div className='bg-white p-8 w-360px min-h-48 rounded-lg flex flex-col justify-between shadow-md'>
      <h2>{title}</h2>
      {children}
      <Button type='button' green>{buttonTitle}</Button>
    </div>
  )
}
// используется везде.белый  блок
export default ModalBox