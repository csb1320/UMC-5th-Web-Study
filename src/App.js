import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Celebirity />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
        </Routes>
    </Router>
  );
}

export default App;