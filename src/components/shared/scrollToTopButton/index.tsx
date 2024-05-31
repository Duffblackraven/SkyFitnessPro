"use client";

import React from "react";

const ScrollToTopButton = ({ green = true }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`w-127 bg-bright-green text-black text-nowrap rounded py-4 px-[26px] text-sm ${green ? 'bg-bright-green hover:bg-bright-green-hov active:bg-black active:text-white' : 'bg-white border border-black hover:bg-light-grey active:bg-dark-grey'}`}
    >
      Наверх ↑
    </button>
  );
};
//компонент для кнопки прокрутки для главной страницы

export default ScrollToTopButton;