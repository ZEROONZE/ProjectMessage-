import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header/Index";
import { Sliderbar } from "./components/Menu/Sliderbar";
import { Home } from "./Pages/Home";
import MenssagemText from "./Pages/MensagemText";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sliderbar />
      <Content>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/text" element={<MenssagemText />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
