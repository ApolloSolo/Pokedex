import React from "react";

let baseClass = "border rounded-md border-[#525252] w-[100%] min-h-[75px] font-bold shadow-lg statBox "
let greenClass = " bg-[rgba(94,255,54,0.2)]"
let redClass = " bg-[rgba(200,54,54,0.2)]"

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
    <div className="grid grid-cols-3 justify-items-center text-center gap-2 px-2 mt-8 pb-16">
      {stats.map((stat) => (
        <div
          key={stat.base_stat * Math.random()}
          className={stat.base_stat > bgStats[0]+bgStats[1] ? baseClass + greenClass : baseClass }
        >
          <h4 className="mb-auto">
            {stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}
          </h4>
          <p>{stat.base_stat}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
