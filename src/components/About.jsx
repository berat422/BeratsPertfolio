import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I'm Berat Latifi, a software developer with a proven track record of
          delivering impactful solutions for international companies and
          longstanding organizations. I've contributed to large-scale
          applications serving over 20 businesses, also for companies with over
          30 years of history
        </p>
        <br />
        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default About;
