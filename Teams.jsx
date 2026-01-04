import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';


// Team関数を作成。かつ、initialTeamsDa配列を作って
// 各チームの情報を書き込む。その際番号を振り分ける
//グッドとバッドを作って状態とイベントハンドリングを満たす
const Teams = () => {
  
  const initialTeamsData = [
    {
      id: 1,
      name: "Arsenal",
      icon: "🔫",
      color: "#EF0107",
      stadium: "Emirates Stadium",
      manager: "Mikel Arteta",
      keyPlayer: "Declan Rice",
      desc: "アルテタ監督の戦術が完全に浸透し、円熟期を迎えた優勝候補筆頭。堅守で失点数が少なく、デザインされたセットプレーが一番の武器。03-04以降優勝がないアーセナルは、悲願のタイトル奪取に燃える。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 2,
      name: "Aston Villa",
      icon: "🦁",
      color: "#670E36",
      stadium: "Villa Park",
      manager: "Unai Emery",
      keyPlayer: "Morgan Rogers",
      desc: "エメリ監督のもと、CL常連クラブとしての地位を確立。強固なブロック守備と、ワトキンスやロジャーズら前線のスピードを活かした鋭いカウンターは破壊力抜群。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 3,
      name: "Bournemouth",
      icon: "🍒",
      color: "#DA291C",
      stadium: "Vitality Stadium",
      manager: "Andoni Iraola",
      keyPlayer: "Antoine Semenyo",
      desc: "イラオラ監督が植え付けた「超ハイプレス」は今季も健在。相手がどのチームであろうと引かずに前へ出る勇敢なスタイル。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 4,
      name: "Brentford",
      icon: "🐝",
      color: "#E30613",
      stadium: "Gtech Community",
      manager: "Keith Andrews",
      keyPlayer: "Igor Thiago",
      desc: "データ分析を駆使したスマートな運営で知られる。「セットプレーの魔術師」とも呼ばれ、キックオフ直後の速攻など独自の戦術を持つ。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 5,
      name: "Brighton",
      icon: "🕊️",
      color: "#0057B8",
      stadium: "Amex Stadium",
      manager: "Fabian Hürzeler",
      keyPlayer: "Kaoru Mitoma",
      desc: "「三笘薫」が絶対的エースとして君臨。若き青年監督ヒュルツラーのもと、世界中から発掘した若手タレントと監督よりも年上のベテラン組の補完性で躍動する、最も見ていて楽しいチームの一つ。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 6,
      name: "Burnley",
      icon: "🚜",
      color: "#3A64A3",
      stadium: "Portman Road",
      manager: "Scott Parker",
      keyPlayer: "Armando Broja",
      desc: "22年ぶりにプレミア復帰を果たした「トラクター・ボーイズ」。若き知将マッケナ監督のもと、3部から2年連続昇格を果たした勢いがある。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 7,
      name: "Chelsea",
      icon: "🦁",
      color: "#034694",
      stadium: "Stamford Bridge",
      manager: "現在不在(Enzo Marescaが解任)",
      keyPlayer: "Cole Palmer",
      desc: "膨大な補強により生まれ変わった若きタレント軍団。天才コール・パーマーを中心に、ポゼッションスタイルで上位定着を狙う。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 8,
      name: "Crystal Palace",
      icon: "🦅",
      color: "#1B458F",
      stadium: "Selhurst Park",
      manager: "Oliver Glasner",
      keyPlayer: "Philippe Mateta",
      desc: "鎌田大地が所属。グラスナー監督のもと、従来の堅守速攻からアグレッシブな3バックシステムへと進化中。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 9,
      name: "Everton",
      icon: "🍬",
      color: "#003399",
      stadium: "Hill Dickinson Stadium",
      manager: "David Moyes",
      keyPlayer: "Jack Grealish",
      desc: "新スタジアム「ブラムリー・ムーア・ドック」での記念すべき初シーズン。ホームでの勝負強さを発揮している。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 10,
      name: "Fulham",
      icon: "🏠",
      color: "#000000",
      stadium: "Craven Cottage",
      manager: "Marco Silva",
      keyPlayer: "Antonee Robinson",
      desc: "ロンドンで最も歴史あるコテージ（スタジアム）が本拠地。中盤の構成力が高く、ボールを大事にするポゼッションサッカーで中位を安定して走る。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 11,
      name: "Leeds United",
      icon: "🌼",
      color: "#0053A0",
      stadium: "Elland Road",
      manager: "Daniel Farke",
      keyPlayer: "Calvert-Lewin",
      desc: "プレミア復帰を果たした名門。「リーズの心臓」田中碧が中盤を支配し、熱狂的なサポーターの大声援を背に、残留を目指す。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 12,
      name: "Liverpool",
      icon: "🐦‍🔥",
      color: "#C8102E",
      stadium: "Anfield",
      manager: "Arne Slot",
      keyPlayer: "Florian Wirtz",
      desc: "昨年度のショートカウンターと打って変わって、今年度はポゼッションへチームスタイルを移行。しかし、昨年度の圧倒的強さは意気消沈。スカッドを見れば優勝以外は許されないが、どこまで体制を戻すことができるのか。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 13,
      name: "Man City",
      icon: "⛵",
      color: "#6CABDD",
      stadium: "Etihad Stadium",
      manager: "Pep Guardiola",
      keyPlayer: "Erling Haaland",
      desc: "20-24でリーグ4連覇した絶対的王者。2000年以前はあまり優勝候補として挙げられるチームではなかったが、ここ10数年ほどでBig6に名を連ねた。怪物ハーランドがゴールを量産する「止められないマシン」として君臨する。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 14,
      name: "Man Utd",
      icon: "😈",
      color: "#DA291C",
      stadium: "Old Trafford",
      manager: "Ruben Amorim",
      keyPlayer: "Bryan Mbeumo",
      desc: "昔の優勝筆頭候補と言えばこのチーム。アモリム監督就任2年目となり、3-4-3システムが選手にある程度定着。若手の爆発力と組織的なプレスが噛み合い、赤い悪魔が本来の強さを取り戻しつつある。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 15,
      name: "Newcastle",
      icon: "🦓",
      color: "#241F20",
      stadium: "St James' Park",
      manager: "Eddie Howe",
      keyPlayer: "Nick Woltemade",
      desc: "BIg6とも負けず劣らずのチーム。イサクが引き抜かれてしまったが、198cmの長身ヴォルテマーデが見事にフィット。上位を目指して後半戦に挑む。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 16,
      name: "Nott'm Forest",
      icon: "🌳",
      color: "#DD0000",
      stadium: "The City Ground",
      manager: "Sean Dyche",
      keyPlayer: "Gibbs-White",
      desc: "昨年度の快進撃はどこに行ったのか、今期初動は大きくつまずく。就任したショーンダイチ監督の下、復調を施している。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 17,
      name: "Sunderland",
      icon: "🐈‍⬛",
      color: "#D71920",
      stadium: "Stadium of Light",
      manager: "Régis Le Bris",
      keyPlayer: "Granit Xhaka",
      desc: "見事9シーズンぶりに昇格を果たした。誰も予想していなかったであろう一番の台風の目で、グラニドジャカを中心とする大量補強で、上位に食い込んでいる。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 18,
      name: "Tottenham",
      icon: "🐓",
      color: "#132257",
      stadium: "Tottenham Hotspur Stadium",
      manager: "Thomas Frank",
      keyPlayer: "Dominic Solanke",
      desc: "新たに、トーマスフランク監督を就任。ここ最近は強豪らしくない順位をとっている。このままだと、Big6をはく奪されてしまうレベルだが、復活を成し遂げることができるのか。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 19,
      name: "West Ham",
      icon: "⚒️",
      color: "#7A263A",
      stadium: "London Stadium",
      manager: "Nuno Espírito Santo",
      keyPlayer: "Jarrod Bowen",
      desc: "鉄工所の労働者たちによって創設された歴史がありクラブアイコンがハンマーになっている。毎年度必ず残留しているが今期は不調で大ピンチ。",
      likes: 0,
      dislikes: 0
    },
    {
      id: 20,
      name: "Wolves",
      icon: "🐺",
      color: "#FDB913",
      stadium: "Molineux Stadium",
      manager: "Rob Edwards",
      keyPlayer: "João Gomes",
      desc: "エースのマテウスクーニャを引き抜かれ、今季リーグ戦半分を終えていまだ未勝利。このままだと、リーグの最小勝ち点(11)を更新してしまう。",
      likes: 0,
      dislikes: 0
    },
  ];


  // c言語でいう動的メモリに近い
  // useStateを使うことで「保存されたデータ」があればそれを使い、なければ「初期値」を使います。
  const [teams, setTeams] = useState(() => {
    const savedData = localStorage.getItem("premierLeagueVotes");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return initialTeamsData;
    }
  });

  // データが変更(good or badが押されたら)
  //  useStateを変更し保存
  useEffect(() => {
    localStorage.setItem("premierLeagueVotes", JSON.stringify(teams));
  }, [teams]);


  //　goodとbadが押されたら数字を変える処理
  const handleLike = (id) => {
    const newTeams = teams.map((team) => {
      if (team.id === id) return { ...team, likes: (team.likes || 0) + 1 };
      return team;
    });
    setTeams(newTeams);
  };

  const handleDislike = (id) => {
    const newTeams = teams.map((team) => {
      if (team.id === id) return { ...team, dislikes: (team.dislikes || 0) + 1 };
      return team;
    });
    setTeams(newTeams);
  };

  // 戻るボタン
  return (
    <div className="teams-page">
      <div className="teams-nav-header">
        <Link to="/" className="teams-nav-link">
          &larr; Back to Home
        </Link>
      </div>

      {/* このページのタイトル */}
      <div className="teams-container">
        <div className="teams-content">
          <h1>🏟️ Premier League 2025-26 Clubs</h1>

          <div className="teams-grid">
              
              {/* カードのスタジアム等の文字*/}
              {teams.map((team) => (
                <div className="team-card" key={team.id} style={{ borderTopColor: team.color }}>
                    <div className="team-header">
                        <div className="team-icon">{team.icon}</div>
                        <h2 className="team-name">{team.name}</h2>
                    </div>
                    <div className="team-info">
                        <div className="info-row">
                          <span className="info-label">Stadium</span> 
                          <span className="info-val">{team.stadium}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Manager</span> 
                          <span className="info-val">{team.manager}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Key Player</span> 
                          <span className="info-val">{team.keyPlayer}</span>
                        </div>
                    </div>
                    <div className="team-desc" style={{ marginBottom: '15px' }}>
                        <span className="desc-title">Style & Info</span>
                        {team.desc}
                    </div>

                    {/* 投票ボタン(goodとbad) */}
                    <div className="vote-area" style={{ 
                        borderTop: '1px solid #eee', 
                        paddingTop: '10px', 
                        display: 'flex', 
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        <button 
                            onClick={() => handleLike(team.id)} 
                            style={{
                                cursor: 'pointer',
                                background: '#e3f2fd',
                                color: '#1565c0',
                                border: 'none',
                                borderRadius: '20px',
                                padding: '8px 15px',
                                fontWeight: 'bold',
                                transition: '0.2s'
                            }}
                        >
                            👍 Good {team.likes}
                        </button>
                        <button 
                            onClick={() => handleDislike(team.id)} 
                            style={{
                                cursor: 'pointer',
                                background: '#ffebee',
                                color: '#c62828',
                                border: 'none',
                                borderRadius: '20px',
                                padding: '8px 15px',
                                fontWeight: 'bold',
                                transition: '0.2s'
                            }}
                        >
                            👎 Bad {team.dislikes}
                        </button>
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

    </div>
  );
};

//ほかのファイルでも使えるように
export default Teams;