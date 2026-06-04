import { useState } from "react";

// ============================================================
// おむすびぱんだ omp001〜120 料理名マスターリスト
// 画像ファイル名: omp001.png 〜 omp120.png
// ============================================================
export const OMP_FOOD_LIST = [
  { id:   1, file: "omp001.png", name: "笹、はじめての味" },
  { id:   2, file: "omp002.png", name: "にくまん、あつい" },
  { id:   3, file: "omp003.png", name: "うどん、ずるずる" },
  { id:   4, file: "omp004.png", name: "オムライス、ふわふわ" },
  { id:   5, file: "omp005.png", name: "餃子、ぱくぱく" },
  { id:   6, file: "omp006.png", name: "ラーメン、濃厚" },
  { id:   7, file: "omp007.png", name: "焼き鳥、じゅーれー" },
  { id:   8, file: "omp008.png", name: "とんかつ、サクサク" },
  { id:   9, file: "omp009.png", name: "ピザ、とろける" },
  { id:  10, file: "omp010.png", name: "グラノーラ、さくさく" },
  { id:  11, file: "omp011.png", name: "たこやき、あつあつ" },
  { id:  12, file: "omp012.png", name: "おでん、しみしみ" },
  { id:  13, file: "omp013.png", name: "からあげ、じゅーれー" },
  { id:  14, file: "omp014.png", name: "おにぎり、ほっこり" },
  { id:  15, file: "omp015.png", name: "さば味噌、こっくり" },
  { id:  16, file: "omp016.png", name: "カレー、スパイシー" },
  { id:  17, file: "omp017.png", name: "エビフライ、サクサク！" },
  { id:  18, file: "omp018.png", name: "たこぶつ、ぷりぷり。" },
  { id:  19, file: "omp019.png", name: "サラダ、ヘルシー！" },
  { id:  20, file: "omp020.png", name: "マグロ寿司、とろける。" },
  { id:  21, file: "omp021.png", name: "ホットドッグ、アメリカン！" },
  { id:  22, file: "omp022.png", name: "クロワッサン、サクサク。" },
  { id:  23, file: "omp023.png", name: "ハンバーガー、食べごたえ！" },
  { id:  24, file: "omp024.png", name: "てんぷら巻き、衣がうまい。" },
  { id:  25, file: "omp025.png", name: "ナポリタン、昔ながらの味！" },
  { id:  26, file: "omp026.png", name: "フライドポテト、止まらない。" },
  { id:  27, file: "omp027.png", name: "豚骨らーめん、濃厚！" },
  { id:  28, file: "omp028.png", name: "焼きおにぎり、香ばしい。" },
  { id:  29, file: "omp029.png", name: "ステーキ、ジューシー！" },
  { id:  30, file: "omp030.png", name: "小籠包、あつあつ。" },
  { id:  31, file: "omp031.png", name: "タコス、本格派！" },
  { id:  32, file: "omp032.png", name: "アヒージョ、オリーブオイル。" },
  { id:  33, file: "omp033.png", name: "ベーグル、もちもち！" },
  { id:  34, file: "omp034.png", name: "焼肉、あつあつ。" },
  { id:  35, file: "omp035.png", name: "パエリア、具だくさん！" },
  { id:  36, file: "omp036.png", name: "ホットパイ、さくさく。" },
  { id:  37, file: "omp037.png", name: "やきいも、ほっくり！" },
  { id:  38, file: "omp038.png", name: "キューバンサンド、絶品。" },
  { id:  39, file: "omp039.png", name: "チーズ、濃厚！" },
  { id:  40, file: "omp040.png", name: "ローストビーフ、贅沢。" },
  { id:  41, file: "omp041.png", name: "そば、ツルツル！" },
  { id:  42, file: "omp042.png", name: "鯛蒲焼、香ばしい！" },
  { id:  43, file: "omp043.png", name: "カツ丼＆お好み焼き、ミニセット。" },
  { id:  44, file: "omp044.png", name: "ブッラータ、とろける！" },
  { id:  45, file: "omp045.png", name: "バインミー、ヘルシー。" },
  { id:  46, file: "omp046.png", name: "リゾット、濃厚！" },
  { id:  47, file: "omp047.png", name: "クラブハウスサンド、ボリューム。" },
  { id:  48, file: "omp048.png", name: "チーズフォンデュ、アツアツ！" },
  { id:  49, file: "omp049.png", name: "ひばち焼き、じゅうじゅう。" },
  { id:  50, file: "omp050.png", name: "巻寿司、ボリューム満点！" },
  { id:  51, file: "omp051.png", name: "ちらし寿司、彩り鮮やか！" },
  { id:  52, file: "omp052.png", name: "麻婆豆腐、ピリ辛！" },
  { id:  53, file: "omp053.png", name: "ひやむぎ、さっぱり！" },
  { id:  54, file: "omp054.png", name: "塩辛、通の味！" },
  { id:  55, file: "omp055.png", name: "枝豆、おつまみ最高！" },
  { id:  56, file: "omp056.png", name: "和牛握り寿司、とろける！" },
  { id:  57, file: "omp057.png", name: "お茶漬け、あっさり！" },
  { id:  58, file: "omp058.png", name: "白ご飯おおもり、満足！" },
  { id:  59, file: "omp059.png", name: "味噌汁、ホッとする！" },
  { id:  60, file: "omp060.png", name: "サンドイッチ、具沢山！" },
  { id:  61, file: "omp061.png", name: "パンプキンスープ、まろやか！" },
  { id:  62, file: "omp062.png", name: "納豆ごはん、ネバネバ！" },
  { id:  63, file: "omp063.png", name: "うな重、ご馳走！" },
  { id:  64, file: "omp064.png", name: "七輪で焼いたさんま、絶品！" },
  { id:  65, file: "omp065.png", name: "フランクフルト、ジューシー！" },
  { id:  66, file: "omp066.png", name: "アメリカンドッグ、ふかふか！" },
  { id:  67, file: "omp067.png", name: "チャーハン、パラパラ！" },
  { id:  68, file: "omp068.png", name: "焼きそば、香ばしい！" },
  { id:  69, file: "omp069.png", name: "メンチカツ、サクサク！" },
  { id:  70, file: "omp070.png", name: "親子丼、とろとろ！" },
  { id:  71, file: "omp071.png", name: "牛丼、こってり！" },
  { id:  72, file: "omp072.png", name: "コロッケ、ほくほく！" },
  { id:  73, file: "omp073.png", name: "タピオカミルクティー、もちもち！" },
  { id:  74, file: "omp074.png", name: "紅茶とドーナツ、あまい！" },
  { id:  75, file: "omp075.png", name: "コーヒーとトースト、ほっくり！" },
  { id:  76, file: "omp076.png", name: "ビールと焼き鳥、最高！" },
  { id:  77, file: "omp077.png", name: "ワインとチーズ、濃厚！" },
  { id:  78, file: "omp078.png", name: "焼き魚と日本酒、しみじみ。" },
  { id:  79, file: "omp079.png", name: "コーンスープ、まろやか！" },
  { id:  80, file: "omp080.png", name: "オニオンスープ、コクがある！" },
  { id:  81, file: "omp081.png", name: "モンブラン、とろける" },
  { id:  82, file: "omp082.png", name: "アップルパイ、さっぱり" },
  { id:  83, file: "omp083.png", name: "みかんゼリー、ぷるぷる" },
  { id:  84, file: "omp084.png", name: "いちごタルト、あまい" },
  { id:  85, file: "omp085.png", name: "抹茶ロールケーキ、濃厚" },
  { id:  86, file: "omp086.png", name: "バウムクーヘン、しっとり" },
  { id:  87, file: "omp087.png", name: "大福、もちもち" },
  { id:  88, file: "omp088.png", name: "ベビーカステラ、ふかふか" },
  { id:  89, file: "omp089.png", name: "どらやき、おいしい" },
  { id:  90, file: "omp090.png", name: "わらび餅、ぷるぷる" },
  { id:  91, file: "omp091.png", name: "あんぱん、あんこ" },
  { id:  92, file: "omp092.png", name: "チョコクッキー、チョコ" },
  { id:  93, file: "omp093.png", name: "カスタードたいやき、あまい" },
  { id:  94, file: "omp094.png", name: "ソフトクリーム、とろける" },
  { id:  95, file: "omp095.png", name: "ショートケーキ、ふわふわ" },
  { id:  96, file: "omp096.png", name: "チーズケーキ、濃厚" },
  { id:  97, file: "omp097.png", name: "チュロス、おいしい" },
  { id:  98, file: "omp098.png", name: "パンケーキ、ふかふか" },
  { id:  99, file: "omp099.png", name: "いちご大福、もちもち" },
  { id: 100, file: "omp100.png", name: "カヌレ、カリカリ" },
  { id: 101, file: "omp101.png", name: "フレンチトースト、あまい" },
  { id: 102, file: "omp102.png", name: "マカロン、カラフル" },
  { id: 103, file: "omp103.png", name: "パウンドケーキ、しっとり" },
  { id: 104, file: "omp104.png", name: "チョコフォンデュ、とろーり" },
  { id: 105, file: "omp105.png", name: "幸せホットケーキとゼリー" },
  { id: 106, file: "omp106.png", name: "フルーツサンド、きれい" },
  { id: 107, file: "omp107.png", name: "カンノーリ、とろーり" },
  { id: 108, file: "omp108.png", name: "杏仁豆腐、さっぱり" },
  { id: 109, file: "omp109.png", name: "プリン、プルプル" },
  { id: 110, file: "omp110.png", name: "メロンソーダ、しゅわしゅわ" },
  { id: 111, file: "omp111.png", name: "いちごパフェ、最高！" },
  { id: 112, file: "omp112.png", name: "シュークリーム、いっぱい" },
  { id: 113, file: "omp113.png", name: "たいやき、おいしい？" },
  { id: 114, file: "omp114.png", name: "クレープ、たべる" },
  { id: 115, file: "omp115.png", name: "和パフェ、きれい" },
  { id: 116, file: "omp116.png", name: "かき氷、つめたい" },
  { id: 117, file: "omp117.png", name: "和菓子、うれしい" },
  { id: 118, file: "omp118.png", name: "アイス、さいこー" },
  { id: 119, file: "omp119.png", name: "メロンパン、ふかふか" },
  { id: 120, file: "omp120.png", name: "みたらし団子、もちもち" },
];

// ============================================================
// 検索・閲覧UI
// ============================================================
export default function App() {
  const [query, setQuery] = useState("");

  const filtered = OMP_FOOD_LIST.filter(
    (item) =>
      item.name.includes(query) ||
      item.file.includes(query) ||
      String(item.id).padStart(3, "0").includes(query)
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fffaf0 0%, #f0f7ea 100%)",
      fontFamily: "'Hiragino Maru Gothic Pro', 'Zen Maru Gothic', sans-serif",
      padding: "24px 16px 60px",
    }}>
      {/* ヘッダー */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: "2.4rem", marginBottom: 4 }}>🍙🐼</div>
        <h1 style={{
          fontSize: "1.35rem",
          fontWeight: 900,
          color: "#3d6b35",
          margin: 0,
          letterSpacing: "0.05em",
        }}>
          おむすびぱんだ 料理名マスターリスト
        </h1>
        <p style={{ color: "#888", fontSize: "0.85rem", marginTop: 6 }}>
          omp001 〜 omp120｜全120件
        </p>
      </div>

      {/* 検索 */}
      <div style={{ maxWidth: 480, margin: "0 auto 24px" }}>
        <input
          type="text"
          placeholder="料理名・ファイル番号で検索…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 999,
            border: "2px solid rgba(122,170,90,0.5)",
            background: "rgba(255,255,255,0.9)",
            fontSize: "1rem",
            outline: "none",
            boxSizing: "border-box",
            fontFamily: "inherit",
            color: "#2a2a2a",
          }}
        />
      </div>

      {/* リスト */}
      <div style={{
        maxWidth: 640,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "#aaa", marginTop: 40 }}>
            見つかりませんでした 🐼
          </div>
        )}
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "rgba(255,255,255,0.82)",
              borderRadius: 16,
              padding: "12px 18px",
              border: "1.5px solid rgba(184,212,168,0.45)",
              boxShadow: "0 2px 10px rgba(122,170,90,0.07)",
            }}
          >
            {/* 番号バッジ */}
            <span style={{
              minWidth: 46,
              textAlign: "center",
              background: "linear-gradient(135deg,#b8d4a8,#7aaa5a)",
              color: "#fff",
              borderRadius: 10,
              padding: "4px 8px",
              fontSize: "0.78rem",
              fontWeight: 900,
              letterSpacing: "0.03em",
              flexShrink: 0,
            }}>
              {String(item.id).padStart(3, "0")}
            </span>

            {/* ファイル名 */}
            <span style={{
              fontSize: "0.78rem",
              color: "#999",
              minWidth: 84,
              flexShrink: 0,
              fontFamily: "monospace",
            }}>
              {item.file}
            </span>

            {/* 料理名 */}
            <span style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#2a2a2a",
              flex: 1,
            }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* フッター */}
      {filtered.length > 0 && (
        <div style={{ textAlign: "center", color: "#bbb", fontSize: "0.8rem", marginTop: 28 }}>
          {filtered.length} 件表示中
        </div>
      )}
    </div>
  );
}
