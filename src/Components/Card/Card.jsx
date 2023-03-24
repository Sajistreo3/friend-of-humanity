import React, { useState } from "react";
import "./Card.css";


function Card({ imageSrc, name, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    console.log('Clicked on image');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Clicked on close button');
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card-image" style={{ paddingBottom: "125%" }}>
        <img
          src={imageSrc}
          alt={name}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "pointer" // Add cursor pointer to indicate clickable element
          }}
          onClick={handleImageClick} // Attach onClick event to image element
        />
      </div>
      <div className="card-details">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      {isModalOpen && (
        <div id="myModal" className="modal">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <img className="modal-content" src={imageSrc} alt={name} />
          <div id="caption">{description}</div>
        </div>
      )}
    </div>
  );
}

export default Card;
