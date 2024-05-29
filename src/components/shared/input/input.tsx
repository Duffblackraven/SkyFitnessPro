import React from 'react'

type InputProps = {
  placeholder: string,
  type: string,
  name: string,
}

const Input = ({ placeholder, type, name }:InputProps) => {
  return (
    <input className='rounded-lg border text-sm w-full py-4 px-[18px]' type={type} name={name} placeholder={placeholder}  />
  )
}
// Принимает плейсхолдер, тип, ончейндж, вэлью, нейм.
export default Input