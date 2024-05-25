import { getCourses } from "@/api/api";
<<<<<<< HEAD
import CourseCard from "@/components/shared/courseCard";
import { mapCourses } from "@/helpers/mapCourses";
import { courseData } from "@/lib/courseData";
=======
import Header from "@/components/header";
import CourseCard from "@/components/shared/courseCard";
import ScrollToTopButton from "@/components/shared/scrollToTopButton";
import { mapCourses } from "@/helpers/mapCourses";
import { courseData } from "@/lib/courseData";
import Image from "next/image";
>>>>>>> 95ec70581bdd3d200d42d2f4dc566393f83301ca
import Link from "next/link";


export default async function Home() {
<<<<<<< HEAD
  const data = await getCourses()
  console.log(data)
  const courses = await mapCourses(data)
=======
  const data = await getCourses();
  console.log("Количество курсов:", data.length);
  console.log("Описание курсов:", data);
  
  const courses = await mapCourses(data);
  // const courses = await mapCourses(data)
>>>>>>> 95ec70581bdd3d200d42d2f4dc566393f83301ca
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between grid gap-[15px] mt-[50px] mb-[69px] pl-left pr-right">
        <section className="mb-[60px]">
          <div className="flex gap-1.5 items-start">
            <h1 className="text-[60px] leading-[110%] font-semibold text-black mb-10">
              Начните заниматься спортом и улучшите качество жизни
            </h1>
            <Image
              className=""
              src="/img/green_message.png"
              alt=""
              width={300}
              height={120}
            />
          </div>
        </section>
        <section>
          <div className="grid grid-cols-card gap-10">
          {courses.map((item) =>

<<<<<<< HEAD
      {courses.map((item) =>




        <CourseCard item={item} key={item.id} name={item.name} time={item.time} duration={item.duration} progress={item.progress} img={courseData[item.id].smImg} />



=======
            <CourseCard item={item} key={item.id} name={item.name} time={item.time} duration={item.duration} progress={item.progress} img={courseData[item.id].smImg} />
>>>>>>> 95ec70581bdd3d200d42d2f4dc566393f83301ca

          )}
          </div>
        </section>

<<<<<<< HEAD
      )}


    </main >

  );
}
=======
      </main >
      <footer className="mt-10 mb-10 text-center text">
      <ScrollToTopButton />
      </footer>
    </>
  );
}
// import { getCourses } from "@/api/api";
// import CourseCard from "@/components/shared/courseCard";
// import { mapCourses } from "@/helpers/mapCourses";
// import { courseData } from "@/lib/courseData";
// import Link from "next/link";


// export default async function Home() {
//   const data = await getCourses()
//   console.log(data)
//   const courses = await mapCourses(data)
//   return (

//     <main className="flex min-h-screen flex-col items-center justify-between p-24">

//       {courses.map((item) =>




//         <CourseCard item={item} key={item.id} name={item.name} time={item.time} duration={item.duration} progress={item.progress} img={courseData[item.id].smImg} />





//       )}


//     </main >

//   );
// }
>>>>>>> 95ec70581bdd3d200d42d2f4dc566393f83301ca

