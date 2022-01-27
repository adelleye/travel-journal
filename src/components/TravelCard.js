import React from "react";

export default function TravelCard(props) {
  console.log(props);
  return (
    <div className="travel">
      <div className="travel--card--container">
        <img
          className="travel--card--image"
          src={props.item.imageUrl}
          alt="Hello"
        />
        <div className="travel--card--details--container">
          <div className="travel--card--location--container">
            <p className="travel--card--country">
              {props.item.location.toUpperCase()}
            </p>
            <a className="travel--card--google" href={props.item.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h1 className="travel--card--title">{props.item.title}</h1>
          <p className="travel--card--date bold">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="travel--card--description">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
