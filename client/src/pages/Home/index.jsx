import { Container } from "./style";

const Home = () => {
  return (
    <>
      <Container>
        <h1>How to Use</h1>
        <p>
          Choose the language you want to see the definition, the option is in
          the right of the Anki Adder. <br />
          Search for the word, if you want to add in to your Anki deck, click in
          the add icon.{" "}
          <b>
            Make sure the Anki before add and AnkiConnect installed and using
            the port 8765
          </b>
        </p>
      </Container>
    </>
  );
};

export default Home;
