import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ページのインポート
import Home from './Home';
import Teams from './Teams';
import Japanese from './Japanese'
import History from './History';
import Stats from './Stats';
import Weather from './Weather';

// App関数を入れている。main関数に近い
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/japanese" element={<Japanese />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/history" element={<History />} />
          <Route path="/weather" element={<Weather />} /> {/* ★これを追加！ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;