import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import foto from '../assets/bildschirm.png'

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">I'm a Full Stack (Mern Stack) Web Developer</h2>
          <p className="text-gray-500 py-4">
            Ich bin Mathematiker und arbeitete 7 Jahre lang mit Liebe als
            Mathematiklehrer. Nachdem ich nach Deutschland gekommen bin, musste
            ich eine neue Karriere und Richtung für mich finden. Ich habe
            entdeckt, dass das Programmieren ähnlich dem Lösen einer
            mathematischen Aufgabe ist, und habe mich diesem Bereich zugewandt.
            Programmieren ist für mich sowohl ein neuer Beruf als auch ein neues
            Hobby. Es ist eine neue virtuelle Welt, die darauf wartet, entdeckt
            zu werden. Ich möchte so schnell wie möglich Teil dieser
            Innovationswelt sein und mein Bestes für ihre Entwicklung geben.
          </p>
          <div>
            <button>
                Portfolio
                <span>
                    <MdKeyboardArrowRight size={40} />
                </span>
            </button>
          </div>
          <div>
            <img src={foto} alt="my picture" className="rounded-2xl mx-auto "/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
