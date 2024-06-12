"use client";
import { useRouter } from "next/navigation";
type modalType = {
    paramOne: string,
    paramTwo: string
}

const ModalSuccess = ({ paramOne, paramTwo }: modalType) => {
    const router = useRouter();
    setTimeout(() => {
        router.push(`/workout-page/${paramOne}/${paramTwo }`);
    }, 3000);
    return (
        <div className="w-[426px] h-[278px] shadow absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white rounded p-[40px] flex flex-col items-center justify-center">
            <h2 className="text-xl text-center mb-10">Ваш прогресс засчитан!</h2>
            <div className="rounded bg-bright-green">
                <svg className="w-[56px] h-[56px] fill-white">
                    <use xlinkHref="/img/sprite.svg#icon-checked" />
                </svg>
            </div>
        </div>
    );
};

export default ModalSuccess;
