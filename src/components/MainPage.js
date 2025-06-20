import React from "react";
import "../components/component-styles.css";
import imag1 from "../images/logo.jpg";
import portrait1 from "../images/portrait1.jpeg";
import portrait2 from "../images/portrait2.jpeg";
import events1 from "../images/events1.jpeg";
import tivoli1 from "../images/tivoli1.jpeg";

const events = [
  {
    title: "Portrait",
    subtitle: "Individual | Couple | Family",
    description:
      "Capture the essence of your personality with a portrait photoshoot. Whether it's for personal branding, family memories, or just for fun, we create stunning images that reflect who you are. Choose from a variety of styles and settings to make your portrait truly unique.",
    image: portrait1,
    price:
      "700 DKK for one hour and 10 edited digital files. 1200 DKK for two hour and 20 edited digital files. Morethan two hours 500 DKK for each hour and 10 edited digital files per hour. Additional files will be charged 30 DKK each",
    id: 1,
  },
  {
    title: "Events",
    subtitle: "Birthday | Celebrations | Engagement | Wedding",
    description:
      "Make your special day even more memorable with a photoshoot. Whether it's a birthday, engagement, or wedding, we capture the essence of your celebration. We offer a range of packages to suit your needs, from candid shots to posed portraits. Let us help you preserve the memories of your special day.",
    image: events1,
    price:
      "1800 DKK for Three hour and 25 edited digital files. Morethan three hours 500 DKK for each hour and 10 edited digital files per hour. Additional files will be charged 30 DKK each",
    id: 2,
  },
  {
    title: "Tivoli Gardens Photoshoot",
    subtitle: "Individual | Couple | Family",
    description:
      "Tivoli Gardens is a beautiful location for a photoshoot. The gardens are filled with flowers, fountains, and other beautiful scenery that make for great backdrops. Entry tickets are included without rides so you can enjoy the Tivoli experience even after the photoshoot.",
    image: tivoli1,
    price:
      "800 DKK for one hour and 5 edited digital files. 1500 DKK for two hour and 10 edited digital files. Morethan two hours 600 DKK for each hour and 5 edited digital files per hour. Additional files will be charged 30 DKK each",
    id: 3,
  },
];

export default function MainPage() {
  return (
    <div className="main-page">
      {events.map((event) => (
        <div className="event">
          <div key={event.id} className="event-item">
            <img alt={event.title} src={event.image} width="700" height="400" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <h3 className="event-subtitle">{event.subtitle}</h3>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
          <div className="event-price">
            <p>{event.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
