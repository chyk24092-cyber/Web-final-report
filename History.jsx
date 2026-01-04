import React, { useState } from 'react';
import './History.css'; 

// データセット
const historyData = [
  {
      season: "2000-01",
      champion: "Man Utd",
      mvp: "Patirick Veira (ARS)",
      topScorer: "Hasselbaink (23)",
      assistKing: "Beckham (12)",
      bestGoal: "Shaun Bartlett (vs Leicester)",
      clTeams: ["Man Utd", "Arsenal", "Liverpool"],
      trivia: "マンチェスター・ユナイテッドが3連覇を達成。2位アーセナルに勝ち点10差をつける独走。"
  },
  {
      season: "2001-02",
      champion: "Arsenal",
      mvp: "Freddie Ljungberg (ARS)",
      topScorer: "Henry (24)",
      assistKing: "Pires (15)",
      bestGoal: "Dennis Bergkamp (vs Newcastle)",
      clTeams: ["Arsenal", "Liverpool", "Man Utd", "Newcastle"],
      trivia: "アーセナルがオールド・トラッフォードで優勝を決める。ベルカンプのニューカッスル戦の伝説的なターンゴールが生まれた。"
  },
  {
      season: "2002-03",
      champion: "Man Utd",
      mvp: "Ruud van Nistelrooy (MUN)",
      topScorer: "Van Nistelrooy (25)",
      assistKing: "Henry (20)",
      bestGoal: "Thierry Henry (vs Tottenham)",
      clTeams: ["Man Utd", "Arsenal", "Newcastle", "Chelsea"],
      trivia: "アーセナルが優勢だったが、終盤にユナイテッドが猛追して逆転優勝。アンリが24得点20アシストという驚異的な数字を残す。"
  },    
  {
      season: "2003-04",
      champion: "Arsenal",
      mvp: "Thierry Henry (ARS)",
      topScorer: "Henry (30)",
      assistKing: "Muzzy Izzet (14)",
      bestGoal: "Dietmar Hamann (vs Portsmouth)",
      clTeams: ["Arsenal", "Chelsea", "Man Utd", "Liverpool"],
      trivia: "「インビンシブルズ（無敵の艦隊）」。アーセナルが26勝12分0敗で、近代サッカー史に残る無敗優勝を達成。"
  },
  {
      season: "2004-05",
      champion: "Chelsea",
      mvp: "Frank Lampard (CHE)",
      topScorer: "Henry (25)",
      assistKing: "Lampard (18)",
      bestGoal: "Patrik Berger (vs Charlton)",
      clTeams: ["Chelsea", "Arsenal", "Man Utd", "Everton", "Liverpool(CL champion)"],
      trivia: "モウリーニョがチェルシーの監督として登場。シーズン最少失点（15）記録を樹立。リバプールは5位だがCL優勝で特例出場。"
  },
  {
      season: "2005-06",
      champion: "Chelsea",
      mvp: "Frank Lampard (CHE)",
      topScorer: "Henry (27)",
      assistKing: "Drogba (11)",
      bestGoal: "Anton Ferdinand (vs Fulham)",
      clTeams: ["Chelsea", "Man Utd", "Liverpool", "Arsenal"],
      trivia: "モウリーニョ・チェルシーが連覇。一年間を通して終始安定していた。"
  },
  {
      season: "2006-07",
      champion: "Man Utd",
      mvp: "Cristiano Ronaldo (MUN)",
      topScorer: "Drogba (20)",
      assistKing: "Rooney / Fabregas (11)",
      bestGoal: "Wayne Rooney (vs Bolton)",
      clTeams: ["Man Utd", "Chelsea", "Liverpool", "Arsenal"],
      trivia: "ユナイテッドが4シーズンぶりに王座奪還。C・ロナウドとルーニーのコンビが成熟。"
  },
  {
      season: "2007-08",
      champion: "Man Utd",
      mvp: "Cristiano Ronaldo (MUN)",
      topScorer: "Ronaldo (31)",
      assistKing: "Fabregas (17)",
      bestGoal: "Emmanuel Adebayor (vs Tottenham)",
      clTeams: ["Man Utd", "Chelsea", "Arsenal", "Liverpool"],
      trivia: "C・ロナウドが31得点を記録しバロンドールへ。CL決勝もMan Utd vs Chelseaの同国対決となった。"
  },
  {
      season: "2008-09",
      champion: "Man Utd",
      mvp: "Nemanja Vidić (MUN)",
      topScorer: "Anelka (19)",
      assistKing: "Lampard / Van Persie (10)",
      bestGoal: "Glen Johnson (vs Hull City)",
      clTeams: ["Man Utd", "Liverpool", "Chelsea", "Arsenal"],
      trivia: "マンチェスター・ユナイテッドが2度目のリーグ3連覇を達成。"
  },
  {
      season: "2009-10",
      champion: "Chelsea",
      mvp: "Wayne Rooney (MUN)",
      topScorer: "Drogba (29)",
      assistKing: "Lampard (18)",
      bestGoal: "Maynor Figueroa (vs Stoke)",
      clTeams: ["Chelsea", "Man Utd", "Arsenal", "Tottenham"],
      trivia: "アンチェロッティ率いるチェルシーがリーグ総得点103を記録して優勝。"
  },
  {
    season: "2010-11", // ※注: 元データで抜けていた部分ですが、補完する場合はここに入れます
    champion: "Man Utd",
    mvp: "Nemanja Vidić (MUN)",
    topScorer: "Berbatov / Tevez (20)",
    assistKing: "Nani (14)",
    bestGoal: "Wayne Rooney (vs Man City)",
    clTeams: ["Man Utd", "Chelsea", "Man City", "Arsenal"],
    trivia: "ルーニーがマンチェスター・ダービーで伝説のオーバーヘッドキックを決めたシーズン。"
  },
  {
      season: "2011-12",
      champion: "Man City",
      mvp: "Vincent Kompany (MCI)",
      topScorer: "Van Persie (30)",
      assistKing: "David Silva (15)",
      bestGoal: "Papiss Cissé (vs Chelsea)",
      clTeams: ["Man City", "Man Utd", "Arsenal", "Chelsea(CL優勝枠)"],
      trivia: "最終節のロスタイムにアグエロが決めて得失点差での劇的な初優勝。4位スパーズはチェルシーのCL優勝によりCL権喪失。"
  },
  {
      season: "2012-13",
      champion: "Man Utd",
      mvp: "Gareth Bale (TOT)",
      topScorer: "Van Persie (26)",
      assistKing: "Mata (12)",
      bestGoal: "Robin van Persie (vs Aston Villa)",
      clTeams: ["Man Utd", "Man City", "Chelsea", "Arsenal"],
      trivia: "香川真司がドルトムントからマンチェスターユナイテッドに移籍。プレミアリーグでアジア人初のハットトリックを成し遂げる。"
  },
  {
      season: "2013-14",
      champion: "Man City",
      mvp: "Luis Suárez (LIV)",
      topScorer: "Suárez (31)",
      assistKing: "Gerrard (13)",
      bestGoal: "Jack Wilshere (vs Norwich)",
      clTeams: ["Man City", "Liverpool", "Chelsea", "Arsenal"],
      trivia: "リバプールのジェラードの転倒が響き、シティが逆転優勝。"
  },
  {
      season: "2014-15",
      champion: "Chelsea",
      mvp: "Eden Hazard (CHE)",
      topScorer: "Agüero (26)",
      assistKing: "Fàbregas (18)",
      bestGoal: "Jack Wilshere (vs West Brom)",
      clTeams: ["Chelsea", "Man City", "Arsenal", "Man Utd"],
      trivia: "モウリーニョがチェルシーに復帰して2年目で優勝。レスターが奇跡的な残留劇を演じる。"
  },
  {
      season: "2015-16",
      champion: "Leicester",
      mvp: "Jamie Vardy (LEI)",
      topScorer: "Kane (25)",
      assistKing: "Özil (19)",
      bestGoal: "Dele Alli (vs Palace)",
      clTeams: ["Leicester", "Arsenal", "Tottenham", "Man City"],
      trivia: "「奇跡の優勝」。開幕前のオッズ5000倍だったレスター・シティが初優勝を果たし、スポーツ史上最大の番狂わせと言われた。レスターには岡崎慎司も所属していた。"
  },
  {
      season: "2016-17",
      champion: "Chelsea",
      mvp: "N'Golo Kanté (CHE)",
      topScorer: "Kane (29)",
      assistKing: "De Bruyne (18)",
      bestGoal: "Emre Can (vs Watford)",
      clTeams: ["Chelsea", "Tottenham", "Man City", "Liverpool"],
      trivia: "コンテ監督が導入した「3バック」システムがリーグを席巻し、チェルシーが独走優勝。"
  },
  {
      season: "2017-18",
      champion: "Man City",
      mvp: "Mohamed Salah (LIV)",
      topScorer: "Salah (32)",
      assistKing: "De Bruyne (16)",
      bestGoal: "Sofiane Boufal (vs West Brom)",
      clTeams: ["Man City", "Man Utd", "Tottenham", "Liverpool"],
      trivia: "マンチェスター・シティが「勝ち点100」を達成(理論値は 38勝×3=114)。"
  },
  {
      season: "2018-19",
      champion: "Man City",
      mvp: "Virgil van Dijk (LIV)",
      topScorer: "Salah / Mané / Aubameyang (22)",
      assistKing: "Hazard (15)",
      bestGoal: "Andros Townsend (vs Man City)",
      clTeams: ["Man City", "Liverpool", "Chelsea", "Tottenham"],
      trivia: "史上最高レベルの優勝争い。リバプールは勝ち点97を獲得しながら2位に終わる（シティは98）。"
  },
  {
      season: "2019-20",
      champion: "Liverpool",
      mvp: "Kevin De Bruyne (MCI)",
      topScorer: "Vardy (23)",
      assistKing: "De Bruyne (20)",
      bestGoal: "Son Heung-min (vs Burnley)",
      clTeams: ["Liverpool", "Man City", "Man Utd", "Chelsea"],
      trivia: "リバプールが30年ぶりのトップリーグ優勝。コロナ禍による中断を挟みながらも圧倒的な強さを見せた。"
  },
  {
      season: "2020-21",
      champion: "Man City",
      mvp: "Rúben Dias (MCI)",
      topScorer: "Kane (23)",
      assistKing: "Kane (14)",
      bestGoal: "Erik Lamela (vs Arsenal)",
      clTeams: ["Man City", "Man Utd", "Liverpool", "Chelsea"],
      trivia: "コロナ禍によりほぼ無観客で開催。ハリー・ケインが得点王とアシスト王のダブル受賞。"
  },
  {
      season: "2021-22",
      champion: "Man City",
      mvp: "Kevin De Bruyne (MCI)",
      topScorer: "Salah / Son (23)",
      assistKing: "Salah (13)",
      bestGoal: "Mohamed Salah (vs Man City)",
      clTeams: ["Man City", "Liverpool", "Chelsea", "Tottenham"],
      trivia: "最終節、シティが0-2からの大逆転勝利でリバプールを勝ち点1差で振り切り優勝。三苫薫がブライトンに移籍。Jリーグから海外の移籍金は(当時)史上最高額。"
  },
  {
      season: "2022-23",
      champion: "Man City",
      mvp: "Erling Haaland (MCI)",
      topScorer: "Haaland (36)",
      assistKing: "De Bruyne (16)",
      bestGoal: "Julio Enciso (vs Man City)",
      clTeams: ["Man City", "Arsenal", "Man Utd", "Newcastle"],
      trivia: "ハーランドが加入初年度で36ゴールを記録し、プレミアリーグのシーズン最多得点記録を更新。"
  },
  {
      season: "2023-24",
      champion: "Man City",
      mvp: "Phil Foden (MCI)",
      topScorer: "Haaland (27)",
      assistKing: "Watkins (13)",
      bestGoal: "Garnacho (vs Everton)",
      clTeams: ["Man City", "Arsenal", "Liverpool", "Aston Villa"],
      trivia: "マンチェスター・シティが前人未到のリーグ4連覇を達成。日本代表のキャプテン遠藤航が強豪リバプールにまさかの移籍。"
  },
   {
      season: "2024-25",
      champion: "Liverpool", 
      mvp: "Salah",
      topScorer: "Salah (38)",
      assistKing: "Salah (18)",
      bestGoal: "Marmoush (vs Bournemouth)",
      clTeams: [ "Liverpool","Arsenal","Man City","Chelsea","Newcastle(EPS)","Tottenham(EL champion)"],
      trivia: "リバプールが圧倒的強さで優勝。三苫薫がシーズン最優秀ゴールにノミネート"
  }
];

// 個別のシーズンカードコンポーネント
const SeasonCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="season-card">
      <div className="card-header">
        <span className="season-year">{data.season}</span>
        <span className="champion-badge">🏆 {data.champion}</span>
      </div>
      <div className="card-body">
        <div className="data-row">
          <span className="label">得点王</span>
          <span className="value">{data.topScorer}</span>
        </div>
        <div className="data-row">
          <span className="label">アシスト王</span>
          <span className="value">{data.assistKing}</span>
        </div>
        <div className="data-row">
          <span className="label">MVP</span>
          <span className="value">{data.mvp}</span>
        </div>
        <div className="data-row">
          <span className="label">Best Goal</span>
          <span className="value">{data.bestGoal}</span>
        </div>
      </div>

      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▲ 閉じる" : "▼ 詳細・トリビアを見る"}
      </button>

      {/* 詳細エリア (条件付きレンダリング) */}
      {isOpen && (
        <div className="details">
          <div className="data-row">
            <span className="label">CL権獲得 (Top4)</span>
          </div>
          <div style={{ textAlign: 'right', fontWeight: 'bold', marginBottom: '10px', color: '#38003c' }}>
            {data.clTeams.join(', ')}
          </div>

          {data.trivia && (
            <div className="trivia-box">
              <strong>💡 その年のハイライト:</strong><br />
              {data.trivia}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// メインページコンポーネント
const History = () => {
  return (
    <div className="history-page">
      {/* 戻るボタン（ヘッダー） */}
      <div className="nav-header">
        <a href="/" className="nav-link">
          &larr; Back to Home
        </a>
      </div>

      <h1 className="history-title">Premier League History (2000-2025)</h1>
      <p className="intro">プレミアリーグ過去25年間の記録と記憶</p>

      <div className="archive-container">
        {historyData.map((seasonData, index) => (
          <SeasonCard key={index} data={seasonData} />
        ))}
      </div>

      {/* 戻るボタン（フッター） */}
      <div className="footer-nav">
        <a href="/" className="back-btn">
          &larr; Back to Home
        </a>
      </div>
    </div>
  );
};

export default History;