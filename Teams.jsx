import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';

const Teams = () => {
  return (
<div className="teams-page">
      
    <div className="teams-nav-header">
        <Link to="/" className="teams-nav-link">
          &larr; Back to Home
        </Link>
      </div>

      <div className="teams-content">
        <h1>🏟️ Premier League 25-26 Clubs</h1>

        <div className="teams-grid">

            {/* Arsenal */}
            <div className="team-card" style={{ borderTopColor: '#EF0107' }}>
                <div className="team-header">
                    <div className="team-icon">🔫</div>
                    <h2 className="team-name">Arsenal</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Emirates Stadium</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Mikel Arteta</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Declan Rice</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    アルテタ監督の戦術が完全に浸透し、円熟期を迎えた優勝候補筆頭。堅守で失点数が少なく、デザインされたセットプレーが一番の武器。03-04以降優勝がないアーセナルは、悲願のタイトル奪取に燃える。
                </div>
            </div>

            {/* Aston Villa */}
            <div className="team-card" style={{ borderTopColor: '#670E36' }}>
                <div className="team-header">
                    <div className="team-icon">🦁</div>
                    <h2 className="team-name">Aston Villa</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Villa Park</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Unai Emery</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Morgan Rogers</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    エメリ監督のもと、CL常連クラブとしての地位を確立。強固なブロック守備と、ワトキンスやロジャーズら前線のスピードを活かした鋭いカウンターは破壊力抜群。
                </div>
            </div>

            {/* Bournemouth */}
            <div className="team-card" style={{ borderTopColor: '#DA291C' }}>
                <div className="team-header">
                    <div className="team-icon">🍒</div>
                    <h2 className="team-name">Bournemouth</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Vitality Stadium</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Andoni Iraola</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Antoine Semenyo</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    イラオラ監督が植え付けた「超ハイプレス」は今季も健在。相手がどのチームであろうと引かずに前へ出る勇敢なスタイル。
                </div>
            </div>

            {/* Brentford */}
            <div className="team-card" style={{ borderTopColor: '#E30613' }}>
                <div className="team-header">
                    <div className="team-icon">🐝</div>
                    <h2 className="team-name">Brentford</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Gtech Community</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Keith Andrews</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Igor Thiago</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    データ分析を駆使したスマートな運営で知られる。「セットプレーの魔術師」とも呼ばれ、キックオフ直後の速攻など独自の戦術を持つ。
                </div>
            </div>

            {/* Brighton */}
            <div className="team-card" style={{ borderTopColor: '#0057B8' }}>
                <div className="team-header">
                    <div className="team-icon">🕊️</div>
                    <h2 className="team-name">Brighton</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Amex Stadium</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Fabian Hürzeler</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Kaoru Mitoma</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    「三笘薫」が絶対的エースとして君臨。若き青年監督ヒュルツラーのもと、世界中から発掘した若手タレントと監督よりも年上のベテラン組の補完性で躍動する、最も見ていて楽しいチームの一つ。
                </div>
            </div>

            {/* Burnley (Ipswich) */}
            <div className="team-card" style={{ borderTopColor: '#3A64A3' }}>
                <div className="team-header">
                    <div className="team-icon">🚜</div>
                    <h2 className="team-name">Burnley</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Portman Road</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Scott Parker</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Armando Broja</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    22年ぶりにプレミア復帰を果たした「トラクター・ボーイズ」。若き知将マッケナ監督のもと、3部から2年連続昇格を果たした勢いがある。
                </div>
            </div>

            {/* Chelsea */}
            <div className="team-card" style={{ borderTopColor: '#034694' }}>
                <div className="team-header">
                    <div className="team-icon">🦁</div>
                    <h2 className="team-name">Chelsea</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Stamford Bridge</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">現在不在(Enzo Marescaが解任)</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Cole Palmer</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    膨大な補強により生まれ変わった若きタレント軍団。天才コール・パーマーを中心に、ポゼッションスタイルで上位定着を狙う。
                </div>
            </div>

            {/* Crystal Palace */}
            <div className="team-card" style={{ borderTopColor: '#1B458F' }}>
                <div className="team-header">
                    <div className="team-icon">🦅</div>
                    <h2 className="team-name">Crystal Palace</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Selhurst Park</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Oliver Glasner</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Philippe Mateta</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    鎌田大地が所属。グラスナー監督のもと、従来の堅守速攻からアグレッシブな3バックシステムへと進化中。
                </div>
            </div>

            {/* Everton */}
            <div className="team-card" style={{ borderTopColor: '#003399' }}>
                <div className="team-header">
                    <div className="team-icon">🍬</div>
                    <h2 className="team-name">Everton</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Hill Dickinson Stadium</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">David Moyes</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Jack Grealish</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    新スタジアム「ブラムリー・ムーア・ドック」での記念すべき初シーズン。ホームでの勝負強さを発揮している。
                </div>
            </div>

            {/* Fulham */}
            <div className="team-card" style={{ borderTopColor: '#000000' }}>
                <div className="team-header">
                    <div className="team-icon">🏠</div>
                    <h2 className="team-name">Fulham</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Craven Cottage</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Marco Silva</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Antonee Robinson</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    ロンドンで最も歴史あるコテージ（スタジアム）が本拠地。中盤の構成力が高く、ボールを大事にするポゼッションサッカーで中位を安定して走る。
                </div>
            </div>

            {/* Leeds United */}
            <div className="team-card" style={{ borderTopColor: '#0053A0' }}>
                <div className="team-header">
                    <div className="team-icon">🌼</div>
                    <h2 className="team-name">Leeds United</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Elland Road</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Daniel Farke</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Calvert-Lewin</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    プレミア復帰を果たした名門。「リーズの心臓」田中碧が中盤を支配し、熱狂的なサポーターの大声援を背に、残留を目指す。
                </div>
            </div>

            {/* Liverpool */}
            <div className="team-card" style={{ borderTopColor: '#C8102E' }}>
                <div className="team-header">
                    <div className="team-icon">🐦‍🔥</div>
                    <h2 className="team-name">Liverpool</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Anfield</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Arne Slot</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Florian Wirtz</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    昨年度のショートカウンターと打って変わって、今年度はポゼッションへチームスタイルを移行。しかし、昨年度の圧倒的強さは意気消沈。スカッドを見れば優勝以外は許されないが、どこまで体制を戻すことができるのか。
                </div>
            </div>

            {/* Man City */}
            <div className="team-card" style={{ borderTopColor: '#6CABDD' }}>
                <div className="team-header">
                    <div className="team-icon">⛵</div>
                    <h2 className="team-name">Man City</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Etihad Stadium</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Pep Guardiola</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Erling Haaland</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    20-24でリーグ4連覇した絶対的王者。2000年以前はあまり優勝候補として挙げられるチームではなかったが、ここ10数年ほどでBig6に名を連ねた。怪物ハーランドがゴールを量産する「止められないマシン」として君臨する。
                </div>
            </div>

            {/* Man Utd */}
            <div className="team-card" style={{ borderTopColor: '#DA291C' }}>
                <div className="team-header">
                    <div className="team-icon">😈</div>
                    <h2 className="team-name">Man Utd</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Old Trafford</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Ruben Amorim</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Bryan Mbeumo</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    昔の優勝筆頭候補と言えばこのチーム。アモリム監督就任2年目となり、3-4-3システムが選手にある程度定着。若手の爆発力と組織的なプレスが噛み合い、赤い悪魔が本来の強さを取り戻しつつある。
                </div>
            </div>

            {/* Newcastle */}
            <div className="team-card" style={{ borderTopColor: '#241F20' }}>
                <div className="team-header">
                    <div className="team-icon">🦓</div>
                    <h2 className="team-name">Newcastle</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">St James' Park</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Eddie Howe</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Nick Woltemade</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    BIg6とも負けず劣らずのチーム。イサクが引き抜かれてしまったが、198cmの長身ヴォルテマーデが見事にフィット。上位を目指して後半戦に挑む。
                </div>
            </div>

            {/* Nott'm Forest */}
            <div className="team-card" style={{ borderTopColor: '#DD0000' }}>
                <div className="team-header">
                    <div className="team-icon">🌳</div>
                    <h2 className="team-name">Nott'm Forest</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">The City Ground</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Sean Dyche</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Gibbs-White</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    昨年度の快進撃はどこに行ったのか、今期初動は大きくつまずく。就任したショーンダイチ監督の下、復調を施している。
                </div>
            </div>

            {/* Sunderland */}
            <div className="team-card" style={{ borderTopColor: '#D71920' }}>
                <div className="team-header">
                    <div className="team-icon">🐈‍⬛</div>
                    <h2 className="team-name">Sunderland</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Stadium of Light</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Régis Le Bris</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Granit Xhaka</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    見事9シーズンぶりに昇格を果たした。誰も予想していなかったであろう一番の台風の目で、グラニドジャカを中心とする大量補強で、上位に食い込んでいる。
                </div>
            </div>

            {/* Tottenham */}
            <div className="team-card" style={{ borderTopColor: '#132257' }}>
                <div className="team-header">
                    <div className="team-icon">🐓</div>
                    <h2 className="team-name">Tottenham</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Tottenham Hotspur Stadium</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Thomas Frank</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Dominic Solanke</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    新たに、トーマスフランク監督を就任。ここ最近は強豪らしくない順位をとっている。このままだと、Big6をはく奪されてしまうレベルだが、復活を成し遂げることができるのか。
                </div>
            </div>

            {/* West Ham */}
            <div className="team-card" style={{ borderTopColor: '#7A263A' }}>
                <div className="team-header">
                    <div className="team-icon">⚒️</div>
                    <h2 className="team-name">West Ham</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">London Stadium</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Nuno Espírito Santo</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">Jarrod Bowen</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    鉄工所の労働者たちによって創設された歴史がありクラブアイコンがハンマーになっている。毎年度必ず残留しているが今期は不調で大ピンチ。
                </div>
            </div>

            {/* Wolves */}
            <div className="team-card" style={{ borderTopColor: '#FDB913' }}>
                <div className="team-header">
                    <div className="team-icon">🐺</div>
                    <h2 className="team-name">Wolves</h2>
                </div>
                <div className="team-info">
                    <div className="info-row"><span className="info-label">Stadium</span> <span className="info-val">Molineux Stadium</span></div>
                    <div className="info-row"><span className="info-label">Manager</span> <span className="info-val">Rob Edwards</span></div>
                    <div className="info-row"><span className="info-label">Key Player</span> <span className="info-val">João Gomes</span></div>
                </div>
                <div className="team-desc">
                    <span className="desc-title">Style & Info</span>
                    エースのマテウスクーニャを引き抜かれ、今季リーグ戦半分を終えていまだ未勝利。このままだと、リーグの最小勝ち点(11)を更新してしまう。
                </div>
            </div>

        </div>

        {/* 戻るボタン（ページ下部） */}
        <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>
            <Link to="/" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#38003c', color: 'white', textDecoration: 'none', borderRadius: '20px', fontWeight: 'bold' }}>
              &larr; Back to Home
            </Link>
        </div>

      </div>

      <footer>
        &copy; 2025 Premier League Report Project. All rights reserved.
      </footer>
    </div>
  );
};

export default Teams;