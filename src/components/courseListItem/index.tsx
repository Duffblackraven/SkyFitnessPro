import React from 'react'

type CourseListItem = {
  number: string,
  text: string,
}

const CourseListItem = ({number, text}:CourseListItem) => {
  return (
    <div className='rounded-small bg-dark-gradient flex gap-x-6 items-center p-5'>
      <p className='text-3xl text-bright-green'>{number}</p>
      <p className='text-white text-base'>{text}</p>
    </div>
  )
}

export default CourseListItem