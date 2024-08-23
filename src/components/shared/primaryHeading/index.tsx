import React from 'react'

const PrimaryHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <h1 className='text-[30px] mb-[10px] text-black'>{children}</h1>
  )
}

export default PrimaryHeading