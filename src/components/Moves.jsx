import React from "react";

const Moves = ({ moves }) => {
  return (
    <div className="grid grid-cols-3 justify-items-center text-center gap-2 px-2 mt-8 pb-20">
      {moves.map((move, i) => (
        <div key={i} className="border border-black text-white rounded-md bg-[#ff2323] w-[100%] min-h-[50px] font-bold shadow-lg flex items-center justify-center">
          <p className="">
            {move.move.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Moves;
