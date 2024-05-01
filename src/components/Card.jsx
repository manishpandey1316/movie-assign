import moviesData from "../assets/Data.json";
import { IoPlayCircle } from "react-icons/io5";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
export default function Card({movie}) {

  return (
    <>
      <div className=" flex flex-col  w-max ">
        <div className=" bg-indigo-400 p-5">
          <img src={movie.moviemainphotos} alt="" className=" w-48 h-48 lg:w-max lg:h-max"></img>
        </div>
        <div className=" bg-white p-4 justify-center items-center w-60">
          <div className="px-2 text-xl text-black font-semibold ">{movie.movietitle}</div>
          <div className="flex flex-row  text-2xl mt-2 mb-2 justify-around">
            <IoPlayCircle></IoPlayCircle>
            <FaThumbsUp></FaThumbsUp>
            <FaThumbsDown></FaThumbsDown>
            <FaPlus></FaPlus>
          </div>
          <ul  className="flex flex-row list-disc text-sm gap-5">
            {movie.moviegenres.slice(0,3).map((item) => (
              <li className=" first-of-type:list-none">{item}</li>
            ))}
          </ul>
          
          <ul  className="flex flex-row list-disc text-sm gap-5 mt-2">
            {movie.movielanguages.slice(0,3).map((item) => (
              <li className=" first-of-type:list-none">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
