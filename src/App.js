import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoGames from "./pages/VideoGames";
import NavBar from "./components/navbar";


const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<VideoGames />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
