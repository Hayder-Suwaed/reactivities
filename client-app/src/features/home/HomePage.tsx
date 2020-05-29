import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container style={{ margin: "7em" }}>
      <h1>Home Page</h1>
      <h1>
        Go to <Link to="/activities">Activities</Link>
      </h1>
    </Container>
  );
};

export default HomePage;
