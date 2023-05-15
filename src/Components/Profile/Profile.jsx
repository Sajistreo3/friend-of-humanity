import React from "react";
import Slider from "react-slick";
import "./Profile.css";

function Profile({ bio, image }) {
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
          <img src={image} alt="Mohammad Ali" />
        </div>
      </Slider>
      <div className="profile-info">
        <p style={{marginTop: 10, fontSize: 25}}>{bio}</p>
      </div>
    </div>
  );
}

export default Profile;
