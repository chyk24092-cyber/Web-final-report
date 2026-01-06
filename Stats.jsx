import React from 'react';
import { Link } from 'react-router-dom'; // ルーティングを使用する場合
import './Stats.css'; // 作成したCSSをインポート

const Stats = () => {
  //  順位表のデータ
  const standingsData = [
    { pos: 1, club: 'Arsenal', pl: 20, gd: 26, pts: 48, status: 'rank-cl' },
    { pos: 2, club: 'Man City', pl: 20, gd: 26, pts: 42, status: 'rank-cl' },
    { pos: 3, club: 'Aston Villa', pl: 20, gd: 9, pts: 42, status: 'rank-cl' },
    { pos: 4, club: 'Liverpool', pl: 20, gd: 4, pts: 34, status: 'rank-cl' },
    { pos: 5, club: 'Chelsea', pl: 20, gd: 11, pts: 31, status: 'rank-el' },
    { pos: 6, club: 'Man Utd', pl: 20, gd: 4, pts: 31, status: 'rank-normal' },
    { pos: 7, club: 'Brentford', pl: 20, gd: 4, pts: 30, status: 'rank-normal' },
    { pos: 8, club: 'Sunderland', pl: 20, gd: 2, pts: 30, status: 'rank-normal' },
    { pos: 9, club: 'Newcastle', pl: 20, gd: 4, pts: 29, status: 'rank-normal' },
    { pos: 10, club: 'Brighton', pl: 20, gd: 3, pts: 28, status: 'rank-normal' },
    { pos: 11, club: 'Fulham', pl: 20, gd: -1, pts: 28, status: 'rank-normal' },
    { pos: 12, club: 'Everton', pl: 20, gd: -2, pts: 28, status: 'rank-normal' },
    { pos: 13, club: 'Tottenham', pl: 20, gd: 4, pts: 27, status: 'rank-normal' },
    { pos: 14, club: 'Crystal Palace', pl: 20, gd: -1, pts: 27, status: 'rank-normal' },
    { pos: 15, club: 'Bournemouth', pl: 20, gd: -7, pts: 23, status: 'rank-normal' },
    { pos: 16, club: 'Leeds United', pl: 20, gd: -7, pts: 22, status: 'rank-normal' },
    { pos: 17, club: "Nott'm Forest", pl: 20, gd: -14, pts: 18, status: 'rank-normal' },
    { pos: 18, club: 'West Ham', pl: 20, gd: -20, pts: 14, status: 'rank-demote' },
    { pos: 19, club: 'Burnley', pl: 20, gd: -19, pts: 12, status: 'rank-demote' },
    { pos: 20, club: 'Wolves', pl: 20, gd: -26, pts: 6, status: 'rank-demote' },
  ];

  // 2. 得点ランキングのデータ
  // barWidthは1位のゴール数を100%としたときの割合で計算
  const topScorersData = [
    { rank: 1, name: 'Erling Haaland', team: 'Man City', goals: 19, barWidth: '100%' },
    { rank: 2, name: 'Igor Thiago', team: 'Brentford', goals: 11, barWidth: '70%' },
    { rank: 3, name: 'Antoine Semenyo', team: 'Bournemouth', goals: 9, barWidth: '60%' },
    { rank: 4, name: 'Philippe Mateta', team: 'Crystal Palace', goals: 8, barWidth: '55%' },
    { rank: 4, name: 'Danny Welbeck', team: 'Brighton', goals: 8, barWidth: '55%' },
    { rank: 4, name: 'Dominic Calvert-Lewin', team: 'Leeds United', goals: 8, barWidth: '55%' },
  ];

  return (
    <div>
      {/* 戻るボタン */}
      <div className="back-nav">
        {/* React Routerを使っている場合は Link を推奨。*/}
        <Link to="/" className="back-link">
          &larr; Back to Home
        </Link>
      </div>

      {/* このページのタイトル */}
      <div className="stats-container">
        <h1 className="stats-header">Season Stats</h1>

        {/* --- 順位表--- */}
        <div className="stats-box">
          <h2 className="section-title">Standings table</h2>
          <table className="standings-table">
            <thead>
              <tr>
                <th style={{ width: '50px' }}>Pos</th>
                <th>Club</th>
                <th style={{ textAlign: 'center' }}>Pl</th>
                <th style={{ textAlign: 'center' }}>GD</th>
                <th style={{ textAlign: 'center' }}>Pts</th>
              </tr>
            </thead>
            <tbody>
              {/* ここでデータをループ処理 (forで繰り返し20クラブしている。これがマッピング) */}
              {standingsData.map((team) => (
                <tr key={team.club} className={team.status}>
                  <td>{team.pos}</td>
                  <td><strong>{team.club}</strong></td>
                  <td style={{ textAlign: 'center' }}>{team.pl}</td>
                  <td style={{ textAlign: 'center' }}>
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </td>
                  <td style={{ textAlign: 'center' }}><strong>{team.pts}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '0.8em', color: '#888', textAlign: 'right', marginTop: '10px' }}>
            ※2026年1月6日19時時点のデータです。
          </p>
        </div>

        {/* --- 得点ランキング --- */}
        <div className="stats-box">
          <h2 className="section-title">Top Scorers</h2>
          
          {/* ここでデータをループ処理 (forで繰り返し行っている) */}
          {topScorersData.map((player, index) => (
            <div className="scorer-item" key={index}>
              <div className="scorer-rank">{player.rank}</div>
              <div className="scorer-info">
                <span className="scorer-name">{player.name}</span>
                <span className="scorer-team">{player.team}</span>
              </div>
              <div className="goal-bar-container">
                <div 
                  className="goal-bar" 
                  style={{ width: player.barWidth }}
                ></div>
                <span className="goal-count">{player.goals}</span>
              </div>
            </div>
          ))}

        </div>
        
        {/* 戻るボタン */}
        <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>
          <Link to="/" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#38003c', color: 'white', textDecoration: 'none', borderRadius: '20px', fontWeight: 'bold' }}>
            &larr; Back to Home
          </Link>
        </div>
        
      </div>
    </div>
  );
};

//ほかのファイルでも使えるように
export default Stats;