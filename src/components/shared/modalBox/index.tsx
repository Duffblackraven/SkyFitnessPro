import React from 'react'
import Button from '../button'

const ModalBox = ({ buttonTitle, title, children }: { buttonTitle: string, title: string, children: React.ReactNode }) => {
  return (

    <div className='overflow-auto bg-white p-8 w-360px max-h-[595px] min-h-48 rounded-lg flex flex-col justify-between shadow-md gap-[10px]'>
      <h2 className='text-lg mb-7'>{title}</h2>
      {children}
      <Button type='submit' green>{buttonTitle}</Button>
    </div>
  )
}

export default ModalBox