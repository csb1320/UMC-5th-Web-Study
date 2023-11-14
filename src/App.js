import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import TvDetail from "./pages/TvDetail";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Celebirity />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/tv/:name" element={<TvDetail />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;