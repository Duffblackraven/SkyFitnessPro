import React from 'react'

const SecondaryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-[40px] font-semibold mt-20 mb-10 text-black">{children}</h3>
  )
}

export default SecondaryHeading