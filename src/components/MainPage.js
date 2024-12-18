import React from "react";
import "../components/component-styles.css";
import imag1 from "../images/logo.jpg";

const events = [
  {
    title: "Photoshoot event 1",
    subtitle: "Individual | Couple | Engagement | Elopement | Family | & More",
    description:
      "1-hour photoshoot at a location of your choice, 8 retouched photos (digital files; sent within 2 days; 1 revision possible)",
    image: imag1,
    price: "1000 DKK",
    id: 1,
  },
  {
    title: "Photoshoot event 2",
    subtitle: "Individual | Couple | Engagement | Elopement | Family | & More",
    description:
      "1-hour photoshoot at a location of your choice, 8 retouched photos (digital files; sent within 2 days; 1 revision possible)",
    image: imag1,
    price: "1000 DKK",
    id: 2,
  },
  {
    title: "Photoshoot event 3",
    subtitle: "Individual | Couple | Engagement | Elopement | Family | & More",
    description:
      "1-hour photoshoot at a location of your choice, 8 retouched photos (digital files; sent within 2 days; 1 revision possible)",
    image: imag1,
    price: "1000 DKK",
    id: 3,
  },
  {
    title: "Photoshoot event 4",
    subtitle: "Individual | Couple | Engagement | Elopement | Family | & More",
    description:
      "1-hour photoshoot at a location of your choice, 8 retouched photos (digital files; sent within 2 days; 1 revision possible)",
    image: imag1,
    price: "1000 DKK",
    id: 4,
  },
  {
    title: "Photoshoot event 5",
    subtitle: "Individual | Couple | Engagement | Elopement | Family | & More",
    description:
      "1-hour photoshoot at a location of your choice, 8 retouched photos (digital files; sent within 2 days; 1 revision possible)",
    image: imag1,
    price: "1000 DKK",
    id: 5,
  },
];

export default function MainPage() {
  return (
    <div className="main-page">
      {events.map((event) => (
        <div key={event.id} className="event">
          <img alt={event.title} src={event.image} />
          <div>
            <h2>{event.title}</h2>
            <h3>{event.subtitle}</h3>
            <p>{event.price}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
