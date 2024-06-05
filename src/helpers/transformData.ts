import { courseType, mapCourseType } from "@/types/types"

export function transormData (data: {[key: string]: courseType}) {
    const result = []
    for (const key in data) {
      
       
       result.push(data[key])
    }
   return result
}