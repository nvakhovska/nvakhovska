import { header } from "../../portfolio";

// Components
import Navbar from "../Navbar/Navbar";

// Styles
import "./header.css";

const Header = () => {
  const { homepage, logo } = header;
  return (
    <header className="header center">
      <h3>
        {homepage && (
          <a href={homepage} className="link">
            <img src={import.meta.env.BASE_URL + logo} alt="Logo" className="logo-img" />
          </a>
        )}
      </h3>
      <Navbar />
    </header>
  );
};
export default Header;
