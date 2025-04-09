import React from "react";


const Cards = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://source.unsplash.com/800x400/?nature" className="d-block w-100" alt="Nature" />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/800x400/?travel" className="d-block w-100" alt="Travel" />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/800x400/?city" className="d-block w-100" alt="City" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Cards;
