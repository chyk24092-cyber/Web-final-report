import React from 'react';
import { Link } from 'react-router-dom';
import './Japanese.css';

const playersData = [
  {
    name: "Kaoru Mitoma",
    team: "Brighton & Hove Albion",
    season: "2021~",
    icon: "🏃💨",
    desc: "ドリブルだけでなくパスやオフザボールも得意とするブライトンの攻撃の核。課題だった決定力も昨シーズン2桁ゴールをしたことで克服。「三苫の1mm」で劇的アシストをしたことでも有名である。"
  },
  {
    name: "Wataru Endo",
    team: "Liverpool FC",
    season: "2023~",
    icon: "🛡️",
    desc: "「デュエル王」の異名を持つ守備的MF。監督に求められた役割を遂行するため、CBやSBにコンバートすることもある。日本代表ではキャプテンも務めているリーダー的存在。"
  },
  {
    name: "Ao Tanaka",
    team: "Leeds United",
    season: "2024~",
    icon: "🧐",
    desc: "豊富な運動量と極めて高い戦術眼で中盤を支配する「リーズの心臓」。「三笘の1mm」から生まれた決勝弾のスコアラーは彼であり、幼馴染である三笘の折り返しを田中が沈めるという、ロマンとドラマが詰まったゴールであった。"
  },
  {
    name: "Daichi Kamada",
    team: "Crystal Palace",
    season: "2024~",
    icon: "🦅",
    desc: "恩師グラスナー監督のラブコールに応じ、プレミアリーグへ参戦。高い得点力とチャンスメイク能力を併せ持つ攻撃的MF。現在のパレスでは必要不可欠な存在となっている。"
  },
  {
    name: "Kouta Takai",
    team: "Tottenham Hotspur",
    season: "2025~",
    icon: "🧱",
    desc: "192cmの圧倒的な高さと、足元の技術を兼ね備えた現代型CB。その才能は日本のみならず世界からも注目され、弱冠20歳にしてビッグクラブ・トッテナムへの移籍を果たした。"
  }
];

const PlayerCard = ({ player }) => {
  return (
    <div className="jp-card">
      <div className="jp-card-photo">
        {player.icon}
      </div>
      <div className="jp-card-info">
        <h2 className="jp-name">{player.name}</h2>
        <span className="jp-team">{player.team}</span>
        <span className="jp-season">{player.season}</span>
        <p className="jp-desc">
          {player.desc}
        </p>
      </div>
    </div>
  );
};

const Japanese = () => {
  return (
    <div className="jp-page">
      <div className="jp-nav-header">
        {/* React RouterのLinkに変更 */}
        <Link to="/" className="jp-nav-link">
          &larr; Back to Home
        </Link>
      </div>

      <div className="jp-container">
        <h1 className="jp-title">Japanese Players</h1>
        <p className="jp-subtitle">
          プレミアリーグで戦う日本人選手たち。
        </p>

        <div className="jp-grid">
          {playersData.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>

        <div className="jp-footer-nav">
          <Link to="/" className="jp-back-btn">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Japanese;