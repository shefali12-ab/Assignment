import Card from "../Components/Card";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movieticket from "../Components/Movieticket";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Card" element={<Card />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Movieticket" element={<Movieticket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
