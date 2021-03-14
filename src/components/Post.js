import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Post = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image

    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="buttonload">
        <i className="fa fa-spinner fa-spin"></i>Loading
      </div>
    );
  return (
    <main className="bg-grey-200 min-h-screen lg:p-12 p-6">
      <article className="container shadow-lg mx-auto bg-yellow-50 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-yellow-400 bg-opacity-75 rounded py-12 px-20">
              <h1 className="cursive text-2xl lg:text-4xl mb-4">
                {singlePost.title}
              </h1>
              <div>
                <Link to="/about" className="flex justify-center text-grey-800">
                  <img
                    src={urlFor(singlePost.authorImage).url()}
                    alt={singlePost.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="cursive  pl-2 text-2xl">{singlePost.name}</p>
                </Link>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="sm:px-20 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="47r6c3n1"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default Post;
