import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from "react-responsive-carousel";
import './DemoCarousel.css'

export const DemoCarousel = () => {
 
    return (
       <>
        <nav class="navbar navbar-dark bg-primary">
           <div class="container-fluid">
          <a class="navbar-brand" href="#">
         
      Flipkart
          </a>
        </div>
</nav>

        <div className="slide">
          <Carousel infiniteloop autoplay  className="carousel">
          <div className="image">
                    <img src="/image/img.jpg" alt="" />
                    <p className="legend">Big billion Day start</p>
                    <button className="button"> Shop now</button>
                </div>
                <div className="image">
                    <img src="/image/img.jpg" alt="" />
                    <p className="legend">Legend 2</p>
                    <button className="button"> Shop now</button>
                </div>
                <div className="image">
                    <img src="/image/img.jpg" alt="" />
                    <p className="legend">Legend 3</p>
                    <button className="button"> Shop now</button>
                </div>
                <div className="image">
                    <img src="/image/img.jpg" alt="" />
                    <p className="legend">Legend 4</p>
                    <button className="button"> Shop now</button>
                </div>
                <div className="image">
                    <img src="/image/img.jpg" alt="" />
                    <p className="legend">Legend 5</p>
                    <button className="button"> Shop now</button>
                </div>
                <div className="image">
                    <img src="/image/img.jpg" alt="" />
                    <button className="button"> Shop now</button>
                    <p className="legend">Legend 6</p>
                   
                </div>
          </Carousel>
        </div>
       </>
    )
}
