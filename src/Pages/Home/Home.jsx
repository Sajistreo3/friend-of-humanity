import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../../Components/Card";
import Profile from "../../Components/Profile";
import { db } from "../../Configs/firebase";
import { collection, getDocs } from "firebase/firestore";
import Ali from "../../Assets/Extra/ali.jpg";

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

  const malePeople = [
    {
      id: 1,
      name: "Joe Biden",
      description:
        "President of the United States of America. Friend of humanity, peace and democracy by all means.",
    },
    {
      id: 2,
      name: "Justin Trudeau",
      description:
        "Prime Minister of Canada. Friend of humanity, world peace, Democracy and secularism by all means. Helping hundreds of thousands of refugees from many countries. (Greatest leader for world peace) ",
    },
    {
      id: 3,
      name: "Recep Tayyip Erdogan",
      description:
        "President of Turkey. Friend of humanity, peace and democracy by all means. Hosted millions of refugees from many countries. (Leader for world peace)",
    },
    {
      id: 4,
      name: "Tamim Al Thani",
      description:
        "Emir of Qatar. Friend of humanity, peace, democracy and secularism by all means.",
    },
    {
      id: 5,
      name: "Mr. Charles Michel",
      description:
        "President of European Council. Helping Ukrainianians and millions of refugees all over the world. Friend of humanity, peace and democracy by all means.",
    },
    {
      id: 6,
      name: "Adama Barrow",
      description:
        "President of Gambia, Friend of humanity peace Democracy, Fighter against Myanmar Criminals Janta, For Rohingya Refugees",
    },
    {
      id: 7,
      name: "Mohammed bin Abdulrahman",
      description:
        "Friend of Humanity, Peace, Democracy and Secularism by all means",
    },
    {
      id: 8,
      name: "Chris Hipkins",
      description:
        "Prime Minister of New Zealand. Friend of humanity, peace and democracy by all means.",
    },
    {
      id: 9,
      name: "Mr. Justice Hasan Foez Siddique",
      description:
        "Chief Justice of Bangladesh: Friend of humanity, peace, democracy, and secularism, by all means. An extraordinary arrangement has been made for faster hearing for appeals against the death penalty on humanitarian grounds for the first time in the history of the Supreme Court of Bangladesh.",
    },
    {
      id: 10,
      name: "Anisul Haque",
      description:
        "Law minister of Bangladesh, friend of humanity, peace democracy and secularism by all means, for drafting death penalty, by the order of the Prime Minister, Sheikh Hasina, against the rapist and child killer, Mr. Anisul Haque, became most respected person in Civil Society of Bangladesh.",
    },
    {
      id: 11,
      name: "Mr. Justice Obaidul Hassan",
      description:
        "In the Supreme Court of Bangladesh. Friend of humanity, peace, democracy and secularism by all means. (Shaheen Bhai, Son of great freedom fighter, Dr.Akhlaqul Hossain Ahmed who was a physician, a former Member of Parliament and very close associate of the father of the nation of Bangladesh.)",
    },
    {
      id: 12,
      name: "Mr. Justice Nazrul Islam Talukdar",
      description:
        "Friend of humanity, peace, democracy and secularism by all means. (Under the leadership of honourable Chief Justice and Appellate Division, Supreme Court of Bangladesh)",
    },
    {
      id: 13,
      name: "Advocate Manzill Murshid",
      description:
        "President of HRPB, Human Rights and Peace for Bangladesh. Friend of humanity, peace, democracy and secularism by all means. (Son of great freedom fighter Mr. Jobed Ali Mia)",
    },
    {
      id: 14,
      name: "Atikullah Khan Masud",
      description:
        "Great freedom fighter and veteran journalist. Friend of humanity, peace, democracy and secularism by all means until his death.",
    },
    {
      id: 15,
      name: "Mustafa Jabbar",
      description:
        "Veteran journalist, inventor of BIJOY keyboard and Helping Hand of Digital Bangladesh. Friend of humanity, peace and democracy by all means. (Helped build schools, colleges and orphanages)",
    },
    {
      id: 16,
      name: "Ahmed Akbar Sobhan",
      description:
        "Friend of humanity, peace, democracy and secularism by all means, (Donated & Gifted Hospitals, Schools, College, Orphanage, Helping Hundreds of thousands of people in need) Most respected person in Trade, Commerce, industry, and in the society of Bangladesh",
    },
    {
      id: 17,
      name: "Naem Nizam",
      description:
        "Veteran journalist of Bangladesh. Friend of humanity, peace, democracy and secularism by all means.",
    },
    {
      id: 18,
      name: "Shykh Seraj",
      description:
        "Internationally recognized veteran, journalist TV presenter. Friend of humanity, peace, democracy and secularism, by all means.",
    },
    {
      id: 19,
      name: "Hanif Sanket",
      description:
        "Internationally recognized veteran, journalist TV presenter. Friend of humanity, peace and democracy by all means.",
    },
    {
      id: 20,
      name: "Hasan Ahmed Chowdhury Kiron",
      description:
        "Chairman of Debate for Democracy Foundation, veteran journalist TV presenter. Friend of humanity, peace, democracy and secularism by all means. (Son of great freedom fighter Mr. Maqbul Chowdhury)",
    },
    {
      id: 21,
      name: "Mostefa Souag",
      description:
        "Veteran journalist and Director General of Al Jazeera, a world-famous TV channel. Friend of humanity, world peace, democracy and secularism by all means.",
    },
    {
      id: 22,
      name: "Al Anstey",
      description:
        "Chief Executive of Al Jazeera America. Friend of humanity, world peace and democracy by all means.",
    },
    {
      id: 23,
      name: "James Bay",
      description:
        "Veteran Journalist, Diplomatic Editor of Al Jazeera, a world-famous TV channel. Friend of humanity, world peace, democracy and secularism by all means.",
    },
    {
      id: 24,
      name: "Karim A Khan",
      description:
        "Chief prosecutor of International Criminal Court, ICC. Friend of humanity, peace, democracy and secularism, by all means.",
    },
    {
      id: 25,
      name: "Md. Khurshid Alam Khan",
      description:
        "Senior Advocate of Supreme Court of Bangladesh, for anti-corruption case. Friend of humanity, peace, democracy and secularism by all means.",
    },
    {
      id: 26,
      name: "Martin Griffiths",
      description:
        "UN Chief of humanitarian agency of United Nations Friend of humanity ,Peace , Democracy and secularism,by all means,",
    },
    {
      id: 27,
      name: "Dr. Abdul Malik",
      description:
        "Friend of Humanity, Peace, Democracy and Secularism by all means, Founder of National Heart Foundation of Bangladesh",
    },
    {
      id: 28,
      name: "Prof, Dr. A.k. Azad Khan",
      description:
        "Friend of humanity, peace and Democracy by all means. President of Diabetic association of Bangladesh, Chairman Board Trustees of Bangladesh University of Health Sciences(BUHS)",
    },
    {
      id: 29,
      name: "Sajeeb Wazed Joy",
      description:
        "Grand Son of Father of the Nation of Bangladesh. Friend of humanity, peace, Democracy and Secularism, by all means.",
    },
    {
      id: 30,
      name: "Advocate Zunaid Ahmed Palak of Bangladesh",
      description:
        "Friend of Humanity, Peace, Democracy and Secularism by all means, Helping hand of digital Bangladesh",
    },
    {
      id: 31,
      name: "Peter D. Haas",
      description:
        "US Ambassador in Bangladesh, all the staff of Us Embassy Friend of humanity, peace and Democracy by all means, (Arranger of Covid Vaccine for tens of millions people of Bangladesh)",
    },
    {
      id: 32,
      name: "Mustafa Osman",
      description:
        "Friend of Humanity, Peace, Democracy and Secularism by all means",
    },
    {
      id: 33,
      name: "Seraya ali al qahtani",
      description:
        "Friend of Humanity, Peace, Democracy and Secularism by all means",
    },
    {
      id: 34,
      name: "Obaidul Quader",
      description:
        "Secretery General, Bangladesh Awami League, Friend of humanity, peace, Democracy and secularism by all means",
    },
    {
      id: 35,
      name: "Mirza Fokrul Islam",
      description:
        "Secretary general ,BNP, Bangladesh Nationalist party, Friend of Humanity, Peace, Democracy and Secularism by all means",
    },
    {
      id: 36,
      name: "Ghulam Muhammed Quader",
      description:
        "Chairperson of Jatiyo Parti, Friend of Humanity, Peace, Democracy and Secularism by all means",
    },
    {
      id: 37,
      name: "Barrister Andalib Rahman",
      description:
        "Chairperson of Jatiyo Parti, Friend of Humanity, Peace, Democracy and Secularism by all means",
    },
  ];

  const femalePeople = [
    {
      id: 1,
      name: "Jill Biden",
      description:
        "First Lady of the United States of America. Mother of humanity and peace by all means.",
    },
    {
      id: 2,
      name: "Sophie Trudeau",
      description:
        "Wife of Prime Minister of Canada, Justine Trudeau. Mother of humanity and peace. Friend of femocracy and secularism by all means.",
    },
    {
      id: 3,
      name: "Sheikh Hasina",
      description:
        "Prime Minister of Bangladesh. Daughter of the father of the nation of Bangladesh. Mother of humanity by all means. (Bangladesh hosted over one million Rohingya refugees.)",
    },
    {
      id: 4,
      name: "Emine Erdogan",
      description:
        "First Lady of Turkey. Mother of humanity and peace. Friend of democracy and secularism, by all means. (Wife of President Recep Tayyip Erdogan) (Turkey has helped Rohingya refugees and hosted four million Syrian refugees.)",
    },
    {
      id: 5,
      name: "Ursula von der Leyen",
      description:
        "President of the European Commission. Mother of humanity and peace. Friend of democracy and secularism by all means. (Currently helping the President of Ukraine and its people as well as millions of Ukrainian refugees.)",
    },
    {
      id: 6,
      name: "Kamala Harris",
      description:
        "Vice President of the United States of America. Mother of humanity and peace by all means.",
    },
    {
      id: 7,
      name: "Poet Jahanara Arzu",
      description:
        "Mother of humanity and peace by all means. (Wife of Mr. Justice A.K.M. Nurul Islam and mother of Mr. Justice Md. Ashfaqul Islam who's in the Supreme Court of Bangladesh)",
    },
    {
      id: 8,
      name: "H.H. Moza",
      description:
        "Mother of humanity and peace. Friend of democracy and secularism by all means. (Wife of Emir Hamad and Mother of current Emir, Tamin Al Thani of Qatar)",
    },
    {
      id: 9,
      name: "Sheikha Jawaher",
      description:
        "Wife of Tamim Al Thani. Mother of humanity and peace by all means.",
    },
    {
      id: 10,
      name: "Shireen Abu Akleh",
      description:
        "Mother of humanity and peace by all means. Voice for Palestinians, veteran Al Jazeera journalist. (Shot & killed by the Israeli army)",
    },
    {
      id: 11,
      name: "Nancy Pelosi",
      description:
        "Former Speaker of the United States Congress. Mother of humanity and peace by all means.",
    },
    {
      id: 12,
      name: "Madam Justice Naima Haider Chowdhury",
      description:
        "Mother of humanity, peace, democracy and secularism by all means. (Daughter of honorable Chief Justice, Mr. Badrul Haider Chowdhury)",
    },
    {
      id: 13,
      name: "Madam Justice Farah Mahbub",
      description:
        "Mother of humanity, peace, democracy and secularism by all means. (Daughter of great civil right activist senior advocate Mahbubur Rahman).",
    },
    {
      id: 14,
      name: "Queen Rania",
      description:
        "Wife of King Abdullah of Jordan. Mother of humanity and peace by all means. (Currently helping hundreds of thousands of Palestinian and Syrian refugees)",
    },
    {
      id: 15,
      name: "Dr. Saima Wazed Hossain (Putul Bowma)",
      description:
        "Mother of humanity and peace. Friend of democracy and secularism by all means. (Currently helping hundreds of thousands of autistic individual around the world.) (Granddaughter of the father of the nation of Bangladesh)",
    },
    {
      id: 16,
      name: "Olena Zelenska",
      description:
        "Wife of President of Ukraine, Volodymyr Zelenskyy. Mother of humanity and peace. Friend of democracy and secularism by all means.",
    },
    {
      id: 17,
      name: "Mamata Banerjee",
      description:
        "Chief Minister of West Bengal, India. Protector of minorities and mother of humanity and peace. Friend of democracy and secularism by all means.",
    },
    {
      id: 18,
      name: "Jacinda Ardern",
      description:
        "Former Prime Minister of New Zeleand. Mother of humanity and peace. Friend of democracy and secularism by all means.",
    },
    {
      id: 19,
      name: "Sabrina Sobhan (Bowma)",
      description:
        "Mother of Humanity & Peace. Friend of Democracy and Secularism, by all means. (Offered food to 11,000 orphans with the help of parents-in-law, husband, and brother, Naem Nizam of Daily Bangladesh Protidin).",
    },
    {
      id: 20,
      name: "Madam Lilly Nicholls",
      description:
        "High Commissioner for Canada in Bangladesh. Mother of humanity, peace, democracy and secularism by all means.",
    },
    {
      id: 21,
      name: "Carmel Sepuloni",
      description:
        "Deputy Prime Minister of New Zealand. Mother of humanity and peace. Friend of democracy and secularism by all means.",
    },
    {
      id: 22,
      name: "Madam Justice Salma Masud Chowdhury",
      description:
        "Mother of humanity and peace,Friend of Democracy and Secularism by all means,( Daughter of Mr.Justice Chowdhury A.T.M.Masud, and Vice President, of National Heart Foundation of Bangladesh)",
    },
  ];

  return (
    <div className="Male-section">
      <h6 style={{textAlign: "left", marginTop: 20, marginLeft: "20%"}}>Symbol of Canadian Identity</h6>
      <div className="profile-section">
        <Profile
          title=""
          bio='We are Canadian Social Worker, for humanity and peace.'
          image={Ali}
        />
      </div>
      <hr />
      <h3>Friends of Humanity</h3>
      <div className="card-section">
        {malePeople.map((people) => {
          // Dynamically import the image based on the name property of the people object
          const Image = require(`./people-pics/${people.name}.png`);

          return (
            <Card
              key={people.id}
              name={people.name}
              description={people.description}
              imageSrc={Image}
            />
          );
        })}
      </div>
      <hr />
      <h3>Mothers of Humanity</h3>
      <div className="card-section">
        {femalePeople.map((people) => {
          // Dynamically import the image based on the name property of the people object
          const Image = require(`./people-pics/${people.name}.png`);

          return (
            <Card
              key={people.id}
              name={people.name}
              description={people.description}
              imageSrc={Image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
