import "../App.css";
import React from "react";

const WebsiteContent = () => {
  return (
    // Each Div is directly tied to one of the pages.
    // If pages is set to 5 we will need 5 divs one for each page.
    <>
      <div className="container">
        <header className="header">
          <h1>Welcome to ToonTown</h1>
          <p>Explore the town as you Scroll !!!</p>
        </header>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="footerContainer">
        <footer>
          <h1>Visit Again !!!</h1>
        </footer>
      </div>
    </>
  );
};

export default WebsiteContent;
