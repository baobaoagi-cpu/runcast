// runcast-desktop.jsx — Desktop layout (1280px) for RUNCAST PWA mock

const { useState } = React;

// ── Small icon set (inline SVG) ────────────────────────────────────────
const Icon = {
  search: (size = 16, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  arrow: (size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  play: (size = 14, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  pin: (size = 12, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6M12 22v-6M5 9a7 7 0 0 1 14 0v6a7 7 0 0 1-14 0z" />
    </svg>
  ),
  download: (size = 12, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  ),
  wifi: (size = 12, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9a16 16 0 0 1 20 0M5 13a11 11 0 0 1 14 0M8 17a6 6 0 0 1 8 0" /><circle cx="12" cy="21" r="0.8" fill={color} />
    </svg>
  ),
  close: (size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
};

// ── Status pill for race calendar ──────────────────────────────────────
function StatusPill({ status, label }) {
  const map = {
    open:   { bg: '#1B5C3A', fg: '#fff' },
    soon:   { bg: '#C8310A', fg: '#fff' },
    closed: { bg: 'transparent', fg: '#8C8479', border: '#E4DFD3' },
  };
  const s = map[status];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 7px', fontSize: 10, fontWeight: 600,
      letterSpacing: '0.04em',
      color: s.fg, background: s.bg,
      border: s.border ? `1px solid ${s.border}` : 'none',
      borderRadius: 2,
      fontFamily: 'DM Sans, system-ui, sans-serif',
    }}>
      {status === 'open' && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7CE0A6' }} />}
      {label}
    </span>
  );
}

// ── Install / PWA banner ───────────────────────────────────────────────
function InstallBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div style={{
      background: BRAND.ink, color: BRAND.cream,
      borderTop: `1px solid #1f1f1f`,
      fontFamily: 'DM Sans, system-ui, sans-serif',
      fontSize: 13,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '10px 32px',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 28, height: 28, background: BRAND.red, borderRadius: 2,
        }}>{Icon.download(13, '#fff')}</span>
        <span style={{ flex: 1 }}>
          <strong style={{ fontWeight: 600 }}>把 RUNCAST 加到主畫面</strong>
          <span style={{ color: 'rgba(245,242,236,0.55)', marginLeft: 12 }}>
            離線也能讀文章 · 最新賽訊推播 · 一鍵開啟訓練紀錄
          </span>
        </span>
        <button style={{
          padding: '7px 16px', background: BRAND.cream, color: BRAND.ink,
          border: 'none', fontFamily: 'inherit', fontWeight: 600, fontSize: 12,
          letterSpacing: '0.03em', cursor: 'pointer', borderRadius: 2,
        }}>安裝 App</button>
        <button onClick={() => setDismissed(true)} style={{
          background: 'transparent', border: 'none', color: 'rgba(245,242,236,0.55)',
          cursor: 'pointer', padding: 4,
        }}>{Icon.close(14)}</button>
      </div>
    </div>
  );
}

// ── Top navigation ─────────────────────────────────────────────────────
function TopNav() {
  const items = ['賽事', '訓練', '成績', '跑者故事', '裝備'];
  return (
    <header style={{ background: BRAND.ink, color: BRAND.cream }}>
      {/* Top utility bar */}
      <div style={{
        borderBottom: '1px solid rgba(245,242,236,0.06)',
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: 11, letterSpacing: '0.06em',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '8px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          color: 'rgba(245,242,236,0.5)',
        }}>
          <span>2026 年 5 月 13 日 · 星期三 · 台北</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {Icon.wifi(10, '#7CE0A6')}<span style={{ color: '#7CE0A6' }}>線上 · 即時更新</span>
            </span>
            <span>EN</span>
            <span>登入</span>
          </span>
        </div>
      </div>

      {/* Main nav row */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '20px 32px',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 32,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em',
            color: BRAND.cream,
          }}>RUNCAST</span>
          <span style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 9, letterSpacing: '0.18em',
            color: BRAND.red, fontWeight: 600, marginLeft: 2,
            borderLeft: '1px solid rgba(245,242,236,0.2)', paddingLeft: 8,
          }}>TAIWAN<br/>RUNNING MEDIA</span>
        </div>

        {/* Nav items */}
        <nav style={{
          display: 'flex', gap: 36,
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: 14, fontWeight: 500, letterSpacing: '0.02em',
        }}>
          {items.map((it, i) => (
            <a key={it} href="#" style={{
              color: i === 0 ? BRAND.cream : 'rgba(245,242,236,0.7)',
              textDecoration: 'none',
              borderBottom: i === 0 ? `2px solid ${BRAND.red}` : '2px solid transparent',
              paddingBottom: 4,
            }}>{it}</a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'flex-end' }}>
          <button style={{
            width: 36, height: 36, border: '1px solid rgba(245,242,236,0.15)',
            background: 'transparent', color: BRAND.cream, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 2,
          }}>{Icon.search(15)}</button>
          <button style={{
            padding: '10px 20px', background: BRAND.red, color: '#fff',
            border: 'none', fontFamily: 'DM Sans, system-ui, sans-serif',
            fontWeight: 600, fontSize: 13, letterSpacing: '0.04em',
            cursor: 'pointer', borderRadius: 2,
          }}>免費註冊 →</button>
        </div>
      </div>

      {/* Red marquee */}
      <Marquee />
    </header>
  );
}

function Marquee() {
  return (
    <div style={{
      background: BRAND.red, color: '#fff',
      fontFamily: 'DM Sans, system-ui, sans-serif',
      fontSize: 12, letterSpacing: '0.02em',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 0,
        padding: '0 32px', height: 38,
      }}>
        <span style={{
          fontWeight: 700, fontSize: 10, letterSpacing: '0.16em',
          padding: '4px 10px', background: 'rgba(0,0,0,0.18)',
          marginRight: 20, borderRadius: 2,
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: '#fff',
            animation: 'pulse 1.6s ease-in-out infinite',
          }} />
          LIVE 賽訊
        </span>
        <div style={{
          flex: 1, display: 'flex', gap: 40, overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, #000 32px, #000 calc(100% - 32px), transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 32px, #000 calc(100% - 32px), transparent)',
        }}>
          <div style={{
            display: 'flex', gap: 40, whiteSpace: 'nowrap',
            animation: 'marquee 42s linear infinite',
          }}>
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
                  padding: '1px 6px', border: '1px solid rgba(255,255,255,0.5)',
                  borderRadius: 1,
                }}>{m.tag}</span>
                <span style={{ opacity: 0.95 }}>{m.text}</span>
                <span style={{ opacity: 0.4 }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Hero block ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ background: BRAND.ink, color: BRAND.cream, paddingBottom: 56 }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '40px 32px 0',
        display: 'grid', gridTemplateColumns: '1fr 360px', gap: 48,
      }}>
        {/* LEFT — feature */}
        <article>
          <div style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 11, letterSpacing: '0.22em', fontWeight: 700,
            color: BRAND.red, marginBottom: 18,
          }}>{HERO.kicker}</div>

          <Photo id="hero" label="太魯閣峽谷晨霧 · 路線實拍" tone="ink" ratio="16/9" />

          <h1 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 58, lineHeight: 1.05, fontWeight: 800,
            letterSpacing: '-0.025em',
            margin: '28px 0 18px',
            color: BRAND.cream,
            textWrap: 'balance',
          }}>{HERO.title}</h1>

          <p style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 17, lineHeight: 1.65, fontWeight: 400,
            color: 'rgba(245,242,236,0.75)',
            margin: '0 0 24px', maxWidth: 720,
            textWrap: 'pretty',
          }}>{HERO.dek}</p>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 20,
            fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: 13,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.red})`,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 700, fontSize: 12,
                fontFamily: 'DM Sans, system-ui, sans-serif',
              }}>{HERO.author.initials}</div>
              <div>
                <div style={{ color: BRAND.cream, fontWeight: 600 }}>{HERO.author.name}</div>
                <div style={{ color: 'rgba(245,242,236,0.5)', fontSize: 11 }}>{HERO.author.role} · {HERO.date}</div>
              </div>
            </div>
            <span style={{ color: 'rgba(245,242,236,0.2)' }}>|</span>
            <span style={{ color: 'rgba(245,242,236,0.6)' }}>{HERO.read}</span>
            <span style={{
              marginLeft: 'auto',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 22px', border: `1px solid ${BRAND.cream}`,
              cursor: 'pointer', fontWeight: 600, fontSize: 13,
              letterSpacing: '0.04em',
            }}>
              閱讀全文 {Icon.arrow(13, BRAND.cream)}
            </span>
          </div>
        </article>

        {/* RIGHT — side stack */}
        <aside style={{ borderLeft: '1px solid rgba(245,242,236,0.1)', paddingLeft: 32 }}>
          <div style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 10, letterSpacing: '0.2em', fontWeight: 700,
            color: 'rgba(245,242,236,0.45)', marginBottom: 20,
          }}>MORE FROM TODAY · 今日推薦</div>

          {HERO_SIDE.map((s, i) => (
            <a key={s.n} href="#" style={{
              display: 'block', textDecoration: 'none', color: 'inherit',
              padding: '18px 0',
              borderBottom: i < HERO_SIDE.length - 1 ? '1px solid rgba(245,242,236,0.08)' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <span style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 32, fontWeight: 300, fontStyle: 'italic',
                  color: 'rgba(245,242,236,0.25)',
                  lineHeight: 1, minWidth: 36,
                }}>{s.n}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: 10, letterSpacing: '0.16em', fontWeight: 700,
                    color: BRAND.red, marginBottom: 8,
                  }}>{s.cat.toUpperCase()} · {s.cat}</div>
                  <div style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: 17, fontWeight: 600, lineHeight: 1.3,
                    color: BRAND.cream, marginBottom: 8,
                    textWrap: 'balance',
                  }}>{s.title}</div>
                  <div style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: 11, color: 'rgba(245,242,236,0.45)',
                  }}>{s.meta}</div>
                </div>
              </div>
            </a>
          ))}

          <div style={{
            marginTop: 8, padding: '14px 0',
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 12, color: BRAND.gold, letterSpacing: '0.04em',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            查看更多今日內容 {Icon.arrow(11, BRAND.gold)}
          </div>
        </aside>
      </div>
    </section>
  );
}

// ── Category chips ─────────────────────────────────────────────────────
function CategoryBar() {
  const [active, setActive] = useState('all');
  return (
    <div style={{
      background: BRAND.cream,
      borderBottom: `1px solid ${BRAND.rule}`,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 56,
        display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: 'DM Sans, system-ui, sans-serif',
      }}>
        <span style={{
          fontSize: 10, letterSpacing: '0.2em', fontWeight: 700,
          color: BRAND.mute, marginRight: 16,
        }}>篩選 · FILTER</span>
        {CATEGORIES.map(c => (
          <button key={c.id}
            onClick={() => setActive(c.id)}
            style={{
              padding: '7px 16px',
              background: active === c.id ? BRAND.ink : 'transparent',
              color:  active === c.id ? BRAND.cream : BRAND.ink2,
              border: `1px solid ${active === c.id ? BRAND.ink : BRAND.rule}`,
              fontFamily: 'inherit', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', borderRadius: 2,
              letterSpacing: '0.02em',
            }}>{c.label}</button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: 12, color: BRAND.mute }}>
          顯示 1–24 / 共 1,284 篇 · 依時間排序 ↓
        </span>
      </div>
    </div>
  );
}

// ── Main two-column area ───────────────────────────────────────────────
function MainGrid() {
  return (
    <section style={{ background: BRAND.cream, paddingTop: 48, paddingBottom: 56 }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '1fr 320px', gap: 56,
      }}>
        <div>
          <SectionHeader title="編輯精選" sub="EDITORS' PICKS" right="本週 36 篇" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, marginTop: 28 }}>
            {ARTICLES.slice(0, 4).map((a, i) => (
              <ArticleCard key={i} a={a} index={i} />
            ))}
          </div>

          <BigFeatureBanner />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, marginTop: 36 }}>
            {ARTICLES.slice(4, 6).map((a, i) => (
              <ArticleCard key={i + 4} a={a} index={i + 4} />
            ))}
          </div>

          <div style={{
            marginTop: 40, padding: '18px 0',
            display: 'flex', justifyContent: 'center',
          }}>
            <button style={{
              padding: '14px 28px', background: 'transparent',
              border: `1px solid ${BRAND.ink}`, color: BRAND.ink,
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 13, fontWeight: 600, letterSpacing: '0.04em',
              cursor: 'pointer', borderRadius: 2,
            }}>載入更多文章 ↓</button>
          </div>
        </div>

        <Sidebar />
      </div>
    </section>
  );
}

function SectionHeader({ title, sub, right }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      borderBottom: `2px solid ${BRAND.ink}`, paddingBottom: 14,
    }}>
      <div>
        <h2 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 30, fontWeight: 700, letterSpacing: '-0.01em',
          margin: 0, color: BRAND.ink,
        }}>{title}</h2>
        <div style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: 10, letterSpacing: '0.2em', fontWeight: 700,
          color: BRAND.gold, marginTop: 4,
        }}>{sub}</div>
      </div>
      {right && (
        <span style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: 12, color: BRAND.mute,
        }}>{right}</span>
      )}
    </div>
  );
}

function ArticleCard({ a, index }) {
  const tones = ['red', 'gold', 'green', 'ink', 'sand', 'red'];
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Photo id={`art-${index}`} label={a.photo} tone={tones[index]} ratio="4/3" />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
            color: a.accent, textTransform: 'uppercase',
          }}>{a.cat}</span>
          <span style={{ width: 18, height: 1, background: BRAND.rule }} />
          <span style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 11, color: BRAND.mute,
          }}>{a.date}</span>
        </div>
        <h3 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 24, fontWeight: 700, lineHeight: 1.2,
          margin: '0 0 10px', color: BRAND.ink,
          letterSpacing: '-0.01em',
          textWrap: 'balance',
        }}>{a.title}</h3>
        <p style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: 14, lineHeight: 1.6, color: BRAND.mute,
          margin: '0 0 12px',
          textWrap: 'pretty',
        }}>{a.dek}</p>
        <div style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: 12, color: BRAND.ink2, fontWeight: 500,
        }}>
          {a.author} <span style={{ color: BRAND.ash, margin: '0 6px' }}>·</span>
          <span style={{ color: BRAND.ash }}>5 分鐘閱讀</span>
        </div>
      </div>
    </article>
  );
}

function BigFeatureBanner() {
  return (
    <a href="#" style={{
      display: 'block', textDecoration: 'none', color: 'inherit',
      marginTop: 48,
      background: BRAND.ink, color: BRAND.cream,
      borderRadius: 2, overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 280,
      }}>
        <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 10, letterSpacing: '0.22em', fontWeight: 700,
              color: BRAND.gold, marginBottom: 22,
            }}>{BIG_FEATURE.kicker}</div>
            <h3 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 42, fontWeight: 800, lineHeight: 1.05,
              margin: '0 0 16px', letterSpacing: '-0.02em',
              textWrap: 'balance',
            }}>{BIG_FEATURE.title}</h3>
            <p style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 16, lineHeight: 1.55, fontWeight: 400,
              color: 'rgba(245,242,236,0.7)', margin: '0 0 24px',
              maxWidth: 380,
            }}>{BIG_FEATURE.sub}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span style={{
              padding: '11px 22px', background: BRAND.red, color: '#fff',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 13, fontWeight: 600, letterSpacing: '0.04em',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>進入特輯 {Icon.arrow(13, '#fff')}</span>
            <span style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 11, color: 'rgba(245,242,236,0.5)',
            }}>{BIG_FEATURE.meta}</span>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Photo id="bigf" label="渣打台北馬 · 起跑線" tone="red" ratio="auto" />
          <div style={{
            position: 'absolute', right: 16, top: 16,
            background: 'rgba(13,13,13,0.7)', backdropFilter: 'blur(4px)',
            color: BRAND.cream, padding: '8px 12px',
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 11, letterSpacing: '0.06em',
            border: '1px solid rgba(245,242,236,0.2)',
          }}>
            <div style={{ fontSize: 9, letterSpacing: '0.2em', color: BRAND.gold, fontFamily: 'DM Sans, sans-serif' }}>距開跑</div>
            <div style={{ fontSize: 22, fontWeight: 700, fontStyle: 'italic' }}>32 天</div>
          </div>
        </div>
      </div>
    </a>
  );
}

// ── Right sidebar ──────────────────────────────────────────────────────
function Sidebar() {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <RaceCalendar />
      <Top5 />
      <AICard />
    </aside>
  );
}

function RaceCalendar() {
  return (
    <div>
      <SidebarHeader title="近期賽事" sub="UPCOMING RACES" />
      <div style={{ marginTop: 18 }}>
        {RACES.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '48px 1fr auto',
            gap: 14, alignItems: 'center',
            padding: '14px 0',
            borderBottom: i < RACES.length - 1 ? `1px solid ${BRAND.rule}` : 'none',
          }}>
            <div style={{
              textAlign: 'center', borderRight: `1px solid ${BRAND.rule}`, paddingRight: 8,
            }}>
              <div style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 22, fontWeight: 700, color: BRAND.ink,
                lineHeight: 1,
              }}>{r.date.split('.')[1]}</div>
              <div style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: 9, letterSpacing: '0.14em', color: BRAND.mute,
                marginTop: 2, fontWeight: 600,
              }}>{r.mon}月</div>
            </div>
            <div>
              <div style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 15, fontWeight: 600, color: BRAND.ink,
                lineHeight: 1.25, marginBottom: 4,
              }}>{r.name}</div>
              <div style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: 11, color: BRAND.mute,
                display: 'flex', gap: 8, alignItems: 'center',
              }}>
                <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }}>{Icon.pin(10)} {r.city}</span>
                <span style={{ color: BRAND.ash }}>·</span>
                <span style={{ fontWeight: 600, color: BRAND.ink2 }}>{r.dist}</span>
              </div>
            </div>
            <StatusPill status={r.status} label={r.statusLabel} />
          </div>
        ))}
      </div>
      <a href="#" style={{
        display: 'inline-block', marginTop: 16,
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: 12, color: BRAND.red, fontWeight: 600,
        textDecoration: 'none', letterSpacing: '0.04em',
      }}>查看完整賽事行事曆 →</a>
    </div>
  );
}

function Top5() {
  return (
    <div>
      <SidebarHeader title="熱門排行" sub="TRENDING THIS WEEK" />
      <div style={{ marginTop: 18 }}>
        {TOP5.map((t, i) => (
          <div key={t.n} style={{
            display: 'grid', gridTemplateColumns: '40px 1fr',
            gap: 14, alignItems: 'start',
            padding: '14px 0',
            borderBottom: i < TOP5.length - 1 ? `1px solid ${BRAND.rule}` : 'none',
          }}>
            <div style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 30, fontWeight: 800, fontStyle: 'italic',
              color: i === 0 ? BRAND.red : BRAND.rule,
              lineHeight: 0.9,
              WebkitTextStroke: i === 0 ? 'none' : `1px ${BRAND.ash}`,
              color: i === 0 ? BRAND.red : 'transparent',
            }}>{t.n}</div>
            <div>
              <div style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 15, fontWeight: 600, color: BRAND.ink,
                lineHeight: 1.3, marginBottom: 6,
                textWrap: 'balance',
              }}>{t.title}</div>
              <div style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: 11, color: BRAND.mute,
              }}>{t.views} 次閱讀</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AICard() {
  const [time, setTime] = useState('');
  return (
    <div style={{
      background: BRAND.ink, color: BRAND.cream,
      padding: '28px 24px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: -20, right: -20,
        width: 120, height: 120,
        background: `radial-gradient(circle, ${BRAND.red}33 0%, transparent 70%)`,
      }} />
      <div style={{
        display: 'inline-block',
        padding: '3px 9px', background: BRAND.red,
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
        color: '#fff', marginBottom: 18,
      }}>AI · BETA</div>
      <h3 style={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: 24, fontWeight: 700, lineHeight: 1.2,
        margin: '0 0 8px', letterSpacing: '-0.01em',
      }}>輸入你的完賽時間<br/>AI 幫你拆解配速</h3>
      <p style={{
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: 12, lineHeight: 1.55,
        color: 'rgba(245,242,236,0.6)', margin: '0 0 20px',
      }}>比對 90 萬筆完賽數據，分析你的強弱項與下一步訓練建議。</p>

      <div style={{ position: 'relative', marginBottom: 14 }}>
        <input
          value={time}
          onChange={e => setTime(e.target.value)}
          placeholder="03:42:18"
          style={{
            width: '100%', boxSizing: 'border-box',
            padding: '12px 14px',
            background: 'rgba(245,242,236,0.08)',
            border: '1px solid rgba(245,242,236,0.2)',
            color: BRAND.cream,
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 20, fontWeight: 600,
            outline: 'none', borderRadius: 2,
            letterSpacing: '0.04em',
          }} />
        <span style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'DM Sans, sans-serif', fontSize: 10,
          color: 'rgba(245,242,236,0.4)', letterSpacing: '0.12em',
        }}>HH:MM:SS</span>
      </div>

      <button style={{
        width: '100%', padding: '13px',
        background: BRAND.red, color: '#fff', border: 'none',
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: 13, fontWeight: 700, letterSpacing: '0.06em',
        cursor: 'pointer', borderRadius: 2,
      }}>開始分析 →</button>

      <div style={{
        marginTop: 16, paddingTop: 14,
        borderTop: '1px solid rgba(245,242,236,0.1)',
        display: 'flex', gap: 16,
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: 10, color: 'rgba(245,242,236,0.45)',
      }}>
        <span>✓ 配速曲線</span>
        <span>✓ 同齡分位</span>
        <span>✓ 訓練建議</span>
      </div>
    </div>
  );
}

function SidebarHeader({ title, sub }) {
  return (
    <div style={{ borderTop: `2px solid ${BRAND.ink}`, paddingTop: 12 }}>
      <h3 style={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: 22, fontWeight: 700, margin: 0, color: BRAND.ink,
        letterSpacing: '-0.01em',
      }}>{title}</h3>
      <div style={{
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: 10, letterSpacing: '0.2em', fontWeight: 700,
        color: BRAND.gold, marginTop: 2,
      }}>{sub}</div>
    </div>
  );
}

// ── Stats strip ────────────────────────────────────────────────────────
function StatsStrip() {
  return (
    <section style={{
      background: BRAND.ink, color: BRAND.cream,
      borderTop: `1px solid #1f1f1f`,
      borderBottom: `1px solid #1f1f1f`,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '60px 32px',
      }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginBottom: 40, paddingBottom: 18,
          borderBottom: '1px solid rgba(245,242,236,0.1)',
        }}>
          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 32, fontWeight: 700, margin: 0,
            letterSpacing: '-0.01em',
          }}>台灣最大路跑平台，由跑者打造，給跑者閱讀。</h2>
          <div style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 10, letterSpacing: '0.2em', fontWeight: 700,
            color: BRAND.gold,
          }}>POWERED BY 伊貝特 × BRAVE LOG</div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '0 28px',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(245,242,236,0.1)' : 'none',
              ...(i === 0 ? { paddingLeft: 0 } : {}),
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 72, fontWeight: 800,
                  color: BRAND.cream, lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}>{s.num}</span>
                <span style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 28, fontWeight: 600, color: BRAND.gold,
                  fontStyle: 'italic',
                }}>{s.unit}</span>
              </div>
              <div style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: 14, fontWeight: 600, color: BRAND.cream,
                marginTop: 14,
              }}>{s.label}</div>
              <div style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: 9, letterSpacing: '0.2em', fontWeight: 600,
                color: 'rgba(245,242,236,0.4)', marginTop: 4,
              }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Podcast module ─────────────────────────────────────────────────────
function PodcastSection() {
  return (
    <section style={{ background: BRAND.cream, padding: '64px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: 36, paddingBottom: 18,
          borderBottom: `2px solid ${BRAND.ink}`,
        }}>
          <div>
            <div style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 10, letterSpacing: '0.22em', fontWeight: 700,
              color: BRAND.red, marginBottom: 6,
            }}>RUNCAST · 電台</div>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 44, fontWeight: 800, margin: 0,
              letterSpacing: '-0.02em', color: BRAND.ink,
            }}>聽見跑者的聲音</h2>
          </div>
          <a href="#" style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 13, color: BRAND.ink, fontWeight: 600,
            textDecoration: 'none', letterSpacing: '0.04em',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>所有節目 · 共 42 集 {Icon.arrow(13)}</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {PODCASTS.map((p, i) => (
            <article key={p.ep} style={{
              background: BRAND.paper, padding: '24px 22px',
              border: `1px solid ${BRAND.rule}`,
              display: 'flex', flexDirection: 'column', gap: 16,
              position: 'relative',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontStyle: 'italic', fontWeight: 600,
                  fontSize: 22, color: BRAND.red,
                }}>{p.ep}</span>
                <span style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: 11, color: BRAND.mute, letterSpacing: '0.04em',
                }}>{p.dur} · {p.date}</span>
              </div>
              <h3 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 19, fontWeight: 600, lineHeight: 1.3,
                margin: 0, color: BRAND.ink,
                minHeight: 74,
                textWrap: 'balance',
              }}>{p.title}</h3>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingTop: 14, borderTop: `1px solid ${BRAND.rule}`,
              }}>
                <span style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: 11, color: BRAND.mute,
                }}>{p.host}</span>
                <button style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: BRAND.ink, color: '#fff', border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  paddingLeft: 3,
                }}>{Icon.play(13)}</button>
              </div>
              {/* waveform */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 2,
                height: 18, opacity: 0.4,
              }}>
                {Array.from({ length: 48 }).map((_, j) => (
                  <div key={j} style={{
                    flex: 1, height: `${20 + Math.abs(Math.sin(j * 0.7 + i)) * 80}%`,
                    background: j < 12 ? BRAND.red : BRAND.ash,
                  }} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: BRAND.ink, color: BRAND.cream }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 24px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40,
          paddingBottom: 40, borderBottom: '1px solid rgba(245,242,236,0.1)',
        }}>
          <div>
            <div style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em',
            }}>RUNCAST</div>
            <div style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 11, letterSpacing: '0.16em', fontWeight: 600,
              color: BRAND.red, marginTop: 4, marginBottom: 18,
            }}>TAIWAN RUNNING MEDIA</div>
            <p style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 13, lineHeight: 1.6, maxWidth: 320,
              color: 'rgba(245,242,236,0.6)', margin: '0 0 20px',
            }}>由台灣最大路跑平台伊貝特與 Brave Log 共同打造的馬拉松垂直媒體。</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['IG', 'FB', 'YT', 'X', 'TG'].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36,
                  border: '1px solid rgba(245,242,236,0.2)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
                  color: BRAND.cream, textDecoration: 'none',
                }}>{s}</a>
              ))}
            </div>
          </div>
          {[
            { title: '內容', items: ['賽事報導', '訓練計畫', '成績分析', '跑者專訪', '裝備評測'] },
            { title: '服務', items: ['賽事報名', '成績查詢', 'AI 分析', '訓練紀錄', '推播設定'] },
            { title: '關於', items: ['編輯團隊', '合作夥伴', '廣告刊登', '加入我們', '聯絡編輯'] },
            { title: '法律', items: ['服務條款', '隱私政策', 'Cookie 政策', '智財權聲明', '通報專線'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: 10, letterSpacing: '0.2em', fontWeight: 700,
                color: BRAND.gold, marginBottom: 16,
              }}>{col.title.toUpperCase()} · {col.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(it => (
                  <li key={it}>
                    <a href="#" style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                      color: 'rgba(245,242,236,0.75)', textDecoration: 'none',
                    }}>{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: 24, display: 'flex', justifyContent: 'space-between',
          fontFamily: 'DM Sans, sans-serif', fontSize: 11,
          color: 'rgba(245,242,236,0.4)', letterSpacing: '0.04em',
        }}>
          <span>© 2026 RUNCAST Media. 伊貝特資訊股份有限公司 · Brave Log Inc.</span>
          <span>v 2.6.1 · PWA · 最後更新 2026.05.13 09:42</span>
        </div>
      </div>
    </footer>
  );
}

// ── Root desktop site ──────────────────────────────────────────────────
function DesktopSite() {
  return (
    <div style={{
      background: BRAND.cream, color: BRAND.ink,
      width: '100%', minHeight: '100%',
      fontFamily: 'DM Sans, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <InstallBanner />
      <TopNav />
      <Hero />
      <CategoryBar />
      <MainGrid />
      <StatsStrip />
      <PodcastSection />
      <Footer />
    </div>
  );
}

window.DesktopSite = DesktopSite;
