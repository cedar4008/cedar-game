const ACCOUNTS_KEY = "cedar_game_accounts_v1";
const SESSION_KEY = "cedar_game_session_v1";
const SAVE_PREFIX = "cedar_game_save_v4_school_year_";
const ADMIN_USERNAME = "cedar004";

const root = document.querySelector("#accountApp");

function nowText() {
  return new Date().toLocaleString("zh-CN", { hour12: false });
}

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function loadAccounts() {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    return raw ? normalizeAccounts(JSON.parse(raw)) : [];
  } catch {
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(normalizeAccounts(accounts)));
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
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

function render() {
  const session = loadSession();
  const accounts = loadAccounts();
  if (!session || session.role !== "admin" || session.username !== ADMIN_USERNAME) {
    root.innerHTML = `
      <div class="section-head"><div><p class="eyebrow">账号管理</p><h2>仅管理员可访问</h2></div></div>
      <div class="item">
        <p class="meta">请先用管理员账号登录主游戏页面，再进入这里。</p>
        <div class="actions">
          <button class="primary" onclick="window.location.href='index.html'">返回游戏</button>
        </div>
      </div>
    `;
    return;
  }

  root.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">账号管理</p><h2>管理员面板</h2></div></div>
    <div class="item">
      <p class="meta">当前管理员：${session.username}</p>
      <div class="actions">
        <button class="primary" onclick="window.location.href='index.html'">返回游戏</button>
        <button class="ghost" onclick="logout()">退出登录</button>
      </div>
    </div>
    <div class="item">
      <h3>待审核账号</h3>
      <div class="account-list">
        ${accounts.filter((account) => account.status === "pending").map((account) => `
          <div class="account-row">
            <div class="item-top">
              <div>
                <h3>${account.username}</h3>
                <div class="account-meta">状态：待审核</div>
                <div class="account-meta">创建时间：${account.createdAt || "-"}</div>
              </div>
              <span class="pill warn">待审核</span>
            </div>
            <div class="actions">
              <button class="primary" onclick="approveAccount('${account.id}')">审核通过</button>
              <button class="ghost" onclick="rejectAccount('${account.id}')">驳回</button>
              <button class="danger" onclick="deleteAccount('${account.id}')">删除账号</button>
            </div>
          </div>
        `).join("") || '<p class="meta">暂无待审核账号。</p>'}
      </div>
    </div>
    <div class="item">
      <h3>管理员创建普通账号</h3>
      <div class="form-grid">
        <input id="newUsername" class="full" placeholder="账号" maxlength="24">
        <input id="newPassword" class="full" type="password" placeholder="密码" maxlength="32">
        <button class="primary" onclick="createAccount()">创建账号</button>
      </div>
    </div>
    <div class="item">
      <h3>账号列表</h3>
      <div class="account-list">
        ${accounts.map((account) => `
          <div class="account-row">
            <div class="item-top">
              <div>
                <h3>${account.username}</h3>
                <div class="account-meta">角色：${account.role === "admin" ? "管理员" : "普通用户"}</div>
                <div class="account-meta">状态：${account.status === "approved" ? "已通过" : account.status === "pending" ? "待审核" : "已驳回"}</div>
                <div class="account-meta">创建时间：${account.createdAt || "-"}</div>
                ${account.approvedAt ? `<div class="account-meta">审核时间：${account.approvedAt}</div>` : ""}
              </div>
              <span class="pill">${account.role === "admin" ? "管理员" : "用户"}</span>
            </div>
            <div class="actions">
              ${account.role !== "admin" && account.status !== "approved" ? `<button class="primary" onclick="approveAccount('${account.id}')">通过</button>` : ""}
              ${account.role !== "admin" && account.status !== "rejected" ? `<button class="ghost" onclick="rejectAccount('${account.id}')">驳回</button>` : ""}
              <button class="danger" onclick="deleteAccount('${account.id}')">删除账号</button>
            </div>
          </div>
        `).join("") || '<p class="meta">暂无账号。</p>'}
      </div>
    </div>
  `;
}

function createAccount() {
  const accounts = loadAccounts();
  const username = normalizeUsername(document.querySelector("#newUsername")?.value || "");
  const password = String(document.querySelector("#newPassword")?.value || "");
  if (!username || !password) return;
  if (username === ADMIN_USERNAME) return;
  if (accounts.some((account) => account.username === username)) return;
  accounts.push({ id: uid(), username, password, role: "user", status: "approved", createdAt: nowText(), approvedAt: nowText() });
  saveAccounts(accounts);
  render();
}

function approveAccount(id) {
  const accounts = loadAccounts();
  const account = accounts.find((item) => item.id === id);
  if (!account) return;
  if (account.username === ADMIN_USERNAME) account.role = "admin";
  account.status = "approved";
  account.approvedAt = nowText();
  saveAccounts(accounts);
  render();
}

function rejectAccount(id) {
  const accounts = loadAccounts();
  const account = accounts.find((item) => item.id === id);
  if (!account || account.username === ADMIN_USERNAME) return;
  account.status = "rejected";
  account.approvedAt = "";
  saveAccounts(accounts);
  render();
}

function deleteAccount(id) {
  const accounts = loadAccounts();
  const target = accounts.find((item) => item.id === id);
  if (!target) return;
  if (target.username === ADMIN_USERNAME) return;
  saveAccounts(accounts.filter((item) => item.id !== id));
  localStorage.removeItem(`${SAVE_PREFIX}${target.username}`);
  const session = loadSession();
  if (session && session.username === target.username) {
    localStorage.removeItem(SESSION_KEY);
  }
  render();
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "index.html";
}

render();
