import React from "react";

let baseClass = "border rounded-md border-[#ff2323] w-[100%] min-h-[75px] font-bold shadow-lg statBox flex flex-col justify-center"
let greenClass = " bg-[rgba(94,255,54,0.2)] border-[#129912]"

const Stats = ({ stats }) => {
let bgStats = [];
  const statsNum = () => {
    let arr = stats.map(stat => stat.base_stat)
    let sum = arr.reduce((sum, num) => sum + num, 0)
    let average = (sum/6)
    let std = Math.sqrt((sum/6)/2)
    return [average, std]
  };

  if (stats) {
    bgStats = statsNum()
  }

  return (
    <section className="grid grid-cols-3 justify-items-center text-center gap-2 px-2 mt-8 pb-20 h-full">
      {stats.map((stat) => (
        <div
          key={stat.base_stat * Math.random()}
          className={stat.base_stat > bgStats[0]+bgStats[1] ? baseClass + greenClass : baseClass }
        >
          <h4 className="">
            {stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}
          </h4>
          <p>{stat.base_stat}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
