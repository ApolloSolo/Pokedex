import {Link} from "react-router-dom"

const Pills = (props) => {
  if(props.loading) {
    return <div>Loading...</div>
  }
  return (
    <Link to={`/${props.mon.name}`}>
    <div className="min-w-[150px] h-[28px] bg-slate-500 rounded-md text-center m-1 font-semibold">
      <div key={props.mon.name}>
        {props.mon.name[0].toUpperCase() + props.mon.name.slice(1)}
      </div>
    </div>
    </Link>
  );
};

export default Pills;
