import { Overlay, Spinner } from "./styles";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function Loader({ isLoading }) {
  const loaderElement = document.getElementById("loader");

  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner />
    </Overlay>,
    loaderElement
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
