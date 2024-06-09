import React from 'react'

type ButtonPropType = {
  type: "button" | "submit",
  children: string,
  onClick?: () => void,
  green: boolean,
}

const Button = ({ children, onClick, type, green }:ButtonPropType)  => {
  return (
  <button type={type} onClick={onClick} className={`w-full text-black text-nowrap rounded py-4 px-[26px] text-sm ${green ? 'bg-bright-green hover:bg-bright-green-hov active:bg-black active:text-black' : 'bg-white border border-black'} `}>
    {children}
  </button>
  )
}
export default Button