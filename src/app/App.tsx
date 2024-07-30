import React from "react";
import { RouterConfig } from "../app/routes/RouterConfig";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

function App() {
  return (
    <>
      <Header />
      <RouterConfig />
      <Footer />
    </>
  );
}

export default App;
