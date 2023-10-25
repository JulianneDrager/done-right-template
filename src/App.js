import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./Components/Screen/Screen";
import Thankyou from "../src/Components/Thankyou/Thankyou";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Screen />} />
          <Route exact path="/thankyou/:name" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
