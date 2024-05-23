import Image from 'next/image'
import React from 'react'

const SkillCard = ({ src, alt }) => {
  return (
    <div>
      <Image width={1160} height={310} alt={alt} src={src} />
    </div>
  )
}

export default SkillCard