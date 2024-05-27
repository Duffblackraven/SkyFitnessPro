import React from 'react'
import ProgressBar from '../shared/progressBar'

const ExerciseBlock = ({title, name}) => {
  return (
    <div >
      <ProgressBar name={"exerciseName"} min={0} max={100} value={40} id={"exerciseId"} title={title}/>
    </div>
  )
}

export default ExerciseBlock