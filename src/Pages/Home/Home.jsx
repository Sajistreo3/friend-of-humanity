import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../../Components/Card";
import Profile from "../../Components/Profile";
import { db } from "../../Configs/firebase";
import { collection, getDocs } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
function Home(props) {
  const [peoples, setPeoples] = useState([]);
  const peoplesCollectionRef = collection(db, "peoples");
  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(peoplesCollectionRef);
      setPeoples(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(peoples);
    };

    getEvents();
  }, []);

  return (
    <div className="Male-section">
      <div className="profile-section">
        <Profile
          name="Mohammad Ali"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="https://via.placeholder.com/400x500"
        />
      </div>
      <div className="card-section">
        {peoples.map((people) => (
          <Card
            key={uuidv4()}
            name={people.name}
            description={people.description}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
