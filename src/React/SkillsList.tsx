import React, { useState } from "react";

const CategoryIcons = {
  "Java Backend Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V10L12 15L2 10V17Z"></path>
    </svg>
  ),

  "Full Stack Web Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M21 3H3C2.447 3 2 3.447 2 4V20C2 20.553 2.447 21 3 21H21C21.553 21 22 20.553 22 20V4C22 3.447 21.553 3 21 3ZM20 19H4V11H20V19ZM20 9H4V5H20V9Z"></path>
    </svg>
  ),

  "Flutter Mobile Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M14.314 3L3 14.314L6.343 17.657L21 3H14.314ZM6.343 17.657L10.686 22H17.372L9.686 14.314L6.343 17.657Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Java Backend Development": [
      "Building REST APIs using Java",
      "Backend development with Spring Boot",
      "Database integration with SQL",
      "API testing and debugging",
    ],

    "Full Stack Web Development": [
      "Building modern responsive websites",
      "Single Page Applications (SPAs)",
      "Frontend development with JavaScript & React",
      "Portfolio and business websites",
    ],

    "Flutter Mobile Development": [
      "Cross-platform mobile apps using Flutter",
      "Responsive UI design for Android & iOS",
      "API integration in Flutter apps",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}

                <div className="flex items-center gap-2 flex-grow justify-between">
                  <span className="text-[var(--white)] text-lg">
                    {category}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M12 16L6 10H18L12 16Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;