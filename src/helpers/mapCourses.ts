import { getCourseById } from "@/api/api"
import { courseType } from "@/types/types"

export const mapCourses = async (data: {[key: string]: courseType}) => {
    const result = []
    for (const key in data) {
      const course = await getCourseById({ id: key })
      result.push({_id: key, name: course.nameRU, time: course.time, duration: course.duration, level: course.level, progress: data[key].progress })

    }
    return result
  }