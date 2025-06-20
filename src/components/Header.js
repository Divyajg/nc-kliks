import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        className="bg-image"
        width="90"
        height="auto"
        alt="logo"
      />
      <div className="header-title">
        <h1 className="title">NC Kilks </h1>

      </div>
    </header>
  );
};
export default Header;
