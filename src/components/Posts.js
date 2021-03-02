import { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

const Posts = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug, 
      mainImage{asset->{_id, url}, alt}
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!postData)
    return (
      <div class="buttonload">
        <i class="fa fa-spinner fa-spin"></i>Loading
      </div>
    );

  return (
    <main className="bg-grey-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="md:text-5xl text-3xl flex justify-center cursive logo mb-3">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-5 logo">
          Welcome to my page of blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <Link
                  to={"/posts/" + post.slug.current}
                  key={post.slug.current}
                >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-grey-800 tx-lg font-blog px-3 py-4 bg-yellow-500 text-gray-200 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Posts;
