import React from "react";
import "./style.css";
import Nav from "./components/Nav.js";
import TravelCard from "./components/TravelCard.js";
import data from "./data";
console.log(data);

export default function App() {
  const travel = data.map((item) => {
    return (
      <TravelCard
        key={item.id}
        item={item}

        /*
        {...item}

        or
        
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageURL={item.imageUrl}
        */
      />
    );
  });

  return (
    <div>
      <Nav />
      <main>
        <section className="travel--blog--section">{travel}</section>
      </main>
    </div>
  );
}
