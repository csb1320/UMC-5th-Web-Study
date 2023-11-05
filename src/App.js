import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";

function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/person" element={<Celebirity />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/notFound" element={<NotFound />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;