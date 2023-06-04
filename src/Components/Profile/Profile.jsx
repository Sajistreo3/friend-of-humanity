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
        <h4 style={{marginTop: 10, fontSize: 25}}>{bio}</h4>
        <p>International press release: The most outstanding men and women of the year, from 2015 to 2023, will be honored in December 2023 with the International Award of African Canadian Asian Foundation of Canada Inc. for "Mother of Humanity" and "Friend of Humanity," for extraordinary contribution towards humanity, peace, democracy, and secularism by all means. Recognizing excellence and dedication in the pursuit of a better world. Thank you all. Truly yours, Mohammad Ali, Executive President, African Canadian Asian Foundation of Canada Inc. (100% Nonprofitable, for Humanity and Peace).</p>
      </div>
    </div>
  );
}

export default Profile;
