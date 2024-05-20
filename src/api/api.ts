import { transormData } from "@/helpers/transformData"

const API_URL = 'https://skyfitnesspro-4eb46-default-rtdb.europe-west1.firebasedatabase.app/'

//получение всех курсов на главной странице 

export async function getCourses() {
    try {
    const response = await fetch(`${API_URL}/courses.json`)
    if (!response.ok){
        throw new Error('Заглушечка-хуеюшечка')
    }
    const data = await response.json()
    return transormData(data)
    } catch (error) {
        throw error
    }
}
// функция для получения всех тренировок для отрисовки отдельной страницы тренировки, или для 
//модалки в которой перечислены тренировки.
export async function getWorkouts() {
    try {
    const response = await fetch(`${API_URL}/workouts.json`)
    if (!response.ok){
        throw new Error('Заглушечка-хуеюшечка')
    }
  const data = await response.json()
  return transormData(data)
    } catch (error) {
        throw error
    }
}
//функция получить курс по айди
export async function getCourseById({id}) {
    try {
        const response = await fetch(`${API_URL}/courses/${id}.json`)
        if (!response.ok){
            throw new Error('Заглушечка-хуеюшечка')
        }
      const data = await response.json()
      return data
        } catch (error) {
            throw error
        }
}

//функция получения воркаута по айди
export async function getWorkoutById({id}) {
    try {
        const response = await fetch(`${API_URL}/workouts/${id}.json`)
        if (!response.ok){
            throw new Error('Заглушечка-хуеюшечка')
        }
      const data = await response.json()
      return data
        } catch (error) {
            throw error
        }
}