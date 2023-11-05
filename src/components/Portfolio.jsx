import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import hotel from "../assets/projects/hotel.png";
import discover from "../assets/projects/discover.png";
import weather from "../assets/projects/weather.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      title: hotel,
      href: "https://hotelreservierung.onrender.com/",
    },
    {
      id: 2,
      title: weather,
      href: "https://resilient-bienenstitch-6a40dc.netlify.app/",
    },
    {
      id: 3,
      title: discover,
      href: "https://discovertheworld.onrender.com/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="h-auto md:h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-2xl">
            Sehen Sie sich einige meiner Arbeiten hier an
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, href }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between"
            >
              <img
                src={title}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="p-3 m-4 duration-200 hover:scale-105 font-bold"
                  target="_blank"
                >
                  Zum Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto md:mx-0">
          <Link
            to="kenntnisse"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-300 to-red-500 cursor-pointer"
          >
            Kenntnisse
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={50} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
