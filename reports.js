// Data bootstrap
const defaultGardenBeds = [
  { id: 1, name: "Berry Bushes", status: "Too Hot", statusColor: "#C23A3A", plants: 6 },
  { id: 2, name: "Flower Section", status: "Too Hot", statusColor: "#C23A3A", plants: 24 },
  { id: 3, name: "Greenhouse", status: "Healthy", statusColor: "#3A6A49", plants: 18 },
  { id: 4, name: "Herb Bed", status: "Healthy", statusColor: "#3A6A49", plants: 12 },
  { id: 5, name: "Tomato Patch", status: "Healthy", statusColor: "#3A6A49", plants: 16 },
  { id: 6, name: "Vegetable Garden", status: "Needs Water", statusColor: "#D76550", plants: 28 },
  { id: 7, name: "Winter Greens", status: "Too Cold", statusColor: "#BFD7EA", plants: 8 },
];

function getGardenBedsFromStorage() {
  const stored = localStorage.getItem('harvestPro_gardenBeds');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('harvestPro_gardenBeds', JSON.stringify(defaultGardenBeds));
  return defaultGardenBeds;
}

// Date range utilities
function getRangeDays() {
  const el = document.getElementById('date-range');
  if (!el) return 7;
  const sel = el.value;
  if (sel === 'today') return 1;
  if (sel === 'week') return 7;
  if (sel === '30') return 30;
  if (sel === 'custom') {
    const s = document.getElementById('start-date')?.value;
    const e = document.getElementById('end-date')?.value;
    if (!s || !e) return 7;
    const sd = new Date(s);
    const ed = new Date(e);
    const diff = Math.max(1, Math.round((ed - sd) / (1000*60*60*24)) + 1);
    return diff;
  }
  return 7;
}

function handleDateRangeChange() {
  const sel = document.getElementById('date-range').value;
  const cr = document.getElementById('custom-range');
  if (cr) cr.classList.toggle('hidden', sel !== 'custom');
  if (sel !== 'custom') updateAll();
}

function applyCustomRange() { updateAll(); }

// Labels & series generators
function generateLabels(days) {
  const labels = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }
  return labels;
}

function generateTempSeries(days) {
  const labels = generateLabels(days);
  const data = labels.map((_, idx) => {
    const base = 26 + Math.sin(idx*0.25)*4;
    const noise = (Math.random()*2 - 1) * 1.2;
    return Math.round((base + noise)*10)/10;
  });
  return { labels, data };
}

function generateMoistureSeries(days, seed = 0.5) {
  const labels = generateLabels(days);
  const data = labels.map((_, idx) => {
    const base = 55 + Math.sin((idx+seed)*0.35)*10;
    const noise = (Math.random()*6 - 3);
    return Math.max(20, Math.min(95, Math.round(base + noise)));
  });
  return { labels, data };
}

function generateUsageForBed(days, plants) {
  const labels = generateLabels(days);
  const data = labels.map((_, idx) => {
    const pattern = 12 + Math.sin(idx*0.3)*5;
    const plantFactor = Math.max(0.5, plants/20);
    const noise = Math.random()*4 - 2;
    return Math.max(0.5, Math.round((pattern*plantFactor + noise) * 10)/10);
  });
  return { labels, data };
}

// Chart state holders
let charts = {};
function destroyAllCharts() {
  Object.keys(charts).forEach(k => { try { charts[k] && charts[k].destroy(); } catch(e){} });
  charts = {};
}

// Utility: safe get element
function $id(id) { return document.getElementById(id); }

// Build high level charts
function buildTrendMoisture(beds) {
  const el = $id('trend-moisture-chart'); if (!el) return;
  const days = getRangeDays();
  const labels = generateLabels(days);
  const datasets = beds.slice(0,6).map((b, i) => {
    const s = generateMoistureSeries(days, i*0.2);
    return { label: b.name, data: s.data, borderColor: b.statusColor || '#356C48', backgroundColor: 'rgba(53,108,72,0.06)', fill: false, tension: .35 };
  });
  charts.trendMoisture = new Chart(el.getContext('2d'), { type: 'line', data: { labels, datasets }, options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom'} }, scales:{ y:{ min:10, max:100, ticks:{ callback:v=>v+'%' } }, x:{ grid:{ display:false } } } } });
}

function buildTrendTemp(beds) {
  const el = $id('trend-temp-chart'); if (!el) return;
  const days = getRangeDays();
  const labels = generateLabels(days);
  const soil = generateTempSeries(days); const ambient = generateTempSeries(days);
  charts.trendTemp = new Chart(el.getContext('2d'), { type:'line', data:{ labels, datasets:[ { label:'Soil Temp (°C)', data: soil.data, borderColor:'#D57A66', backgroundColor:'rgba(213,122,102,.08)', fill:false, tension:.35 }, { label:'Air Temp (°C)', data: ambient.data.map(v=>v+Math.random()*1-0.5), borderColor:'#356C48', backgroundColor:'rgba(53,108,72,.06)', fill:false, tension:.35 } ] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom'} }, scales:{ y:{ min:5, max:40, ticks:{ callback:v=>v+'°C' } }, x:{ grid:{ display:false } } } } });
}

function buildWaterUsageTrend(beds) {
  const el = $id('water-usage-trend-chart'); if (!el) return;
  const days = getRangeDays();
  const labels = generateLabels(days);
  const actual = labels.map((_, idx) => Math.round(beds.reduce((acc,b,i) => acc + generateUsageForBed(days,b.plants).data[idx],0) * 10)/10);
  const target = actual.map(v => Math.round(v * 0.9 * 10)/10);
  charts.waterUsageTrend = new Chart(el.getContext('2d'), { type:'bar', data:{ labels, datasets:[ { label:'Actual (L)', data:actual, backgroundColor:'#356C48' }, { label:'Target (L)', data:target, backgroundColor:'#BFD7EA' } ] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom' } }, scales:{ y:{ ticks:{ callback:v=>v+'L' } }, x:{ grid:{ display:false } } } } });
}

function buildBedHealthTrend(beds) {
  const el = $id('bed-health-trend-chart'); if (!el) return;
  const days = Math.min(30, getRangeDays());
  const labels = generateLabels(days);
  const healthy = labels.map(() => Math.max(0, Math.round(beds.length * (0.5 + Math.random()*0.3))));
  const attention = labels.map(() => Math.max(0, Math.round(beds.length * (0.2 + Math.random()*0.2))));
  const urgent = labels.map(() => Math.max(0, beds.length - healthy[0] - attention[0]));
  charts.bedHealthTrend = new Chart(el.getContext('2d'), { type:'line', data:{ labels, datasets:[ { label:'Healthy', data:healthy, borderColor:'#688654', fill:false }, { label:'Attention', data:attention, borderColor:'#D57A66', fill:false }, { label:'Urgent', data:urgent, borderColor:'#D169D4', fill:false } ] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom' } }, scales:{ y:{ beginAtZero:true }, x:{ grid:{ display:false } } } } });
}

function buildUsageByBedExtended(beds) {
  const el = $id('usage-by-bed-chart-extended'); if (!el) return;
  const days = getRangeDays();
  const labels = beds.map(b=>b.name);
  const actual = beds.map(b => generateUsageForBed(days,b.plants).data.reduce((a,v)=>a+v,0));
  const target = actual.map(v=>Math.round(v*0.9*10)/10);
  charts.usageByBedExtended = new Chart(el.getContext('2d'), { type:'bar', data:{ labels, datasets:[ { label:'Actual (L)', data:actual, backgroundColor:'#356C48' }, { label:'Target (L)', data:target, backgroundColor:'#BFD7EA' } ] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom' } }, scales:{ y:{ ticks:{ callback:v=>v+'L' } }, x:{ grid:{ display:false } } } } });
}

function buildManualAutomatedChart(beds) {
  const el = $id('manual-automated-chart'); if (!el) return;
  // Simulate automated vs manual percentages
  const auto = Math.round(70 + Math.random()*20);
  const manual = 100 - auto;
  charts.manualAutomated = new Chart(el.getContext('2d'), { type:'doughnut', data:{ labels:['Automatic','Manual'], datasets:[ { data:[auto,manual], backgroundColor:['#688654','#D57A66'] } ] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom' } } } });
  $id('pct-auto').textContent = `${auto}%`;
  $id('pct-manual').textContent = `${manual}%`;
}

// Health pie (summary)
function buildHealthSummaryPie(beds) {
  const el = $id('health-pie-chart'); if (!el) return;
  const healthy = beds.filter(b=>b.status==='Healthy').length;
  const urgent = beds.filter(b=>b.status==='Too Hot' || b.status==='Needs Water').length;
  const attention = Math.max(0, beds.length - healthy - urgent);
  charts.healthPie = new Chart(el.getContext('2d'), { type:'pie', data:{ labels:['Healthy','Attention','Urgent'], datasets:[{ data:[healthy,attention,urgent], backgroundColor:['#688654','#D57A66','#D169D4'] }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom' } } } });
}

// Small comparative moisture charts
function buildMoistureCompare(beds) {
  const leftEl = $id('moisture-compare-left');
  const rightEl = $id('moisture-compare-right');
  if (!leftEl || !rightEl) return;
  const days = Math.min(14, getRangeDays());
  const labels = generateLabels(days);
  const leftSeries = generateMoistureSeries(days, 0.1);
  const rightSeries = generateMoistureSeries(days, 0.5);
  charts.moistLeft = new Chart(leftEl.getContext('2d'), { type:'line', data:{ labels, datasets:[{ label:'A', data:leftSeries.data, borderColor:'#356C48', fill:true, backgroundColor:'rgba(53,108,72,0.06)' }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } }, scales:{ y:{ ticks:{ callback:v=>v+'%' } }, x:{ display:false } } } });
  charts.moistRight = new Chart(rightEl.getContext('2d'), { type:'line', data:{ labels, datasets:[{ label:'B', data:rightSeries.data, borderColor:'#D57A66', fill:true, backgroundColor:'rgba(213,122,102,0.06)' }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } }, scales:{ y:{ ticks:{ callback:v=>v+'%' } }, x:{ display:false } } } });
}

function renderHeatmap(beds) {
  const container = $id('heatmap-grid'); if (!container) return;
  container.innerHTML = '';
  const days = Math.min(30, getRangeDays());
  const labels = generateLabels(days);
  // Header row
  const header = document.createElement('div'); header.className='mb-2 text-xs text-gray-600'; header.textContent = 'Time →  ' + labels.join(' '); container.appendChild(header);
  // For each bed create a row of color cells
  beds.forEach((b, bi) => {
    const row = document.createElement('div'); row.className='mb-1';
    const label = document.createElement('div'); label.className='inline-block w-32 text-xs text-gray-700'; label.textContent = b.name; row.appendChild(label);
    const s = generateMoistureSeries(days, bi*0.13).data;
    s.forEach(val => {
      const cell = document.createElement('span'); cell.className='heatmap-cell';
      // map val 20-95 to color gradient from blue->green->orange->red
      const pct = (val - 20) / (95-20);
      const r = Math.round(255 * Math.min(1, Math.max(0, (pct-0.66)/0.34)));
      const g = Math.round(255 * Math.min(1, Math.max(0, 1 - Math.abs(pct-0.5)*2)));
      const bcol = Math.round(255 * Math.min(1, Math.max(0, (0.33 - pct)/0.33)));
      cell.style.backgroundColor = `rgb(${r},${g},${bcol})`;
      cell.title = `${val}%`;
      row.appendChild(cell);
    });
    container.appendChild(row);
  });
}

// Top 3 thirstiest beds
function computeTopThirsty(beds) {
  const days = getRangeDays();
  const usage = beds.map(b => ({ name: b.name, usage: generateUsageForBed(days,b.plants).data.reduce((a,v)=>a+v,0) }));
  usage.sort((a,b)=>b.usage - a.usage);
  return usage.slice(0,3);
}

// Alerts & events
let generatedAlerts = [];
function generateAlerts(beds) {
  const days = getRangeDays();
  const types = ['Too Hot','Too Cold','Needs Water'];
  const now = new Date();
  const alerts = [];
  const count = Math.min(50, Math.max(8, days * 3));
  for (let i=0;i<count;i++) {
    const bed = beds[Math.floor(Math.random()*beds.length)];
    const type = types[Math.floor(Math.random()*types.length)];
    const dt = new Date(now.getTime() - Math.floor(Math.random()*days)*24*60*60*1000 - Math.floor(Math.random()*24)*60*60*1000);
    const note = `${type} detected`; alerts.push({ date: dt, type, bed: bed.name, notes: note, auto: Math.random() > 0.3 });
  }
  alerts.sort((a,b)=>b.date - a.date);
  generatedAlerts = alerts;
}

function renderAlerts() {
  const tbody = $id('alerts-table'); if (!tbody) return;
  const typeFilter = $id('alert-type-filter')?.value || 'all';
  const bedFilter = $id('alert-bed-filter')?.value || 'all';
  const rows = generatedAlerts.filter(a => (typeFilter==='all' || a.type===typeFilter) && (bedFilter==='all' || a.bed===bedFilter))
    .slice(0,200)
    .map(a => `<tr class="border-b"><td class="py-2 text-sm text-gray-700">${a.date.toLocaleString()}</td><td class="py-2 text-sm">${a.type}</td><td class="py-2 text-sm text-gray-700">${a.bed}</td><td class="py-2 text-sm text-gray-600">${a.notes}</td></tr>`).join('');
  tbody.innerHTML = rows || `<tr><td colspan="4" class="py-4 text-center text-gray-500">No alerts</td></tr>`;
}

// System overview and summary metrics
function updateSystemOverview(beds) {
  const total = beds.length;
  const healthy = beds.filter(b=>b.status==='Healthy').length;
  const urgent = beds.filter(b=>b.status==='Too Hot' || b.status==='Needs Water').length;
  const attention = Math.max(0, total - healthy - urgent);
  $id('total-beds-overview').textContent = total;
  $id('total-healthy-overview').textContent = healthy;
  $id('total-attention-overview').textContent = attention;
  $id('total-urgent-overview').textContent = urgent;

  // Aggregate metrics
  const days = getRangeDays();
  const totalWater = Math.round(beds.reduce((acc,b) => acc + generateUsageForBed(days,b.plants).data.reduce((a,v)=>a+v,0),0));
  const avgSoilMoist = Math.round(beds.map((b,i)=>generateMoistureSeries(days,i*0.13).data).flat().reduce((a,v)=>a+v,0) / (beds.length * Math.max(1,days)) || 0);
  const avgSoilTemp = (generateTempSeries(days).data.reduce((a,v)=>a+v,0)/Math.max(1,days)).toFixed(1);
  const avgAirTemp = (generateTempSeries(days).data.reduce((a,v)=>a+v,0)/Math.max(1,days)).toFixed(1);
  const avgAirHum = Math.round(60 + Math.random()*10 - 5);

  $id('metric-water-used').textContent = `${totalWater} L`;
  $id('metric-soil-moisture').textContent = `${avgSoilMoist}%`;
  $id('metric-soil-temp').textContent = `${avgSoilTemp}°C`;
  $id('metric-air-temp-hum').textContent = `${avgAirTemp}°C / ${avgAirHum}%`;
}

// Render top lists
function renderTopThirsty(beds) {
  const top = computeTopThirsty(beds);
  const ol1 = $id('top3-thirsty'); if (ol1) { ol1.innerHTML = top.map(t => `<li>${t.name} — ${Math.round(t.usage)}L</li>`).join(''); }
  const ol2 = $id('top-thirsty-list'); if (ol2) ol2.innerHTML = top.map(t => `<li>${t.name} — ${Math.round(t.usage)}L</li>`).join('');
}

// Populate bed filters
function populateBedFilters(beds) {
  const alertBed = $id('alert-bed-filter'); if (!alertBed) return;
  alertBed.querySelectorAll('option:not([value="all"])').forEach(o=>o.remove());
  beds.forEach(b => { const o = document.createElement('option'); o.value=b.name; o.textContent=b.name; alertBed.appendChild(o); });
}

// Moisture view toggle
function setMoistureView(mode) {
  const side = $id('moisture-side-by-side'); const heat = $id('moisture-heatmap');
  if (!side || !heat) return;
  if (mode === 'heat') { side.classList.add('hidden'); heat.classList.remove('hidden'); renderHeatmap(getGardenBedsFromStorage()); }
  else { heat.classList.add('hidden'); side.classList.remove('hidden'); buildMoistureCompare(getGardenBedsFromStorage()); }
}

// Main update function
function updateAll() {
  const beds = getGardenBedsFromStorage();
  destroyAllCharts();
  updateSystemOverview(beds);
  buildTrendMoisture(beds);
  buildTrendTemp(beds);
  buildWaterUsageTrend(beds);
  buildBedHealthTrend(beds);
  buildUsageByBedExtended(beds);
  buildManualAutomatedChart(beds);
  buildHealthSummaryPie(beds);
  buildMoistureCompare(beds);
  generateAlerts(beds);
  renderAlerts();
  renderTopThirsty(beds);
  populateBedFilters(beds);
}

// Legacy summary kept for card compatibility
function updateSummaryLegacy(beds) {
  const days = getRangeDays();
  const totalUsage = beds.reduce((acc, b) => acc + generateUsageForBed(days, b.plants).data.reduce((a,v)=>a+v,0), 0);
  const { data: temps } = generateTempSeries(days);
  const moistureSeries = beds.map((b, i) => generateMoistureSeries(days, i*0.13).data).flat();
  const allMoisture = moistureSeries;
  const avgMoisture = allMoisture.length ? Math.round((allMoisture.reduce((a,v)=>a+v,0)/allMoisture.length)) : 0;
  const attentionBeds = beds.filter(b => b.status !== 'Healthy').length;
  const sumEl = $id('sum-water'); if (sumEl) sumEl.textContent = `${Math.round(totalUsage)}L used`;
  const avgTempEl = $id('avg-temp'); if (avgTempEl) avgTempEl.textContent = `${(temps.reduce((a,v)=>a+v,0)/temps.length).toFixed(1)}°C`;
  const avgMoistEl = $id('avg-moisture'); if (avgMoistEl) avgMoistEl.textContent = `${avgMoisture}%`;
  const bedsAtt = $id('beds-attention'); if (bedsAtt) bedsAtt.textContent = `${attentionBeds} beds flagged`;
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");
  const mobileOverlay = document.getElementById("mobile-overlay");
  function toggleMenu() {
    const isOpen = !sidebar.classList.contains("-translate-x-full");
    if (isOpen) {
      sidebar.classList.add("-translate-x-full");
      mobileOverlay.classList.add("hidden");
      mobileMenuBtn.innerHTML = `<svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"></path></svg>`;
    } else {
      sidebar.classList.remove("-translate-x-full");
      mobileOverlay.classList.remove("hidden");
      mobileMenuBtn.innerHTML = `<svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path></svg>`;
    }
  }
  mobileMenuBtn.addEventListener("click", toggleMenu);
  mobileOverlay.addEventListener("click", toggleMenu);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  const beds = getGardenBedsFromStorage();
  // Seed date inputs
  const end = new Date(); const start = new Date(); start.setDate(end.getDate() - 6);
  if ($id('start-date')) $id('start-date').valueAsDate = start;
  if ($id('end-date')) $id('end-date').valueAsDate = end;
  updateAll();
});

// Expose handlers
window.handleDateRangeChange = handleDateRangeChange;
window.applyCustomRange = applyCustomRange;
window.setMoistureView = setMoistureView;
window.exportCSV = function(){
  const beds = getGardenBedsFromStorage();
  const days = getRangeDays();
  const csvRows = [];
  csvRows.push(['Bed','TotalUsage(L)']);
  beds.forEach(b=>{ const usage = generateUsageForBed(days,b.plants).data.reduce((a,v)=>a+v,0); csvRows.push([b.name, usage]); });
  csvRows.push([]);
  csvRows.push(['Alerts']);
  generatedAlerts.forEach(a => csvRows.push([a.date.toISOString(), a.type, a.bed, a.notes]));
  const csv = csvRows.map(r=>r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='report.csv'; a.click(); URL.revokeObjectURL(url);
};
window.exportPDF = function(){ window.print(); };
window.toggleWeeklyEmails = function(enabled){ localStorage.setItem('harvestPro_weeklyReportEmails', enabled ? '1' : '0'); };

// Also expose renderAlerts for UI
window.renderAlerts = renderAlerts;
