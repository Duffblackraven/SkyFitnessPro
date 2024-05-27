import SelectWorkoutModal from '@/components/selectWorkoutModal'
import React from 'react'

const Workouts = ({params}) => {
  return (
   <SelectWorkoutModal id={params.id}/>
  )
}

export default Workouts