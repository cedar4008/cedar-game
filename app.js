const SAVE_KEY = "cedar_game_save_v4_school_year";
const OLD_SAVE_KEYS = ["cedar_game_save_v1", "cedar_game_save_v2", "cedar_game_save_v3_school_year"];
const SAVE_RESET_KEY = "cedar_game_reset_20260707_school_year_v2";
const SPEED_KEY = "cedar_game_speed";
const ACCOUNTS_KEY = "cedar_game_accounts_v1";
const SESSION_KEY = "cedar_game_session_v1";
const ADMIN_USERNAME = "cedar004";

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

const SCHOOL_LEVELS = [
  { name: "公办专科", money: 0, reputation: 0, students: 0, teachers: 0, professors: 0, papers: 0, research: 0 },
  { name: "应用型本科", money: 260000, reputation: 24, students: 600, teachers: 6, professors: 1, papers: 1, research: 20 },
  { name: "普通本科", money: 520000, reputation: 34, students: 1200, teachers: 12, professors: 2, papers: 4, research: 42 },
  { name: "省属重点大学", money: 900000, reputation: 48, students: 2200, teachers: 24, professors: 5, papers: 10, research: 86 },
  { name: "博士授权大学", money: 1500000, reputation: 62, students: 3600, teachers: 42, professors: 10, papers: 22, research: 150 },
  { name: "国家重点大学", money: 2400000, reputation: 74, students: 5600, teachers: 68, professors: 18, papers: 42, research: 260 },
  { name: "世界一流大学", money: 4200000, reputation: 86, students: 8200, teachers: 110, professors: 34, papers: 80, research: 460 },
  { name: "世界超一流大学", money: 7200000, reputation: 94, students: 12000, teachers: 170, professors: 58, papers: 140, research: 760 },
];

const COLLEGE_LEVEL_LIMITS = {
  "航天学院": 3,
  "计算学部": 2,
  "机电工程学院": 1,
  "材料科学与工程学院": 2,
  "电子与信息工程学院": 2,
  "自动化学院": 2,
  "空天科学学院": 4,
  "系统工程学院": 3,
  "数学科学学院": 2,
  "物理学院": 2,
  "生命科学学院": 3,
  "信息科学技术学院": 3,
  "法学院": 1,
  "经济学院": 1,
  "资源环境学院": 2,
  "草地农业科技学院": 1,
};

const STOCK_MARKETS = [
  { id: "educloud", name: "启明教育科技", price: 86, basePrice: 86, risk: "稳健" },
  { id: "chip", name: "华芯智能装备", price: 128, basePrice: 128, risk: "成长" },
  { id: "bio", name: "兰泽生物医药", price: 74, basePrice: 74, risk: "波动" },
  { id: "energy", name: "北辰新能源", price: 112, basePrice: 112, risk: "成长" },
];

const state = {
  data: null,
  tab: "campus",
  speed: localStorage.getItem(SPEED_KEY) || "pause",
  timer: null,
  dismissedEventId: null,
  session: null,
  accounts: [],
  authMode: "login",
};

const $ = (selector) => document.querySelector(selector);
const view = $("#view");
const notice = $("#notice");
const saveContent = $("#saveContent");

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function activeUsername() {
  return state.session?.username || "";
}

function currentSaveKey() {
  return activeUsername() ? `${SAVE_KEY}_${activeUsername()}` : SAVE_KEY;
}

function isAdminUser() {
  return state.session?.role === "admin" && state.session?.username === ADMIN_USERNAME;
}

function displayMoney(value) {
  return isAdminUser() ? "无限" : money(value);
}

function loadAccounts() {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAccountsStore() {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(state.accounts));
}

function normalizeUsername(value) {
  return String(value || "").trim().toLowerCase().slice(0, 24);
}

function normalizeAccounts(accounts) {
  return accounts.map((account) => {
    const username = normalizeUsername(account.username);
    const isAdmin = username === ADMIN_USERNAME;
    return {
      id: account.id || uid(),
      username,
      password: String(account.password || ""),
      role: isAdmin ? "admin" : "user",
      status: isAdmin ? "approved" : (account.status || "pending"),
      createdAt: account.createdAt || nowText(),
      approvedAt: isAdmin ? (account.approvedAt || account.createdAt || nowText()) : (account.approvedAt || ""),
    };
  });
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    state.session = raw ? JSON.parse(raw) : null;
  } catch {
    state.session = null;
  }
}

function saveSession(account) {
  state.session = account ? { username: normalizeUsername(account.username), role: account.role } : null;
  if (state.session) localStorage.setItem(SESSION_KEY, JSON.stringify(state.session));
  else localStorage.removeItem(SESSION_KEY);
}

function renderAuth() {
  document.body.classList.add("setup-mode");
  view.innerHTML = `
    <section class="setup-card auth-card">
      <p class="eyebrow">账号中心</p>
      <h2>登录或注册账号</h2>
      <p class="meta">没有账号无法进入游戏。只有账号 <strong>${ADMIN_USERNAME}</strong> 是管理员，其他账号注册后需要管理员审核通过才能登录。</p>
      <div class="auth-switch">
        <button class="${state.authMode === "login" ? "primary" : "ghost"}" onclick="switchAuthMode('login')">登录</button>
        <button class="${state.authMode === "register" ? "primary" : "ghost"}" onclick="switchAuthMode('register')">注册</button>
      </div>
      <div class="form-grid">
        <input id="authUsername" class="full" placeholder="账号" maxlength="24">
        <input id="authPassword" class="full" type="password" placeholder="密码" maxlength="32">
        ${state.authMode === "register" ? '<input id="authPasswordConfirm" class="full" type="password" placeholder="确认密码" maxlength="32">' : ""}
        <button class="primary full" onclick="${state.authMode === "login" ? "loginAccount()" : "registerAccount()"}">${state.authMode === "login" ? "登录并进入游戏" : "注册并进入游戏"}</button>
        <button class="ghost full" onclick="openAccountManager()">账号管理页</button>
      </div>
    </section>
  `;
}

function switchAuthMode(mode) {
  state.authMode = mode;
  render();
}

function registerAccount() {
  const username = normalizeUsername($("#authUsername")?.value);
  const password = String($("#authPassword")?.value || "");
  const confirm = String($("#authPasswordConfirm")?.value || "");
  if (!username || !password) return msg("请输入账号和密码。", true);
  if (password.length < 4) return msg("密码至少 4 位。", true);
  if (password !== confirm) return msg("两次输入的密码不一致。", true);
  if (state.accounts.some((account) => account.username === username)) return msg("该账号已存在。", true);
  const isAdmin = username === ADMIN_USERNAME;
  const account = {
    id: uid(),
    username,
    password,
    role: isAdmin ? "admin" : "user",
    status: isAdmin ? "approved" : "pending",
    createdAt: nowText(),
    approvedAt: isAdmin ? nowText() : "",
  };
  state.accounts.push(account);
  state.accounts = normalizeAccounts(state.accounts);
  saveAccountsStore();
  if (isAdmin) {
    saveSession(account);
    loadSave();
    render();
    setSpeed(state.speed);
    return;
  }
  msg("注册成功，等待管理员审核通过后才能登录。");
  state.authMode = "login";
  render();
}

function loginAccount() {
  const username = normalizeUsername($("#authUsername")?.value);
  const password = String($("#authPassword")?.value || "");
  const account = state.accounts.find((item) => item.username === username && item.password === password);
  if (!account) return msg("账号或密码错误。", true);
  if (account.status !== "approved") return msg("该账号尚未通过管理员审核。", true);
  saveSession(account);
  loadSave();
  render();
  setSpeed(state.speed);
}

function logoutAccount() {
  if (state.timer) clearInterval(state.timer);
  saveSession(null);
  state.data = null;
  state.tab = "campus";
  render();
}

function openAccountManager() {
  window.location.href = "accounts.html";
}

function initApp() {
  state.accounts = normalizeAccounts(loadAccounts());
  saveAccountsStore();
  loadSession();
  const currentAccount = state.accounts.find((account) => account.username === state.session?.username);
  if (!currentAccount || currentAccount.status !== "approved" || (currentAccount.role === "admin" && currentAccount.username !== ADMIN_USERNAME)) {
    saveSession(null);
  } else if (currentAccount) {
    saveSession(currentAccount);
  }
  loadSave();
  render();
  setSpeed(state.speed);
}

function money(value) {
  return `¥${Math.round(value || 0).toLocaleString("zh-CN")}`;
}

function save() {
  if (!state.data || !activeUsername()) return;
  state.data.savedAt = nowText();
  localStorage.setItem(currentSaveKey(), JSON.stringify(state.data));
}

function loadSave() {
  if (!activeUsername()) {
    state.data = null;
    return;
  }
  if (localStorage.getItem(SAVE_RESET_KEY) !== "done") {
    localStorage.removeItem(SAVE_KEY);
    OLD_SAVE_KEYS.forEach((key) => localStorage.removeItem(key));
    localStorage.setItem(SAVE_RESET_KEY, "done");
  }
  OLD_SAVE_KEYS.forEach((key) => localStorage.removeItem(key));
  const raw = localStorage.getItem(currentSaveKey());
  state.data = raw ? JSON.parse(raw) : null;
  ensureDefaults();
}

function ensureDefaults() {
  if (!state.data) return;
  state.data.schoolLevelIndex ??= 0;
  state.data.ui ||= {};
  state.data.loans ||= [];
  state.data.stocks ||= STOCK_MARKETS.map((stock, index) => ({
    ...stock,
    shares: index === 0 ? (state.data.stockShares || 0) : 0,
    price: index === 0 ? (state.data.stockPrice || stock.price) : stock.price,
  }));
  state.data.stocks = STOCK_MARKETS.map((template, index) => {
    const saved = state.data.stocks.find((stock) => stock.id === template.id) || {};
    return { ...template, ...saved, price: saved.price || template.price, basePrice: template.basePrice, shares: saved.shares || (index === 0 ? state.data.stockShares || 0 : 0) };
  });
  state.data.finance ||= [];
  state.data.rankHistory ||= [];
  state.data.proposals ||= [];
  state.data.papers ||= [];
  state.data.tuition ||= { undergrad: 5200, master: 8000, doctor: 10000 };
  state.data.pendingAdmissions ||= [];
  state.data.pendingGradAdmissions ||= [];
  state.data.graduationHistory ||= [];
  state.data.pendingEvent = null;
  state.data.majors ||= [];
  state.data.majors.forEach((major) => {
    major.cohorts ||= major.students ? [{ grade: 1, count: major.students, quality: major.quality || 50 }] : [];
    major.pendingCount ||= 0;
    major.students = major.cohorts.reduce((sum, cohort) => sum + cohort.count, 0);
  });
  state.data.disciplines ||= [];
  state.data.disciplines.forEach((discipline) => {
    discipline.gradStudents ||= { master: 0, doctor: 0 };
  });
  state.data.teachers ||= [];
  state.data.teachers.forEach((teacher) => {
    teacher.promotion ??= 0;
    teacher.papers ??= 0;
    teacher.majorName ??= "";
  });
  state.data.jobPosts ||= [];
  state.data.jobPosts.forEach((post) => {
    post.positions ??= 1;
    post.hiredCount ??= post.applications?.filter((app) => app.status === "已录用").length || 0;
    post.majorName ??= "不限专业";
  });
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
  const startingMoney = isAdminUser() ? 999999999 : 620000;
  state.data = {
    id,
    schoolName,
    address,
    logo,
    schoolLevelIndex: 0,
    money: startingMoney,
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
    disciplines: [],
    majors: [],
    teachers: [],
    jobPosts: [],
    proposals: [],
    papers: [],
    loans: [],
    stocks: STOCK_MARKETS.map((stock) => ({ ...stock, shares: 0 })),
    tuition: { undergrad: 5200, master: 8000, doctor: 10000 },
    pendingAdmissions: [],
    pendingGradAdmissions: [],
    graduationHistory: [],
    pendingEvent: null,
    ui: {},
    finance: [{ id: uid(), kind: "收入", category: "初始资金", amount: startingMoney, note: isAdminUser() ? "管理员账号资金无限" : "建校启动资金", at: nowText() }],
    rankHistory: [],
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
  const professors = state.data.teachers.filter((t) => ["教授", "二级教授", "一级教授", "杰出教授"].includes(t.title)).length;
  const research = state.data.disciplines.reduce((sum, d) => sum + d.research, 0);
  const undergradStudents = state.data.majors.reduce((sum, m) => sum + m.students, 0);
  const gradStudents = state.data.disciplines.reduce((sum, d) => sum + (d.gradStudents?.master || 0) + (d.gradStudents?.doctor || 0), 0);
  return {
    students: undergradStudents + gradStudents,
    undergradStudents,
    gradStudents,
    teachers: state.data.teachers.length,
    professors,
    majors: state.data.majors.length,
    buildingCount: state.data.buildings.reduce((sum, b) => sum + b.quantity, 0),
    research,
  };
}

function currentSchoolLevel() {
  return SCHOOL_LEVELS[state.data.schoolLevelIndex || 0] || SCHOOL_LEVELS[0];
}

function nextSchoolLevel() {
  return SCHOOL_LEVELS[(state.data.schoolLevelIndex || 0) + 1] || null;
}

function collegeMinLevel(college) {
  return COLLEGE_LEVEL_LIMITS[college?.name] ?? 1;
}

function levelRequirementText(req) {
  const parts = [];
  if (req.money) parts.push(`资金${money(req.money)}`);
  if (req.reputation) parts.push(`声望${req.reputation}`);
  if (req.students) parts.push(`学生${req.students}人`);
  if (req.teachers) parts.push(`教师${req.teachers}人`);
  if (req.professors) parts.push(`教授${req.professors}人`);
  if (req.papers) parts.push(`论文/成果${req.papers}项`);
  if (req.research) parts.push(`科研实力${req.research}`);
  return parts.join(" · ") || "无";
}

function meetsSchoolLevel(req) {
  const m = metrics();
  return state.data.money >= req.money
    && state.data.reputation >= req.reputation
    && m.students >= req.students
    && m.teachers >= req.teachers
    && m.professors >= req.professors
    && state.data.papers.length >= req.papers
    && m.research >= req.research;
}

function buildingCapacity(item) {
  const each = { 教学楼: 500, 宿舍: 800, 图书馆: 300, 实验室: 120, 食堂: 900, 操场: 700 }[item.name] || 200;
  return item.quantity * each + item.level * Math.round(each * 0.35);
}

function degreeRequirement(degreeType) {
  return degreeType === "硕士点"
    ? { students: 240, teachers: 8, professors: 1, papers: 3, research: 42, strength: 48, money: 90000 }
    : { students: 520, teachers: 16, professors: 4, papers: 10, research: 88, strength: 82, money: 180000 };
}

function disciplineMetrics(discipline) {
  const teachers = state.data.teachers.filter((t) => t.disciplineName === discipline.name);
  const majors = state.data.majors.filter((m) => m.disciplineId === discipline.id);
  return {
    students: majors.reduce((sum, m) => sum + m.students, 0),
    teachers: teachers.length,
    professors: teachers.filter((t) => ["教授", "二级教授", "一级教授", "杰出教授"].includes(t.title)).length,
    papers: state.data.papers.filter((p) => p.discipline === discipline.name).length,
  };
}

function degreeRequirementText(req) {
  return `学生${req.students} · 教师${req.teachers} · 教授${req.professors} · 论文/成果${req.papers} · 科研${req.research} · 实力${req.strength}`;
}

function promotionRequirement(teacher) {
  const route = [
    { from: "助教", to: "讲师", points: 12, teaching: 55, research: 35, papers: 0, cost: 20000 },
    { from: "讲师", to: "副教授", points: 30, teaching: 60, research: 50, papers: 1, cost: 50000 },
    { from: "副教授", to: "教授", points: 65, teaching: 68, research: 65, papers: 3, cost: 100000 },
    { from: "教授", to: "二级教授", points: 110, teaching: 75, research: 78, papers: 6, cost: 160000 },
    { from: "二级教授", to: "一级教授", points: 160, teaching: 82, research: 88, papers: 10, cost: 240000 },
  ];
  return route.find((item) => item.from === teacher.title) || null;
}

function isPromotionEligible(teacher) {
  const req = promotionRequirement(teacher);
  return !!req
    && teacher.promotion >= req.points
    && teacher.teaching >= req.teaching
    && teacher.research >= req.research
    && (teacher.papers || 0) >= req.papers;
}

function refreshStudentTotals() {
  state.data.majors.forEach((major) => {
    major.cohorts ||= [];
    major.students = major.cohorts.reduce((sum, cohort) => sum + cohort.count, 0);
  });
}

function gradeText(grade) {
  return ["", "大一", "大二", "大三", "大四"][grade] || `第${grade}年`;
}

function cohortSummary(major) {
  major.cohorts ||= [];
  return [1, 2, 3, 4].map((grade) => {
    const count = major.cohorts.filter((c) => c.grade === grade).reduce((sum, c) => sum + c.count, 0);
    return `${gradeText(grade)}${count}人`;
  }).join(" · ");
}

function holdGraduationCeremony() {
  let graduates = 0;
  state.data.majors.forEach((major) => {
    const done = major.cohorts.filter((cohort) => cohort.grade >= 4).reduce((sum, cohort) => sum + cohort.count, 0);
    graduates += done;
    major.cohorts = major.cohorts.filter((cohort) => cohort.grade < 4);
  });
  if (graduates) {
    state.data.graduationHistory.unshift({ id: uid(), year: state.data.year, count: graduates, at: nowText() });
    state.data.reputation = clamp(state.data.reputation + Math.max(1, Math.floor(graduates / 180)), 0, 100);
    state.data.satisfaction = clamp(state.data.satisfaction + 1, 0, 100);
    addFinance("记录", "毕业典礼", 0, `${graduates}名大四学生毕业`);
  }
  refreshStudentTotals();
}

function advanceAcademicYear() {
  state.data.majors.forEach((major) => {
    major.cohorts.forEach((cohort) => {
      cohort.grade = Math.min(4, cohort.grade + 1);
    });
  });
}

function enrollPendingAdmissions() {
  const pending = state.data.pendingAdmissions || [];
  if (!pending.length) return;
  pending.forEach((plan) => {
    const major = state.data.majors.find((item) => item.id === plan.majorId);
    if (!major) return;
    major.cohorts ||= [];
    major.cohorts.push({ grade: 1, count: plan.count, quality: plan.quality });
    major.quality = Math.round((major.quality + plan.quality) / 2);
    income(plan.count * state.data.tuition.undergrad, "新生学费", `${major.name}${plan.count}名大一新生入校`);
  });
  state.data.pendingAdmissions = [];
  refreshStudentTotals();
}

function enrollPendingGradAdmissions() {
  const pending = state.data.pendingGradAdmissions || [];
  if (!pending.length) return;
  pending.forEach((plan) => {
    const discipline = state.data.disciplines.find((item) => item.id === plan.disciplineId);
    if (!discipline) return;
    discipline.gradStudents ||= { master: 0, doctor: 0 };
    discipline.gradStudents[plan.level] += plan.count;
    const tuition = plan.level === "doctor" ? state.data.tuition.doctor : state.data.tuition.master;
    income(plan.count * tuition, plan.level === "doctor" ? "博士生学费" : "硕士生学费", `${discipline.name}${plan.count}名${plan.level === "doctor" ? "博士生" : "硕士生"}入校`);
  });
  state.data.pendingGradAdmissions = [];
}

function collectAnnualTuition() {
  const undergrad = state.data.majors.reduce((sum, major) => sum + major.students, 0) * state.data.tuition.undergrad;
  const master = state.data.disciplines.reduce((sum, d) => sum + (d.gradStudents?.master || 0), 0) * state.data.tuition.master;
  const doctor = state.data.disciplines.reduce((sum, d) => sum + (d.gradStudents?.doctor || 0), 0) * state.data.tuition.doctor;
  if (undergrad + master + doctor) income(undergrad + master + doctor, "年度学费", "在校生年度学费结算");
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
        <button class="ghost full" onclick="openSaveModal()">查看存档</button>
      </div>
    </section>
  `;
}

function renderStatus() {
  const d = state.data;
  const m = metrics();
  $("#schoolLogo").textContent = d.logo || "校";
  $("#schoolName").textContent = d.schoolName;
  $("#schoolLevel").textContent = currentSchoolLevel().name;
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
  const level = currentSchoolLevel();
  const next = nextSchoolLevel();
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">校园总览</p><h2>办学层次与校园建设</h2></div></div>
    <div class="item">
      <div class="item-top">
        <div>
          <h3>当前层次：${level.name}</h3>
          <div class="meta">${next ? `下一层次：${next.name} · 要求 ${levelRequirementText(next)}` : "已达到最高办学层次。"}</div>
        </div>
        <span class="pill">${next && meetsSchoolLevel(next) ? "可升级" : "建设中"}</span>
      </div>
      ${next ? `<div class="actions"><button class="primary" onclick="upgradeSchoolLevel()">申请升格</button></div>` : ""}
    </div>
    <div class="section-head inner-head"><div><p class="eyebrow">校园建设</p><h2>场所数量不限</h2></div></div>
    <div class="list">
      ${state.data.buildings.map((item) => {
        const buildCost = Math.round(item.baseCost * (1 + item.quantity * 0.18));
        const upgradeCost = Math.round(item.baseCost * (1 + item.level * 0.85 + item.quantity * 0.08));
        return `
          <article class="item">
            <div class="item-top">
              <div><h3 class="place-title"><span class="place-icon">${item.icon}</span>${item.name}</h3><div class="meta">数量 ${item.quantity} · 等级 ${item.level} · 可容纳 ${buildingCapacity(item)} 人 · ${item.effect}</div></div>
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
  const levelIndex = state.data.schoolLevelIndex || 0;
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">学科与专业</p><h2>开设学院</h2></div></div>
    <div class="item">
      <h3>开设学院</h3>
      <div class="form-grid">
        <select id="collegePreset" class="full" onchange="fillCollegePreset()">
          <option value="">选择学院模板</option>
          <option value="__custom__">自定义学院</option>
          ${COLLEGES.map((item) => {
            const need = collegeMinLevel(item);
            const locked = levelIndex < need;
            return `<option value="${item.name}" ${locked ? "disabled" : ""}>${item.name}${locked ? `（需${SCHOOL_LEVELS[need].name}）` : ""}</option>`;
          }).join("")}
        </select>
        <div id="customCollegeFields" class="form-grid full" hidden>
          <input id="customCollegeName" class="full" placeholder="自定义学院名称">
          <input id="customCollegeMajors" class="full" placeholder="专业名称，用顿号或逗号分隔">
        </div>
        <div id="majorPreview" class="major-preview full"><span class="meta">选择学院后，这里会逐条列出专业。</span></div>
        <button class="secondary full" onclick="openDiscipline()">开设学院</button>
      </div>
    </div>
    <div class="list">
      ${state.data.disciplines.map((d) => {
        const majors = state.data.majors.filter((m) => m.disciplineId === d.id);
        const degreeTarget = d.degreeLevel === "博士点" ? "" : d.degreeLevel === "硕士点" ? "博士点" : "硕士点";
        const req = degreeTarget ? degreeRequirement(degreeTarget) : null;
        return `
          <article class="item">
            <div class="item-top">
              <div>
                <h3>${d.name}</h3>
                <div class="meta">${d.degreeLevel} · 学科排名 ${d.rank} · 实力 ${d.strength} · 科研 ${d.research}</div>
                <div class="meta">专业：${majors.map((m) => `${m.name}(${m.students}人)`).join("、") || "暂无"}</div>
                ${req ? `<div class="meta">申请${degreeTarget}要求：${degreeRequirementText(req)}</div>` : ""}
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

function disciplineOptions(selected) {
  return state.data.disciplines.map((d) => `<option value="${d.name}" ${d.name === selected ? "selected" : ""}>${d.name}</option>`).join("");
}

function majorOptionsForDiscipline(disciplineName, selectedMajorId = "") {
  const majors = state.data.majors.filter((m) => !disciplineName || m.disciplineName === disciplineName);
  return majors.map((m) => `<option value="${m.id}" ${m.id === selectedMajorId ? "selected" : ""}>${m.disciplineName} · ${m.name}</option>`).join("");
}

function syncJobMajorOptions() {
  const discipline = $("#jobDiscipline")?.value || "";
  const select = $("#jobMajor");
  if (!select) return;
  select.innerHTML = `<option value="">不限专业</option>${majorOptionsForDiscipline(discipline, state.data.ui.selectedJobMajor || "")}`;
}

function rememberTalentSelections() {
  state.data.ui.selectedJobDiscipline = $("#jobDiscipline")?.value || state.data.ui.selectedJobDiscipline || "";
  state.data.ui.selectedJobMajor = $("#jobMajor")?.value || "";
  state.data.ui.selectedStudentMajor = $("#studentMajor")?.value || state.data.ui.selectedStudentMajor || "";
}

function renderTalent() {
  const selectedJobDiscipline = state.data.ui.selectedJobDiscipline || state.data.disciplines[0]?.name || "";
  const selectedJobMajor = state.data.ui.selectedJobMajor || "";
  const selectedStudentMajor = state.data.ui.selectedStudentMajor || state.data.majors[0]?.id || "";
  const eligibleTeachers = state.data.teachers.filter(isPromotionEligible);
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">人才系统</p><h2>招聘、招生、晋升</h2></div></div>
    <div class="item">
      <h3>发布教师招聘公告</h3>
      <div class="form-grid">
        <input id="jobTitle" class="full" value="青年教师招聘公告">
        <select id="jobDiscipline" onchange="state.data.ui.selectedJobDiscipline=this.value; state.data.ui.selectedJobMajor=''; syncJobMajorOptions();">${disciplineOptions(selectedJobDiscipline)}</select>
        <select id="jobMajor"><option value="">不限专业</option>${majorOptionsForDiscipline(selectedJobDiscipline, selectedJobMajor)}</select>
        <select id="jobLevel"><option>优秀</option><option>普通</option><option>杰出</option></select>
        <input id="jobSalary" type="number" value="120000" min="60000" step="10000">
        <input id="jobBudget" type="number" value="25000" min="8000" step="1000">
        <input id="jobPositions" type="number" value="2" min="1" max="12" step="1" placeholder="岗位数">
        <button class="primary full" onclick="createJobPost()">发布公告并接收简历</button>
      </div>
    </div>
    <div class="item">
      <h3>招生</h3>
      <div class="form-grid">
        <select id="studentMajor" class="full" onchange="state.data.ui.selectedStudentMajor=this.value">${majorOptionsForDiscipline("", selectedStudentMajor)}</select>
        <select id="studentLevel"><option>普通</option><option>优秀</option><option>拔尖</option></select>
        <input id="studentCount" type="number" value="40" min="10" step="10">
        <button class="secondary" onclick="recruitStudents()">招生</button>
      </div>
    </div>
    <h3>招聘公告与简历</h3>
    <div class="list">${state.data.jobPosts.map(renderPost).join("") || `<p class="meta">暂无招聘公告。</p>`}</div>
    <h3 style="margin-top:14px">教师晋升</h3>
    <div class="list">
      ${eligibleTeachers.map((t) => {
        const req = promotionRequirement(t);
        return `
        <article class="item">
          <div class="item-top">
            <div><h3>${t.name} · ${t.title} → ${req.to}</h3><div class="meta">${t.disciplineName} · ${t.majorName || "不限专业"} · 教学 ${t.teaching} · 科研 ${t.research} · 论文 ${t.papers || 0} · 晋升点 ${t.promotion}</div></div>
            <span class="pill">${money(t.salary)}/年</span>
          </div>
          <div class="actions"><button class="ghost" onclick="promoteTeacher('${t.id}')">申请晋升</button></div>
        </article>
      `;}).join("") || `<p class="meta">暂无符合晋升条件的教师。教师需要满足教学、科研、论文和晋升点要求。</p>`}
    </div>
  `;
  syncJobMajorOptions();
}

function renderPost(post) {
  const remaining = Math.max(0, (post.positions || 1) - (post.hiredCount || 0));
  return `
    <article class="item">
      <div class="item-top">
        <div><h3>${post.title}</h3><div class="meta">${post.discipline} · ${post.majorName || "不限专业"} · ${post.level} · ${post.status}</div><div class="meta">岗位 ${post.positions || 1} 个 · 已录用 ${post.hiredCount || 0} 人 · 剩余 ${remaining} 个</div></div>
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
              <button class="primary" ${app.status !== "待筛选" || remaining <= 0 ? "disabled" : ""} onclick="hireApplication('${post.id}', '${app.id}')">录用</button>
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
          ${researchProjects.slice(0, 5).map(projectCard).join("") || `<p class="meta">暂无科研项目申请。</p>`}
        </div>
      </section>
      <section class="research-section">
        <h3>横向项目</h3>
        <p class="meta">面向企业合作和社会服务，完成后获得到账收入与声望。</p>
        <div class="list compact-list">
          ${horizontalProjects.slice(0, 5).map(projectCard).join("") || `<p class="meta">暂无横向项目申请。</p>`}
        </div>
      </section>
    </div>
    <section class="research-section">
      <h3>论文与成果</h3>
      <div class="list compact-list">
        ${state.data.papers.slice(0, 5).map((p) => `
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
  const stockValue = d.stocks.reduce((sum, stock) => sum + stock.shares * stock.price, 0);
  const loanTotal = d.loans.reduce((sum, loan) => sum + loan.balance, 0);
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">资金运作</p><h2>贷款与投资</h2></div></div>
    <div class="market-grid">
      <div class="market-box"><p class="eyebrow">贷款余额</p><h3>${money(loanTotal)}</h3><div class="meta">每学期结算利息，适合短期扩建。</div></div>
      <div class="market-box"><p class="eyebrow">股票市值</p><h3>${money(stockValue)}</h3><div class="meta">按企业分别买卖，价格每月波动。</div></div>
    </div>
    <div class="item" style="margin-top:10px"><h3>学校贷款</h3><div class="actions"><button class="primary" onclick="takeLoan(100000)">贷款 ${money(100000)}</button><button class="secondary" onclick="takeLoan(300000)">贷款 ${money(300000)}</button><button class="ghost" onclick="repayLoan(100000)">还款 ${money(100000)}</button></div></div>
    <h3 style="margin-top:14px">股票投资</h3>
    <div class="list compact-list">
      ${d.stocks.map((stock) => `
        <article class="proposal-row">
          <div class="item-top">
            <div><h3>${stock.name}</h3><div class="meta">当前股价 ${money(stock.price)} · 风险 ${stock.risk} · 持仓 ${stock.shares} 股 · 市值 ${money(stock.shares * stock.price)}</div></div>
            <span class="pill">${stock.price >= stock.basePrice ? "上涨" : "波动"}</span>
          </div>
          <div class="actions"><button class="primary" onclick="buyStock('${stock.id}', 10)">买入10股</button><button class="secondary" onclick="buyStock('${stock.id}', 50)">买入50股</button><button class="ghost" onclick="sellStock('${stock.id}', 10)">卖出10股</button><button class="ghost" onclick="sellStock('${stock.id}', 50)">卖出50股</button></div>
        </article>
      `).join("")}
    </div>
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

function renderSaveContent() {
  if (!saveContent) return;
  if (!state.data) {
    saveContent.innerHTML = `
      <div class="save-note">
        <h3>暂无存档</h3>
        <p class="meta">当前旧存档已按要求清零。创建学校后会生成新的浏览器本地存档。</p>
      </div>
    `;
    return;
  }
  const d = state.data;
  const m = metrics();
  saveContent.innerHTML = `
    <div class="save-note">
      <h3>${d.schoolName} · ${currentSchoolLevel().name}</h3>
      <p class="meta">${d.address} · 第${d.year}学年${d.month}月 · 最后保存：${d.savedAt || "当前会话"}</p>
    </div>
    <div class="save-summary">
      <div class="stat"><span>资金</span><b>${money(d.money)}</b></div>
      <div class="stat"><span>声望</span><b>${d.reputation}</b></div>
      <div class="stat"><span>学生</span><b>${m.students}</b></div>
      <div class="stat"><span>教师</span><b>${m.teachers}</b></div>
    </div>
  `;
}

function openSaveModal() {
  renderSaveContent();
  $("#saveModal").hidden = false;
}

function closeSaveModal() {
  $("#saveModal").hidden = true;
}

function manualSave() {
  if (!state.data) return msg("暂无可保存的游戏。", true);
  save();
  renderSaveContent();
  msg("当前进度已保存。");
}

function clearSave() {
  localStorage.removeItem(SAVE_KEY);
  OLD_SAVE_KEYS.forEach((key) => localStorage.removeItem(key));
  state.data = null;
  state.tab = "campus";
  if (state.timer) clearInterval(state.timer);
  $("#saveModal").hidden = true;
  render();
  setSpeed("pause");
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

function upgradeSchoolLevel() {
  const next = nextSchoolLevel();
  if (!next) return msg("已达到最高办学层次。");
  if (!meetsSchoolLevel(next)) return msg(`升格条件不足：${levelRequirementText(next)}。`, true);
  state.data.schoolLevelIndex += 1;
  state.data.reputation = clamp(state.data.reputation + 3, 0, 100);
  addFinance("记录", "办学层次升格", 0, `升格为${next.name}`);
  save();
  render();
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
  const value = $("#collegePreset").value;
  const custom = value === "__custom__";
  $("#customCollegeFields").hidden = !custom;
  if (custom) {
    $("#majorPreview").innerHTML = `<span class="meta">填写自定义学院和专业后开设，默认适配当前办学层次。</span>`;
    return;
  }
  const item = COLLEGES.find((college) => college.name === value);
  if (!item) {
    $("#majorPreview").innerHTML = `<span class="meta">选择学院后，这里会逐条列出专业。</span>`;
    return;
  }
  $("#majorPreview").innerHTML = item.majors.map((major) => `<div class="major-row">${major}</div>`).join("");
}

function openDiscipline() {
  const value = $("#collegePreset").value;
  const isCustom = value === "__custom__";
  const preset = COLLEGES.find((college) => college.name === value);
  if (!isCustom && preset && (state.data.schoolLevelIndex || 0) < collegeMinLevel(preset)) {
    return msg(`办学层次不足，需要达到${SCHOOL_LEVELS[collegeMinLevel(preset)].name}。`, true);
  }
  const name = (isCustom ? $("#customCollegeName").value : preset?.name || "").trim();
  if (!name) return msg("请选择或输入学院名称。", true);
  if (state.data.disciplines.some((d) => d.name === name)) return msg("该学院已存在。", true);
  const majors = isCustom
    ? $("#customCollegeMajors").value.split(/[、,，]/).map((item) => item.trim()).filter(Boolean).slice(0, 6)
    : preset?.majors || [];
  const cost = 180000 + Math.max(0, majors.length - 1) * 25000;
  if (!spend(cost, "学科建设", `开设${name}`)) return;
  const discipline = { id: uid(), name, degreeLevel: (state.data.schoolLevelIndex || 0) >= 1 ? "本科" : "专科", rank: 260, strength: 24, research: 10 };
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
  const req = degreeRequirement(degreeType);
  const dm = disciplineMetrics(d);
  const missing = [];
  if (dm.students < req.students) missing.push(`学生${req.students}人`);
  if (dm.teachers < req.teachers) missing.push(`教师${req.teachers}人`);
  if (dm.professors < req.professors) missing.push(`教授${req.professors}人`);
  if (dm.papers < req.papers) missing.push(`论文/成果${req.papers}项`);
  if (d.research < req.research) missing.push(`科研${req.research}`);
  if (d.strength < req.strength) missing.push(`实力${req.strength}`);
  if (missing.length) return msg(`申请条件不足：${missing.join("、")}。`, true);
  if (!spend(req.money, "硕博点申请", `${d.name}申请${degreeType}`)) return;
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
  rememberTalentSelections();
  const title = $("#jobTitle").value || "教师招聘公告";
  const discipline = $("#jobDiscipline").value;
  const major = state.data.majors.find((m) => m.id === $("#jobMajor").value);
  const level = $("#jobLevel").value;
  const salary = Number($("#jobSalary").value || 120000);
  const budget = Number($("#jobBudget").value || 25000);
  const positions = clamp(Number($("#jobPositions").value || 1), 1, 12);
  const currentTeachers = state.data.teachers.filter((t) => t.disciplineName === discipline && (!major || t.majorName === major.name)).length;
  const studentLoad = state.data.majors.filter((m) => m.disciplineName === discipline && (!major || m.id === major.id)).reduce((sum, m) => sum + m.students, 0);
  const maxByNeed = Math.max(1, Math.ceil(studentLoad / 120) + 2);
  if (currentTeachers + positions > maxByNeed) return msg(`该学院/专业当前最多还需要${Math.max(0, maxByNeed - currentTeachers)}名教师。`, true);
  if (!spend(budget, "招聘公告", `发布${discipline}${level}招聘`)) return;
  const bias = { 普通: 0, 优秀: 12, 杰出: 25 }[level] || 0;
  const applications = Array.from({ length: Math.max(5, positions * 3) + Math.floor(Math.random() * 3) }, () => {
    const teaching = clamp(42 + Math.floor(Math.random() * 38) + bias, 30, 99);
    const research = clamp(38 + Math.floor(Math.random() * 42) + bias, 30, 99);
    return {
      id: uid(),
      name: randomName(),
      title: level === "杰出" ? "教授" : level === "优秀" ? "副教授" : "讲师",
      teaching,
      research,
      papers: level === "杰出" ? 5 + Math.floor(Math.random() * 5) : level === "优秀" ? 1 + Math.floor(Math.random() * 4) : Math.floor(Math.random() * 2),
      fit: clamp(Math.round((teaching + research) / 2 + Math.random() * 12), 35, 99),
      salary: Math.round(salary * (0.9 + Math.random() * 0.3)),
      status: "待筛选",
      bio: "教师主动投递简历，适合补充学院方向。",
    };
  });
  state.data.jobPosts.unshift({ id: uid(), title, discipline, majorId: major?.id || "", majorName: major?.name || "不限专业", level, positions, hiredCount: 0, status: "开放", applications });
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
  if ((post.hiredCount || 0) >= (post.positions || 1)) return msg("该招聘公告岗位已录满。", true);
  const app = post.applications.find((item) => item.id === appId);
  const onboarding = Math.max(12000, Math.round(app.salary * 0.18));
  if (!spend(onboarding, "教师录用", `录用${app.name}`)) return;
  state.data.teachers.push({ id: uid(), name: app.name, title: app.title, disciplineName: post.discipline, majorName: post.majorName === "不限专业" ? "" : post.majorName, teaching: app.teaching, research: app.research, salary: app.salary, promotion: 0, papers: app.papers || 0 });
  app.status = "已录用";
  post.hiredCount = (post.hiredCount || 0) + 1;
  if (post.hiredCount >= post.positions) {
    post.status = "已关闭";
    post.applications.filter((item) => item.status === "待筛选").forEach((item) => item.status = "未录用");
  }
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
  rememberTalentSelections();
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
  const req = promotionRequirement(t);
  if (!req) return msg("该教师已达到最高职级。", true);
  if (!isPromotionEligible(t)) return msg(`晋升条件不足：晋升点${req.points} · 教学${req.teaching} · 科研${req.research} · 论文${req.papers}。`, true);
  if (!spend(req.cost, "教师晋升", `${t.name}晋升${req.to}`)) return;
  t.title = req.to;
  t.promotion -= req.points;
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
      if (teacher) {
        teacher.promotion += p.gain;
        teacher.papers = (teacher.papers || 0) + 1;
      }
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

function buyStock(stockId, shares) {
  const stock = state.data.stocks.find((item) => item.id === stockId);
  if (!stock) return;
  const cost = shares * stock.price;
  if (!spend(cost, "股票投资", `买入${shares}股${stock.name}`)) return;
  stock.shares += shares;
  save();
  render();
}

function sellStock(stockId, shares) {
  const stock = state.data.stocks.find((item) => item.id === stockId);
  if (!stock) return;
  const count = Math.min(shares, stock.shares);
  if (!count) return msg("当前没有足够股票。", true);
  stock.shares -= count;
  income(count * stock.price, "股票卖出", `卖出${count}股${stock.name}`);
  save();
  render();
}


function updateStockPrice() {
  state.data.stocks.forEach((stock) => {
    const swing = stock.risk === "稳健" ? 0.07 : stock.risk === "成长" ? 0.12 : 0.18;
    const drift = 1 + (Math.random() - 0.47) * swing;
    stock.price = clamp(Math.round(stock.price * drift), 20, 420);
  });
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

function money(value) {
  return `¥${Math.round(value || 0).toLocaleString("zh-CN")}`;
}

function renderStatus() {
  const d = state.data;
  const m = metrics();
  $("#schoolLogo").textContent = d.logo || "校";
  $("#schoolName").textContent = d.schoolName;
  $("#schoolLevel").textContent = currentSchoolLevel().name;
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

function renderEvent() {
  const modal = $("#eventModal");
  if (modal) modal.hidden = true;
}

function createEvent() {
  state.data.pendingEvent = null;
}

function degreeRequirement(degreeType) {
  return degreeType === "硕士点"
    ? { students: 240, teachers: 8, professors: 1, papers: 3, research: 42, strength: 48, money: 90000 }
    : { students: 520, teachers: 16, professors: 4, papers: 10, research: 88, strength: 82, money: 180000 };
}

function degreeRequirementText(req) {
  return `学生${req.students} · 教师${req.teachers} · 教授${req.professors} · 论文/成果${req.papers} · 科研${req.research} · 实力${req.strength}`;
}

function renderDisciplines() {
  const levelIndex = state.data.schoolLevelIndex || 0;
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">学科与专业</p><h2>开设学院</h2></div></div>
    <div class="item">
      <h3>开设学院</h3>
      <div class="form-grid">
        <select id="collegePreset" class="full" onchange="fillCollegePreset()">
          <option value="">选择学院模板</option>
          <option value="__custom__">自定义学院</option>
          ${COLLEGES.map((item) => {
            const need = collegeMinLevel(item);
            const locked = levelIndex < need;
            return `<option value="${item.name}" ${locked ? "disabled" : ""}>${item.name}${locked ? `（需${SCHOOL_LEVELS[need].name}）` : ""}</option>`;
          }).join("")}
        </select>
        <div id="customCollegeFields" class="form-grid full" hidden>
          <input id="customCollegeName" class="full" placeholder="自定义学院名称">
          <input id="customCollegeMajors" class="full" placeholder="专业名称，用逗号分隔">
        </div>
        <div id="majorPreview" class="major-preview full"><span class="meta">选择学院后，这里会逐条列出专业。</span></div>
        <button class="secondary full" onclick="openDiscipline()">开设学院</button>
      </div>
    </div>
    <div class="list">
      ${state.data.disciplines.map((d) => {
        const majors = state.data.majors.filter((m) => m.disciplineId === d.id);
        const degreeTarget = d.degreeLevel === "博士点" ? "" : d.degreeLevel === "硕士点" ? "博士点" : "硕士点";
        const req = degreeTarget ? degreeRequirement(degreeTarget) : null;
        return `
          <article class="item">
            <div class="item-top">
              <div>
                <h3>${d.name}</h3>
                <div class="meta">${d.degreeLevel} · 学科排名 ${d.rank} · 实力 ${d.strength} · 科研 ${d.research}</div>
                <div class="meta">专业：${majors.map((m) => `${m.name}(${m.students}人，${cohortSummary(m)})`).join("、") || "暂无"}</div>
                <div class="meta">硕士生 ${d.gradStudents?.master || 0} · 博士生 ${d.gradStudents?.doctor || 0}</div>
                ${req ? `<div class="meta">申请${degreeTarget}要求：${degreeRequirementText(req)}</div>` : ""}
              </div>
              <span class="pill">第${d.rank}</span>
            </div>
            <div class="actions">
              <button class="primary" onclick="investDiscipline('${d.id}', 50000)">投入 ${money(50000)}</button>
              ${degreeTarget ? `<button class="ghost" onclick="applyDegree('${d.id}', '${degreeTarget}')">申请${degreeTarget}</button>` : ""}
            </div>
          </article>
        `;
      }).join("") || `<p class="meta">暂无学院，请先开设学院和专业。</p>`}
    </div>
  `;
}

function fillCollegePreset() {
  const value = $("#collegePreset").value;
  const custom = value === "__custom__";
  $("#customCollegeFields").hidden = !custom;
  if (custom) {
    $("#majorPreview").innerHTML = `<span class="meta">填写自定义学院和专业后开设。</span>`;
    return;
  }
  const item = COLLEGES.find((college) => college.name === value);
  $("#majorPreview").innerHTML = item ? item.majors.map((major) => `<div class="major-row">${major}</div>`).join("") : `<span class="meta">选择学院后，这里会逐条列出专业。</span>`;
}

function openDiscipline() {
  const value = $("#collegePreset").value;
  const isCustom = value === "__custom__";
  const preset = COLLEGES.find((college) => college.name === value);
  if (!isCustom && preset && (state.data.schoolLevelIndex || 0) < collegeMinLevel(preset)) {
    return msg(`办学层次不足，需要达到${SCHOOL_LEVELS[collegeMinLevel(preset)].name}。`, true);
  }
  const name = (isCustom ? $("#customCollegeName").value : preset?.name || "").trim();
  if (!name) return msg("请选择或输入学院名称。", true);
  if (state.data.disciplines.some((d) => d.name === name)) return msg("该学院已存在。", true);
  const majors = isCustom
    ? $("#customCollegeMajors").value.split(/[，,、]/).map((item) => item.trim()).filter(Boolean).slice(0, 6)
    : preset?.majors || [];
  const cost = 180000 + Math.max(0, majors.length - 1) * 25000;
  if (!spend(cost, "学科建设", `开设${name}`)) return;
  const discipline = { id: uid(), name, degreeLevel: (state.data.schoolLevelIndex || 0) >= 1 ? "本科" : "专科", rank: 260, strength: 24, research: 10, gradStudents: { master: 0, doctor: 0 } };
  state.data.disciplines.push(discipline);
  majors.forEach((major) => state.data.majors.push({ id: uid(), disciplineId: discipline.id, disciplineName: name, name: major, students: 0, quality: 50, cohorts: [], pendingCount: 0 }));
  save();
  render();
}

function disciplineOptions(selected) {
  if (!state.data.disciplines.length) return `<option value="">请先开设学院</option>`;
  return state.data.disciplines.map((d) => `<option value="${d.name}" ${d.name === selected ? "selected" : ""}>${d.name} · ${d.degreeLevel}</option>`).join("");
}

function majorOptionsForDiscipline(disciplineName, selectedMajorId = "") {
  const majors = state.data.majors.filter((m) => !disciplineName || m.disciplineName === disciplineName);
  if (!majors.length) return `<option value="">请先开设专业</option>`;
  return majors.map((m) => `<option value="${m.id}" ${m.id === selectedMajorId ? "selected" : ""}>${m.disciplineName} · ${m.name}</option>`).join("");
}

function graduateDisciplineOptions(selected) {
  const items = state.data.disciplines.filter((d) => d.degreeLevel !== "本科" && d.degreeLevel !== "专科");
  if (!items.length) return `<option value="">请先申请硕博点</option>`;
  return items.map((d) => `<option value="${d.name}" ${d.name === selected ? "selected" : ""}>${d.name} · ${d.degreeLevel}</option>`).join("");
}

function syncJobMajorOptions() {
  const discipline = $("#jobDiscipline")?.value || "";
  const select = $("#jobMajor");
  if (!select) return;
  select.innerHTML = `<option value="">不限专业</option>${majorOptionsForDiscipline(discipline, state.data.ui.selectedJobMajor || "")}`;
}

function rememberTalentSelections() {
  state.data.ui.selectedJobDiscipline = $("#jobDiscipline")?.value || state.data.ui.selectedJobDiscipline || "";
  state.data.ui.selectedJobMajor = $("#jobMajor")?.value || "";
  state.data.ui.selectedStudentMajor = $("#studentMajor")?.value || state.data.ui.selectedStudentMajor || "";
  state.data.ui.selectedGradDiscipline = $("#gradDiscipline")?.value || state.data.ui.selectedGradDiscipline || "";
  state.data.ui.selectedGradLevel = $("#gradLevel")?.value || state.data.ui.selectedGradLevel || "master";
}

function renderTalent() {
  const selectedJobDiscipline = state.data.ui.selectedJobDiscipline || state.data.disciplines[0]?.name || "";
  const selectedJobMajor = state.data.ui.selectedJobMajor || "";
  const selectedStudentMajor = state.data.ui.selectedStudentMajor || state.data.majors[0]?.id || "";
  const selectedGradDiscipline = state.data.ui.selectedGradDiscipline || state.data.disciplines.find((d) => d.degreeLevel !== "本科" && d.degreeLevel !== "专科")?.name || "";
  const selectedGradLevel = state.data.ui.selectedGradLevel || "master";
  const eligibleTeachers = state.data.teachers.filter(isPromotionEligible);
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">人才系统</p><h2>招聘、招生、晋升</h2></div></div>
    <div class="item">
      <h3>发布教师招聘公告</h3>
      <div class="form-grid">
        <input id="jobTitle" class="full" value="青年教师招聘公告">
        <select id="jobDiscipline" onchange="state.data.ui.selectedJobDiscipline=this.value; state.data.ui.selectedJobMajor=''; syncJobMajorOptions();">${disciplineOptions(selectedJobDiscipline)}</select>
        <select id="jobMajor"><option value="">不限专业</option>${majorOptionsForDiscipline(selectedJobDiscipline, selectedJobMajor)}</select>
        <select id="jobLevel"><option>优秀</option><option>普通</option><option>杰出</option></select>
        <input id="jobSalary" type="number" value="120000" min="60000" step="10000">
        <input id="jobBudget" type="number" value="25000" min="8000" step="1000">
        <input id="jobPositions" type="number" value="2" min="1" max="12" step="1" placeholder="岗位数">
        <button class="primary full" onclick="createJobPost()">发布公告并收简历</button>
      </div>
    </div>
    <div class="item">
      <h3>本科招生</h3>
      <div class="form-grid">
        <select id="studentMajor" class="full" onchange="state.data.ui.selectedStudentMajor=this.value">${majorOptionsForDiscipline("", selectedStudentMajor)}</select>
        <select id="studentLevel"><option>普通</option><option>优秀</option><option>拔尖</option></select>
        <input id="studentCount" type="number" value="40" min="10" step="10">
        <button class="secondary" onclick="recruitStudents()">招生</button>
      </div>
      <div class="meta">每年6月招生，9月新生以大一身份入校，大四在6月毕业。</div>
    </div>
    <div class="item">
      <h3>硕博招生</h3>
      <div class="form-grid">
        <select id="gradDiscipline">${graduateDisciplineOptions(selectedGradDiscipline)}</select>
        <select id="gradLevel"><option value="master" ${selectedGradLevel === "master" ? "selected" : ""}>硕士生</option><option value="doctor" ${selectedGradLevel === "doctor" ? "selected" : ""}>博士生</option></select>
        <input id="gradCount" type="number" value="12" min="2" step="2">
        <button class="secondary" onclick="recruitGradStudents()">招生</button>
      </div>
    </div>
    <h3>招聘公告与简历</h3>
    <div class="list">${state.data.jobPosts.map(renderPost).join("") || `<p class="meta">暂无招聘公告。</p>`}</div>
    <h3 style="margin-top:14px">教师晋升</h3>
    <div class="list">
      ${eligibleTeachers.map((t) => {
        const req = promotionRequirement(t);
        return `
        <article class="item">
          <div class="item-top">
            <div><h3>${t.name} · ${t.title} → ${req.to}</h3><div class="meta">${t.disciplineName} · ${t.majorName || "不限专业"} · 教学 ${t.teaching} · 科研 ${t.research} · 论文 ${t.papers || 0} · 晋升点 ${t.promotion}</div></div>
            <span class="pill">${money(t.salary)}/年</span>
          </div>
          <div class="actions"><button class="ghost" onclick="promoteTeacher('${t.id}')">申请晋升</button></div>
        </article>
      `;}).join("") || `<p class="meta">暂无符合晋升条件的教师。</p>`}
    </div>
  `;
  syncJobMajorOptions();
}

function renderPost(post) {
  const remaining = Math.max(0, (post.positions || 1) - (post.hiredCount || 0));
  return `
    <article class="item">
      <div class="item-top">
        <div><h3>${post.title}</h3><div class="meta">${post.discipline} · ${post.majorName || "不限专业"} · ${post.level} · ${post.status}</div><div class="meta">岗位 ${post.positions || 1} 个 · 已录用 ${post.hiredCount || 0} 人 · 剩余 ${remaining} 个</div></div>
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
              <button class="primary" ${app.status !== "待筛选" || remaining <= 0 ? "disabled" : ""} onclick="hireApplication('${post.id}', '${app.id}')">录用</button>
              <button class="ghost" ${app.status !== "待筛选" ? "disabled" : ""} onclick="rejectApplication('${post.id}', '${app.id}')">不合适</button>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function createJobPost() {
  rememberTalentSelections();
  const title = $("#jobTitle").value || "教师招聘公告";
  const discipline = $("#jobDiscipline").value;
  if (!discipline) return msg("请先开设学院。", true);
  const major = state.data.majors.find((m) => m.id === $("#jobMajor").value);
  const level = $("#jobLevel").value;
  const salary = Number($("#jobSalary").value || 120000);
  const budget = Number($("#jobBudget").value || 25000);
  const positions = clamp(Number($("#jobPositions").value || 1), 1, 12);
  const currentTeachers = state.data.teachers.filter((t) => t.disciplineName === discipline && (!major || t.majorName === major.name)).length;
  const studentLoad = state.data.majors.filter((m) => m.disciplineName === discipline && (!major || m.id === major.id)).reduce((sum, m) => sum + m.students, 0);
  const maxByNeed = Math.max(1, Math.ceil(studentLoad / 120) + 2);
  if (currentTeachers + positions > maxByNeed) return msg(`该学院/专业当前最多还需要${Math.max(0, maxByNeed - currentTeachers)}名教师。`, true);
  if (!spend(budget, "招聘公告", `发布${discipline}${level}招聘`)) return;
  const bias = { 普通: 0, 优秀: 12, 杰出: 25 }[level] || 0;
  const applications = Array.from({ length: Math.max(5, positions * 3) + Math.floor(Math.random() * 3) }, () => {
    const teaching = clamp(42 + Math.floor(Math.random() * 38) + bias, 30, 99);
    const research = clamp(38 + Math.floor(Math.random() * 42) + bias, 30, 99);
    return {
      id: uid(),
      name: randomName(),
      title: level === "杰出" ? "教授" : level === "优秀" ? "副教授" : "讲师",
      teaching,
      research,
      papers: level === "杰出" ? 5 + Math.floor(Math.random() * 5) : level === "优秀" ? 1 + Math.floor(Math.random() * 4) : Math.floor(Math.random() * 2),
      fit: clamp(Math.round((teaching + research) / 2 + Math.random() * 12), 35, 99),
      salary: Math.round(salary * (0.9 + Math.random() * 0.3)),
      status: "待筛选",
      bio: "教师投递简历，适合补充学院方向。",
    };
  });
  state.data.jobPosts.unshift({ id: uid(), title, discipline, majorId: major?.id || "", majorName: major?.name || "不限专业", level, positions, hiredCount: 0, status: "开放", applications });
  save();
  render();
}

function hireApplication(postId, appId) {
  const post = state.data.jobPosts.find((item) => item.id === postId);
  if ((post.hiredCount || 0) >= (post.positions || 1)) return msg("该招聘公告岗位已录满。", true);
  const app = post.applications.find((item) => item.id === appId);
  const onboarding = Math.max(12000, Math.round(app.salary * 0.18));
  if (!spend(onboarding, "教师录用", `录用${app.name}`)) return;
  state.data.teachers.push({ id: uid(), name: app.name, title: app.title, disciplineName: post.discipline, majorName: post.majorName === "不限专业" ? "" : post.majorName, teaching: app.teaching, research: app.research, salary: app.salary, promotion: 0, papers: app.papers || 0 });
  app.status = "已录用";
  post.hiredCount = (post.hiredCount || 0) + 1;
  if (post.hiredCount >= post.positions) {
    post.status = "已关闭";
    post.applications.filter((item) => item.status === "待筛选").forEach((item) => item.status = "未录用");
  }
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

function promotionRequirement(teacher) {
  const route = [
    { from: "助教", to: "讲师", points: 12, teaching: 55, research: 35, papers: 0, cost: 20000 },
    { from: "讲师", to: "副教授", points: 30, teaching: 60, research: 50, papers: 1, cost: 50000 },
    { from: "副教授", to: "教授", points: 65, teaching: 68, research: 65, papers: 3, cost: 100000 },
    { from: "教授", to: "二级教授", points: 110, teaching: 75, research: 78, papers: 6, cost: 160000 },
    { from: "二级教授", to: "一级教授", points: 160, teaching: 82, research: 88, papers: 10, cost: 240000 },
  ];
  return route.find((item) => item.from === teacher.title) || null;
}

function isPromotionEligible(teacher) {
  const req = promotionRequirement(teacher);
  return !!req && teacher.promotion >= req.points && teacher.teaching >= req.teaching && teacher.research >= req.research && (teacher.papers || 0) >= req.papers;
}

function promoteTeacher(id) {
  const t = state.data.teachers.find((item) => item.id === id);
  const req = promotionRequirement(t);
  if (!req) return msg("该教师已达到最高职级。", true);
  if (!isPromotionEligible(t)) return msg(`晋升条件不足：晋升点${req.points} · 教学${req.teaching} · 科研${req.research} · 论文${req.papers}。`, true);
  if (!spend(req.cost, "教师晋升", `${t.name}晋升${req.to}`)) return;
  t.title = req.to;
  t.promotion -= req.points;
  t.teaching += 4;
  t.research += 5;
  save();
  render();
}

function applyDegree(id, degreeType) {
  const d = state.data.disciplines.find((item) => item.id === id);
  const req = degreeRequirement(degreeType);
  const dm = disciplineMetrics(d);
  const missing = [];
  if (dm.students < req.students) missing.push(`学生${req.students}人`);
  if (dm.teachers < req.teachers) missing.push(`教师${req.teachers}人`);
  if (dm.professors < req.professors) missing.push(`教授${req.professors}人`);
  if (dm.papers < req.papers) missing.push(`论文/成果${req.papers}项`);
  if (d.research < req.research) missing.push(`科研${req.research}`);
  if (d.strength < req.strength) missing.push(`实力${req.strength}`);
  if (missing.length) return msg(`申请条件不足：${missing.join("、")}。`, true);
  if (!spend(req.money, "硕博点申请", `${d.name}申请${degreeType}`)) return;
  const score = Math.round(d.strength * 0.55 + d.research * 0.8 + Math.random() * 12);
  const need = degreeType === "硕士点" ? 48 : 82;
  if (score >= need) {
    d.degreeLevel = degreeType;
    d.strength += 8;
    d.research += 10;
    d.gradStudents ||= { master: 0, doctor: 0 };
    state.data.reputation = clamp(state.data.reputation + 4, 0, 100);
    msg(`${degreeType}申请通过。`);
  } else {
    msg(`${degreeType}申请未通过，请继续提升学科实力。`, true);
  }
  save();
  render();
}

function recruitStudents() {
  rememberTalentSelections();
  if (state.data.month !== 6) return msg("本科招生仅在6月开放，请等到招生季。", true);
  const major = state.data.majors.find((m) => m.id === $("#studentMajor").value);
  if (!major) return msg("请先开设学院和专业后再招生。", true);
  const level = $("#studentLevel").value;
  const count = Math.max(10, Number($("#studentCount").value || 40));
  const unit = { 普通: 180, 优秀: 320, 拔尖: 520 }[level] || 180;
  const quality = { 普通: 51, 优秀: 56, 拔尖: 62 }[level] || 51;
  if (!spend(count * unit, "招生宣传", `${major.name}登记${level}新生`)) return;
  state.data.pendingAdmissions.push({ id: uid(), majorId: major.id, count, quality });
  major.pendingCount = (major.pendingCount || 0) + count;
  addFinance("记录", "本科招生", 0, `${major.name}登记了${count}名${level}新生，9月入校`);
  save();
  render();
}

function recruitGradStudents() {
  rememberTalentSelections();
  if (state.data.month !== 6) return msg("硕博招生仅在6月开放，请等到招生季。", true);
  const discipline = state.data.disciplines.find((d) => d.name === $("#gradDiscipline").value);
  if (!discipline) return msg("请先申请硕博点后再招生。", true);
  const level = $("#gradLevel").value;
  if (discipline.degreeLevel === "本科" || discipline.degreeLevel === "专科") return msg("该学院尚未获批硕博点。", true);
  if (level === "doctor" && discipline.degreeLevel !== "博士点") return msg("只有博士点学院才能招收博士生。", true);
  const count = Math.max(2, Number($("#gradCount").value || 12));
  const unit = level === "doctor" ? 1800 : 1200;
  if (!spend(count * unit, "硕博招生", `${discipline.name}登记${level === "doctor" ? "博士生" : "硕士生"}`)) return;
  state.data.pendingGradAdmissions.push({ id: uid(), disciplineId: discipline.id, count, level });
  addFinance("记录", "硕博招生", 0, `${discipline.name}登记了${count}名${level === "doctor" ? "博士生" : "硕士生"}，9月入校`);
  save();
  render();
}

function enrollPendingAdmissions() {
  const pending = state.data.pendingAdmissions || [];
  if (!pending.length) return;
  pending.forEach((plan) => {
    const major = state.data.majors.find((item) => item.id === plan.majorId);
    if (!major) return;
    major.cohorts ||= [];
    major.cohorts.push({ grade: 1, count: plan.count, quality: plan.quality });
    major.pendingCount = Math.max(0, (major.pendingCount || 0) - plan.count);
    major.quality = Math.round((major.quality + plan.quality) / 2);
  });
  state.data.pendingAdmissions = [];
  refreshStudentTotals();
}

function enrollPendingGradAdmissions() {
  const pending = state.data.pendingGradAdmissions || [];
  if (!pending.length) return;
  pending.forEach((plan) => {
    const discipline = state.data.disciplines.find((item) => item.id === plan.disciplineId);
    if (!discipline) return;
    discipline.gradStudents ||= { master: 0, doctor: 0 };
    discipline.gradStudents[plan.level] += plan.count;
  });
  state.data.pendingGradAdmissions = [];
}

function collectAnnualTuition() {
  const undergrad = state.data.majors.reduce((sum, major) => sum + major.students, 0) * state.data.tuition.undergrad;
  const master = state.data.disciplines.reduce((sum, d) => sum + (d.gradStudents?.master || 0), 0) * state.data.tuition.master;
  const doctor = state.data.disciplines.reduce((sum, d) => sum + (d.gradStudents?.doctor || 0), 0) * state.data.tuition.doctor;
  const total = undergrad + master + doctor;
  if (total) income(total, "年度学费", "9月在校生年度学费结算");
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
    if (state.data.month === 6) {
      holdGraduationCeremony();
      settleTerm();
    }
    if (state.data.month === 9) {
      advanceAcademicYear();
      enrollPendingAdmissions();
      enrollPendingGradAdmissions();
      collectAnnualTuition();
    }
    if (state.data.month === 12) {
      settleTerm();
    }
  }
  save();
  render();
}

function settleTerm() {
  const grant = 65000 + state.data.reputation * 1000;
  const salary = state.data.teachers.reduce((sum, t) => sum + Math.round(t.salary / 2), 0);
  const interest = state.data.loans.reduce((sum, loan) => sum + Math.round(loan.balance * loan.rate / 2), 0);
  income(grant, "学期拨款", "学期政府拨款与办学补助");
  if (salary && spend(salary, "教师薪酬", "本学期教师薪酬")) {}
  if (interest && spend(interest, "贷款利息", "本学期贷款利息")) {}
  recalcRank();
  addRank();
}

function renderFinance() {
  const d = state.data;
  const stockValue = d.stocks.reduce((sum, stock) => sum + stock.shares * stock.price, 0);
  const loanTotal = d.loans.reduce((sum, loan) => sum + loan.balance, 0);
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">资金运作</p><h2>贷款、投资与学费</h2></div></div>
    <div class="market-grid">
      <div class="market-box"><p class="eyebrow">贷款余额</p><h3>${money(loanTotal)}</h3><div class="meta">每学期结算利息，适合短期扩建。</div></div>
      <div class="market-box"><p class="eyebrow">股票市值</p><h3>${money(stockValue)}</h3><div class="meta">按企业分别买卖，价格每月波动。</div></div>
    </div>
    <div class="item" style="margin-top:10px">
      <h3>学费设置</h3>
      <div class="form-grid">
        <input id="tuitionUndergrad" type="number" min="1000" step="100" value="${d.tuition.undergrad}">
        <input id="tuitionMaster" type="number" min="1000" step="100" value="${d.tuition.master}">
        <input id="tuitionDoctor" type="number" min="1000" step="100" value="${d.tuition.doctor}">
        <button class="primary full" onclick="saveTuitionSettings()">保存学费设置</button>
      </div>
    </div>
    <div class="item" style="margin-top:10px"><h3>学校贷款</h3><div class="actions"><button class="primary" onclick="takeLoan(100000)">贷款 ${money(100000)}</button><button class="secondary" onclick="takeLoan(300000)">贷款 ${money(300000)}</button><button class="ghost" onclick="repayLoan(100000)">还款 ${money(100000)}</button></div></div>
    <h3 style="margin-top:14px">股票投资</h3>
    <div class="list compact-list">
      ${d.stocks.map((stock) => `
        <article class="proposal-row">
          <div class="item-top">
            <div><h3>${stock.name}</h3><div class="meta">当前股价 ${money(stock.price)} · 风险 ${stock.risk} · 持仓 ${stock.shares} 股 · 市值 ${money(stock.shares * stock.price)}</div></div>
            <span class="pill">${stock.price >= stock.basePrice ? "上涨" : "波动"}</span>
          </div>
          <div class="actions"><button class="primary" onclick="buyStock('${stock.id}', 10)">买入10股</button><button class="secondary" onclick="buyStock('${stock.id}', 50)">买入50股</button><button class="ghost" onclick="sellStock('${stock.id}', 10)">卖出10股</button><button class="ghost" onclick="sellStock('${stock.id}', 50)">卖出50股</button></div>
        </article>
      `).join("")}
    </div>
    <h3 style="margin-top:14px">财务流水</h3>
    <div class="list compact-list">
      ${d.finance.slice(0, 5).map(renderFinanceRow).join("") || `<p class="meta">暂无财务流水。</p>`}
    </div>
  `;
}

function saveTuitionSettings() {
  state.data.tuition.undergrad = Math.max(1000, Number($("#tuitionUndergrad").value || state.data.tuition.undergrad));
  state.data.tuition.master = Math.max(1000, Number($("#tuitionMaster").value || state.data.tuition.master));
  state.data.tuition.doctor = Math.max(1000, Number($("#tuitionDoctor").value || state.data.tuition.doctor));
  save();
  render();
}

function spend(amount, category, note) {
  if (isAdminUser()) {
    addFinance("记录", category, 0, `${note}（管理员免扣资金）`);
    return true;
  }
  if ((state.data?.money || 0) < amount) {
    msg("资金不足，无法执行该操作。", true);
    return false;
  }
  state.data.money -= amount;
  addFinance("支出", category, -amount, note);
  return true;
}

function promotionRoute() {
  return [
    { from: "助教", to: "讲师", points: 10, teaching: 52, research: 28, papers: 0, cost: 12000 },
    { from: "讲师", to: "副教授", points: 28, teaching: 60, research: 45, papers: 1, cost: 40000 },
    { from: "副教授", to: "教授", points: 60, teaching: 68, research: 60, papers: 3, cost: 90000 },
    { from: "教授", to: "杰出教授", points: 100, teaching: 75, research: 72, papers: 6, cost: 150000 },
    { from: "杰出教授", to: "院士", points: 180, teaching: 82, research: 88, papers: 10, cost: 300000 },
  ];
}

function promotionRequirement(teacher) {
  return promotionRoute().find((item) => item.from === teacher.title) || null;
}

function isPromotionEligible(teacher) {
  const req = promotionRequirement(teacher);
  return !!req
    && (teacher.promotion || 0) >= req.points
    && (teacher.teaching || 0) >= req.teaching
    && (teacher.research || 0) >= req.research
    && (teacher.papers || 0) >= req.papers;
}

function renderSetup() {
  document.body.classList.add("setup-mode");
  view.innerHTML = `
    <section class="setup-card auth-shell">
      <p class="eyebrow">创建学校</p>
      <h2>先创建你的大学</h2>
      <p class="meta">当前账号：${activeUsername()}${isAdminUser() ? " · 管理员" : " · 普通用户"}。每个账号使用独立存档。</p>
      <div class="form-grid">
        <input id="createSchoolName" class="full school-name-input" value="新星大学" placeholder="学校名称">
        <input id="createLogo" value="星" maxlength="4" placeholder="校徽文字">
        <select id="createAddress">
          ${ADDRESSES.map((address) => `<option value="${address}">${address}</option>`).join("")}
        </select>
        <button class="primary full" onclick="createSchool()">创建学校并进入游戏</button>
        <button class="ghost full" onclick="openSaveModal()">查看当前账号存档</button>
        <button class="ghost full" onclick="logoutAccount()">退出登录</button>
        ${isAdminUser() ? '<button class="ghost full" onclick="openAccountManager()">账号管理页</button>' : ""}
      </div>
    </section>
  `;
}

function renderStatus() {
  const d = state.data;
  const m = metrics();
  $("#schoolLogo").textContent = d.logo || "校";
  $("#schoolName").textContent = d.schoolName;
  $("#schoolLevel").textContent = currentSchoolLevel().name;
  $("#schoolAddress").textContent = `${d.address}${isAdminUser() ? " · 管理员" : ""}`;
  $("#statusGrid").hidden = state.tab !== "campus";
  if (state.tab !== "campus") return;
  $("#statusGrid").innerHTML = [
    ["资金", displayMoney(d.money)],
    ["声望", d.reputation],
    ["满意度", `${d.satisfaction}%`],
    ["教师水平", d.teacherLevel],
    ["时间", `第${d.year}学年 · ${d.month}月`],
    ["规模", `${m.teachers}师 / ${m.students}生 / ${m.majors}专业`],
  ].map(([label, value]) => `<div class="stat"><span>${label}</span><b>${value}</b></div>`).join("");
}

function renderSaveContent() {
  if (!saveContent) return;
  if (!state.data) {
    saveContent.innerHTML = `
      <div class="save-note">
        <h3>暂无存档</h3>
        <p class="meta">当前账号：${activeUsername() || "未登录"}${isAdminUser() ? " · 管理员" : ""}。</p>
      </div>
      <div class="actions">
        ${isAdminUser() ? '<button class="ghost" onclick="openAccountManager()">账号管理页</button>' : ""}
        ${state.session ? '<button class="ghost" onclick="logoutAccount()">退出登录</button>' : ""}
      </div>
    `;
    return;
  }
  const d = state.data;
  const m = metrics();
  saveContent.innerHTML = `
    <div class="save-note">
      <h3>${d.schoolName} · ${currentSchoolLevel().name}</h3>
      <p class="meta">账号：${activeUsername()}${isAdminUser() ? " · 管理员" : ""} · ${d.address} · 第${d.year}学年 ${d.month}月 · 最后保存：${d.savedAt || "当前会话"}</p>
    </div>
    <div class="save-summary">
      <div class="stat"><span>资金</span><b>${displayMoney(d.money)}</b></div>
      <div class="stat"><span>声望</span><b>${d.reputation}</b></div>
      <div class="stat"><span>学生</span><b>${m.students}</b></div>
      <div class="stat"><span>教师</span><b>${m.teachers}</b></div>
    </div>
    <div class="actions">
      ${isAdminUser() ? '<button class="ghost" onclick="openAccountManager()">账号管理页</button>' : ""}
      <button class="ghost" onclick="logoutAccount()">退出登录</button>
    </div>
  `;
}

function clearSave() {
  if (activeUsername()) localStorage.removeItem(currentSaveKey());
  OLD_SAVE_KEYS.forEach((key) => localStorage.removeItem(key));
  state.data = null;
  state.tab = "campus";
  if (state.timer) clearInterval(state.timer);
  $("#saveModal").hidden = true;
  render();
  setSpeed("pause");
}

function render() {
  if (!state.session) {
    renderAuth();
    return;
  }
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
  if (!state.session) {
    renderAuth();
    return;
  }
  createInitialSave({
    schoolName: $("#createSchoolName")?.value.trim() || "新星大学",
    address: $("#createAddress")?.value || ADDRESSES[0],
    logo: $("#createLogo")?.value.trim() || "星",
  });
  state.tab = "campus";
  render();
  setSpeed(state.speed);
}

function renderDisciplines() {
  const levelIndex = state.data.schoolLevelIndex || 0;
  const rows = state.data.disciplines.map((d) => {
    const majors = state.data.majors.filter((m) => m.disciplineId === d.id);
    const degreeTarget = d.degreeLevel === "博士点" ? "" : d.degreeLevel === "硕士点" ? "博士点" : "硕士点";
    const req = degreeTarget ? degreeRequirement(degreeTarget) : null;
    return `
      <article class="item">
        <div class="item-top">
          <div>
            <h3>${d.name}</h3>
            <div class="meta">${d.degreeLevel} · 学科排名 ${d.rank} · 实力 ${d.strength} · 科研 ${d.research}</div>
            <div class="meta">专业：${majors.map((m) => `${m.name}（${m.students}人，${cohortSummary(m)}）`).join("、") || "暂无"}</div>
            <div class="meta">硕士生 ${d.gradStudents?.master || 0} · 博士生 ${d.gradStudents?.doctor || 0}</div>
            ${req ? `<div class="meta">申请${degreeTarget}要求：${degreeRequirementText(req)}</div>` : ""}
          </div>
          <span class="pill">第${d.rank}</span>
        </div>
        <div class="actions">
          <button class="primary" onclick="investDiscipline('${d.id}', 50000)">投入 ${money(50000)}</button>
          ${degreeTarget ? `<button class="ghost" onclick="applyDegree('${d.id}', '${degreeTarget}')">申请${degreeTarget}</button>` : ""}
        </div>
      </article>
    `;
  }).join("") || `<p class="meta">暂无学院，请先开设学院和专业。</p>`;
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">学科与专业</p><h2>开设学院</h2></div></div>
    <div class="item">
      <h3>开设学院</h3>
      <div class="form-grid">
        <select id="collegePreset" class="full" onchange="fillCollegePreset()">
          <option value="">选择学院模板</option>
          <option value="__custom__">自定义学院</option>
          ${COLLEGES.map((item) => {
            const need = collegeMinLevel(item);
            const locked = levelIndex < need;
            return `<option value="${item.name}" ${locked ? "disabled" : ""}>${item.name}${locked ? `（需${SCHOOL_LEVELS[need].name}）` : ""}</option>`;
          }).join("")}
        </select>
        <div id="customCollegeFields" class="form-grid full" hidden>
          <input id="customCollegeName" class="full" placeholder="自定义学院名称">
          <input id="customCollegeMajors" class="full" placeholder="专业名称，用逗号分隔">
        </div>
        <div id="majorPreview" class="major-preview full"><span class="meta">选择学院后，这里会逐条列出专业。</span></div>
        <button class="secondary full" onclick="openDiscipline()">开设学院</button>
      </div>
    </div>
    <div class="list">${rows}</div>
  `;
}

function fillCollegePreset() {
  const presetSelect = $("#collegePreset");
  const customWrap = $("#customCollegeFields");
  const preview = $("#majorPreview");
  if (!presetSelect || !customWrap || !preview) return;
  const value = presetSelect.value;
  const custom = value === "__custom__";
  customWrap.hidden = !custom;
  if (custom) {
    preview.innerHTML = `<span class="meta">填写自定义学院和专业后开设。</span>`;
    return;
  }
  const item = COLLEGES.find((college) => college.name === value);
  preview.innerHTML = item ? item.majors.map((major) => `<div class="major-row">${major}</div>`).join("") : `<span class="meta">选择学院后，这里会逐条列出专业。</span>`;
}

function openDiscipline() {
  try {
    const value = $("#collegePreset")?.value || "";
    const isCustom = value === "__custom__";
    const preset = COLLEGES.find((college) => college.name === value);
    if (!isCustom && !preset) return msg("请先选择学院模板。", true);
    if (!isCustom && preset && (state.data.schoolLevelIndex || 0) < collegeMinLevel(preset)) {
      return msg(`办学层次不足，需要达到${SCHOOL_LEVELS[collegeMinLevel(preset)].name}。`, true);
    }
    const name = (isCustom ? $("#customCollegeName")?.value : preset?.name || "").trim();
    if (!name) return msg("请输入学院名称。", true);
    if (state.data.disciplines.some((d) => d.name === name)) return msg("该学院已存在。", true);
    const majors = isCustom
      ? String($("#customCollegeMajors")?.value || "").split(/[，,、]/).map((item) => item.trim()).filter(Boolean).slice(0, 8)
      : (preset?.majors || []);
    if (!majors.length) return msg("请至少填写一个专业。", true);
    const cost = 180000 + Math.max(0, majors.length - 1) * 25000;
    if (!spend(cost, "学科建设", `开设${name}`)) return;
    const discipline = { id: uid(), name, degreeLevel: (state.data.schoolLevelIndex || 0) >= 1 ? "本科" : "专科", rank: 260, strength: 24, research: 10, gradStudents: { master: 0, doctor: 0 } };
    state.data.disciplines.push(discipline);
    majors.forEach((major) => state.data.majors.push({ id: uid(), disciplineId: discipline.id, disciplineName: name, name: major, students: 0, quality: 50, cohorts: [], pendingCount: 0 }));
    save();
    render();
  } catch (error) {
    console.error(error);
    msg("自定义学院创建失败，请重新填写后再试。", true);
  }
}

function disciplineOptions(selected) {
  if (!state.data.disciplines.length) return `<option value="">请先开设学院</option>`;
  return state.data.disciplines.map((d) => `<option value="${d.name}" ${d.name === selected ? "selected" : ""}>${d.name} · ${d.degreeLevel}</option>`).join("");
}

function majorOptionsForDiscipline(disciplineName, selectedMajorId = "") {
  const majors = state.data.majors.filter((m) => !disciplineName || m.disciplineName === disciplineName);
  if (!majors.length) return `<option value="">请先开设专业</option>`;
  return majors.map((m) => `<option value="${m.id}" ${String(m.id) === String(selectedMajorId) ? "selected" : ""}>${m.disciplineName} · ${m.name}</option>`).join("");
}

function graduateDisciplineOptions(selected) {
  const items = state.data.disciplines.filter((d) => !["本科", "专科"].includes(d.degreeLevel));
  if (!items.length) return `<option value="">请先申请硕博点</option>`;
  return items.map((d) => `<option value="${d.name}" ${d.name === selected ? "selected" : ""}>${d.name} · ${d.degreeLevel}</option>`).join("");
}

function syncJobMajorOptions() {
  const discipline = $("#jobDiscipline")?.value || "";
  const select = $("#jobMajor");
  if (!select) return;
  select.innerHTML = `<option value="">不限专业</option>${majorOptionsForDiscipline(discipline, state.data.ui.selectedJobMajor || "")}`;
}

function rememberTalentSelections() {
  state.data.ui.selectedJobDiscipline = $("#jobDiscipline")?.value || state.data.ui.selectedJobDiscipline || "";
  state.data.ui.selectedJobMajor = $("#jobMajor")?.value || "";
  state.data.ui.selectedStudentMajor = $("#studentMajor")?.value || state.data.ui.selectedStudentMajor || "";
  state.data.ui.selectedGradDiscipline = $("#gradDiscipline")?.value || state.data.ui.selectedGradDiscipline || "";
  state.data.ui.selectedGradLevel = $("#gradLevel")?.value || state.data.ui.selectedGradLevel || "master";
}

function titlePoolForLevel(level) {
  if (level === "普通") return ["助教", "讲师", "讲师", "讲师"];
  if (level === "优秀") return ["讲师", "讲师", "副教授", "副教授"];
  return ["教授", "杰出教授", "教授", "院士"];
}

function renderTalent() {
  const selectedJobDiscipline = state.data.ui.selectedJobDiscipline || state.data.disciplines[0]?.name || "";
  const selectedJobMajor = state.data.ui.selectedJobMajor || "";
  const selectedStudentMajor = state.data.ui.selectedStudentMajor || state.data.majors[0]?.id || "";
  const selectedGradDiscipline = state.data.ui.selectedGradDiscipline || state.data.disciplines.find((d) => !["本科", "专科"].includes(d.degreeLevel))?.name || "";
  const selectedGradLevel = state.data.ui.selectedGradLevel || "master";
  const eligibleTeachers = state.data.teachers.filter(isPromotionEligible);
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">人才系统</p><h2>招聘、招生、晋升</h2></div></div>
    <div class="item">
      <h3>发布教师招聘公告</h3>
      <div class="form-grid">
        <input id="jobTitle" class="full" value="教师招聘公告">
        <select id="jobDiscipline" onchange="state.data.ui.selectedJobDiscipline=this.value; state.data.ui.selectedJobMajor=''; syncJobMajorOptions();">${disciplineOptions(selectedJobDiscipline)}</select>
        <select id="jobMajor"><option value="">不限专业</option>${majorOptionsForDiscipline(selectedJobDiscipline, selectedJobMajor)}</select>
        <select id="jobLevel"><option>普通</option><option>优秀</option><option>杰出</option></select>
        <input id="jobSalary" type="number" value="120000" min="60000" step="10000">
        <input id="jobBudget" type="number" value="25000" min="8000" step="1000">
        <input id="jobPositions" type="number" value="2" min="1" max="12" step="1" placeholder="岗位数">
        <button class="primary full" onclick="createJobPost()">发布公告并接收简历</button>
      </div>
    </div>
    <div class="item">
      <h3>本科招生</h3>
      <div class="form-grid">
        <select id="studentMajor" class="full" onchange="state.data.ui.selectedStudentMajor=this.value">${majorOptionsForDiscipline("", selectedStudentMajor)}</select>
        <select id="studentLevel"><option>普通</option><option>优秀</option><option>拔尖</option></select>
        <input id="studentCount" type="number" value="40" min="10" step="10">
        <button class="secondary" onclick="recruitStudents()">招生</button>
      </div>
      <div class="meta">每年 6 月招生，9 月新生入校，大四学生于 6 月毕业。</div>
    </div>
    <div class="item">
      <h3>硕博招生</h3>
      <div class="form-grid">
        <select id="gradDiscipline">${graduateDisciplineOptions(selectedGradDiscipline)}</select>
        <select id="gradLevel"><option value="master" ${selectedGradLevel === "master" ? "selected" : ""}>硕士生</option><option value="doctor" ${selectedGradLevel === "doctor" ? "selected" : ""}>博士生</option></select>
        <input id="gradCount" type="number" value="12" min="2" step="2">
        <button class="secondary" onclick="recruitGradStudents()">招生</button>
      </div>
    </div>
    <h3>招聘公告与简历</h3>
    <div class="list">${state.data.jobPosts.map(renderPost).join("") || `<p class="meta">暂无招聘公告。</p>`}</div>
    <h3 style="margin-top:14px">教师晋升</h3>
    <div class="list">
      ${eligibleTeachers.map((t) => {
        const req = promotionRequirement(t);
        return `
          <article class="item">
            <div class="item-top">
              <div><h3>${t.name} · ${t.title} → ${req.to}</h3><div class="meta">${t.disciplineName} · ${t.majorName || "不限专业"} · 教学 ${t.teaching} · 科研 ${t.research} · 论文 ${t.papers || 0} · 晋升点 ${t.promotion || 0}</div></div>
              <span class="pill">${money(t.salary)}/年</span>
            </div>
            <div class="actions"><button class="ghost" onclick="promoteTeacher('${t.id}')">申请晋升</button></div>
          </article>
        `;
      }).join("") || `<p class="meta">暂无符合晋升条件的教师。</p>`}
    </div>
  `;
  syncJobMajorOptions();
}

function renderPost(post) {
  const remaining = Math.max(0, (post.positions || 1) - (post.hiredCount || 0));
  return `
    <article class="item">
      <div class="item-top">
        <div><h3>${post.title}</h3><div class="meta">${post.discipline} · ${post.majorName || "不限专业"} · ${post.level}</div><div class="meta">岗位 ${post.positions || 1} 个 · 已录用 ${post.hiredCount || 0} 人 · 剩余 ${remaining} 个</div></div>
        <span class="pill">${post.applications.length} 份简历</span>
      </div>
      <div class="list" style="margin-top:10px">
        ${post.applications.map((app) => `
          <div class="item">
            <div class="item-top">
              <div><h3>${app.name} · ${app.title}</h3><div class="meta">教学 ${app.teaching} · 科研 ${app.research} · 匹配 ${app.fit} · 论文 ${app.papers || 0}</div><div class="meta">${app.bio}</div></div>
              <span class="pill warn">待筛选</span>
            </div>
            <div class="actions">
              <button class="primary" ${remaining <= 0 ? "disabled" : ""} onclick="hireApplication('${post.id}', '${app.id}')">录用</button>
              <button class="ghost" onclick="rejectApplication('${post.id}', '${app.id}')">删除简历</button>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function createJobPost() {
  rememberTalentSelections();
  const title = $("#jobTitle")?.value || "教师招聘公告";
  const discipline = $("#jobDiscipline")?.value || "";
  if (!discipline) return msg("请先开设学院。", true);
  const major = state.data.majors.find((m) => String(m.id) === String($("#jobMajor")?.value || ""));
  const level = $("#jobLevel")?.value || "普通";
  const salary = Number($("#jobSalary")?.value || 120000);
  const budget = Number($("#jobBudget")?.value || 25000);
  const positions = clamp(Number($("#jobPositions")?.value || 1), 1, 12);
  const currentTeachers = state.data.teachers.filter((t) => t.disciplineName === discipline && (!major || t.majorName === major.name)).length;
  const studentLoad = state.data.majors.filter((m) => m.disciplineName === discipline && (!major || m.id === major.id)).reduce((sum, m) => sum + m.students, 0);
  const maxByNeed = Math.max(1, Math.ceil(studentLoad / 120) + 2);
  if (currentTeachers + positions > maxByNeed) return msg(`该学院/专业当前最多还需要 ${Math.max(0, maxByNeed - currentTeachers)} 名教师。`, true);
  if (!spend(budget, "教师招聘", `发布${discipline}教师招聘公告`)) return;
  const bias = { 普通: 0, 优秀: 10, 杰出: 22 }[level] || 0;
  const applications = Array.from({ length: Math.max(4, positions * 3) }, () => {
    const teaching = clamp(40 + Math.floor(Math.random() * 35) + bias, 28, 99);
    const research = clamp(30 + Math.floor(Math.random() * 40) + bias, 20, 99);
    return {
      id: uid(),
      name: randomName(),
      title: titlePoolForLevel(level)[Math.floor(Math.random() * titlePoolForLevel(level).length)],
      teaching,
      research,
      papers: level === "杰出" ? 4 + Math.floor(Math.random() * 6) : level === "优秀" ? 1 + Math.floor(Math.random() * 3) : Math.floor(Math.random() * 2),
      fit: clamp(Math.round((teaching + research) / 2 + Math.random() * 10), 35, 99),
      salary: Math.round(salary * (0.9 + Math.random() * 0.25)),
      bio: "按公告投递简历，等待学校筛选。",
    };
  });
  state.data.jobPosts.unshift({
    id: uid(),
    title,
    discipline,
    majorId: major?.id || "",
    majorName: major?.name || "不限专业",
    level,
    positions,
    hiredCount: 0,
    applications,
  });
  save();
  render();
}

function removeJobPostIfDone(postId) {
  const post = state.data.jobPosts.find((item) => item.id === postId);
  if (!post) return;
  if ((post.hiredCount || 0) >= (post.positions || 1) || post.applications.length === 0) {
    state.data.jobPosts = state.data.jobPosts.filter((item) => item.id !== postId);
  }
}

function hireApplication(postId, appId) {
  const post = state.data.jobPosts.find((item) => item.id === postId);
  if (!post) return;
  if ((post.hiredCount || 0) >= (post.positions || 1)) return msg("该招聘公告岗位已录满。", true);
  const app = post.applications.find((item) => item.id === appId);
  if (!app) return;
  const onboarding = Math.max(12000, Math.round(app.salary * 0.18));
  if (!spend(onboarding, "教师录用", `录用${app.name}`)) return;
  state.data.teachers.push({
    id: uid(),
    name: app.name,
    title: app.title,
    disciplineName: post.discipline,
    majorName: post.majorName === "不限专业" ? "" : post.majorName,
    teaching: app.teaching,
    research: app.research,
    salary: app.salary,
    promotion: app.title === "院士" ? 200 : app.title === "杰出教授" ? 120 : app.title === "教授" ? 70 : app.title === "副教授" ? 35 : 12,
    papers: app.papers || 0,
  });
  post.hiredCount = (post.hiredCount || 0) + 1;
  post.applications = post.applications.filter((item) => item.id !== appId);
  state.data.teacherLevel = clamp(state.data.teacherLevel + 2, 0, 100);
  removeJobPostIfDone(postId);
  save();
  render();
}

function rejectApplication(postId, appId) {
  const post = state.data.jobPosts.find((item) => item.id === postId);
  if (!post) return;
  post.applications = post.applications.filter((item) => item.id !== appId);
  removeJobPostIfDone(postId);
  save();
  render();
}

function promoteTeacher(id) {
  const t = state.data.teachers.find((item) => item.id === id);
  const req = promotionRequirement(t);
  if (!req) return msg("该教师已达到最高职级。", true);
  if (!isPromotionEligible(t)) return msg(`晋升条件不足：晋升点 ${req.points} · 教学 ${req.teaching} · 科研 ${req.research} · 论文 ${req.papers}。`, true);
  if (!spend(req.cost, "教师晋升", `${t.name}晋升${req.to}`)) return;
  t.title = req.to;
  t.promotion -= req.points;
  t.teaching += 4;
  t.research += 5;
  save();
  render();
}

function renderFinance() {
  const d = state.data;
  const stockValue = d.stocks.reduce((sum, stock) => sum + stock.shares * stock.price, 0);
  const loanTotal = d.loans.reduce((sum, loan) => sum + loan.balance, 0);
  view.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">资金运作</p><h2>贷款、投资与学费</h2></div></div>
    <div class="market-grid">
      <div class="market-box"><p class="eyebrow">贷款余额</p><h3>${money(loanTotal)}</h3><div class="meta">每学期结算利息。</div></div>
      <div class="market-box"><p class="eyebrow">股票市值</p><h3>${money(stockValue)}</h3><div class="meta">管理员账号资金不受限制。</div></div>
    </div>
    <div class="item" style="margin-top:10px">
      <h3>学费设置</h3>
      <div class="form-grid">
        <input id="tuitionUndergrad" type="number" min="1000" step="100" value="${d.tuition.undergrad}">
        <input id="tuitionMaster" type="number" min="1000" step="100" value="${d.tuition.master}">
        <input id="tuitionDoctor" type="number" min="1000" step="100" value="${d.tuition.doctor}">
        <button class="primary full" onclick="saveTuitionSettings()">保存学费设置</button>
      </div>
    </div>
    <div class="item" style="margin-top:10px"><h3>学校贷款</h3><div class="actions"><button class="primary" onclick="takeLoan(100000)">贷款 ${money(100000)}</button><button class="secondary" onclick="takeLoan(300000)">贷款 ${money(300000)}</button><button class="ghost" onclick="repayLoan(100000)">还款 ${money(100000)}</button></div></div>
    <h3 style="margin-top:14px">股票投资</h3>
    <div class="list compact-list">
      ${d.stocks.map((stock) => `
        <article class="proposal-row">
          <div class="item-top">
            <div><h3>${stock.name}</h3><div class="meta">当前股价 ${money(stock.price)} · 风险 ${stock.risk} · 持仓 ${stock.shares} 股 · 市值 ${money(stock.shares * stock.price)}</div></div>
            <span class="pill">${stock.price >= stock.basePrice ? "上涨" : "波动"}</span>
          </div>
          <div class="actions"><button class="primary" onclick="buyStock('${stock.id}', 10)">买入10股</button><button class="secondary" onclick="buyStock('${stock.id}', 50)">买入50股</button><button class="ghost" onclick="sellStock('${stock.id}', 10)">卖出10股</button><button class="ghost" onclick="sellStock('${stock.id}', 50)">卖出50股</button></div>
        </article>
      `).join("")}
    </div>
    <h3 style="margin-top:14px">财务流水</h3>
    <div class="list compact-list">
      ${d.finance.slice(0, 5).map(renderFinanceRow).join("") || `<p class="meta">暂无财务流水。</p>`}
    </div>
  `;
}

function setSpeed(speed) {
  if (speed === "slow") speed = "normal";
  state.speed = speed;
  localStorage.setItem(SPEED_KEY, speed);
  document.querySelectorAll(".speed").forEach((btn) => btn.classList.toggle("active", btn.dataset.speed === speed));
  if (state.timer) clearInterval(state.timer);
  if (!state.data || !state.session) return;
  const map = { pause: 0, normal: 15000, fast: 5000 };
  if (map[speed]) state.timer = setInterval(() => advanceTime(1), map[speed]);
}

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.tab = btn.dataset.tab;
    render();
  });
});
document.querySelectorAll(".speed").forEach((btn) => btn.addEventListener("click", () => setSpeed(btn.dataset.speed)));
$("#openSaveBtn").addEventListener("click", openSaveModal);
$("#closeSaveBtn").addEventListener("click", closeSaveModal);
$("#manualSaveBtn").addEventListener("click", manualSave);
$("#clearSaveBtn").addEventListener("click", clearSave);
$("#closeEventBtn").addEventListener("click", closeEventModal);
$("#laterEventBtn").addEventListener("click", closeEventModal);
$("#eventModal").addEventListener("click", (event) => {
  if (event.target.id === "eventModal") closeEventModal();
});
$("#saveModal").addEventListener("click", (event) => {
  if (event.target.id === "saveModal") closeSaveModal();
});

initApp();
