import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import HeaderMain from "./components/HeaderMain";
// import InfoMain from "./components/InfoMain";
import ChooseBnk from "./components/ChooseBnk";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeaderMain />
      {/* <InfoMain /> */}
      <ChooseBnk />
      <Article />
      <Footer />
    </>
  );
}

export default App;
