import { Container } from "./style";
import { Link } from "react-router-dom";

const Bottom = ({ isListPage }) => {
  return (
    <Container>
      {isListPage && <Link to="/link">Add a list of Words</Link>}
    </Container>
  );
};

export default Bottom;
