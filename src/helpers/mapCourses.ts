import { getCourseById } from "@/api/api"

export const mapCourses = async (data) => {
    const result = []
    for (const key in data) {
      const course = await getCourseById({ id: key })
      result.push({id: key, name: course.nameRU, time: "25-50", duration: 25, progress: 40 })

    }
    return result
  }