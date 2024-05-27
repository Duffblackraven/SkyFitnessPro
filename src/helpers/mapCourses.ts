import { getCourseById } from "@/api/api"

export const mapCourses = async (data) => {
    const result = []
    for (const key in data) {
      const course = await getCourseById({ id: key })
      result.push({id: key, name: course.nameRU, time: course.time, duration: course.duration, level: course.level, progress: 40 })

    }
    return result
  }