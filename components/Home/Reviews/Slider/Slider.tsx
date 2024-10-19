"use client";
import { clientReviews } from "@/Data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "../ReviewCard/ReviewCard";

const responsive = {
    desktop : {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 724 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 724, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Slider = () => {
  return <Carousel arrows={true} autoPlay={true} autoPlaySpeed={4000} infinite responsive={responsive}>
    {
        clientReviews.map(review=>{
            return <div key={review.image}>
             {/* review card */}
             <ReviewCard review={review}/>
            </div>
        })
    }
  </Carousel>
};

export default Slider;
