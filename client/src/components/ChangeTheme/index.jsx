import { useTheme } from "../App";
import { Container } from "./style";

const ChangeTheme = () => {
  const { toggleTheme, isLightMode } = useTheme();

  function clickHandler() {
    toggleTheme();
  }

  return (
    <Container>
      <div className="btnChangeTheme" onClick={clickHandler}>
        {isLightMode ? "🌞" : "🌚"}
      </div>
    </Container>
  );
};

export default ChangeTheme;
