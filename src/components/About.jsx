import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function About() {
  return (
    <div
      name="über mich"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Über Mich
          </p>
        </div>
        <p className="text-xl mt-12">
          Ich bin Mathematiker und arbeitete 7 Jahre lang mit Liebe als
          Mathematiklehrer.
          <br />
          Nachdem ich nach Deutschland gekommen bin, musste ich eine neue
          Karriere und Richtung für mich finden.
          <br />
          Ich habe entdeckt, dass das Programmieren ähnlich dem Lösen einer
          mathematischen Aufgabe ist, und habe mich diesem Bereich zugewandt.
          Programmieren ist für mich sowohl ein neuer Beruf als auch ein neues
          Hobby.
          <br />
          Es ist eine neue virtuelle Welt, die darauf wartet, entdeckt zu
          werden. Ich möchte so schnell wie möglich Teil dieser Innovationswelt
          sein und mein Bestes für ihre Entwicklung geben.
        </p>
        <br />

        <div>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-300 to-red-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={50} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
