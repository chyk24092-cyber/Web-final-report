import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* ヘッダー(ここで各ページを紐づけている。) */}
      <header className="home-header">
        <div className="logo">Introduction to PL</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/japanese">Japanese</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/stats">Stats</Link>
        </nav>
      </header>

      {/* 一番上のホームの題名 */}
      <section className="hero">
        <h1>Premier League Information</h1>
        {/* サブタイトルがいればpの中に */}
        <p></p>
      </section>

      {/* メインコンテンツ */}
      <div className="container">
        <h2 className="main-heading">Menu</h2>
        
        <div className="grid">
          {/* History Page */}
          <Link to="/history" className="card">
            <div className="card-img bg-history">📜</div>
            <div className="card-content">
              <div className="card-title">History Archive</div>
              <div className="card-desc">
                2000年から現在までのプレミアリーグの順位、得点王、MVPなどの詳細データ。
              </div>
            </div>
          </Link>

          {/* Japanese Players Page */}
          <Link to="/japanese" className="card">
            <div className="card-img bg-japanese">🇯🇵</div>
            <div className="card-content">
              <div className="card-title">Japanese Players</div>
              <div className="card-desc">
                三苫薫、遠藤航などプレミアリーグで活躍する日本人選手たちの紹介。
              </div>
            </div>
          </Link>

          {/* Stats Page (リンク有効化) */}
          <Link to="/stats" className="card">
            <div className="card-img bg-stats">📊</div>
            <div className="card-content">
              <div className="card-title">Stats & Records</div>
              <div className="card-desc">
                歴代最多得点、アシスト記録、クリーンシートなどのスタッツ集。
              </div>
            </div>
          </Link>

          {/* Teams Page (リンク有効化) */}
          <Link to="/teams" className="card">
            <div className="card-img bg-teams">🏟️</div>
            <div className="card-content">
              <div className="card-title">Club Profiles</div>
              <div className="card-desc">
                ビッグ6を中心とした各クラブの歴史と本拠地スタジアム情報。
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* フッター */}
      <footer className="home-footer">
        &copy; 2025 Premier League Fan Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;