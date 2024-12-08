import React from "react";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Item title 1",
    description: "Some things to explain here",
    url: "https://www.google.com/",
  },
  {
    title: "Item title 2",
    description: "Some things to explain here",
    url: "https://www.google.com/",
  },
  {
    title: "Item title 3",
    description: "Some things to explain here",
    url: "https://www.google.com/",
  },
  {
    title: "Item title 4",
    description: "Some things to explain here",
    url: "https://www.google.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="container">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
