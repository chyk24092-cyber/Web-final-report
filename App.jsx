import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ページのインポート
import Home from './Home';
import Teams from './Teams';
// ...HistoryやJapaneseなど他のインポートがあるはずです...
import Weather from './Weather'; // ★これを追加！

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          {/* ...他のルート... */}
          <Route path="/weather" element={<Weather />} /> {/* ★これを追加！ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;