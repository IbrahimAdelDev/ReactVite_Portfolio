import './App.css';
import Home from './features/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
