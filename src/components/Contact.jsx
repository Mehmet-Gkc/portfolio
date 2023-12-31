import React from "react";

function Contact() {
  return (
    <div
      name="kontakt"
      className="w-full h-auto md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Kontakt
          </p>
          <p className="py-6 text-2xl">
            Füllen Sie das folgende Formular aus, um mit mir in Kontakt zu
            treten
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your E-Mail"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name=""
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className=" text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-300 to-red-500 cursor-pointer">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
