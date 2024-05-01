import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect,useState } from "react";

export default function({movies})
{
    const [slides,setSlides]=useState(4)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            }
          ]
      };
    useEffect(()=>
    {
        const newslides=(movies.length>3?4:movies.length)
        setSlides(newslides)
       
    },[movies])
    return (
        <> 
        <Slider {...settings}>
        {movies.map((movie)=>(
            <Card movie={movie}></Card>
        )
        )
           
        }
           </Slider>
        </>
    )
}