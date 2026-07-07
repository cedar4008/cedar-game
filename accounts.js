const ACCOUNTS_KEY = "cedar_game_accounts_v1";
const SESSION_KEY = "cedar_game_session_v1";
const SAVE_PREFIX = "cedar_game_save_v4_school_year_";

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
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function render() {
  const session = loadSession();
  const accounts = loadAccounts();
  if (!session || session.role !== "admin") {
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
      <h3>新建账号</h3>
      <div class="form-grid">
        <input id="newUsername" class="full" placeholder="账号" maxlength="24">
        <input id="newPassword" class="full" type="password" placeholder="密码" maxlength="32">
        <select id="newRole">
          <option value="user">普通用户</option>
          <option value="admin">管理员</option>
        </select>
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
                <div class="account-meta">创建时间：${account.createdAt || "-"}</div>
              </div>
              <span class="pill">${account.role === "admin" ? "管理员" : "用户"}</span>
            </div>
            <div class="actions">
              <button class="ghost" onclick="toggleRole('${account.id}')">${account.role === "admin" ? "改为普通用户" : "设为管理员"}</button>
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
  const username = String(document.querySelector("#newUsername")?.value || "").trim().slice(0, 24);
  const password = String(document.querySelector("#newPassword")?.value || "");
  const role = document.querySelector("#newRole")?.value || "user";
  if (!username || !password) return;
  if (accounts.some((account) => account.username === username)) return;
  accounts.push({ id: uid(), username, password, role, createdAt: nowText() });
  saveAccounts(accounts);
  render();
}

function toggleRole(id) {
  const accounts = loadAccounts();
  const account = accounts.find((item) => item.id === id);
  if (!account) return;
  const adminCount = accounts.filter((item) => item.role === "admin").length;
  if (account.role === "admin" && adminCount <= 1) return;
  account.role = account.role === "admin" ? "user" : "admin";
  saveAccounts(accounts);
  const session = loadSession();
  if (session && session.username === account.username) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ username: account.username, role: account.role }));
  }
  render();
}

function deleteAccount(id) {
  const accounts = loadAccounts();
  const target = accounts.find((item) => item.id === id);
  if (!target) return;
  const adminCount = accounts.filter((item) => item.role === "admin").length;
  if (target.role === "admin" && adminCount <= 1) return;
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
