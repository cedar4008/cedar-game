const SAVE_KEY = "cedar_game_save_v1";
const SPEED_KEY = "cedar_game_speed";

const ADDRESSES = [
  "沿海开放城市",
  "新一线城市大学城",
  "西北省会城市",
  "东北工业城市",
  "中部交通枢纽城市",
  "西南山地城市",
  "长三角科创新区",
  "粤港澳湾区新城",
  "边疆特色省会",
  "国家级新区",
];

const COLLEGES = [
  { name: "航天学院", majors: ["工程力学", "飞行器设计与工程", "复合材料与工程", "探测制导与控制技术"] },
  { name: "计算学部", majors: ["计算机科学与技术", "软件工程", "信息安全", "人工智能"] },
  { name: "机电工程学院", majors: ["机械设计制造及其自动化", "智能制造工程", "机器人工程"] },
  { name: "材料科学与工程学院", majors: ["材料科学与工程", "材料成型及控制工程", "焊接技术与工程"] },
  { name: "电子与信息工程学院", majors: ["电子信息工程", "通信工程", "微电子科学与工程"] },
  { name: "自动化学院", majors: ["自动化", "智能装备与系统", "机器人工程"] },
  { name: "空天科学学院", majors: ["航空航天工程", "飞行器动力工程", "无人系统工程"] },
  { name: "系统工程学院", majors: ["管理科学与工程", "大数据管理与应用", "指挥信息系统工程"] },
  { name: "数学科学学院", majors: ["数学与应用数学", "信息与计算科学", "统计学"] },
  { name: "物理学院", majors: ["物理学", "应用物理学", "天文学"] },
  { name: "生命科学学院", majors: ["生物科学", "生物技术", "生态学"] },
  { name: "信息科学技术学院", majors: ["电子信息科学与技术", "数据科学与大数据技术", "智能科学与技术"] },
  { name: "文学院", majors: ["汉语言文学", "古典文献学", "戏剧影视文学"] },
  { name: "历史文化学院", majors: ["历史学", "世界史", "考古学"] },
  { name: "法学院", majors: ["法学", "知识产权", "政治学与行政学"] },
  { name: "经济学院", majors: ["经济学", "金融学", "国际经济与贸易"] },
  { name: "资源环境学院", majors: ["地理科学", "环境科学", "自然地理与资源环境"] },
  { name: "草地农业科技学院", majors: ["草业科学", "农林经济管理", "动物科学"] },
];

const BUILDINGS = [
  { name: "教学楼", icon: "教", baseCost: 120000, effect: "提升教学质量" },
  { name: "宿舍", icon: "宿", baseCost: 90000, effect: "提升满意度和容量" },
  { name: "图书馆", icon: "图", baseCost: 100000, effect: "提升学习效率" },
  { name: "实验室", icon: "实", baseCost: 150000, effect: "提升科研能力" },
  { name: "食堂", icon: "食", baseCost: 70000, effect: "提升学生满意度" },
  { name: "操场", icon: "体", baseCost: 80000, effect: "提升校园活力" },
];

const state = {
  data: null,
  tab: "campus",
  speed: localStorage.getItem(SPEED_KEY) || "pause",
  timer: null,
  dismissedEventId: null,
};

const $ = (selector) => document.querySelector(selector);
const view = $("#view");
const notice = $("#notice");

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function money(value) {
  return `¥${Math.round(value || 0).toLocaleString("zh-CN")}`;
}

function save() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state.data));
}

function loadSave() {
  const raw = localStorage.getItem(SAVE_KEY);
  state.data = raw ? JSON.parse(raw) : null;
  ensureDefaults();
}

function ensureDefaults() {
  if (!state.data) return;
  state.data.loans ||= [];
  state.data.stockShares ||= 0;
  state.data.stockPrice ||= 100;
  state.data.finance ||= [];
  state.data.rankHistory ||= [];
  state.data.proposals ||= [];
  state.data.papers ||= [];
}

function msg(text, isError = false) {
  notice.hidden = false;
  notice.textContent = text;
  notice.style.background = isError ? "#f8dddd" : "#f8f0ff";
  notice.style.color = isError ? "#8f2929" : "#5f2a86";
  clearTimeout(msg.timer);
  msg.timer = setTimeout(() => {
    notice.hidden = true;
  }, 3200);
}

function clamp(value, low, high) {
  return Math.max(low, Math.min(high, value));
}

function createInitialSave({ schoolName, address, logo }) {
  const id = uid();
  const disciplines = [
    { id: uid(), name: "理工学院", degreeLevel: "本科", rank: 150, strength: 46, research: 22 },
    { id: uid(), name: "文史学院", degreeLevel: "本科", rank: 210, strength: 36, research: 14 },
  ];
  const majors = [
    { id: uid(), disciplineId: disciplines[0].id, disciplineName: "理工学院", name: "计算机科学与技术", students: 140, quality: 63 },
    { id: uid(), disciplineId: disciplines[0].id, disciplineName: "理工学院", name: "智能制造工程", students: 90, quality: 57 },
    { id: uid(), disciplineId: disciplines[1].id, disciplineName: "文史学院", name: "汉语言文学", students: 100, quality: 55 },
    { id: uid(), disciplineId: disciplines[1].id, disciplineName: "文史学院", name: "新闻传播学", students: 80, quality: 52 },
  ];
  state.data = {
    id,
    schoolName,
    address,
    logo,
    money: 620000,
    reputation: 20,
    satisfaction: 72,
    teacherLevel: 38,
    year: 1,
    month: 1,
    provinceRank: 45,
    domesticRank: 260,
    worldRank: 1800,
    teachingRank: 220,
    researchRank: 260,
    papersCount: 0,
    patents: 0,
    buildings: BUILDINGS.map((b) => ({ ...b, id: uid(), quantity: 0, level: 0 })),
    disciplines,
    majors,
    teachers: [
      { id: uid(), name: "王明远", title: "讲师", disciplineName: "理工学院", teaching: 64, research: 58, salary: 90000, promotion: 12 },
      { id: uid(), name: "陈书宁", title: "副教授", disciplineName: "文史学院", teaching: 70, research: 52, salary: 120000, promotion: 12 },
    ],
    jobPosts: [],
    proposals: [],
    papers: [],
    loans: [],
    stockShares: 0,
    stockPrice: 100,
    finance: [{ id: uid(), kind: "收入", category: "初始资金", amount: 620000, note: "建校启动资金", at: nowText() }],
    rankHistory: [],
    pendingEvent: null,
  };
  addRank();
  save();
}

function nowText() {
  return new Date().toLocaleString("zh-CN", { hour12: false });
}

function addFinance(kind, category, amount, note) {
  state.data.finance.unshift({ id: uid(), kind, category, amount, note, at: nowText() });
}

function spend(amount, category, note) {
  if (state.data.money < amount) {
    msg("资金不足，无法执行操作。", true);
    return false;
  }
  state.data.money -= amount;
  addFinance("支出", category, -amount, note);
  return true;
}

function income(amount, category, note) {
  state.data.money += amount;
  addFinance("收入", category, amount, note);
}

function addRank() {
  state.data.rankHistory.push({
    id: uid(),
    year: state.data.year,
    month: state.data.month,
    provinceRank: state.data.provinceRank,
    domesticRank: state.data.domesticRank,
    worldRank: state.data.worldRank,
    teachingRank: state.data.teachingRank,
    researchRank: state.data.researchRank,
  });
}

function metrics() {
  return {
    students: state.data.majors.reduce((sum, m) => sum + m.students, 0),
    teachers: state.data.teachers.length,
    majors: state.data.majors.length,
    buildingCount: state.data.buildings.reduce((sum, b) => sum + b.quantity, 0),
  };
}

function renderSetup() {
  document.body.classList.add("setup-mode");
  view.innerHTML = `
    <section class="setup-card">
      <p class="eyebrow">创建学校</p>
      <h2>先创建你的大学</h2>
      <p class="meta">选择校址、校名和校徽后进入经营界面。存档保存在当前浏览器。</p>
      <div class="form-grid">
        <input id="createSchoolName" class="full" value="新星大学" placeholder="学校名称">
        <input id="createLogo" value="新" maxlength="4" placeholder="校徽文字">
        <select id="createAddress">
          ${ADDRESSES.map((address) => `<option value="${address}">${address}</option>`).join("")}
        </select>
        <button class="primary full" onclick="createSchool()">创建学校并进入游戏</button>
      </div>
    </section>
  `;
}

function renderStatus() {
  const d = state.data;
  const m = metrics();
  $("#schoolLogo").textContent = d.logo || "校";
  $("#schoolName").textContent = d.schoolName;
  $("#schoolAddress").textContent = d.address;
  $("#statusGrid").hidden = state.tab !== "campus";
  if (state.tab !== "campus") return;
  $("#statusGrid").innerHTML = [
    ["资金", money(d.money)],
    ["声望", d.reputation],
    ["满意度", `${d.satisfaction}%`],
    ["教师水平", d.teacherLevel],
    ["时间", `第${d.year}学年 · ${d.month}月`],
    ["规模", `${m.teachers}师 / ${m.students}生 / ${m.majors}专业`],
  ].map(([label, value]) => `<div class="stat"><span>${label}</span><b>${value}</b></div>`).join("");
}

function renderCampus() {
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">校园建设</p><h2>场所数量不限</h2></div></div>
    <div class="list">
      ${state.data.buildings.map((item) => {
        const buildCost = Math.round(item.baseCost * (1 + item.quantity * 0.18));
        const upgradeCost = Math.round(item.baseCost * (1 + item.level * 0.85 + item.quantity * 0.08));
        return `
          <article class="item">
            <div class="item-top">
              <div><h3 class="place-title"><span class="place-icon">${item.icon}</span>${item.name}</h3><div class="meta">数量 ${item.quantity} · 等级 ${item.level} · ${item.effect}</div></div>
              <span class="pill">不限数量</span>
            </div>
            <div class="actions">
              <button class="primary" onclick="buildPlace('${item.id}')">新增 ${money(buildCost)}</button>
              <button class="ghost" onclick="upgradePlace('${item.id}')">升级 ${money(upgradeCost)}</button>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderDisciplines() {
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">学科与专业</p><h2>开设学院</h2></div></div>
    <div class="item">
      <h3>开设学院</h3>
      <div class="form-grid">
        <select id="collegePreset" class="full" onchange="fillCollegePreset()">
          <option value="">选择学院模板</option>
          ${COLLEGES.map((item) => `<option value="${item.name}">${item.name}</option>`).join("")}
        </select>
        <input id="newDiscipline" class="full" placeholder="学院名称">
        <div id="majorPreview" class="major-preview full"><span class="meta">选择学院后，这里会逐条列出专业。</span></div>
        <button class="secondary full" onclick="openDiscipline()">开设学院</button>
      </div>
    </div>
    <div class="list">
      ${state.data.disciplines.map((d) => {
        const majors = state.data.majors.filter((m) => m.disciplineId === d.id);
        const degreeTarget = d.degreeLevel === "博士点" ? "" : d.degreeLevel === "硕士点" ? "博士点" : "硕士点";
        return `
          <article class="item">
            <div class="item-top">
              <div>
                <h3>${d.name}</h3>
                <div class="meta">${d.degreeLevel} · 学科排名 ${d.rank} · 实力 ${d.strength} · 科研 ${d.research}</div>
                <div class="meta">专业：${majors.map((m) => `${m.name}(${m.students}人)`).join("、") || "暂无"}</div>
              </div>
              <span class="pill">第${d.rank}</span>
            </div>
            <div class="actions">
              <button class="primary" onclick="investDiscipline('${d.id}', 50000)">投入 ${money(50000)}</button>
              ${degreeTarget ? `<button class="ghost" onclick="applyDegree('${d.id}', '${degreeTarget}')">申请${degreeTarget}</button>` : ""}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderTalent() {
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">人才系统</p><h2>招聘、招生、晋升</h2></div></div>
    <div class="item">
      <h3>发布教师招聘公告</h3>
      <div class="form-grid">
        <input id="jobTitle" class="full" value="青年教师招聘公告">
        <select id="jobDiscipline">${state.data.disciplines.map((d) => `<option value="${d.name}">${d.name}</option>`).join("")}</select>
        <select id="jobLevel"><option>优秀</option><option>普通</option><option>杰出</option></select>
        <input id="jobSalary" type="number" value="120000" min="60000" step="10000">
        <input id="jobBudget" type="number" value="25000" min="8000" step="1000">
        <button class="primary full" onclick="createJobPost()">发布公告并接收简历</button>
      </div>
    </div>
    <div class="item">
      <h3>招生</h3>
      <div class="form-grid">
        <select id="studentMajor">${state.data.majors.map((m) => `<option value="${m.id}">${m.disciplineName} · ${m.name}</option>`).join("")}</select>
        <select id="studentLevel"><option>普通</option><option>优秀</option><option>拔尖</option></select>
        <input id="studentCount" type="number" value="40" min="10" step="10">
        <button class="secondary" onclick="recruitStudents()">招生</button>
      </div>
    </div>
    <h3>招聘公告与简历</h3>
    <div class="list">${state.data.jobPosts.map(renderPost).join("") || `<p class="meta">暂无招聘公告。</p>`}</div>
    <h3 style="margin-top:14px">教师晋升</h3>
    <div class="list">
      ${state.data.teachers.map((t) => `
        <article class="item">
          <div class="item-top">
            <div><h3>${t.name} · ${t.title}</h3><div class="meta">${t.disciplineName} · 教学 ${t.teaching} · 科研 ${t.research} · 晋升点 ${t.promotion}</div></div>
            <span class="pill">${money(t.salary)}/年</span>
          </div>
          <div class="actions"><button class="ghost" onclick="promoteTeacher('${t.id}')">申请晋升</button></div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderPost(post) {
  return `
    <article class="item">
      <div class="item-top">
        <div><h3>${post.title}</h3><div class="meta">${post.discipline} · ${post.level} · ${post.status}</div></div>
        <span class="pill">${post.applications.length}份简历</span>
      </div>
      <div class="list" style="margin-top:10px">
        ${post.applications.map((app) => `
          <div class="item">
            <div class="item-top">
              <div><h3>${app.name} · ${app.title}</h3><div class="meta">教学 ${app.teaching} · 科研 ${app.research} · 匹配 ${app.fit}</div><div class="meta">${app.bio}</div></div>
              <span class="pill ${app.status === "待筛选" ? "warn" : ""}">${app.status}</span>
            </div>
            <div class="actions">
              <button class="primary" ${app.status !== "待筛选" ? "disabled" : ""} onclick="hireApplication('${post.id}', '${app.id}')">录用</button>
              <button class="ghost" ${app.status !== "待筛选" ? "disabled" : ""} onclick="rejectApplication('${post.id}', '${app.id}')">不合适</button>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderResearch() {
  const researchProjects = state.data.proposals.filter((p) => p.type === "科研");
  const horizontalProjects = state.data.proposals.filter((p) => p.type !== "科研");
  const projectCard = (p) => `
    <article class="proposal-row">
      <div class="item-top">
        <div>
          <h3>${p.name}</h3>
          <div class="meta">${p.teacherName} 申请 · ${p.status} · 进度 ${p.progress}%</div>
          <div class="meta">经费 ${money(p.cost)} · 预期到账 ${money(p.expectedIncome)} · 声望 +${p.reputation}</div>
        </div>
        <span class="pill ${p.status === "待审核" ? "warn" : ""}">${p.status}</span>
      </div>
      <div class="progress"><i style="width:${p.progress}%"></i></div>
      ${p.status === "待审核" ? `<div class="actions"><button class="primary" onclick="reviewProposal('${p.id}', 'approve')">审核通过</button><button class="ghost" onclick="reviewProposal('${p.id}', 'reject')">驳回</button></div>` : ""}
    </article>
  `;
  view.innerHTML = `
    <div class="section-head">
      <div><p class="eyebrow">教师自主申请</p><h2>科研、横向与论文</h2></div>
      <button class="secondary small" onclick="collectProposals()">征集申请</button>
    </div>
    <div class="research-grid">
      <section class="research-section">
        <h3>科研项目</h3>
        <p class="meta">教师主动提交课题，学校审核后投入经费并跟踪成果。</p>
        <div class="list compact-list">
          ${researchProjects.map(projectCard).join("") || `<p class="meta">暂无科研项目申请。</p>`}
        </div>
      </section>
      <section class="research-section">
        <h3>横向项目</h3>
        <p class="meta">面向企业合作和社会服务，完成后获得到账收入与声望。</p>
        <div class="list compact-list">
          ${horizontalProjects.map(projectCard).join("") || `<p class="meta">暂无横向项目申请。</p>`}
        </div>
      </section>
    </div>
    <section class="research-section">
      <h3>论文与成果</h3>
      <div class="list compact-list">
        ${state.data.papers.slice(0, 6).map((p) => `
          <article class="proposal-row">
            <div class="item-top">
              <div><h3>${p.title}</h3><div class="meta">${p.level} · ${p.discipline} · 作者 ${p.teacherName} · 影响力 +${p.impact}</div></div>
              <span class="pill">${p.status}</span>
            </div>
          </article>
        `).join("") || `<p class="meta">暂无论文。科研项目完成后会自动形成论文或成果报告。</p>`}
      </div>
    </section>
  `;
}

function renderRanking() {
  const d = state.data;
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">多维排名</p><h2>学校排名</h2></div></div>
    <div class="status-grid">
      <div class="stat"><span>省内排名</span><b>${d.provinceRank}</b></div>
      <div class="stat"><span>国内综合</span><b>${d.domesticRank}</b></div>
      <div class="stat"><span>国际排名</span><b>${d.worldRank}</b></div>
      <div class="stat"><span>教学排名</span><b>${d.teachingRank}</b></div>
      <div class="stat"><span>科研排名</span><b>${d.researchRank}</b></div>
      <div class="stat"><span>论文/专利</span><b>${d.papersCount}/${d.patents}</b></div>
    </div>
    <h3>排名历史</h3>
    <div class="list compact-list">
      ${d.rankHistory.slice(-5).reverse().map((r) => `<div class="rank-row"><span>Y${r.year}-${r.month}月</span><div class="meta">省${r.provinceRank} · 国内${r.domesticRank} · 国际${r.worldRank}</div><span>教${r.teachingRank}/研${r.researchRank}</span></div>`).join("") || `<p class="meta">暂无排名历史，推进月份后会自动记录。</p>`}
    </div>
  `;
}


function renderFinance() {
  const d = state.data;
  const stockValue = d.stockShares * d.stockPrice;
  const loanTotal = d.loans.reduce((sum, loan) => sum + loan.balance, 0);
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">资金运作</p><h2>贷款与投资</h2></div></div>
    <div class="market-grid">
      <div class="market-box"><p class="eyebrow">贷款余额</p><h3>${money(loanTotal)}</h3><div class="meta">每学期结算利息，适合短期扩建。</div></div>
      <div class="market-box"><p class="eyebrow">股票持仓</p><h3>${d.stockShares} 股</h3><div class="meta">现价 ${money(d.stockPrice)} · 市值 ${money(stockValue)}</div></div>
    </div>
    <div class="item" style="margin-top:10px"><h3>学校贷款</h3><div class="actions"><button class="primary" onclick="takeLoan(100000)">贷款 ${money(100000)}</button><button class="secondary" onclick="takeLoan(300000)">贷款 ${money(300000)}</button><button class="ghost" onclick="repayLoan(100000)">还款 ${money(100000)}</button></div></div>
    <div class="item"><h3>股票投资</h3><div class="meta">股票价格会随月份波动，风险自担。</div><div class="actions"><button class="primary" onclick="buyStock(10)">买入 10 股</button><button class="secondary" onclick="buyStock(50)">买入 50 股</button><button class="ghost" onclick="sellStock(10)">卖出 10 股</button><button class="ghost" onclick="sellStock(50)">卖出 50 股</button></div></div>
    <h3 style="margin-top:14px">财务流水</h3>
    <div class="list compact-list">
      ${d.finance.slice(0, 5).map(renderFinanceRow).join("") || `<p class="meta">暂无财务流水。</p>`}
    </div>
  `;
}

function renderFinanceRow(item) {
  return `<div class="finance-row"><span class="${item.amount >= 0 ? "income" : "expense"}">${item.kind}</span><div><strong>${item.category}</strong><div class="meta">${item.note} · ${item.at}</div></div><span class="${item.amount >= 0 ? "income" : "expense"}">${money(item.amount)}</span></div>`;
}

function renderEvent() {
  const event = state.data?.pendingEvent;
  const modal = $("#eventModal");
  if (!event || state.dismissedEventId === event.id) {
    modal.hidden = true;
    return;
  }
  modal.hidden = false;
  $("#eventTitle").textContent = event.title;
  $("#eventBody").textContent = event.body;
  $("#eventChoices").innerHTML = event.choices.map((choice, index) => `<button class="primary" onclick="decideEvent(${index})">${choice.text}</button>`).join("");
}

function render() {
  if (!state.data) {
    renderSetup();
    return;
  }
  document.body.classList.remove("setup-mode");
  renderStatus();
  renderEvent();
  document.querySelectorAll(".tab").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === state.tab));
  if (state.tab === "campus") renderCampus();
  if (state.tab === "disciplines") renderDisciplines();
  if (state.tab === "talent") renderTalent();
  if (state.tab === "research") renderResearch();
  if (state.tab === "finance") renderFinance();
  if (state.tab === "ranking") renderRanking();
}

function createSchool() {
  createInitialSave({
    schoolName: $("#createSchoolName").value.trim() || "新星大学",
    address: $("#createAddress").value,
    logo: $("#createLogo").value.trim() || "新",
  });
  state.tab = "campus";
  render();
  setSpeed(state.speed);
}

function buildPlace(id) {
  const b = state.data.buildings.find((item) => item.id === id);
  const cost = Math.round(b.baseCost * (1 + b.quantity * 0.18));
  if (!spend(cost, "校园建设", `新增1处${b.name}`)) return;
  b.quantity += 1;
  if (b.name === "食堂" || b.name === "宿舍") state.data.satisfaction = clamp(state.data.satisfaction + 3, 0, 100);
  if (b.name === "实验室") state.data.teacherLevel = clamp(state.data.teacherLevel + 2, 0, 100);
  save();
  render();
}

function upgradePlace(id) {
  const b = state.data.buildings.find((item) => item.id === id);
  if (!b.quantity) return msg("请先建设该场所。", true);
  const cost = Math.round(b.baseCost * (1 + b.level * 0.85 + b.quantity * 0.08));
  if (!spend(cost, "校园升级", `${b.name}升级`)) return;
  b.level += 1;
  save();
  render();
}

function fillCollegePreset() {
  const item = COLLEGES.find((college) => college.name === $("#collegePreset").value);
  if (!item) return;
  $("#newDiscipline").value = item.name;
  $("#majorPreview").innerHTML = item.majors.map((major) => `<div class="major-row">${major}</div>`).join("");
}

function openDiscipline() {
  const preset = COLLEGES.find((college) => college.name === $("#collegePreset").value);
  const name = ($("#newDiscipline").value || preset?.name || "").trim();
  if (!name) return msg("请选择或输入学院名称。", true);
  if (state.data.disciplines.some((d) => d.name === name)) return msg("该学院已存在。", true);
  const majors = preset?.majors || [];
  const cost = 180000 + Math.max(0, majors.length - 1) * 25000;
  if (!spend(cost, "学科建设", `开设${name}`)) return;
  const discipline = { id: uid(), name, degreeLevel: "本科", rank: 260, strength: 24, research: 10 };
  state.data.disciplines.push(discipline);
  majors.forEach((major) => state.data.majors.push({ id: uid(), disciplineId: discipline.id, disciplineName: name, name: major, students: 0, quality: 50 }));
  save();
  render();
}

function investDiscipline(id, amount) {
  const d = state.data.disciplines.find((item) => item.id === id);
  if (!spend(amount, "学科投入", `投入${d.name}`)) return;
  const boost = Math.max(2, Math.floor(amount / 15000));
  d.strength += boost;
  d.research += Math.max(1, Math.floor(boost / 2));
  d.rank = Math.max(1, d.rank - boost);
  save();
  render();
}

function applyDegree(id, degreeType) {
  const d = state.data.disciplines.find((item) => item.id === id);
  const cost = degreeType === "硕士点" ? 90000 : 180000;
  if (!spend(cost, "硕博点申请", `${d.name}申请${degreeType}`)) return;
  const score = Math.round(d.strength * 0.55 + d.research * 0.8 + Math.random() * 12);
  const need = degreeType === "硕士点" ? 48 : 82;
  if (score >= need) {
    d.degreeLevel = degreeType;
    d.strength += 8;
    d.research += 10;
    state.data.reputation = clamp(state.data.reputation + 4, 0, 100);
    msg(`${degreeType}申请通过。`);
  } else {
    msg(`${degreeType}申请未通过，继续提升学科实力。`, true);
  }
  save();
  render();
}

function createJobPost() {
  const title = $("#jobTitle").value || "教师招聘公告";
  const discipline = $("#jobDiscipline").value;
  const level = $("#jobLevel").value;
  const salary = Number($("#jobSalary").value || 120000);
  const budget = Number($("#jobBudget").value || 25000);
  if (!spend(budget, "招聘公告", `发布${discipline}${level}招聘`)) return;
  const bias = { 普通: 0, 优秀: 12, 杰出: 25 }[level] || 0;
  const applications = Array.from({ length: 5 + Math.floor(Math.random() * 3) }, () => {
    const teaching = clamp(42 + Math.floor(Math.random() * 38) + bias, 30, 99);
    const research = clamp(38 + Math.floor(Math.random() * 42) + bias, 30, 99);
    return {
      id: uid(),
      name: randomName(),
      title: level === "杰出" ? "教授" : level === "优秀" ? "副教授" : "讲师",
      teaching,
      research,
      fit: clamp(Math.round((teaching + research) / 2 + Math.random() * 12), 35, 99),
      salary: Math.round(salary * (0.9 + Math.random() * 0.3)),
      status: "待筛选",
      bio: "教师主动投递简历，适合补充学院方向。",
    };
  });
  state.data.jobPosts.unshift({ id: uid(), title, discipline, level, status: "开放", applications });
  save();
  render();
}

function randomName() {
  const surnames = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨何吕张孔曹严华金魏陶姜";
  const names = ["明远", "书宁", "若涵", "启航", "思源", "知微", "文博", "安澜"];
  return surnames[Math.floor(Math.random() * surnames.length)] + names[Math.floor(Math.random() * names.length)];
}

function hireApplication(postId, appId) {
  const post = state.data.jobPosts.find((item) => item.id === postId);
  const app = post.applications.find((item) => item.id === appId);
  const onboarding = Math.max(12000, Math.round(app.salary * 0.18));
  if (!spend(onboarding, "教师录用", `录用${app.name}`)) return;
  state.data.teachers.push({ id: uid(), name: app.name, title: app.title, disciplineName: post.discipline, teaching: app.teaching, research: app.research, salary: app.salary, promotion: 0 });
  post.status = "已关闭";
  post.applications.forEach((item) => item.status = item.id === appId ? "已录用" : "未录用");
  state.data.teacherLevel = clamp(state.data.teacherLevel + 2, 0, 100);
  save();
  render();
}

function rejectApplication(postId, appId) {
  const post = state.data.jobPosts.find((item) => item.id === postId);
  post.applications.find((item) => item.id === appId).status = "未录用";
  save();
  render();
}

function recruitStudents() {
  const major = state.data.majors.find((m) => m.id === $("#studentMajor").value);
  const level = $("#studentLevel").value;
  const count = Number($("#studentCount").value || 40);
  const unit = { 普通: 180, 优秀: 320, 拔尖: 520 }[level];
  if (!spend(count * unit, "招生宣传", `${major.name}招收${level}学生`)) return;
  major.students += count;
  major.quality += { 普通: 1, 优秀: 3, 拔尖: 6 }[level];
  save();
  render();
}

function promoteTeacher(id) {
  const t = state.data.teachers.find((item) => item.id === id);
  const ladder = ["讲师", "副教授", "教授", "杰出教授"];
  const index = ladder.indexOf(t.title);
  if (index < 0 || index >= ladder.length - 1) return msg("该教师已达到最高职级。", true);
  const need = [20, 55, 100][index];
  if (t.promotion < need) return msg(`晋升点不足，需要${need}点。`, true);
  const cost = [30000, 70000, 140000][index];
  if (!spend(cost, "教师晋升", `${t.name}晋升`)) return;
  t.title = ladder[index + 1];
  t.promotion -= need;
  t.teaching += 4;
  t.research += 5;
  save();
  render();
}

function collectProposals() {
  if (!state.data.teachers.length) return msg("暂无教师。", true);
  const templates = {
    科研: ["省部级青年基金", "交叉学科创新项目", "重点实验室开放课题"],
    横向: ["企业技术攻关", "地方智库咨询", "产业升级联合项目"],
  };
  for (let i = 0; i < Math.min(3, state.data.teachers.length); i++) {
    const teacher = state.data.teachers[Math.floor(Math.random() * state.data.teachers.length)];
    const type = Math.random() > 0.45 ? "科研" : "横向";
    state.data.proposals.unshift({
      id: uid(),
      teacherId: teacher.id,
      teacherName: teacher.name,
      discipline: teacher.disciplineName,
      type,
      name: templates[type][Math.floor(Math.random() * templates[type].length)],
      cost: type === "科研" ? 50000 + Math.floor(Math.random() * 90000) : 25000 + Math.floor(Math.random() * 65000),
      expectedIncome: type === "横向" ? 60000 + Math.floor(Math.random() * 160000) : 0,
      reputation: 2 + Math.floor(Math.random() * 7),
      gain: 4 + Math.floor(Math.random() * 12),
      status: "待审核",
      progress: 0,
    });
  }
  save();
  render();
}

function reviewProposal(id, decision) {
  const p = state.data.proposals.find((item) => item.id === id);
  if (decision === "reject") {
    p.status = "已驳回";
  } else {
    if (!spend(p.cost, `${p.type}立项`, `审核通过：${p.name}`)) return;
    p.status = "进行中";
  }
  save();
  render();
}

function advanceTime(months = 1) {
  for (let i = 0; i < months; i++) {
    state.data.month += 1;
    if (state.data.month > 12) {
      state.data.month = 1;
      state.data.year += 1;
    }
    state.data.teachers.forEach((t) => t.promotion += 2);
    updateStockPrice();
    progressProjects();
    if ([6, 12].includes(state.data.month)) settleTerm();
    if (!state.data.pendingEvent && Math.random() < 0.16) createEvent();
  }
  save();
  render();
}

function progressProjects() {
  state.data.proposals.filter((p) => p.status === "进行中").forEach((p) => {
    p.progress = Math.min(100, p.progress + 12 + Math.floor(Math.random() * 20));
    if (p.progress >= 100) {
      p.status = "已完成";
      if (p.expectedIncome) income(p.expectedIncome, "横向项目到账", p.name);
      state.data.reputation = clamp(state.data.reputation + p.reputation, 0, 100);
      if (p.type === "科研") state.data.papersCount += 1;
      const teacher = state.data.teachers.find((t) => t.id === p.teacherId);
      if (teacher) teacher.promotion += p.gain;
      state.data.papers.unshift({
        id: uid(),
        title: p.type === "科研" ? `${p.name}阶段性研究` : `${p.name}应用成果报告`,
        level: p.type === "科研" ? ["CSSCI", "北大核心", "SCI二区", "SCI一区"][Math.floor(Math.random() * 4)] : "横向报告",
        discipline: p.discipline,
        teacherName: p.teacherName,
        impact: p.gain,
        status: "已发表",
      });
    }
  });
}

function settleTerm() {
  const m = metrics();
  const tuition = m.students * 900;
  const grant = 65000 + state.data.reputation * 1000;
  const salary = state.data.teachers.reduce((sum, t) => sum + Math.round(t.salary / 2), 0);
  const interest = state.data.loans.reduce((sum, loan) => sum + Math.round(loan.balance * loan.rate / 2), 0);
  income(tuition + grant, "学期收入", "学费收入与政府拨款");
  if (salary && spend(salary, "教师薪酬", "本学期教师薪酬")) {}
  if (interest && spend(interest, "贷款利息", "本学期贷款利息")) {}
  recalcRank();
  addRank();
}


function takeLoan(amount) {
  state.data.loans.push({ id: uid(), balance: amount, rate: 0.06 });
  income(amount, "学校贷款", `获得贷款${money(amount)}`);
  save();
  render();
}

function repayLoan(amount) {
  const loan = state.data.loans.find((item) => item.balance > 0);
  if (!loan) return msg("当前没有贷款。", true);
  const pay = Math.min(amount, loan.balance);
  if (!spend(pay, "贷款还款", `偿还贷款${money(pay)}`)) return;
  loan.balance -= pay;
  state.data.loans = state.data.loans.filter((item) => item.balance > 0);
  save();
  render();
}

function buyStock(shares) {
  const cost = shares * state.data.stockPrice;
  if (!spend(cost, "股票投资", `买入${shares}股校园发展指数`)) return;
  state.data.stockShares += shares;
  save();
  render();
}

function sellStock(shares) {
  const count = Math.min(shares, state.data.stockShares);
  if (!count) return msg("当前没有足够股票。", true);
  state.data.stockShares -= count;
  income(count * state.data.stockPrice, "股票卖出", `卖出${count}股校园发展指数`);
  save();
  render();
}


function updateStockPrice() {
  const drift = 1 + (Math.random() - 0.45) * 0.12;
  state.data.stockPrice = clamp(Math.round(state.data.stockPrice * drift), 45, 260);
}

function recalcRank() {
  const avgStrength = state.data.disciplines.reduce((sum, d) => sum + d.strength + d.research, 0) / Math.max(1, state.data.disciplines.length);
  const avgTeacher = state.data.teachers.reduce((sum, t) => sum + t.teaching + t.research, 0) / Math.max(1, state.data.teachers.length);
  const buildingScore = state.data.buildings.reduce((sum, b) => sum + b.quantity * 2 + b.level * 3, 0);
  const total = avgStrength * 1.4 + avgTeacher * 0.8 + buildingScore + state.data.reputation;
  state.data.provinceRank = clamp(80 - Math.floor(total / 7), 1, 120);
  state.data.domesticRank = clamp(430 - Math.floor(total * 1.15), 1, 600);
  state.data.worldRank = clamp(2600 - Math.floor(total * 5.1), 50, 3000);
  state.data.teachingRank = clamp(380 - Math.floor((avgTeacher + buildingScore) * 1.4), 1, 600);
  state.data.researchRank = clamp(520 - Math.floor((state.data.papersCount * 8 + avgStrength) * 1.35), 1, 700);
}

function createEvent() {
  const events = [
    { title: "校园开放日", body: "大量家长和学生来校参观，是否追加预算提升接待规格？", choices: [
      { text: "高规格接待", money: -30000, reputation: 5, satisfaction: 3 },
      { text: "常规接待", money: -8000, reputation: 2, satisfaction: 1 },
      { text: "线上直播替代", money: 0, reputation: -1, satisfaction: -1 },
    ] },
    { title: "企业合作机会", body: "本地企业愿意赞助学校，但希望共同署名实验基地。", choices: [
      { text: "接受并共建基地", money: 90000, reputation: 3 },
      { text: "只接受小额赞助", money: 30000, reputation: 1 },
      { text: "婉拒合作", money: 0, reputation: -1 },
    ] },
  ];
  state.data.pendingEvent = { id: uid(), ...events[Math.floor(Math.random() * events.length)] };
}

function decideEvent(index) {
  const choice = state.data.pendingEvent.choices[index];
  if (choice.money > 0) income(choice.money, "事件决策", choice.text);
  if (choice.money < 0 && !spend(Math.abs(choice.money), "事件决策", choice.text)) return;
  state.data.reputation = clamp(state.data.reputation + (choice.reputation || 0), 0, 100);
  state.data.satisfaction = clamp(state.data.satisfaction + (choice.satisfaction || 0), 0, 100);
  state.data.pendingEvent = null;
  save();
  render();
}

function closeEventModal() {
  if (state.data?.pendingEvent) state.dismissedEventId = state.data.pendingEvent.id;
  $("#eventModal").hidden = true;
}

function setSpeed(speed) {
  state.speed = speed;
  localStorage.setItem(SPEED_KEY, speed);
  document.querySelectorAll(".speed").forEach((btn) => btn.classList.toggle("active", btn.dataset.speed === speed));
  if (state.timer) clearInterval(state.timer);
  const map = { pause: 0, slow: 30000, normal: 15000, fast: 5000 };
  if (map[speed]) state.timer = setInterval(() => advanceTime(1), map[speed]);
}

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.tab = btn.dataset.tab;
    render();
  });
});
document.querySelectorAll(".speed").forEach((btn) => btn.addEventListener("click", () => setSpeed(btn.dataset.speed)));
$("#advanceBtn").addEventListener("click", () => state.data && advanceTime(1));
$("#closeEventBtn").addEventListener("click", closeEventModal);
$("#laterEventBtn").addEventListener("click", closeEventModal);
$("#eventModal").addEventListener("click", (event) => {
  if (event.target.id === "eventModal") closeEventModal();
});

loadSave();
render();
setSpeed(state.speed);
