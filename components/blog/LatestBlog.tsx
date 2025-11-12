import React from "react";
import { SubTitle } from "../ui/text";
import { getLatestBlog } from "@/sanity/quries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import dayjs from "dayjs";

const LatestBlog = async () => {
  const blogs = await getLatestBlog();
  // console.log(blogs);
  return (
    <div className="mb-10 ">
      <SubTitle className="text-2xl font-bold">Latest Blog</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5 ">
        {blogs?.map((blog) => (
          <div key={blog?._id} className="rounded-md overflow-hidden">
            {blog?.mainImage?.asset && (
              <Link href={`blog/${blog?.slug?.current}`}>
                <Image
                  src={urlFor(blog?.mainImage).url()}
                  height={300}
                  width={400}
                  alt={blog?.title ? `${blog.title} blog image` : "Blog image"}
                  className="w-full max-h-80  object-cover"
                />
              </Link>
            )}
            <div className="bg-shop_light_bg p-5">
              <div className="text-xs flex items-center gap-5">
                <div className="flex items-center relative group cursor-pointer">
                  {blog?.blogcategories?.map((item, index) => (
                    <p
                      key={index}
                      className="font-semibold text-shop_dark_green tracking-wider"
                    >
                      {item?.title}
                    </p>
                  ))}
                  <span className="absolute left-0 -bottom-2 bg-lightColor/30 inline w-full h-0.5 group-hover:bg-shop_dark_green group-hover:cursor-pointer hoverEffect"></span>
                </div>
                <p className="flex items-center gap-1 text-lightColor relative group hover:cursor-pointer hover:text-shop_dark_green hoverEffect">
                  {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
                  <span className="absolute left-0 -bottom-2 bg-lightColor/30 inline w-full h-0.5 group-hover:bg-shop_dark_green group-hover:cursor-pointer hoverEffect"></span>
                </p>
              </div>
              <Link
                href={`blog/${blog?.slug?.current}`}
                className="font-semibold tracking-wider line-clamp-2 text-base mt-5"
              >
                {blog?.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
