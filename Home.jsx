import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// c言語でいう関数に似ている。App.jsxがmain関数
const Home = () => {
  return (
    <div className="home-container">
      {/* ヘッダー(ここで各ページを紐づけている。) */}
      <header className="home-header">
        <div className="logo">IntroductionPL</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/japanese">Japanese</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/stats">Stats</Link>
          <Link to="/weather">Weather</Link>
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
          {/* プレミアの歴史 */}
          <Link to="/history" className="card">
            <div className="card-img bg-history">📜</div>
            <div className="card-content">
              <div className="card-title">History Archive</div>
              <div className="card-desc">
                2000年から現在までのプレミアリーグの優勝チーム、得点王、MVPなどの詳細データ。
              </div>
            </div>
          </Link>

          {/* 日本人ページ */}
          <Link to="/japanese" className="card">
            <div className="card-img bg-japanese">🇯🇵</div>
            <div className="card-content">
              <div className="card-title">Japanese Players</div>
              <div className="card-desc">
              プレミアリーグで活躍する日本人選手たちの紹介。
              </div>
            </div>
          </Link>

          {/* スタッツ表 */}
          <Link to="/stats" className="card">
            <div className="card-img bg-stats">📊</div>
            <div className="card-content">
              <div className="card-title">Stats & Records</div>
              <div className="card-desc">
                歴代最多得点、アシスト記録、クリーンシートなどのスタッツ集。
              </div>
            </div>
          </Link>

          {/* クラブの説明 */}
          <Link to="/teams" className="card">
            <div className="card-img bg-teams">🏟️</div>
            <div className="card-content">
              <div className="card-title">Club Profiles</div>
              <div className="card-desc">
                ビッグ6を中心とした各クラブの情報。
              </div>
            </div>
          </Link>

          {/* 外のスポーツなので天気 */}
          <Link to="/weather" className="card">
            <div className="card-img bg-weather">🌤️</div>
            <div className="card-content">
              <div className="card-title">Local Weather</div>
              <div className="card-desc">
                イングランドの主な都市のリアルタイム天気。
              </div>
            </div>
          </Link>
        </div>
      </div> 
    </div>
  );
};

// 他のファイルでも使えるように
export default Home;