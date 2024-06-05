import React from 'react'

const PrimaryHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <h1 className='text-2xl mb-10 text-black'>{children}</h1>
  )
}
//используется на странице упражнения(тренировки), подписывается название тренировки.
//на главной странице
//на скил кард
//на странице курса 
export default PrimaryHeading