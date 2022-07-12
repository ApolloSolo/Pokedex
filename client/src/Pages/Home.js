import React from "react";
import { CgPokemon } from "react-icons/cg";

const Home = () => {
  return (
    <section className="max-w-[1240px] mx-auto flex justify-center items-center mt-[40%] md:mt-[20%] text-white text-center text-7xl">
      <div className="flex flex-col lg:flex-row">
        <h2>Welcome to your </h2>
        <h2 className="text-[#ff2323] font-mono font-bold mt-2 lg:ml-4">
          P
          <CgPokemon className="text-[#ff1111] h-[55px] w-[55px] inline m-[-3px]" />
          kedex
        </h2>
      </div>
    </section>
  );
};

export default Home;
