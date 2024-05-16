import React from 'react'

const ModalBox = () => {
  return (
    
    <div className='bg-white p-8 w-360px min-h-48 rounded-lg flex flex-col justify-between shadow-md'>
      <h2>Заголовок</h2>
      <input placeholder='введите имя'/>
      <input placeholder='введите имя'/>
      <button>Кнопка</button>
    </div>
  )
}
// используется везде.белый  блок
export default ModalBox