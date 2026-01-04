import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 各ページコンポーネントのインポート
import Home from './Home';
import History from './History';
import Japanese from './Japanese'; // JapanesePlayersから変更
import Teams from './Teams';       // お手元のTeams.jsxを想定
import Stats from './Stats';       // お手元のStats.jsxを想定

function App() {
  return (
    <Router>
      <Routes>
        {/* トップページ */}
        <Route path="/" element={<Home />} />
        
        {/* ヒストリーアーカイブ */}
        <Route path="/history" element={<History />} />
        
        {/* 日本人選手紹介 */}
        <Route path="/japanese" element={<Japanese />} />
        
        {/* チーム紹介 */}
        <Route path="/teams" element={<Teams />} />
        
        {/* スタッツ記録 */}
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;