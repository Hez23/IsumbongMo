import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserAgreement from "./WebResidentComponents/UserAgreement";
import Home from "./WebResidentComponents/Home";
import Report from "./WebResidentComponents/Report";

import Loginpage from "./WebBarangayComponents/Login";
import Carousel from "./WebBarangayComponents/Carousel";
import CreateAcc from "./WebBarangayComponents/CreateAcc";
import Page2 from "./WebBarangayComponents/Page2";
import Reports from "./WebBarangayComponents/Reports";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserAgreement />} />
          <Route path="/Home/*" element={<Home />} />
          <Route path="/Report/*" element={<Report />} />
          <Route path="/loginpage/*" element={<Loginpage />} />
          <Route path="/Carousel/*" element={<Carousel />} />
          <Route path="/CreateAcc/*" element={<CreateAcc />} />
          <Route path="/Page2/*" element={<Page2 />} />
          <Route path="/Reports/*" element={<Reports />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
