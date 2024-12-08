import { Link } from "react-router-dom";

import { Container } from "./style";

import ChangeTheme from "../ChangeTheme";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <h2>Anki Adder</h2>
      </Link>

      <ChangeTheme />
    </Container>
  );
};

export default Header;
