import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { AssetRecovery } from "../../pages/asset-recovery";
import { FraudWarning } from "../../pages/fraud-warning";
import { Contact } from "../../pages/contact/contact";
import { Redirect } from "./Redirect";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function RouterConfig() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Redirect />}>
          <Route path="asset-recovery" element={<AssetRecovery />} />
          <Route path="fraud-warning" element={<FraudWarning />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Add a 404 Not Found route if needed */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
