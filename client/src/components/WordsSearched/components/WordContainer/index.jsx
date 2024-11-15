import { Link } from "react-router-dom";
import { Container } from "./style";
import PropTypes from "prop-types";

export default function WordContainer({ path, children, img, onDeleteWord }) {
  return (
    <Container>
      <Link to={path}>{children}</Link>
      <img
        src={img}
        alt="trash"
        onClick={() => {
          onDeleteWord(children);
        }}
      />
    </Container>
  );
}

WordContainer.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onDeleteWord: PropTypes.func.isRequired,
};
