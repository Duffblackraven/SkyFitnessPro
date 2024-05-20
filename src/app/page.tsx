import { getCourses } from "@/api/api";
import ModalBox from "@/components/shared/modalBox";
import signUp from "@/firebase/firebase";
import { transormData } from "@/helpers/transformData";
import Image from "next/image";

export default async function Home() {
  const courses = await getCourses()
  signUp()
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
