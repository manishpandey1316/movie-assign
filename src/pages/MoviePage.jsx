import Corousel from "../components/Corousel";
import movieData from "../assets/Data.json";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
export default function MoviePage() {
  const [movies, setMovies] = useState(movieData.details);
  const [selectedOption, setSelectedOption] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const newMovies = movieData.details.filter((item) => {
      if (
        (selectedOption?.language &&
          !item.movielanguages.includes(selectedOption.language)) ||
        (selectedOption?.genre &&
          !item.moviegenres.includes(selectedOption.genre)) ||
        (selectedOption?.country &&
          !item.moviecountries.includes(selectedOption.country))
      ) {
        return false;
      }
      return true;
    });
    setMovies(newMovies);
  }, [selectedOption]);
  return (
    <div className="w-4/5  m-auto">
      <div className="mobile-menu relative top-10 lg:hidden">
        {!menuOpen ? (
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center px-3 py-2 text-slate-200 border rounded  border-slate-200 hover:text-white hover:border-white"
          >
            <Bars3Icon className="h-5 w-5"></Bars3Icon>
          </button>
        ) : (
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center px-3 py-2 text-slate-200 border rounded  border-slate-200 hover:text-white hover:border-white"
          >
            <XMarkIcon className="h-5 w-5"></XMarkIcon>
          </button>
        )}
      </div>
      <div className=" hidden lg:flex flex-row justify-end gap-5 mt-10 px-10">
        <Filter
          data={movieData.countries}
          type="country"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        ></Filter>
        <Filter
          data={movieData.genres}
          type="genre"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        ></Filter>
        <Filter
          data={movieData.languages}
          type="language"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        ></Filter>
      </div>
      {menuOpen?
        <ul className=" relative top-10 px-2 py-3  text-xl text-slate-200 opacity-50 mb-5">
          <li className="flex flex-col gap-2 ">
            <div>By Language</div>{" "}
            <Filter
              data={movieData.languages}
              type="language"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            ></Filter>
          </li>
          <li className="flex flex-col gap-2">
            <div>By Country</div>{" "}
            <Filter
              data={movieData.countries}
              type="country"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            ></Filter>
          </li>
          <li className="flex flex-col gap-2">
            <div>By Genre</div>{" "}
            <Filter
              data={movieData.genres}
              type="genre"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            ></Filter>
          </li>
        </ul>:null
      }
      <div className=" mt-36 lg:mt-20 ">
        <Corousel movies={movies}></Corousel>
      </div>
    </div>
  );
}
