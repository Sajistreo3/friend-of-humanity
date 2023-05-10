import React from "react";
import Slider from "react-slick";
import "./Profile.css";

function Profile({ title, bio, image }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="profile">
      <h3>{title}</h3>
      <Slider className="profile-slider" {...settings}>
        <div>
          <img src={image} alt={title} />
        </div>
      </Slider>
      <div className="profile-info">
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Profile;
