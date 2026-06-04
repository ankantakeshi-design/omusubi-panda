import { useState } from "react";
import { OMP_FOOD_LIST } from "./omp_food_data.js";

// ============================================================
// 検索・閲覧UI
// ============================================================
export default function App() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const filtered = OMP_FOOD_LIST.filter(
    (item) =>
      item.name.includes(query) ||
      item.nameEn.toLowerCase().includes(q) ||
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
          placeholder="料理名・英語名・ファイル番号で検索…"
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

            {/* 料理名（日本語 + 英語） */}
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{
                display: "block",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#2a2a2a",
              }}>
                {item.name}
              </span>
              <span style={{
                display: "block",
                fontSize: "0.78rem",
                color: "#7aaa5a",
                marginTop: 2,
                fontFamily: "'Helvetica Neue', sans-serif",
              }}>
                {item.nameEn}
              </span>
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
