import Landing from "./components/Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingGolang from "./components/LandingGolang";
import LandingPhp from "./components/LandingPhp";
import LandingKotlin from "./components/LandingKotlin";
import Team from "./components/Team";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gocustom" element={<LandingGolang />} />
        <Route path="/phpparser" element={<LandingPhp />} />
        <Route path="/parseads" element={<LandingKotlin />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mertxebot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
