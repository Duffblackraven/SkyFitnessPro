import React from "react";

type AreaBlockProp = {
  text: string,
}

const AreaBlock = ({ text } :AreaBlockProp) => {
  return (
    <div className="flex items-center">
      <svg className="w-[19px] h-[19px] mr-[11px]">
        <use xlinkHref="/sprite.svg#icon-star" />
      </svg>
      <p className="text-base">{text}</p>
    </div>
  );
};

export default AreaBlock;
