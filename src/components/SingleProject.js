import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const SingleProject = () => {
  const [sketch, setSketch] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_id == "${_id}"]{
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
        setSketch(data[0]);
      })
      .catch(console.error);
  }, [_id]);

  if (!sketch) return <div>Loading...</div>;
  return (
    <div className="flex flex-wrap items-center justify-center h-screen">
      <div className="image-sketch">
        <img
          src={sketch.projectImage.asset.url}
          className=""
          alt={sketch.title}
        />
      </div>
      <div className="bg-white ">
        <div className="mx-32">
          <h4 className="text-2xl font-bold my-4 sm:mt-1">{sketch.title}</h4>
          <p></p>
          <div className="description w-full text-gray-500 text-lg my-3">
            {sketch.description}
          </div>
          <p className="italic">
            {sketch.drawingType} technique by {sketch.name}{" "}
          </p>
          <Link
            className="text-blue-600 mt-10 text-lg mt-5 font-semibold hover:text-blue-300"
            to="/sketches"
          >
            back to sketches
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
