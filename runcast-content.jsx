// runcast-content.jsx — shared content + data for RUNCAST mocks
// All content in Traditional Chinese, Taiwan marathon context.

const BRAND = {
  cream: '#F5F2EC',
  ink:   '#0D0D0D',
  red:   '#C8310A',
  gold:  '#B5862A',
  green: '#1B5C3A',
  paper: '#FAF8F3',
  rule:  '#E4DFD3',
  ink2:  '#1A1A1A',
  mute:  '#5E574C',
  ash:   '#8C8479',
};

// ── Marquee items (breaking-news ticker) ────────────────────────────────
const MARQUEE = [
  { tag: '最新',   text: '2026 渣打台北馬拉松菁英組名單公布 — 鈴木健吾領銜' },
  { tag: '快訊',   text: '萬金石馬拉松報名啟動，總名額 13,000 限額' },
  { tag: '成績',   text: '林彥廷以 2:14:35 改寫國內男子馬拉松紀錄' },
  { tag: '裝備',   text: 'Nike Alphafly 3 台灣旗艦店首發 售價 NT$10,200' },
  { tag: '訪談',   text: '奧運選手陳宇璿：「我把每一場馬拉松當成最後一場跑」' },
];

// ── Hero feature ────────────────────────────────────────────────────────
const HERO = {
  kicker: '專題 · COVER STORY',
  title: '台灣十大最美馬拉松路線 2026',
  dek:   '從太魯閣峽谷的清晨霧氣，到田中稻浪的金黃十一月，編輯部走訪二十六場路跑賽事，挑出今年最值得跑進去的十條路。這不只是排行榜，是一份給跑者的、關於這座島嶼的地理筆記。',
  author: { name: '林敬恩', role: '主筆', initials: 'JL' },
  date: '2026.05.10',
  read: '12 分鐘閱讀',
  tag: '路線特輯',
};

const HERO_SIDE = [
  {
    n: '01',
    cat: '訓練',
    title: '週期化訓練是迷思嗎？四位教練的不同答案',
    meta: '黃文聖 · 8 分鐘',
  },
  {
    n: '02',
    cat: '人物',
    title: '六十二歲的廖文嫣：我跑得不快，但我從沒停下',
    meta: '張瑀珊 · 14 分鐘',
  },
  {
    n: '03',
    cat: '裝備',
    title: '碳板鞋世代之後 — 慢跑鞋的下一個十年',
    meta: '編輯部 · 9 分鐘',
  },
];

// ── Category chips ──────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'all',  label: '全部' },
  { id: 'race', label: '賽事報導' },
  { id: 'plan', label: '訓練計畫' },
  { id: 'data', label: '成績分析' },
  { id: 'ppl',  label: '跑者專訪' },
  { id: 'nut',  label: '營養補給' },
];

// ── Article grid ────────────────────────────────────────────────────────
const ARTICLES = [
  {
    cat: '賽事報導',
    title: '渣打台北馬倒數三十天 — 路線、配速員、補給站一次看',
    dek: '今年新增的河濱折返段是亮點也是陷阱。我們把全程拆成五個區段，告訴你哪裡該保留，哪裡可以放開腿。',
    author: '陳俊安',
    date: '5.12',
    accent: BRAND.red,
    photo: 'finish-line',
  },
  {
    cat: '專題',
    title: '田中馬奇蹟：一個小鎮，如何用十年成為亞洲最熱門賽事',
    dek: '從第一屆 2,300 人到 2026 報名秒殺的 16,000 人，田中靠的不是預算，是動員。',
    author: '蘇怡靜',
    date: '5.11',
    accent: BRAND.gold,
    photo: 'rice-field',
  },
  {
    cat: '訓練計畫',
    title: '從十公里到全馬 — 給上班族的十六週訓練表',
    dek: '一週四練、總里程不超過 60K，但完賽率超過九成。這是我們和五位教練合寫的安全版藍圖。',
    author: '黃文聖',
    date: '5.09',
    accent: BRAND.green,
    photo: 'track-night',
  },
  {
    cat: '成績分析',
    title: '高雄馬完賽報告 — 三十度高溫下的配速策略',
    dek: '我們抓了 8,742 筆 Garmin 數據，發現一件事：起跑前十公里跑越慢的人，最後反而越快。',
    author: '資料組',
    date: '5.07',
    accent: BRAND.ink,
    photo: 'heatmap',
  },
  {
    cat: '營養補給',
    title: '賽前七天怎麼吃 — 一份不浪漫但有效的飲食清單',
    dek: '碳水加載不是吃到飽。營養師寫給你的菜單，連早餐第幾片吐司都標好了。',
    author: '李芸彤',
    date: '5.05',
    accent: BRAND.gold,
    photo: 'breakfast',
  },
  {
    cat: '裝備',
    title: 'Alphafly 3 對決 Adios Pro 4 — 我們跑了四百公里告訴你',
    dek: '兩雙旗艦碳板鞋，兩位編輯，每雙鞋兩百公里。重量、彈性、磨損、配速差異，全部記錄。',
    author: '裝備組',
    date: '5.02',
    accent: BRAND.red,
    photo: 'shoes-pair',
  },
];

// ── Big feature banner ──────────────────────────────────────────────────
const BIG_FEATURE = {
  kicker: 'GUIDE · 完全指南',
  title: '2026 渣打台北馬拉松',
  sub: '從報名、配速到補給 — 一份比官方手冊更實用的攻略',
  meta: '收錄 24 篇文章 · 持續更新中',
};

// ── Race calendar ───────────────────────────────────────────────────────
const RACES = [
  { date: '06.07', mon: '六月', city: '宜蘭',  name: '冬山河半程馬拉松', dist: '21K', status: 'open',    statusLabel: '報名中' },
  { date: '07.13', mon: '七月', city: '台中',  name: '谷關溫泉路跑',     dist: '15K', status: 'open',    statusLabel: '報名中' },
  { date: '09.20', mon: '九月', city: '台北',  name: '雙北城市半馬',     dist: '21K', status: 'soon',    statusLabel: '即將截止' },
  { date: '11.01', mon: '十一', city: '花蓮',  name: '太魯閣峽谷馬拉松', dist: '42K', status: 'soon',    statusLabel: '即將截止' },
  { date: '11.08', mon: '十一', city: '彰化',  name: '田中馬拉松',       dist: '42K', status: 'closed',  statusLabel: '已截止' },
];

// ── TOP 5 ──────────────────────────────────────────────────────────────
const TOP5 = [
  { n: '01', title: '渣打台北馬完整路線解析（含補給站位置）',  views: '124,580' },
  { n: '02', title: '六十二歲跑進三小時 — 廖文嫣的訓練日誌',  views: '98,224'  },
  { n: '03', title: '跑步姿勢矯正的五個動作，每個只要三分鐘', views: '76,910'  },
  { n: '04', title: '為什麼日本馬拉松文化值得我們學習',       views: '64,302'  },
  { n: '05', title: '從零開始的一百天訓練計畫',               views: '58,177'  },
];

// ── Platform numbers ───────────────────────────────────────────────────
const STATS = [
  { num: '300+',  unit: '場',   label: '年度合作賽事',     sub: 'ANNUAL EVENTS' },
  { num: '90',    unit: '萬',   label: '跑者註冊會員',     sub: 'REGISTERED RUNNERS' },
  { num: '200',   unit: '萬',   label: '年度參賽人次',     sub: 'ANNUAL ENTRIES' },
  { num: '70',    unit: '%',    label: '台灣路跑市佔率',   sub: 'MARKET SHARE' },
];

// ── Podcast episodes ───────────────────────────────────────────────────
const PODCASTS = [
  { ep: 'EP.42', title: '與奧運馬拉松國手陳宇璿對話 — 我把每一場都當最後一場跑', dur: '52:14', date: '5.10', host: '林敬恩 × 陳宇璿' },
  { ep: 'EP.41', title: '台灣馬拉松為什麼越來越熱？從產業端看十年熱潮',       dur: '38:42', date: '5.03', host: '蘇怡靜 × 王俊傑' },
  { ep: 'EP.40', title: '受傷之後 — 三位跑者回到起跑線的故事',                 dur: '45:08', date: '4.26', host: '張瑀珊' },
];

// ── Photo placeholder — striped SVG with monospace label ────────────────
function Photo({ id, label, tone = 'ink', ratio = '16/10', radius = 0 }) {
  const palettes = {
    ink:   ['#1c1c1c', '#262626', '#0d0d0d'],
    red:   ['#8a2a14', '#a52a14', '#6e1f0f'],
    gold:  ['#7d5d20', '#9c7528', '#6a4d1a'],
    green: ['#14442b', '#1b5c3a', '#0f3522'],
    cream: ['#d8d2c4', '#cdc7b8', '#c6bfac'],
    sand:  ['#c5b896', '#b9aa86', '#a8997a'],
  };
  const [a, b, c] = palettes[tone] || palettes.ink;
  const isLight = tone === 'cream' || tone === 'sand';
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratio,
        borderRadius: radius,
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${a} 0%, ${b} 60%, ${c} 100%)`,
      }}
    >
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id={`pat-${id}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <rect width="14" height="14" fill="transparent" />
            <line x1="0" y1="0" x2="0" y2="14" stroke={isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.045)'} strokeWidth="1" />
          </pattern>
          <radialGradient id={`vig-${id}`} cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pat-${id})`} />
        <rect width="100%" height="100%" fill={`url(#vig-${id})`} />
      </svg>
      <div style={{
        position: 'absolute', left: 10, top: 10,
        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 9, letterSpacing: '0.08em',
        color: isLight ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.7)',
        textTransform: 'uppercase',
        padding: '2px 6px',
        border: `1px solid ${isLight ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.3)'}`,
        borderRadius: 2,
      }}>
        photo · {label}
      </div>
    </div>
  );
}

// export to window for cross-script use
Object.assign(window, {
  BRAND, MARQUEE, HERO, HERO_SIDE, CATEGORIES, ARTICLES, BIG_FEATURE,
  RACES, TOP5, STATS, PODCASTS, Photo,
});
