import { Container } from "./style";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <Container>
      <div className="btn-toPage">
        <Link to="/search">
          <p>Search</p>
        </Link>
      </div>
      <div className="btn-toPage">
        <Link to="/list">
          <p>List</p>
        </Link>
      </div>
    </Container>
  );
};

export default Bottom;
