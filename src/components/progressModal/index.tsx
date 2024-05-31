import React from 'react'
import ModalBox from '../shared/modalBox'
import Input from '../shared/input/input'

const ProgressModal = ({ exercise, action }) => {
  return (
    <form action={action}>
      <ModalBox title={"Мой прогресс"} buttonTitle={"Сохранить"}>

        {exercise.map((elem, index) => <label>
          Сколько раз Вы сделали {elem.name}
          <Input min={0} name={`progress_${index}`} placeholder='0' type="number" />
        </label>)}

      </ModalBox>
    </form>
  )
}
//через тенарник менять текст, что бы не плодить компоненты
//прям внутри модалки, потом
export default ProgressModal