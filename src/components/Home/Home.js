import React, { createContext, useState } from "react";
import "./Home.css";
import FirstComponent from "../FirstComponent/FirstComponent";
import SecondComponent from "../SecondComponent/SecondComponent";
import ThirdComponent from "./../ThirtComponent/ThirdComponent";

export const CountContext = createContext();

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value = {`It's me Shubrato`}>
      <div className="container">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    </CountContext.Provider>
  );
};

export default Home ;
