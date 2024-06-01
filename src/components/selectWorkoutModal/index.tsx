import React from 'react'
import HeadingFour from '../shared/headingFour'
import { getCourseWorkouts } from '@/api/api'
import Link from 'next/link'

const SelectWorkoutModal = async ({ id }) => {
  const workoutList = await getCourseWorkouts({ id })
  return (
    <div className="bg-white rounded relative shadow-base text-black">
      <HeadingFour>Выберите тренировку</HeadingFour>

      {workoutList.map((elem) =>
        <Link key={id} href={`/workout-page/${id}/${elem.id}`}>
          <div>
            {elem.name}
          </div>
        </Link>)}
    </div>
  )
}

export default SelectWorkoutModal