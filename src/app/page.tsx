import { getCourses } from "@/api/api";
import Header from "@/components/header";
import CourseCard from "@/components/shared/courseCard";
import ScrollToTopButton from "@/components/shared/scrollToTopButton";
import Image from "next/image";

// пример функции для получения данных об авторизации пользователя
async function getUser() {

  return { isAuthenticated: false, userName: "" };
}

export default async function Home() {
  const courses = await getCourses();
  const user = await getUser();

  return (
    <>
      <Header isAuthenticated={user.isAuthenticated} userName={user.userName} />
      <main className="pl-left pr-right">
        <section className="mb-[60px]">
          <div className="flex gap-1.5 items-start">
            <h1 className="text-[57px] leading-[110%] font-semibold text-black mb-10">
              Начните заниматься спортом и улучшите качество жизни
            </h1>
            <Image
              className="mr-8"
              src="/green_message.png"
              alt=""
              width={300}
              height={120}
            />
          </div>
        </section>
        <section>
          <div className="grid grid-cols-card gap-10">
            <CourseCard name={'Йога'} time={'25-50'} duration={25} progress={40} img={'/card_yoga.png'} showProgressAndButton={false} />
            <CourseCard name={'Стретчинг'} time={'25-50'} duration={25} progress={0} img={'/card_stretch.png'} showProgressAndButton={false} />
            <CourseCard name={'Зумба'} time={'25-50'} duration={25} progress={100} img={'/card_zumba.png'} showProgressAndButton={false} />
            <CourseCard name={'Степ-аэробика'} time={'25-50'} duration={25} progress={0} img={'/card_step.png'} showProgressAndButton={false} />
            <CourseCard name={'Бодифлекс'} time={'25-50'} duration={25} progress={100} img={'/card_body.png'} showProgressAndButton={false} />
          </div>
        </section>
        <footer className="mt-10 text-center text">
          <ScrollToTopButton />
        </footer>
      </main>
    </>
  );
}

