import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import SearchBox from "../components/SearchBox";

const Project = () => {
  const [projectData, setProjectData] = useState(null);
  const [searchField, setSerachField] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      _id,
      date,
      description,
      tags,
      "name": author->name,
      projectImage{
        asset->{
          _id,
          url
        }
      },
      drawingType,
      
    }`
      )
      .then((data) => {
        setProjectData(data);
      })
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setSerachField(e.target.value);
  };

  const searchdSketches = !searchField
    ? projectData
    : projectData.filter((sketch) =>
        sketch.name.toLowerCase().includes(searchField.toLowerCase())
      );

  if (!projectData)
    return (
      <div class="buttonload">
        <i class="fa fa-spinner fa-spin"></i>Loading
      </div>
    );

  return (
    <main className=" min-h-screen py-12 lg:px-20 px-16">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive logo mb-3">
          Sketches
        </h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-5 logo">
          by different artists. Click on sketch to find out more about it.
        </h2>
        <div className="flex justify-center mb-2">
          <SearchBox
            placeholder="serach sketches by author"
            handleChange={handleChange}
          />
        </div>

        <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
          {searchdSketches &&
            searchdSketches.map((project, index) => (
              <article
                className="flex flex-col rounded-lg bg-gray-50 justify-center items-center my-3"
                // {className="relative rounded-lg shadow-xl bg-white p-16"}
                key={index}
              >
                <h3 className="text-blue-400 text-lg font-bold my-3 justify-center hover:text-blue-700">
                  <Link to={`/sketches/${project._id}`}>{project.title}</Link>
                </h3>
                <div className="image-holder transition-all transform hover:scale-105">
                  <img
                    src={project.projectImage.asset.url}
                    alt={project.title}
                    className=" rounded-r "
                  />
                  <p className="text-grey-700 text-1xl my-1 justify-center">
                    by {project.name}
                  </p>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
