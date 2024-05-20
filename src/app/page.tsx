import { getCourses } from "@/api/api";


export default async function Home() {
  const courses = await getCourses()
 
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {courses?.map(
        (course) => <div key={course._id}>
          {course.nameRU}
        </div>


      )}

    </main>
  );
}
