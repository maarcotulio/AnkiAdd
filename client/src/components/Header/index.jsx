import { Link } from "react-router-dom";

import { Container } from "./style";

import Search from "../Search";
import ChangeTheme from "../ChangeTheme";

const Header = () => {
  return (
    <Container>
      <div className="logoAndLanguage">
        <Link to="/">
          <h2>Anki Adder</h2>
        </Link>
        <select name="language" id="lg">
          <option value="en">🇺🇸</option>
          <option value="jp">🇯🇵</option>
        </select>
      </div>
      <Search />
      <ChangeTheme />
    </Container>
  );
};

export default Header;
