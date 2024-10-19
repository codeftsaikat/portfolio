import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;
  return (
    <div className="rounded-md overflow-hidden bg-[#140c1c] m-4">
      <div className="p-6">
        <Image src="/images/q.png" alt="image" height={50} width={50} />
        <p className="text-white text-opacity-70">{clientReview}</p>
        <Image
          src="/images/q.png"
          alt="image"
          height={50}
          width={50}
          className="ml-auto"
        />
      </div>
      <div className="text-white w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 font-bold px-6 py-3">
        <span>{rating}/5</span>
        <FaStar className="text-yellow-500" />
      </div>
      <div className="bg-gray-200">
        <div className="flex items-center p-6 space-x-6">
            <div>
                <Image src={image} alt={name} height={40} width={40} className="rounded-full"/>
            </div>
            <div>
                <h1 className="text-lg font-bold">{name}</h1>
                <p className="text-base text-gray-700">{profession}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
