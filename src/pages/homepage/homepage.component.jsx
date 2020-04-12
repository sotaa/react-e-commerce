import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <h1>Welcome to my Online Shop</h1>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
