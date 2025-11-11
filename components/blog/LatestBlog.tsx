import React from "react";
import { SubTitle } from "../ui/text";
import { getLatestBlog } from "@/sanity/quries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const LatestBlog = async () => {
  const blogs = await getLatestBlog();
  console.log(blogs);
  return (
    <div className="mb-10 ">
      <SubTitle className="text-2xl font-bold">Latest Blog</SubTitle>
      <div>
        {blogs?.map((blog) => (
          <div key={blog?._id}>
            {blog?.mainImage?.asset && (
              <Image
                src={urlFor(blog?.mainImage).url()}
                height={300}
                width={400}
                alt={blog?.title ? `${blog.title} blog image` : "Blog image"}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;