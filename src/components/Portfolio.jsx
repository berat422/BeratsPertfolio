// Portfolio.js
import React, { useState } from "react";
import Popup from "./Popup";
import { Projects } from "../project";

const Portfolio = () => {

  const [openProjectId, setOpenProjectId] = useState(null);

  const openModal = (projectId) => {
    setOpenProjectId(projectId);
  };

  const closeModal = () => {
    setOpenProjectId(null);
  };

  return (
    <React.Fragment>
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  text-4xl font-bold inline">
      <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 mobiletip">
        {Projects.map((x) => (
          <div key={x.id} className="flex-column-center shadow-md shadow-gray-600 hover:scale-105 rounded-lg">
            <img
              src={x.image}
              alt="projects"
              className="rounded-md duration-200 flex  justify-center styletip"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200" onClick={() => openModal(x.id)}>
                See more
              </button>
              {openProjectId === x.id && (
                <Popup id={x.id} closeModal={closeModal} />
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
    </React.Fragment>  
    )
};

export default Portfolio;
