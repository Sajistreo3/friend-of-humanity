import React from "react";
import Slider from "react-slick";
import "./Profile.css";

function Profile({ name, bio, image }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="profile">
      <Slider className="profile-slider" {...settings}>
        <div>
          <img src={image} alt={name} />
        </div>
      </Slider>
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Profile;
