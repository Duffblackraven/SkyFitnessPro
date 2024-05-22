import React from 'react'
import ProgressBar from '../shared/progressBar'

const ExerciseBlock = () => {
  return (
    <div >
      <ProgressBar name={"exerciseName"} min={0} max={100} value={40} id={"exerciseId"} title={"Наклоны вперед 0%"}/>
    </div>
  )
}

export default ExerciseBlock