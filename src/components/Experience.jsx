import React from "react";
import Angular from "../assets/angular-icon.svg";
import reactImage from "../assets/react.png";
import netcore from "../assets/NET_Core_Logo.svg.png";
import mongo from "../assets/mongodb.png"
import docker from "../assets/Docker.png"
import kubernetes from "../assets/K8S-logo.png"
import SQL from "../assets/sql-managment.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: netcore,
      title: ".NET Core",
      style: "shadow-purple-500",
    },
    {
      id: 2,
      src: Angular,
      title: "Angular",
      style: "shadow-red-400",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: SQL,
      title: "SQL",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: kubernetes,
      title: "Kubernetes",
      style: "shadow-blue-600",
    },
       
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div className="mt-5">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Technology
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
