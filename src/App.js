import "./App.css";
import MainPage from "./components/MainPage.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="landing-page">
      <Header />
      <MainPage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
