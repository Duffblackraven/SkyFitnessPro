import React from 'react'
import ModalBox from '../shared/modalBox'
import Input from '../shared/input/input'
import { exerciseType } from '@/types/types'

const ProgressModal = ({ exercise, action }: {exercise?: exerciseType[], action: (data: FormData) => Promise<void>}) => {
  return (
    <form action={action} className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-[426px]'>
      <ModalBox title={"Мой прогресс"} buttonTitle={"Сохранить"}>


        {exercise?.map((elem, index) => <label key={index}>

    

          Сколько раз Вы сделали {elem.name}
          <Input min={0} name={`progress_${index}`} placeholder="0" type="number" />
        </label>)}

      </ModalBox>
    </form>
  )
}
//через тенарник менять текст, что бы не плодить компоненты
//прям внутри модалки, потом
export default ProgressModal