import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import images from "../assets/images"; // Import image URLs
import "../Styling/body.css"; // Ensure proper styling
import Travelform from "./search.jsx";

const places = [
  { title: "Top 20 places to visit in 2025", link: "#" },
  { title: "Hidden Gems: Underrated Travel Spots", link: "#" },
  { title: "Best Budget-Friendly Destinations", link: "#" },
  { title: "Luxury Travel: Most Extravagant Getaways", link: "#" },
  { title: "Solo Travel: Best Safe & Exciting Locations", link: "#" },
  { title: "Adventure Destinations: For Thrill Seekers", link: "#" },
  { title: "Beach Lovers' Paradise: Best Coastal Escapes", link: "#" },
  { title: "Cultural Hotspots: Dive into Local Heritage", link: "#" },
  // { title: "Best Destinations for Foodies", link: "#" },
  { title: "Top 10 Road Trip Routes in 2025", link: "#" },
  { title: "Most Instagrammable Places to Visit", link: "#" },
  { title: "Romantic Getaways for Couples", link: "#" },
  { title: "Eco-Friendly & Sustainable Travel Destinations", link: "#" },
  { title: "Winter Wonderlands: Best Snow Destinations", link: "#" },
  { title: "Best Workation Destinations: Work & Travel", link: "#" },
  { title: "Digital Nomad-Friendly Cities", link: "#" },
  { title: "Best Destinations for Stargazing & Astronomy Lovers", link: "#" },
  { title: "Wellness & Retreat Destinations: Best Spas & Yoga Getaways", link: "#" },
  { title: "Festivals Around the World: Best Places to Celebrate in 2025", link: "#" },
     { title: "Best Destinations for Foodies", link: "#" },
  
]; 
const Body = () => {
  return (
    <div className="body-container">
      {/* 🔹 Background Carousel */}
      <div className="background-container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="fullscreen-carousel"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="fullscreen-image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className="headline"><b>VoyageVista<br></br>A Clear Vision For Your Next Trip</b></h1>
      </div>

       {/* 🔹 Travel Form (Before Cards, After Navbar) */}
       <div className="form-container">
        <Travelform/>
      </div>

      {/* 🔹 Cards Section */}
      <div className="cards-container">
        
        <div className="scrollable-container">
          {places.map((place, index) => (
            <div key={index} className="card custom-card">
              <div className="card-body">
                <p className="card-text">
                  <b>{place.title}</b>
                </p>
                <a href={place.link} className="btn btn-primary">Check</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;