// runcast-mobile.jsx — Mobile (375px) responsive view for RUNCAST PWA

const { useState: useStateM } = React;

const MIcon = {
  menu: (s = 22, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  ),
  search: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  home: (s = 22, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-8 9 8M5 10v10h14V10" />
    </svg>
  ),
  flag: (s = 22, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21V4M5 4h13l-2 4 2 4H5" />
    </svg>
  ),
  chart: (s = 22, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6" />
    </svg>
  ),
  mic: (s = 22, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  ),
  user: (s = 22, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  ),
  play: (s = 14, c = '#fff') => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M8 5v14l11-7z" /></svg>,
  arrow: (s = 13, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  wifi: (s = 11, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
      <path d="M5 13a11 11 0 0 1 14 0M8 17a6 6 0 0 1 8 0" /><circle cx="12" cy="21" r="1" fill={c} />
    </svg>
  ),
  signal: (s = 11, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <rect x="3" y="14" width="3" height="6" /><rect x="9" y="10" width="3" height="10" /><rect x="15" y="6" width="3" height="14" /><rect x="21" y="2" width="3" height="18" opacity="0.4" />
    </svg>
  ),
  battery: (s = 14, c = 'currentColor') => (
    <svg width={s} height={s * 0.5} viewBox="0 0 24 12" fill="none">
      <rect x="0.5" y="0.5" width="20" height="11" rx="2" stroke={c} /><rect x="2" y="2" width="13" height="8" fill={c} /><rect x="21" y="4" width="2" height="4" fill={c} />
    </svg>
  ),
  download: (s = 14, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  ),
};

// ── iOS-style status bar ──────────────────────────────────────────────
function MStatusBar() {
  return (
    <div style={{
      background: BRAND.ink, color: BRAND.cream,
      height: 44, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 20px',
      fontFamily: '"SF Pro Text", -apple-system, sans-serif',
      fontSize: 14, fontWeight: 600,
    }}>
      <span>9:41</span>
      <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {MIcon.signal(13, BRAND.cream)}
        {MIcon.wifi(13, BRAND.cream)}
        {MIcon.battery(22, BRAND.cream)}
      </span>
    </div>
  );
}

// ── App-install banner (top, dismissible) ─────────────────────────────
function MInstallBanner() {
  const [open, setOpen] = useStateM(true);
  if (!open) return null;
  return (
    <div style={{
      background: '#1a1a1a', color: BRAND.cream,
      padding: '10px 14px',
      display: 'flex', alignItems: 'center', gap: 10,
      fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: 12,
      borderBottom: '1px solid rgba(245,242,236,0.08)',
    }}>
      <span style={{
        width: 30, height: 30, background: BRAND.red,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 800,
        fontSize: 14, color: '#fff', flexShrink: 0,
      }}>R</span>
      <div style={{ flex: 1, lineHeight: 1.3 }}>
        <div style={{ fontWeight: 600 }}>加入主畫面</div>
        <div style={{ color: 'rgba(245,242,236,0.55)', fontSize: 10.5, marginTop: 1 }}>離線閱讀 · 賽訊推播 · 一鍵開啟</div>
      </div>
      <button style={{
        padding: '6px 12px', background: BRAND.cream, color: BRAND.ink,
        border: 'none', fontFamily: 'inherit', fontWeight: 600, fontSize: 11,
        cursor: 'pointer', flexShrink: 0,
      }}>安裝</button>
      <button onClick={() => setOpen(false)} style={{
        background: 'transparent', border: 'none',
        color: 'rgba(245,242,236,0.4)', fontSize: 18,
        cursor: 'pointer', padding: 4, lineHeight: 1,
      }}>×</button>
    </div>
  );
}

// ── Top app bar ───────────────────────────────────────────────────────
function MTopBar() {
  return (
    <div style={{
      background: BRAND.ink, color: BRAND.cream,
      padding: '12px 16px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <button style={{ background: 'transparent', border: 'none', color: BRAND.cream, padding: 4, cursor: 'pointer' }}>
        {MIcon.menu(24)}
      </button>
      <div style={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em',
      }}>RUNCAST</div>
      <button style={{ background: 'transparent', border: 'none', color: BRAND.cream, padding: 4, cursor: 'pointer' }}>
        {MIcon.search(22)}
      </button>
    </div>
  );
}

// ── Mobile ticker (slimmer) ──────────────────────────────────────────
function MMarquee() {
  return (
    <div style={{
      background: BRAND.red, color: '#fff', overflow: 'hidden',
      fontFamily: 'DM Sans, system-ui, sans-serif',
      fontSize: 11, height: 28,
      display: 'flex', alignItems: 'center', gap: 0,
    }}>
      <span style={{
        flexShrink: 0,
        padding: '4px 10px', background: 'rgba(0,0,0,0.2)',
        fontWeight: 700, fontSize: 9, letterSpacing: '0.14em',
        display: 'inline-flex', alignItems: 'center', gap: 5, height: '100%',
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', animation: 'pulse 1.6s ease-in-out infinite' }} />
        LIVE
      </span>
      <div style={{
        flex: 1, overflow: 'hidden',
        maskImage: 'linear-gradient(to right, #000 calc(100% - 20px), transparent)',
        WebkitMaskImage: 'linear-gradient(to right, #000 calc(100% - 20px), transparent)',
      }}>
        <div style={{ display: 'flex', gap: 28, whiteSpace: 'nowrap', animation: 'marquee 32s linear infinite', paddingLeft: 14 }}>
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i}>
              <span style={{ fontWeight: 700, marginRight: 6 }}>{m.tag}</span>{m.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Hero card (full-bleed with overlay) ──────────────────────────────
function MHero() {
  return (
    <div style={{ position: 'relative', background: BRAND.ink }}>
      <div style={{ position: 'relative', aspectRatio: '4/5' }}>
        <Photo id="m-hero" label="太魯閣峽谷 · 路線實拍" tone="ink" ratio="4/5" />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(13,13,13,0.0) 30%, rgba(13,13,13,0.92) 95%)',
        }} />
        <div style={{
          position: 'absolute', left: 16, right: 16, bottom: 22,
          color: BRAND.cream,
        }}>
          <span style={{
            display: 'inline-block',
            padding: '5px 9px', background: BRAND.red, color: '#fff',
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
            marginBottom: 14,
          }}>專題 · COVER STORY</span>
          <h1 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 32, fontWeight: 800, lineHeight: 1.05,
            margin: 0, color: BRAND.cream, letterSpacing: '-0.02em',
            textWrap: 'balance',
          }}>台灣十大最美<br/>馬拉松路線 2026</h1>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginTop: 14,
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 11, color: 'rgba(245,242,236,0.7)',
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.red})`,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 700, fontSize: 9,
            }}>JL</div>
            <span>林敬恩</span>
            <span style={{ color: 'rgba(245,242,236,0.3)' }}>·</span>
            <span>{HERO.read}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Horizontal chip scroller ────────────────────────────────────────
function MCategoryScroll() {
  const [active, setActive] = useStateM('all');
  return (
    <div style={{
      background: BRAND.cream, borderBottom: `1px solid ${BRAND.rule}`,
      padding: '14px 0',
      overflowX: 'auto', whiteSpace: 'nowrap',
    }}>
      <div style={{ display: 'inline-flex', gap: 8, padding: '0 16px' }}>
        {CATEGORIES.map(c => (
          <button key={c.id} onClick={() => setActive(c.id)} style={{
            padding: '7px 14px',
            background: active === c.id ? BRAND.ink : 'transparent',
            color:  active === c.id ? BRAND.cream : BRAND.ink2,
            border: `1px solid ${active === c.id ? BRAND.ink : BRAND.rule}`,
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: 12, fontWeight: 500, cursor: 'pointer',
            flexShrink: 0,
          }}>{c.label}</button>
        ))}
      </div>
    </div>
  );
}

// ── Side article list (within mobile) ────────────────────────────────
function MTodaySide() {
  return (
    <section style={{ background: BRAND.ink, color: BRAND.cream, padding: '24px 16px 8px' }}>
      <div style={{
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: 10, letterSpacing: '0.2em', fontWeight: 700,
        color: 'rgba(245,242,236,0.45)', marginBottom: 16,
      }}>MORE FROM TODAY · 今日推薦</div>
      {HERO_SIDE.map((s, i) => (
        <div key={s.n} style={{
          display: 'flex', gap: 12, padding: '14px 0',
          borderBottom: i < HERO_SIDE.length - 1 ? '1px solid rgba(245,242,236,0.08)' : 'none',
        }}>
          <span style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 26, fontWeight: 300, fontStyle: 'italic',
            color: 'rgba(245,242,236,0.25)',
            lineHeight: 1, flexShrink: 0, width: 26,
          }}>{s.n}</span>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 9, letterSpacing: '0.14em', fontWeight: 700,
              color: BRAND.red, marginBottom: 5,
            }}>{s.cat.toUpperCase()} · {s.cat}</div>
            <div style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 15, fontWeight: 600, lineHeight: 1.3,
              color: BRAND.cream, textWrap: 'balance',
            }}>{s.title}</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 10,
              color: 'rgba(245,242,236,0.45)', marginTop: 5,
            }}>{s.meta}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

// ── Article list (single col) ────────────────────────────────────────
function MArticleList() {
  return (
    <section style={{ background: BRAND.cream, padding: '24px 0' }}>
      <div style={{
        padding: '0 16px', marginBottom: 18,
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        borderBottom: `2px solid ${BRAND.ink}`, paddingBottom: 10,
      }}>
        <div>
          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 24, fontWeight: 700, margin: 0, color: BRAND.ink,
            letterSpacing: '-0.01em',
          }}>編輯精選</h2>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 9,
            letterSpacing: '0.2em', fontWeight: 700, color: BRAND.gold, marginTop: 2,
          }}>EDITORS' PICKS</div>
        </div>
        <span style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 10,
          color: BRAND.mute,
        }}>本週 36 篇</span>
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        {ARTICLES.slice(0, 3).map((a, i) => (
          <MArticleCard key={i} a={a} index={i} />
        ))}

        <MBigFeature />

        {ARTICLES.slice(3, 6).map((a, i) => (
          <MArticleCard key={i + 3} a={a} index={i + 3} />
        ))}
      </div>
    </section>
  );
}

function MArticleCard({ a, index }) {
  const tones = ['red', 'gold', 'green', 'ink', 'sand', 'red'];
  return (
    <article>
      <Photo id={`m-art-${index}`} label={a.photo} tone={tones[index]} ratio="3/2" />
      <div style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 9, fontWeight: 700,
            letterSpacing: '0.16em', color: a.accent, textTransform: 'uppercase',
          }}>{a.cat}</span>
          <span style={{ width: 14, height: 1, background: BRAND.rule }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: BRAND.mute }}>{a.date}</span>
        </div>
        <h3 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 20, fontWeight: 700, lineHeight: 1.22,
          margin: '0 0 8px', color: BRAND.ink, letterSpacing: '-0.01em',
          textWrap: 'balance',
        }}>{a.title}</h3>
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 13, lineHeight: 1.55,
          color: BRAND.mute, margin: '0 0 8px',
          textWrap: 'pretty',
        }}>{a.dek}</p>
        <div style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 11,
          color: BRAND.ink2, fontWeight: 500,
        }}>{a.author} <span style={{ color: BRAND.ash, margin: '0 6px' }}>·</span><span style={{ color: BRAND.ash }}>5 分鐘閱讀</span></div>
      </div>
    </article>
  );
}

function MBigFeature() {
  return (
    <a href="#" style={{
      display: 'block', textDecoration: 'none', color: 'inherit',
      background: BRAND.ink, color: BRAND.cream,
      position: 'relative', overflow: 'hidden',
    }}>
      <Photo id="m-bigf" label="渣打台北馬 · 起跑線" tone="red" ratio="3/2" />
      <div style={{ padding: '20px 18px' }}>
        <div style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 9,
          letterSpacing: '0.22em', fontWeight: 700, color: BRAND.gold,
          marginBottom: 12,
        }}>{BIG_FEATURE.kicker}</div>
        <h3 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 26, fontWeight: 800, lineHeight: 1.05,
          margin: '0 0 10px', letterSpacing: '-0.02em',
          textWrap: 'balance',
        }}>{BIG_FEATURE.title}</h3>
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 13, lineHeight: 1.5,
          color: 'rgba(245,242,236,0.7)', margin: '0 0 16px',
        }}>{BIG_FEATURE.sub}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            padding: '9px 16px', background: BRAND.red, color: '#fff',
            fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.04em',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>進入特輯 {MIcon.arrow(12, '#fff')}</span>
          <span style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontSize: 11, color: 'rgba(245,242,236,0.6)',
          }}>距開跑 32 天</span>
        </div>
      </div>
    </a>
  );
}

// ── Race calendar (mobile) ───────────────────────────────────────────
function MRaceCal() {
  return (
    <section style={{ background: BRAND.paper, padding: '28px 16px' }}>
      <div style={{ borderTop: `2px solid ${BRAND.ink}`, paddingTop: 10, marginBottom: 14 }}>
        <h3 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 22, fontWeight: 700, margin: 0, color: BRAND.ink,
        }}>近期賽事</h3>
        <div style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 9,
          letterSpacing: '0.2em', fontWeight: 700, color: BRAND.gold, marginTop: 2,
        }}>UPCOMING RACES</div>
      </div>
      {RACES.slice(0, 4).map((r, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '46px 1fr auto', gap: 12, alignItems: 'center',
          padding: '12px 0',
          borderBottom: i < 3 ? `1px solid ${BRAND.rule}` : 'none',
        }}>
          <div style={{ textAlign: 'center', borderRight: `1px solid ${BRAND.rule}`, paddingRight: 8 }}>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700,
              color: BRAND.ink, lineHeight: 1,
            }}>{r.date.split('.')[1]}</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 9,
              letterSpacing: '0.12em', color: BRAND.mute, marginTop: 2, fontWeight: 600,
            }}>{r.mon}月</div>
          </div>
          <div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontSize: 14, fontWeight: 600,
              color: BRAND.ink, lineHeight: 1.25,
            }}>{r.name}</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 10,
              color: BRAND.mute, marginTop: 3,
            }}>{r.city} · <span style={{ fontWeight: 600, color: BRAND.ink2 }}>{r.dist}</span></div>
          </div>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '2px 7px', fontSize: 10, fontWeight: 600,
            color: r.status === 'closed' ? BRAND.ash : '#fff',
            background: r.status === 'open' ? BRAND.green : r.status === 'soon' ? BRAND.red : 'transparent',
            border: r.status === 'closed' ? `1px solid ${BRAND.rule}` : 'none',
            fontFamily: 'DM Sans, sans-serif',
          }}>{r.statusLabel}</span>
        </div>
      ))}
    </section>
  );
}

// ── AI card (mobile) ─────────────────────────────────────────────────
function MAICard() {
  return (
    <section style={{ background: BRAND.cream, padding: '16px' }}>
      <div style={{
        background: BRAND.ink, color: BRAND.cream,
        padding: '24px 20px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -30, right: -30, width: 140, height: 140,
          background: `radial-gradient(circle, ${BRAND.red}44, transparent 70%)`,
        }} />
        <span style={{
          display: 'inline-block', padding: '3px 9px', background: BRAND.red,
          fontFamily: 'DM Sans, sans-serif', fontSize: 9, fontWeight: 700,
          letterSpacing: '0.2em', color: '#fff', marginBottom: 14,
        }}>AI · BETA</span>
        <h3 style={{
          fontFamily: '"Playfair Display", serif', fontSize: 22, fontWeight: 700,
          lineHeight: 1.2, margin: '0 0 8px',
        }}>輸入你的完賽時間<br/>AI 幫你拆解配速</h3>
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 12, lineHeight: 1.5,
          color: 'rgba(245,242,236,0.6)', margin: '0 0 16px',
        }}>比對 90 萬筆完賽數據，找出你的下一步。</p>
        <div style={{
          background: 'rgba(245,242,236,0.08)',
          border: '1px solid rgba(245,242,236,0.2)',
          padding: '10px 12px',
          fontFamily: '"Playfair Display", serif',
          fontSize: 18, fontWeight: 600, letterSpacing: '0.04em',
          color: 'rgba(245,242,236,0.4)',
          marginBottom: 10,
        }}>03:42:18</div>
        <button style={{
          width: '100%', padding: '11px',
          background: BRAND.red, color: '#fff', border: 'none',
          fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700,
          letterSpacing: '0.06em', cursor: 'pointer',
        }}>開始分析 →</button>
      </div>
    </section>
  );
}

// ── Mobile stats (2x2) ───────────────────────────────────────────────
function MStats() {
  return (
    <section style={{ background: BRAND.ink, color: BRAND.cream, padding: '32px 16px' }}>
      <div style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: 9,
        letterSpacing: '0.22em', fontWeight: 700, color: BRAND.gold,
        marginBottom: 8,
      }}>POWERED BY BRAVE LOG</div>
      <h2 style={{
        fontFamily: '"Playfair Display", serif', fontSize: 22, fontWeight: 700,
        lineHeight: 1.25, margin: '0 0 24px', letterSpacing: '-0.01em',
      }}>台灣最大路跑平台<br/>由跑者打造，給跑者閱讀。</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            padding: '16px 14px',
            borderRight: i % 2 === 0 ? '1px solid rgba(245,242,236,0.1)' : 'none',
            borderBottom: i < 2 ? '1px solid rgba(245,242,236,0.1)' : 'none',
            paddingLeft: i % 2 === 0 ? 0 : 14,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
              <span style={{
                fontFamily: '"Playfair Display", serif', fontSize: 38, fontWeight: 800,
                color: BRAND.cream, lineHeight: 1, letterSpacing: '-0.03em',
              }}>{s.num}</span>
              <span style={{
                fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 600,
                color: BRAND.gold, fontStyle: 'italic',
              }}>{s.unit}</span>
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600,
              color: BRAND.cream, marginTop: 8,
            }}>{s.label}</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 8,
              letterSpacing: '0.18em', fontWeight: 600,
              color: 'rgba(245,242,236,0.4)', marginTop: 2,
            }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Mobile podcast ───────────────────────────────────────────────────
function MPodcast() {
  return (
    <section style={{ background: BRAND.cream, padding: '28px 0 32px' }}>
      <div style={{
        padding: '0 16px', marginBottom: 14,
        borderBottom: `2px solid ${BRAND.ink}`, paddingBottom: 10,
      }}>
        <div style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 9, letterSpacing: '0.22em',
          fontWeight: 700, color: BRAND.red, marginBottom: 4,
        }}>RUNCAST · 電台</div>
        <h2 style={{
          fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 800,
          margin: 0, letterSpacing: '-0.02em', color: BRAND.ink,
        }}>聽見跑者的聲音</h2>
      </div>
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {PODCASTS.map((p, i) => (
          <div key={p.ep} style={{
            background: BRAND.paper, border: `1px solid ${BRAND.rule}`,
            padding: '14px', display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <button style={{
              width: 44, height: 44, borderRadius: '50%',
              background: BRAND.ink, color: '#fff', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', flexShrink: 0, paddingLeft: 3,
            }}>{MIcon.play(15)}</button>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontWeight: 600, fontSize: 13, color: BRAND.red, marginBottom: 3,
              }}>{p.ep} · {p.dur}</div>
              <div style={{
                fontFamily: '"Playfair Display", serif', fontSize: 14, fontWeight: 600,
                color: BRAND.ink, lineHeight: 1.3,
                textWrap: 'balance',
                overflow: 'hidden',
                display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
              }}>{p.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Bottom tab bar ────────────────────────────────────────────────────
function MTabBar() {
  const tabs = [
    { id: 'home', label: '首頁', icon: MIcon.home,  active: true },
    { id: 'race', label: '賽事', icon: MIcon.flag },
    { id: 'data', label: '成績', icon: MIcon.chart },
    { id: 'pod',  label: '電台', icon: MIcon.mic },
    { id: 'me',   label: '我的', icon: MIcon.user },
  ];
  return (
    <div style={{
      position: 'sticky', bottom: 0,
      background: BRAND.ink, color: BRAND.cream,
      borderTop: '1px solid rgba(245,242,236,0.08)',
      display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
      paddingBottom: 18, /* home indicator space */
      paddingTop: 8,
    }}>
      {tabs.map(t => (
        <button key={t.id} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          background: 'transparent', border: 'none',
          color: t.active ? BRAND.cream : 'rgba(245,242,236,0.45)',
          fontFamily: 'DM Sans, sans-serif', fontSize: 10, fontWeight: 500,
          padding: '4px 0', cursor: 'pointer',
        }}>
          {t.icon(22, t.active ? BRAND.red : 'rgba(245,242,236,0.45)')}
          <span>{t.label}</span>
        </button>
      ))}
      <div style={{
        position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)',
        width: 110, height: 4, borderRadius: 2, background: BRAND.cream,
      }} />
    </div>
  );
}

// ── Footer (mobile, compact) ─────────────────────────────────────────
function MFooter() {
  return (
    <footer style={{
      background: '#080808', color: 'rgba(245,242,236,0.6)',
      padding: '28px 16px 20px',
      fontFamily: 'DM Sans, sans-serif',
    }}>
      <div style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: 26, fontWeight: 800, color: BRAND.cream,
        letterSpacing: '-0.02em',
      }}>RUNCAST</div>
      <div style={{
        fontSize: 10, letterSpacing: '0.16em', fontWeight: 600,
        color: BRAND.red, marginTop: 3,
      }}>TAIWAN RUNNING MEDIA</div>
      <div style={{
        marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: '8px 14px',
        fontSize: 11,
      }}>
        {['關於', '聯絡編輯', '隱私政策', '服務條款', '加入我們'].map(x => (
          <a key={x} href="#" style={{ color: 'rgba(245,242,236,0.65)', textDecoration: 'none' }}>{x}</a>
        ))}
      </div>
      <div style={{ marginTop: 18, fontSize: 10, color: 'rgba(245,242,236,0.35)' }}>
        © 2026 RUNCAST · POWERED BY BRAVE LOG · v 2.6.1
      </div>
    </footer>
  );
}

// ── Offline banner (toast style) ─────────────────────────────────────
function MOfflineToast() {
  return (
    <div style={{
      position: 'absolute', left: 14, right: 14, bottom: 84,
      background: BRAND.green, color: '#fff',
      padding: '10px 14px',
      fontFamily: 'DM Sans, sans-serif', fontSize: 12,
      display: 'flex', alignItems: 'center', gap: 10,
      boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
    }}>
      <span style={{
        width: 26, height: 26, background: 'rgba(0,0,0,0.2)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', flexShrink: 0,
      }}>{MIcon.download(13, '#fff')}</span>
      <div style={{ flex: 1, lineHeight: 1.35 }}>
        <div style={{ fontWeight: 600 }}>已快取 24 篇文章</div>
        <div style={{ fontSize: 10.5, opacity: 0.85, marginTop: 1 }}>無網路也能在通勤時繼續閱讀</div>
      </div>
      <span style={{
        fontSize: 10, opacity: 0.7, fontWeight: 600, letterSpacing: '0.06em',
      }}>OFFLINE READY</span>
    </div>
  );
}

// ── Root mobile site ─────────────────────────────────────────────────
function MobileSite() {
  return (
    <div style={{
      background: BRAND.cream, color: BRAND.ink,
      width: '100%', minHeight: '100%',
      display: 'flex', flexDirection: 'column',
      fontFamily: 'DM Sans, system-ui, sans-serif',
      position: 'relative',
    }}>
      <MStatusBar />
      <MInstallBanner />
      <MTopBar />
      <MMarquee />
      <MHero />
      <MTodaySide />
      <MCategoryScroll />
      <MArticleList />
      <MRaceCal />
      <MAICard />
      <MStats />
      <MPodcast />
      <MFooter />
      <MOfflineToast />
      <MTabBar />
    </div>
  );
}

window.MobileSite = MobileSite;
