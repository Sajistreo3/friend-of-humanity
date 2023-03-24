import React from "react";
import './Home.css';
import Card from "../../Components/Card";
import CreateForm from "../../Components/CreateForm/CreateForm";

function Home(props) {
  return (
    <div className="Male-section">
      <CreateForm />
      <Card
        name="Joe Biden"
        description="US President, Friend of
        humanity, peace and Democracy
        by all means"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg"
      />
      <Card
        name="Joe Biden"
        description="US President, Friend of
        humanity, peace and Democracy
        by all means"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg"
      />
      <Card
        name="Joe Biden"
        description="US President, Friend of
        humanity, peace and Democracy
        by all means"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg"
      />
      <Card
        name="Joe Biden"
        description="US President, Friend of
        humanity, peace and Democracy
        by all means"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg"
      />
    </div>
  );
}

export default Home;
