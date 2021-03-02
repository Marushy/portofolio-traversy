import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [authors, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      _id,
      bio,
      "authorImage": image.asset -> url
    }`
      )
      .then((data) => setAuthor(data))
      .catch(console.error);
  }, []);

  // if (authors.length === 0) return <div>Loading...</div>;
  return (
    <main className="grid lg:grid-cols-2  gap-4 grid-cols-1">
      {authors &&
        authors.map((author, index) => (
          <div
            className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative"
            key={author._id}
          >
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                  <div className="relative">
                    <img
                      src={urlFor(author.authorImage).url()}
                      alt={author.name}
                      className="w-full rounded-md relative z-10"
                    />

                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      {author.name}
                    </h1>
                    <BlockContent
                      blocks={author.bio}
                      projectId="47r6c3n1"
                      dataset="production"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* Thanks Scott Windon for component card */}
          </div>
        ))}
    </main>
  );
};

export default About;
