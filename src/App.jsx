
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="theme-color" content="#1B5E20">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>OrderKu Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0f1412;
    --surface: #1a2420;
    --surface2: #212e29;
    --border: #2a3d36;
    --green-dark: #1B5E20;
    --green: #43A047;
    --green-light: #81C784;
    --green-pale: #E8F5E9;
    --teal: #00897B;
    --amber: #F9A825;
    --red: #EF5350;
    --text: #E8F5E9;
    --text-muted: #78909C;
    --text-dim: #4a6560;
    --card-radius: 16px;
    --font: 'Plus Jakarta Sans', sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

  body {
    font-family: var(--font);
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    max-width: 430px;
    margin: 0 auto;
    padding-bottom: 80px;
  }

  /* ── HEADER ── */
  .header {
    padding: 52px 20px 20px;
    background: linear-gradient(160deg, #1B5E20 0%, #0f1412 60%);
    position: relative;
    overflow: hidden;
  }
  .header::before {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(67,160,71,0.15) 0%, transparent 70%);
    border-radius: 50%;
  }
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  .app-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--green-light);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .sync-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(67,160,71,0.15);
    border: 1px solid rgba(67,160,71,0.3);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 11px;
    color: var(--green-light);
  }
  .sync-dot {
    width: 6px; height: 6px;
    background: var(--green);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  .revenue-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(67,160,71,0.2);
    border-radius: var(--card-radius);
    padding: 20px;
  }
  .revenue-label { font-size: 12px; color: var(--text-muted); margin-bottom: 6px; }
  .revenue-amount {
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -1px;
    color: #fff;
    margin-bottom: 6px;
  }
  .revenue-amount span { font-size: 20px; font-weight: 600; }
  .revenue-sub {
    font-size: 12px;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .badge-up {
    background: rgba(67,160,71,0.2);
    color: var(--green-light);
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
  }

  /* ── MINI STATS ── */
  .mini-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 16px 20px 0;
  }
  .mini-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 14px;
  }
  .mini-label { font-size: 11px; color: var(--text-muted); margin-bottom: 6px; }
  .mini-value { font-size: 20px; font-weight: 700; color: var(--text); }
  .mini-value.rp { font-size: 16px; }
  .mini-trend {
    font-size: 11px;
    margin-top: 4px;
    font-weight: 600;
  }
  .up { color: var(--green); }
  .down { color: var(--red); }

  /* ── SECTION ── */
  .section { padding: 20px 20px 0; }
  .section-title {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
  }

  /* ── QUICK ACTIONS ── */
  .quick-actions {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 16px 20px 0;
  }
  .action-btn {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 12px 6px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.15s;
  }
  .action-btn:active { transform: scale(0.95); background: var(--surface2); }
  .action-icon { font-size: 22px; margin-bottom: 4px; }
  .action-label { font-size: 11px; color: var(--text-muted); font-weight: 500; }

  /* ── INSIGHT CARD ── */
  .insight-card {
    background: linear-gradient(135deg, rgba(0,137,123,0.15) 0%, rgba(27,94,32,0.1) 100%);
    border: 1px solid rgba(0,137,123,0.3);
    border-radius: var(--card-radius);
    padding: 16px;
    margin: 0 20px;
    margin-top: 16px;
  }
  .insight-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }
  .insight-icon {
    width: 28px; height: 28px;
    background: rgba(0,137,123,0.3);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px;
  }
  .insight-title { font-size: 13px; font-weight: 700; color: var(--green-light); }
  .insight-text {
    font-size: 13px;
    color: #b0bec5;
    line-height: 1.6;
  }
  .insight-loading {
    font-size: 12px;
    color: var(--text-muted);
    font-style: italic;
  }

  /* ── PRODUCT LIST ── */
  .product-list { display: flex; flex-direction: column; gap: 8px; }
  .product-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .product-rank {
    width: 28px; height: 28px;
    background: var(--green-dark);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: var(--green-light);
    flex-shrink: 0;
  }
  .product-rank.gold { background: rgba(249,168,37,0.2); color: var(--amber); }
  .product-rank.silver { background: rgba(176,190,197,0.2); color: #b0bec5; }
  .product-rank.bronze { background: rgba(188,143,94,0.2); color: #BC8F5E; }
  .product-info { flex: 1; min-width: 0; }
  .product-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product-qty { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
  .product-value {
    font-size: 13px;
    font-weight: 700;
    color: var(--green-light);
    white-space: nowrap;
  }

  /* ── OUTLET LIST ── */
  .outlet-list { display: flex; flex-direction: column; gap: 8px; }
  .outlet-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .outlet-avatar {
    width: 36px; height: 36px;
    background: linear-gradient(135deg, var(--green-dark), var(--teal));
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 15px;
    flex-shrink: 0;
  }
  .outlet-info { flex: 1; min-width: 0; }
  .outlet-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .outlet-orders { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
  .outlet-value {
    text-align: right;
  }
  .outlet-amount { font-size: 13px; font-weight: 700; color: var(--green-light); }
  .outlet-status {
    font-size: 10px;
    margin-top: 2px;
    font-weight: 600;
  }

  /* ── RECENT ORDERS ── */
  .order-list { display: flex; flex-direction: column; gap: 8px; }
  .order-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 12px 14px;
  }
  .order-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 6px;
  }
  .order-outlet { font-size: 13px; font-weight: 600; color: var(--text); }
  .order-amount { font-size: 13px; font-weight: 700; color: var(--green-light); }
  .order-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .order-items { font-size: 11px; color: var(--text-muted); }
  .order-status {
    font-size: 10px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 8px;
  }
  .status-terkirim { background: rgba(67,160,71,0.2); color: var(--green-light); }
  .status-draft { background: rgba(249,168,37,0.2); color: var(--amber); }
  .status-konfirmasi { background: rgba(0,137,123,0.2); color: #80CBC4; }

  /* ── LOADING ── */
  .skeleton {
    background: linear-gradient(90deg, var(--surface) 25%, var(--surface2) 50%, var(--surface) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 8px;
    height: 16px;
    margin-bottom: 8px;
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  /* ── BOTTOM NAV ── */
  .bottom-nav {
    position: fixed;
    bottom: 0; left: 50%; transform: translateX(-50%);
    width: 100%; max-width: 430px;
    background: var(--surface);
    border-top: 1px solid var(--border);
    display: flex;
    padding: 8px 0 20px;
    z-index: 100;
  }
  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 4px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .nav-icon { font-size: 22px; }
  .nav-label { font-size: 10px; color: var(--text-muted); font-weight: 500; }
  .nav-item.active .nav-label { color: var(--green); }
  .nav-item.active .nav-icon { filter: drop-shadow(0 0 4px rgba(67,160,71,0.5)); }

  /* ── EMPTY STATE ── */
  .empty {
    text-align: center;
    padding: 32px 20px;
    color: var(--text-muted);
    font-size: 13px;
  }
  .empty-icon { font-size: 32px; margin-bottom: 8px; }

  /* ── ERROR ── */
  .error-banner {
    background: rgba(239,83,80,0.1);
    border: 1px solid rgba(239,83,80,0.3);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 12px;
    color: #EF9A9A;
    margin: 10px 20px 0;
    display: none;
  }

  /* ── CONFIG MODAL ── */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.7);
    z-index: 200;
    display: none;
    align-items: flex-end;
  }
  .modal-overlay.show { display: flex; }
  .modal {
    background: var(--surface);
    border-radius: 20px 20px 0 0;
    padding: 24px 20px 40px;
    width: 100%;
  }
  .modal-title { font-size: 16px; font-weight: 700; margin-bottom: 16px; }
  .modal-input {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 14px;
    color: var(--text);
    font-size: 13px;
    font-family: var(--font);
    margin-bottom: 10px;
    outline: none;
  }
  .modal-input:focus { border-color: var(--green); }
  .modal-hint { font-size: 11px; color: var(--text-muted); margin-bottom: 16px; line-height: 1.5; }
  .btn-primary {
    width: 100%;
    background: var(--green);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    font-weight: 700;
    font-family: var(--font);
    cursor: pointer;
    transition: all 0.15s;
  }
  .btn-primary:active { transform: scale(0.98); background: var(--green-dark); }
  .divider { height: 1px; background: var(--border); margin: 16px 0; }
</style>
</head>
<body>

<!-- HEADER -->
<div class="header">
  <div class="header-top">
    <div class="app-name">OrderKu</div>
    <div class="sync-badge" id="syncBadge">
      <div class="sync-dot"></div>
      <span id="syncText">Memuat...</span>
    </div>
  </div>
  <div class="revenue-card">
    <div class="revenue-label">Penjualan Bulan Ini</div>
    <div class="revenue-amount" id="revenueAmount"><span>Rp</span> <span id="revenueNum">–</span></div>
    <div class="revenue-sub">
      <span id="transCount">– transaksi</span>
      <span class="badge-up" id="growthBadge">↑ –%</span>
    </div>
  </div>
</div>

<!-- ERROR BANNER -->
<div class="error-banner" id="errorBanner">
  ⚠️ Gagal memuat data. Pastikan Google Sheets sudah dipublikasikan dan Sheet ID benar.
</div>

<!-- MINI STATS -->
<div class="mini-stats">
  <div class="mini-card">
    <div class="mini-label">Minggu Ini</div>
    <div class="mini-value rp" id="weekRevenue">–</div>
    <div class="mini-trend up" id="weekTrend">↑ –%</div>
  </div>
  <div class="mini-card">
    <div class="mini-label">Outlet Aktif</div>
    <div class="mini-value" id="activeOutlets">–</div>
    <div class="mini-trend" id="outletSub" style="color:var(--text-muted)">bulan ini</div>
  </div>
  <div class="mini-card">
    <div class="mini-label">Item Terjual</div>
    <div class="mini-value" id="totalItems">–</div>
    <div class="mini-trend" style="color:var(--text-muted)">total qty</div>
  </div>
  <div class="mini-card">
    <div class="mini-label">Rata-rata/Order</div>
    <div class="mini-value rp" id="avgOrder">–</div>
    <div class="mini-trend" style="color:var(--text-muted)">nilai</div>
  </div>
</div>

<!-- QUICK ACTIONS -->
<div class="quick-actions">
  <div class="action-btn" onclick="openAppSheet()">
    <div class="action-icon">🛒</div>
    <div class="action-label">Order</div>
  </div>
  <div class="action-btn" onclick="showSection('products')">
    <div class="action-icon">📦</div>
    <div class="action-label">Produk</div>
  </div>
  <div class="action-btn" onclick="showSection('outlets')">
    <div class="action-icon">🏪</div>
    <div class="action-label">Outlet</div>
  </div>
  <div class="action-btn" onclick="openConfig()">
    <div class="action-icon">⚙️</div>
    <div class="action-label">Setting</div>
  </div>
</div>

<!-- AI INSIGHT -->
<div class="insight-card">
  <div class="insight-header">
    <div class="insight-icon">⚡</div>
    <div class="insight-title">Insight Pasar AI</div>
  </div>
  <div class="insight-text" id="insightText">
    <span class="insight-loading">Menganalisis data penjualan...</span>
  </div>
</div>

<!-- TOP PRODUK -->
<div class="section" id="section-products">
  <div class="section-title">🏆 Top Produk Terlaris</div>
  <div class="product-list" id="productList">
    <div class="skeleton" style="height:56px; border-radius:12px;"></div>
    <div class="skeleton" style="height:56px; border-radius:12px;"></div>
    <div class="skeleton" style="height:56px; border-radius:12px;"></div>
  </div>
</div>

<!-- TOP OUTLET -->
<div class="section" id="section-outlets" style="margin-top:20px;">
  <div class="section-title">🏬 Performa Outlet</div>
  <div class="outlet-list" id="outletList">
    <div class="skeleton" style="height:60px; border-radius:12px;"></div>
    <div class="skeleton" style="height:60px; border-radius:12px;"></div>
  </div>
</div>

<!-- RECENT ORDERS -->
<div class="section" style="margin-top:20px; padding-bottom:20px;">
  <div class="section-title">📋 Order Terbaru</div>
  <div class="order-list" id="orderList">
    <div class="skeleton" style="height:72px; border-radius:12px;"></div>
    <div class="skeleton" style="height:72px; border-radius:12px;"></div>
    <div class="skeleton" style="height:72px; border-radius:12px;"></div>
  </div>
</div>

<!-- BOTTOM NAV -->
<div class="bottom-nav">
  <div class="nav-item active">
    <div class="nav-icon">🏠</div>
    <div class="nav-label">Beranda</div>
  </div>
  <div class="nav-item" onclick="openAppSheet()">
    <div class="nav-icon">🛒</div>
    <div class="nav-label">Transaksi</div>
  </div>
  <div class="nav-item">
    <div class="nav-icon">📊</div>
    <div class="nav-label">Laporan</div>
  </div>
  <div class="nav-item" onclick="openConfig()">
    <div class="nav-icon">⚙️</div>
    <div class="nav-label">Pengaturan</div>
  </div>
</div>

<!-- CONFIG MODAL -->
<div class="modal-overlay" id="configModal">
  <div class="modal">
    <div class="modal-title">⚙️ Pengaturan Koneksi</div>
    <input class="modal-input" id="sheetId" placeholder="Google Sheets ID" type="text">
    <div class="modal-hint">
      Ambil dari URL Google Sheets:<br>
      docs.google.com/spreadsheets/d/<strong>INI_SHEET_ID</strong>/edit<br><br>
      ⚠️ Sheet harus dipublikasikan: File → Bagikan → Publikasikan ke web → Pilih semua sheet → Publikasikan
    </div>
    <input class="modal-input" id="appsheetUrl" placeholder="URL AppSheet (opsional)" type="text">
    <button class="btn-primary" onclick="saveConfig()">💾 Simpan & Muat Data</button>
    <div class="divider"></div>
    <button class="btn-primary" onclick="closeConfig()" style="background:var(--surface2); color:var(--text-muted);">Batal</button>
  </div>
</div>

<script>
// ── CONFIG ──
let CONFIG = {
  sheetId: localStorage.getItem('orderku_sheetId') || '',
  appsheetUrl: localStorage.getItem('orderku_appsheetUrl') || ''
};

// ── UTILS ──
function formatRp(num) {
  if (!num || isNaN(num)) return 'Rp0';
  if (num >= 1000000000) return 'Rp' + (num/1000000000).toFixed(1) + 'M';
  if (num >= 1000000) return 'Rp' + (num/1000000).toFixed(1) + 'jt';
  if (num >= 1000) return 'Rp' + (num/1000).toFixed(0) + 'rb';
  return 'Rp' + num.toLocaleString('id-ID');
}

function formatRpFull(num) {
  if (!num || isNaN(num)) return 'Rp0';
  return 'Rp' + Math.round(num).toLocaleString('id-ID');
}

function today() { return new Date(); }
function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function startOfLastMonth(d) { return new Date(d.getFullYear(), d.getMonth()-1, 1); }
function endOfLastMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 0); }
function startOfWeek(d) {
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.getFullYear(), d.getMonth(), diff);
}
function startOfLastWeek(d) {
  const sw = startOfWeek(d);
  return new Date(sw.getTime() - 7*24*60*60*1000);
}

function parseDate(str) {
  if (!str) return null;
  if (str instanceof Date) return str;
  const d = new Date(str);
  return isNaN(d) ? null : d;
}

function inRange(dateStr, start, end) {
  const d = parseDate(dateStr);
  if (!d) return false;
  return d >= start && d <= end;
}

// ── FETCH SHEETS ──
async function fetchSheet(sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${CONFIG.sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\)/)[1]);
  
  if (!json.table || !json.table.rows) return [];
  
  const cols = json.table.cols.map(c => c.label);
  return json.table.rows.map(row => {
    const obj = {};
    row.c.forEach((cell, i) => {
      obj[cols[i]] = cell ? cell.v : null;
    });
    return obj;
  });
}

// ── MAIN DATA ──
let DATA = { orders: [], orderDetail: [], produk: [], outlet: [] };

async function loadData() {
  if (!CONFIG.sheetId) {
    openConfig();
    return;
  }

  try {
    setSyncStatus('Memuat...', false);
    document.getElementById('errorBanner').style.display = 'none';

    const [orders, orderDetail, produk, outlet] = await Promise.all([
      fetchSheet('Orders'),
      fetchSheet('OrderDetail'),
      fetchSheet('Produk'),
      fetchSheet('Outlet')
    ]);

    DATA = { orders, orderDetail, produk, outlet };
    setSyncStatus('Tersinkron', true);
    renderAll();
  } catch(e) {
    console.error(e);
    setSyncStatus('Error', false);
    document.getElementById('errorBanner').style.display = 'block';
  }
}

function setSyncStatus(text, ok) {
  document.getElementById('syncText').textContent = text;
  document.querySelector('.sync-dot').style.background = ok ? 'var(--green)' : '#EF5350';
}

// ── RENDER ──
function renderAll() {
  renderHeader();
  renderMiniStats();
  renderProducts();
  renderOutlets();
  renderOrders();
  generateInsight();
}

function renderHeader() {
  const now = today();
  const som = startOfMonth(now);
  const solm = startOfLastMonth(now);
  const eolm = endOfLastMonth(now);

  const thisMonthOrders = DATA.orders.filter(o => inRange(o.TanggalOrder, som, now));
  const lastMonthOrders = DATA.orders.filter(o => inRange(o.TanggalOrder, solm, eolm));

  const thisRev = thisMonthOrders.reduce((s, o) => s + (parseFloat(o.TotalAkhir) || 0), 0);
  const lastRev = lastMonthOrders.reduce((s, o) => s + (parseFloat(o.TotalAkhir) || 0), 0);
  const growth = lastRev > 0 ? ((thisRev - lastRev) / lastRev * 100) : 0;

  // Format big number
  let revDisplay = '';
  if (thisRev >= 1000000000) revDisplay = (thisRev/1000000000).toFixed(1) + ' M';
  else if (thisRev >= 1000000) revDisplay = (thisRev/1000000).toFixed(1) + ' jt';
  else revDisplay = Math.round(thisRev).toLocaleString('id-ID');

  document.getElementById('revenueNum').textContent = revDisplay;
  document.getElementById('transCount').textContent = thisMonthOrders.length + ' transaksi';

  const gb = document.getElementById('growthBadge');
  if (growth >= 0) {
    gb.textContent = '↑ ' + growth.toFixed(1) + '%';
    gb.style.background = 'rgba(67,160,71,0.2)';
    gb.style.color = 'var(--green-light)';
  } else {
    gb.textContent = '↓ ' + Math.abs(growth).toFixed(1) + '%';
    gb.style.background = 'rgba(239,83,80,0.2)';
    gb.style.color = '#EF9A9A';
  }
}

function renderMiniStats() {
  const now = today();
  const sow = startOfWeek(now);
  const solw = startOfLastWeek(now);
  const eolw = new Date(sow.getTime() - 1);
  const som = startOfMonth(now);

  const weekOrders = DATA.orders.filter(o => inRange(o.TanggalOrder, sow, now));
  const lastWeekOrders = DATA.orders.filter(o => inRange(o.TanggalOrder, solw, eolw));
  const monthOrders = DATA.orders.filter(o => inRange(o.TanggalOrder, som, now));

  const weekRev = weekOrders.reduce((s, o) => s + (parseFloat(o.TotalAkhir) || 0), 0);
  const lastWeekRev = lastWeekOrders.reduce((s, o) => s + (parseFloat(o.TotalAkhir) || 0), 0);
  const weekGrowth = lastWeekRev > 0 ? ((weekRev - lastWeekRev) / lastWeekRev * 100) : 0;

  const activeOutlets = new Set(monthOrders.map(o => o.NamaOutlet)).size;
  const totalItems = DATA.orderDetail.reduce((s, d) => s + (parseFloat(d.QTY) || 0), 0);
  const avgOrder = monthOrders.length > 0
    ? monthOrders.reduce((s, o) => s + (parseFloat(o.TotalAkhir) || 0), 0) / monthOrders.length
    : 0;

  document.getElementById('weekRevenue').textContent = formatRp(weekRev);
  document.getElementById('activeOutlets').textContent = activeOutlets;
  document.getElementById('totalItems').textContent = Math.round(totalItems).toLocaleString('id-ID');
  document.getElementById('avgOrder').textContent = formatRp(avgOrder);

  const wt = document.getElementById('weekTrend');
  if (weekGrowth >= 0) {
    wt.textContent = '↑ ' + weekGrowth.toFixed(1) + '%';
    wt.className = 'mini-trend up';
  } else {
    wt.textContent = '↓ ' + Math.abs(weekGrowth).toFixed(1) + '%';
    wt.className = 'mini-trend down';
  }
}

function renderProducts() {
  const prodMap = {};
  DATA.orderDetail.forEach(d => {
    const name = d.NamaProduk;
    if (!name) return;
    if (!prodMap[name]) prodMap[name] = { qty: 0, nilai: 0 };
    prodMap[name].qty += parseFloat(d.QTY) || 0;
    prodMap[name].nilai += parseFloat(d.SubTotal) || 0;
  });

  const sorted = Object.entries(prodMap).sort((a, b) => b[1].nilai - a[1].nilai).slice(0, 5);
  const rankClass = ['gold', 'silver', 'bronze', '', ''];
  const rankEmoji = ['🥇', '🥈', '🥉', '4', '5'];

  if (sorted.length === 0) {
    document.getElementById('productList').innerHTML = '<div class="empty"><div class="empty-icon">📦</div>Belum ada data produk</div>';
    return;
  }

  document.getElementById('productList').innerHTML = sorted.map(([name, data], i) => {
    // find satuan
    const prod = DATA.produk.find(p => p.NamaProduk === name);
    const satuan = prod ? prod.Satuan || '' : '';
    return `
    <div class="product-item">
      <div class="product-rank ${rankClass[i]}">${rankEmoji[i]}</div>
      <div class="product-info">
        <div class="product-name">${name}</div>
        <div class="product-qty">${Math.round(data.qty).toLocaleString('id-ID')} ${satuan}</div>
      </div>
      <div class="product-value">${formatRp(data.nilai)}</div>
    </div>`;
  }).join('');
}

function renderOutlets() {
  const outletMap = {};
  DATA.orders.forEach(o => {
    const name = o.NamaOutlet;
    if (!name) return;
    if (!outletMap[name]) outletMap[name] = { count: 0, nilai: 0 };
    outletMap[name].count++;
    outletMap[name].nilai += parseFloat(o.TotalAkhir) || 0;
  });

  const sorted = Object.entries(outletMap).sort((a, b) => b[1].nilai - a[1].nilai).slice(0, 5);
  const emojis = ['🏪', '🏬', '🏢', '🏣', '🏤'];

  if (sorted.length === 0) {
    document.getElementById('outletList').innerHTML = '<div class="empty"><div class="empty-icon">🏪</div>Belum ada data outlet</div>';
    return;
  }

  const totalNilai = sorted.reduce((s, [, d]) => s + d.nilai, 0);

  document.getElementById('outletList').innerHTML = sorted.map(([name, data], i) => {
    const share = totalNilai > 0 ? (data.nilai / totalNilai * 100).toFixed(0) : 0;
    const status = data.count > 5 ? '🔥 Aktif' : data.count > 2 ? '✅ Normal' : '⚠️ Rendah';
    const statusColor = data.count > 5 ? 'var(--green)' : data.count > 2 ? 'var(--teal)' : 'var(--amber)';
    return `
    <div class="outlet-item">
      <div class="outlet-avatar">${emojis[i]}</div>
      <div class="outlet-info">
        <div class="outlet-name">${name}</div>
        <div class="outlet-orders">${data.count} order · ${share}% share</div>
      </div>
      <div class="outlet-value">
        <div class="outlet-amount">${formatRp(data.nilai)}</div>
        <div class="outlet-status" style="color:${statusColor}">${status}</div>
      </div>
    </div>`;
  }).join('');
}

function renderOrders() {
  const sorted = [...DATA.orders]
    .sort((a, b) => new Date(b.TanggalOrder) - new Date(a.TanggalOrder))
    .slice(0, 5);

  if (sorted.length === 0) {
    document.getElementById('orderList').innerHTML = '<div class="empty"><div class="empty-icon">📋</div>Belum ada order</div>';
    return;
  }

  document.getElementById('orderList').innerHTML = sorted.map(o => {
    const status = o.StatusOrder || 'Draft';
    const statusClass = status === 'Terkirim' ? 'status-terkirim' :
                        status === 'Konfirmasi' ? 'status-konfirmasi' : 'status-draft';
    const tgl = o.TanggalOrder ? new Date(o.TanggalOrder).toLocaleDateString('id-ID', {day:'numeric',month:'short'}) : '–';
    const items = o.RingkasanWA || o['Ringkasan Order'] || '–';
    const shortItems = items.length > 40 ? items.substring(0, 40) + '...' : items;
    return `
    <div class="order-item">
      <div class="order-top">
        <div class="order-outlet">${o.NamaOutlet || '–'}</div>
        <div class="order-amount">${formatRpFull(o.TotalAkhir)}</div>
      </div>
      <div class="order-bottom">
        <div class="order-items">${tgl} · ${shortItems}</div>
        <div class="order-status ${statusClass}">${status}</div>
      </div>
    </div>`;
  }).join('');
}

// ── AI INSIGHT ──
async function generateInsight() {
  if (!DATA.orders.length && !DATA.orderDetail.length) {
    document.getElementById('insightText').textContent = 'Tidak ada data untuk dianalisis.';
    return;
  }

  const now = today();
  const som = startOfMonth(now);
  const solm = startOfLastMonth(now);
  const eolm = endOfLastMonth(now);

  const thisMonth = DATA.orders.filter(o => inRange(o.TanggalOrder, som, now));
  const lastMonth = DATA.orders.filter(o => inRange(o.TanggalOrder, solm, eolm));

  const thisRev = thisMonth.reduce((s, o) => s + (parseFloat(o.TotalAkhir)||0), 0);
  const lastRev = lastMonth.reduce((s, o) => s + (parseFloat(o.TotalAkhir)||0), 0);
  const growth = lastRev > 0 ? ((thisRev-lastRev)/lastRev*100).toFixed(1) : null;

  // top produk
  const prodMap = {};
  DATA.orderDetail.forEach(d => {
    if (!d.NamaProduk) return;
    if (!prodMap[d.NamaProduk]) prodMap[d.NamaProduk] = 0;
    prodMap[d.NamaProduk] += parseFloat(d.QTY)||0;
  });
  const topProd = Object.entries(prodMap).sort((a,b)=>b[1]-a[1])[0];

  // outlet aktif
  const activeOutlets = new Set(thisMonth.map(o=>o.NamaOutlet)).size;
  const totalOutlets = new Set(DATA.orders.map(o=>o.NamaOutlet)).size;

  const summary = `
Data penjualan OrderKu:
- Bulan ini: ${thisMonth.length} order, total Rp${Math.round(thisRev).toLocaleString('id-ID')}
- Bulan lalu: ${lastMonth.length} order, total Rp${Math.round(lastRev).toLocaleString('id-ID')}
- Growth: ${growth ? growth + '%' : 'data tidak cukup'}
- Produk terlaris: ${topProd ? topProd[0] + ' (' + Math.round(topProd[1]) + ' unit)' : 'tidak ada'}
- Outlet aktif bulan ini: ${activeOutlets} dari ${totalOutlets} outlet
`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Kamu adalah analis bisnis untuk distributor tepung/bahan makanan. Berikan insight singkat (3-4 kalimat) dalam bahasa Indonesia yang natural dan actionable berdasarkan data ini:\n${summary}\n\nFokus pada: tren, produk prioritas, dan 1 rekomendasi konkret untuk sales. Jangan pakai markdown atau bullet point, cukup teks mengalir.`
        }]
      })
    });
    const data = await res.json();
    const text = data.content?.[0]?.text || 'Insight tidak tersedia.';
    document.getElementById('insightText').textContent = text;
  } catch(e) {
    const growth_text = growth ? (parseFloat(growth) >= 0 ? `naik ${growth}%` : `turun ${Math.abs(growth)}%`) : 'belum ada perbandingan';
    document.getElementById('insightText').textContent =
      `Penjualan bulan ini ${growth_text} dibanding bulan lalu dengan ${thisMonth.length} transaksi. ` +
      (topProd ? `Produk terlaris adalah ${topProd[0]} dengan ${Math.round(topProd[1])} unit terjual. ` : '') +
      `${activeOutlets} outlet aktif bulan ini dari total ${totalOutlets} outlet terdaftar.`;
  }
}

// ── ACTIONS ──
function openAppSheet() {
  if (CONFIG.appsheetUrl) window.open(CONFIG.appsheetUrl, '_blank');
  else { openConfig(); }
}

function showSection(id) {
  document.getElementById('section-' + id).scrollIntoView({ behavior: 'smooth' });
}

function openConfig() {
  document.getElementById('sheetId').value = CONFIG.sheetId;
  document.getElementById('appsheetUrl').value = CONFIG.appsheetUrl;
  document.getElementById('configModal').classList.add('show');
}

function closeConfig() {
  document.getElementById('configModal').classList.remove('show');
}

function saveConfig() {
  CONFIG.sheetId = document.getElementById('sheetId').value.trim();
  CONFIG.appsheetUrl = document.getElementById('appsheetUrl').value.trim();
  localStorage.setItem('orderku_sheetId', CONFIG.sheetId);
  localStorage.setItem('orderku_appsheetUrl', CONFIG.appsheetUrl);
  closeConfig();
  loadData();
}

// ── INIT ──
if (CONFIG.sheetId) {
  loadData();
  setInterval(loadData, 5 * 60 * 1000); // refresh 5 menit
} else {
  setTimeout(openConfig, 500);
}

// Close modal on overlay click
document.getElementById('configModal').addEventListener('click', function(e) {
  if (e.target === this) closeConfig();
});
</script>
</body>
</html>
