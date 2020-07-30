import React, { useState } from "react";
import CardAddForm from "./components/card/CardForm";
import CardMap from "./components/card/CardMap";

import Home from "./pages/Home";
import Room from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [myName, setMyName] = useState({ userName: "Dipesh Koirala's" });
  //2.1. State defined for creatig new new project of adding removing user

  const [card, setCard] = useState([
    {
      id: "",
      fullName: "",
      age: "",
    },
  ]);
  //(2.1)
  // ------------------------

  //3//
  /* Advanced React Project React ToDo */

  /* 2.2  require 2 components to be attached to app
  One component for filling up initialized value
  Another component for rendering the entered value
   */
  //2.2----------------------------------
  const addNewCard = (person) => {
    const newCard = {
      id: card.length + 1,
      fullName: person.fullName,
      age: person.age,
    };
    setCard([...card, newCard]);
  };
  /* --------------------------2.2---------- */
  /*  const changeName = () => {
    setMyName({
      userName:
        myName.userName === "Dipesh Koirala's"
          ? "Urmila Ghimire"
          : "Dipesh Koirala's",
    }); 
  };*/
  return (
    <div className="App">
      {/* 2.//-------------------------- added bootstrap styling  */}
      <h1 className="dk bg-secondary text-white text-center p-3">
        Checking my({myName.userName}) understanding in React State and Props
      </h1>
      {/* <button className="btn btn-primary m-2" onClick={changeName}>
        Change
      </button> */}
      <div className="bg-primary text-green text-left p-3">
        This div is for adding New member component
        <CardAddForm addNewCard={addNewCard} />
      </div>

      <div className="bg-secondary text-green text-left p-3">
        This div is for Card Mapping component
        <CardMap card={card} />
      </div>
      {/* 2.2 */}
      {/* --------------------------3------ */}

      <Switch>
        <Route exact path="/" component={Home}>
          <div className="koirala bg-primary text-white text-left p-3 m-1">
            This div is for Home
            <Home />
          </div>
        </Route>
        <Route path="/Room" component={Room}>
          <div className="koirala bg-secondary text-green text-left p-3 m-2">
            This div is for Room
            <Room />
          </div>
        </Route>
        <Route exact path="/rooms/:slither" component={SingleRoom}>
          <div className="koirala bg-primary text-white text-left p-3 m-1">
            This div is for Single Room
            <SingleRoom />
          </div>
        </Route>

        <div className="koirala bg-danger text-green text-left p-3 m-2">
          This div is for Error
          <Error />
        </div>
      </Switch>
    </div>
  );
}

export default App;
