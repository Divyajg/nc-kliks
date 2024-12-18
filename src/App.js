import "./App.css";
import MainPage from "./components/MainPage.js";
import backgroundImage from "./images/bg-image.jpg";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="landing-page">
      <img src={backgroundImage} className="bg-image" alt="logo" />

      <header className="header">
        <h1>
          NCKLIKS <b className="tagline">We preserve your memories</b>
        </h1>
      </header>

      <MainPage />

      <Contact />
    </div>
  );
}

export default App;
