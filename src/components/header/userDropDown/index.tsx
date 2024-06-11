import React from "react";
import Link from "next/link";
import { logoutUser } from "@/actions";

const UserDropDown = ({ userName }: { userName: string }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="p-[30px] rounded-3xl rounded-[30px w-[266px] grid gap-[34px] text-center absolute top-16 right-0 shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]  bg-white"
    >
      <div className="grid gap-2.5">
        <p className="text-sm text-black">{userName}</p>
      </div>
      <div className="grid gap-2.5">
        <Link
          href="/profile"
          className="text-sm w-full rounded-full bg-bright-green py-4 px-[26px] text-black"
        >
          Мой профиль
        </Link>
        <Link href="/signin">
          <button
            onClick={() => logoutUser()}
            type="submit"
            className="text-sm w-full rounded-full border-black border py-4 px-[26px] text-black"
          >
            Выйти
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDropDown;
