import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../../Components/Card";
import Profile from "../../Components/Profile";
import { db } from "../../Configs/firebase";
import { collection, getDocs } from "firebase/firestore";
import Ali from '../../Assets/Extra/ali.jpg'

function Home(props) {
  const [peoples, setPeoples] = useState([]);
  const peoplesCollectionRef = collection(db, "peoples");
  useEffect(() => {
    const getPeoples = async () => {
      const data = await getDocs(peoplesCollectionRef);
      setPeoples(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPeoples();
  }, []);

  return (
    <div className="Male-section">
      <div className="profile-section">
        <Profile
          name="Rafi Patwary"
          bio="Chief Advisor and Executive President of African Canadian Nation Foundation of Canada Inc"
          image={Ali}
        />
      </div>
      <div className="card-section">
        {peoples.map((people) => {
          // Dynamically import the image based on the name property of the people object
          const Image = require(`./people-pics/${people.name}.png`);
          
          return (
            <Card
              key={people.id}
              name={people.name}
              description={people.description}
              imageSrc={Image}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Home;
