import Landing from "./Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingGolang from "./LandingGolang";
import LandingPhp from "./LandingPhp";
import LandingKotlin from "./LandingKotlin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gocustom" element={<LandingGolang />} />
        <Route path="/phpparser" element={<LandingPhp />} />
        <Route path="/parseads" element={<LandingKotlin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
