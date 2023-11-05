import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import foto from "../assets/image.png";

function Home() {
  return (
    <div
      name="startseite"
      className="h-auto md:h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-2/3">
          <p className="text-3xl text-gray-200 py-4 max-w-md">
            Mein Name ist Mehmet Gökce
          </p>

          <h2 className="text-3xl sm:text-6xl font-bold">
            Ich bin ein Full Stack (Mern) Webentwickler
          </h2>

          <div className="mx-auto md:mx-0">
            <Link
              to="über mich"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-300 to-red-500 cursor-pointer"
            >
              Über Mich
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={50} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={foto}
            alt="my picture"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
