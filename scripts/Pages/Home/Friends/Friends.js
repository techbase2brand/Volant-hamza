import React from "react";
import './friends.css';
import EssentialOils from "../EssentialOils/EssentialOils";
import friends from "./friend.jpg";

const Friends = () => {
  return (
    <div>
      <div className="">
      <h1 className="md:hidden text-center family-hatton text-[22px] leading-[27px] text-left px-10 mx-auto md:text-left md:text-[50px] md:leading-[63px] md:pt-12 mt-16 md:w-11/12">your friends</h1>
        <div className="items-center grid grid-cols-1 md:grid-cols-2 items-end mx-auto mt-4 md:mt-[100px] mb-12 px-10 md:pb-12 md:w-11/12">
          <div className="mx-auto">
            <img src={friends} alt="" className=""/>
          </div>
          <div className="hidden md:block">
          <EssentialOils />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
