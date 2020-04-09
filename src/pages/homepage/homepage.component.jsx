import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const HomePage = props => {
  return (
    <div className='homepage'>
      <h1>Welcome to my Online Shop</h1>
      <Directory />
    </div>
  );
};

export default HomePage;
