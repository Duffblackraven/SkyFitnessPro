import React from 'react'

const PrimaryHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <h1 className='text-2xl mb-10 text-black'>{children}</h1>
  )
}

export default PrimaryHeading