import React from 'react'

const HeadingFour = ({children}: {children: React.ReactNode}) => {
  return (
    <h4 className="text-base font-normal text-black">{children}</h4>
  )
}
//в карточке курса, в профиле где имя пользователя(на макете Сергей)
//в модалке выберите тренировку
//в модалке на странице тренировки, где написано какие упражнения делаются
//в модалке мой прогресс
export default HeadingFour