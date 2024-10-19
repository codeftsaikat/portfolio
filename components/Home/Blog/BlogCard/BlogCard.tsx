import Image from "next/image";
import React from "react";

type Props = {
  blog: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
  };
};

const BlogCard = ({ blog }: Props) => {
  const { title, summary, date, image } = blog;
  return (
    <div className="bg-indigo-950 rounded-md overflow-hidden">
      <Image
        src={image}
        alt="blog image"
        width={300}
        height={300}
        className="object-cover w-full h-[250px]"
      />
      <div className="p-6">
         <p className="rounded-sm px-6 py-1.5 bg-rose-500 text-white w-fit">News</p>
      </div>
    </div>
  );
};

export default BlogCard;
