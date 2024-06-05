export type courseType = {
    _id: string,
    description: string,
    directions: string[],
    duration: number,
    fitting: string[],
    level: number,
    nameEN: string,
    nameRU: string,
    order: number,
    time: string,
    workouts: string[],
    progress: number,
}

type pickCourseType = Pick<courseType, "_id"  | "time" | "progress" | "level" | "duration">
export type mapCourseType = {
    name: string,

} & pickCourseType

export type exerciseType = {
    name: string,
    quantity: number,
}

export type workoutType = {
    name: string,
    _id: string,
    video:string,
    exercises?:  exerciseType[]

}