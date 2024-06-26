import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import React from "react";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import reactImage from "../assets/logos/react.png";
import git from "../assets/logos/git.png";
import github from "../assets/logos/github.png";
import tailwind from "../assets/logos/tailwind.png";
import node from "../assets/logos/node.png";
import sass from "../assets/logos/sass.png";
import bootstrap from "../assets/logos/Bootstrap.png";
import mongodb from "../assets/logos/mongodb.png";
import php from "../assets/logos/php.png";
import laravel from "../assets/logos/laravel.png";
import mysql from "../assets/logos/mysql.jpg";


function Experience() {
  const experience = [
    {
      id: 1,
      title: "React",
      src: reactImage,
      style: "shadow-blue-600",
    },
    {
      id: 2,
      title: "JavaScript",
      src: javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      title: "Node JS",
      src: node,
      style: "shadow-green-300",
    },
    {
      id: 4,
      title: "Mongo DB",
      src: mongodb,
      style: "shadow-green-500",
    },
    {
      id: 5,
      title: "PHP",
      src: php,
      style: "shadow-purple-400",
    },
    {
      id: 6,
      title: "Laravel",
      src: laravel,
      style: "shadow-orange-800",
    },
    {
      id: 7,
      title: "MYSQL",
      src: mysql,
      style: "shadow-blue-400",
    },
    {
      id: 8,
      title: "HTML",
      src: html,
      style: "shadow-orange-500",
    },
    {
      id: 9,
      title: "CSS",
      src: css,
      style: "shadow-blue-500",
    }, 
    {
      id: 10,
      title: "Bootstrap",
      src: bootstrap,
      style: "shadow-indigo-500",
    },
    {
      id: 11,
      title: "Tailwind",
      src: tailwind,
      style: "shadow-sky-400",
    },
    {
      id: 12,
      title: "Sass / Scss",
      src: sass,
      style: "shadow-pink-500",
    }, 
    {
      id: 13,
      title: "Git",
      src: git,
      style: "shadow-red-600",
    },
    {
      id: 14,
      title: "GitHub",
      src: github,
      style: "shadow-gray-400",
    },
  
  ];

  return (
    <div
      name="kenntnisse"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl border-b-4 border-gray-500 p-2 inline font-bold">
            Kenntnisse
          </p>
          <p className="py-6 text-2xl">
            Mit diesen Technologien habe ich gearbeitet
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experience.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto md:mx-0">
          <Link
            to="kontakt"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-300 to-red-500 cursor-pointer"
          >
            Kontakt
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={50} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Experience;
