import React from 'react'

const PrimaryHeading = ({children}) => {
  return (
    <h2 className='text-xl mb-10'>{children}</h2>
  )
}
//используется на странице упражнения(тренировки), подписывается название тренировки.
//на главной странице
//на скил кард
//на странице курса 
export default PrimaryHeading