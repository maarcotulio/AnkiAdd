import { Link } from "react-router-dom";

import { Container } from "./style";

import ChangeTheme from "../ChangeTheme";

const Header = () => {
  return (
    <Container>
      <div className="logoAndLanguage">
        <Link to="/">
          <h2>Anki Adder</h2>
        </Link>
        <Link to="/search">
          <p>Search</p>
        </Link>
        <Link to="/list">
          <p>List</p>
        </Link>
      </div>
      <ChangeTheme />
    </Container>
  );
};

export default Header;
