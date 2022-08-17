import React from "react";

const MainCards = ({ id, author, content, date, imageUrl, title }) => {
  return (
    <div className="rounded-[10px] shadow-xl cursor-pointer hover:scale-[1.01]">
      {/* Cart image */}
      <div className="h-44">
        <img
          src={`${imageUrl}`}
          className="rounded-[10px] block m-auto w-full h-full object-cover"
        />
      </div>
      {/* Cart body */}
      <div className="p-2">
        <h2 className="text-[#3D3D3D] text-sm leading-[17px]">{title}</h2>
        <div className="border-b border-[#DADADA] w-4/5 my-2" />
        <p className="text-[#646464] text-[13px] leading-[17px]">{content}</p>
      </div>
      {/* Cart footer */}
      <div className="flex items-center gap-4 px-2 py-4">
        <div className="flex items-center gap-1">
          <img src="/images/icon-clock.svg" />
          <span className="">{date.split(",")[0]}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/images/icon-user.svg" />
          <span className="">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
