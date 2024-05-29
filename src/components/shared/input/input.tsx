import React from 'react'

type InputProps = {
  placeholder: string,
  type: string,
  onChange: (e:any)=>void,
  name: string,
}

const Input = ({ placeholder, type, onChange, name, value }:InputProps) => {
  return (
    <input value={value} className='rounded-lg border text-sm w-full py-4 px-[18px]' type={type} name={name} placeholder={placeholder} onChange={onChange} />
  )
}
// Принимает плейсхолдер, тип, ончейндж, вэлью, нейм.
export default Input