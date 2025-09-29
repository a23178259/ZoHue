// login.js
// 使用第三方 Firebase後端系統 導入登入、註冊功能
import {
  registerUser,
  loginUser,
  loginWithGoogle,
  loginWithGithub,
  auth,
} from "./auth.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Toast 功能
function showToast(message, type = "info", title = "通知") {
  const toast = document.querySelector("#authToast");
  const toastIcon = document.querySelector("#toastIcon");
  const toastTitle = document.querySelector("#toastTitle");
  const toastBody = document.querySelector("#toastBody");
  const toastHeader = toast.querySelector(".toast-header");

  // 設定內容
  toastTitle.textContent = title;
  toastBody.textContent = message;

  // 清除之前的樣式
  toastHeader.className = "toast-header";
  toastIcon.className = "me-2";

  // 根據類型設定樣式和圖標
  switch (type) {
    case "success":
      toastHeader.classList.add("bg-success", "text-white");
      toastIcon.classList.add("fas", "fa-check-circle", "text-white");
      break;
    case "error":
      toastHeader.classList.add("bg-danger", "text-white");
      toastIcon.classList.add("fas", "fa-exclamation-circle", "text-white");
      break;
    case "warning":
      toastHeader.classList.add("bg-warning", "text-dark");
      toastIcon.classList.add("fas", "fa-exclamation-triangle", "text-dark");
      break;
    default:
      toastHeader.classList.add("bg-primary", "text-white");
      toastIcon.classList.add("fas", "fa-info-circle", "text-white");
  }

  // 顯示 Toast
  const bsToast = new bootstrap.Toast(toast, {
    autohide: true,
    delay: type === "error" ? 5000 : 3000,
  });
  bsToast.show();
}

// 檢查用戶登入狀態
function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    console.log("認證狀態變化:", user);
    updateAuthUI(!!user, user);
  });
}

// 更新認證相關的UI
function updateAuthUI(isLoggedIn, user = null) {
  const mobileLoginBtn = document.getElementById("mobileLoginBtn");
  const mobileMemberBtn = document.getElementById("mobileMemberBtn");
  const desktopLoginBtn = document.getElementById("desktopLoginBtn");
  const desktopMemberBtn = document.getElementById("desktopMemberBtn");
  const mobileLogoutBtn = document.querySelector("#mobileLogoutBtn");
  const memberOnlyItems = document.querySelectorAll(".member-only-item");

  console.log("更新UI，登入狀態:", isLoggedIn);

  if (isLoggedIn) {
    // 顯示會員中心按鈕
    if (mobileLoginBtn) mobileLoginBtn.classList.add("d-none");
    if (mobileMemberBtn) mobileMemberBtn.classList.remove("d-none");
    if (desktopLoginBtn) desktopLoginBtn.classList.add("d-none");
    if (desktopMemberBtn) desktopMemberBtn.classList.remove("d-none");

    // 登入/註冊改為登出
    if (mobileLogoutBtn) {
      mobileLogoutBtn.className =
        "btn btn-secondaryL fw-semibold rounded-pill w-100";
      mobileLogoutBtn.innerHTML =
        '<i class="fas fa-sign-out-alt me-2"></i>登出';
      mobileLogoutBtn.onclick = handleLogout;
    }

    // 顯示漢堡包選單中的會員登入項目
    memberOnlyItems.forEach((item) => {
      item.classList.remove("d-none");
    });

    if (user && user.displayName) {
      const userNameElements = document.querySelectorAll(".user-display-name");
      userNameElements.forEach((el) => {
        el.textContent = user.displayName;
      });
    }

    console.log("UI已切換為登入狀態");
  } else {
    // 顯示登入按鈕
    if (mobileLoginBtn) mobileLoginBtn.classList.remove("d-none");
    if (mobileMemberBtn) mobileMemberBtn.classList.add("d-none");
    if (desktopLoginBtn) desktopLoginBtn.classList.remove("d-none");
    if (desktopMemberBtn) desktopMemberBtn.classList.add("d-none");

    // 登出改為登入/註冊
    if (mobileLogoutBtn) {
      mobileLogoutBtn.className =
        "btn btn-secondaryL fw-semibold rounded-pill w-100";
      mobileLogoutBtn.innerHTML = "登入/註冊";
      mobileLogoutBtn.onclick = openLoginModal;
    }

    // 隱藏漢堡包選單中的會員專屬項目
    memberOnlyItems.forEach((item) => {
      item.classList.add("d-none");
    });

    console.log("UI已切換為未登入狀態");
  }
}

// 處理會員中心菜單項目點擊
function handleMemberMenuClick(event, element) {
  // 如果是登出按鈕，不處理選中狀態
  if (element.classList.contains("logout-item")) {
    return;
  }

  // 防止鏈接默認行為
  event.preventDefault();

  // 找到當前下拉菜單中的所有項目
  const dropdown = element.closest(".member-dropdown");
  const allItems = dropdown.querySelectorAll(
    ".dropdown-item:not(.logout-item)"
  );

  // 移除所有項目的選中狀態
  allItems.forEach((item) => {
    item.classList.remove("selected", "active");
  });

  // 為當前點擊的項目添加選中狀態
  element.classList.add("selected");

  console.log("選中項目:", element.textContent.trim());
}

// 登出處理函數
async function handleLogout() {
  if (confirm("確定要登出嗎？")) {
    try {
      await signOut(auth);
      showToast("已成功登出", "success", "登出成功");
      console.log("登出成功");
    } catch (error) {
      console.error("登出失敗:", error);
      showToast("登出時發生錯誤", "error", "登出失敗");
    }
  }
}

// 打開登入模態框的函數
function openLoginModal() {
  const modal = new bootstrap.Modal(document.querySelector("#loginModal"));
  const body = document.body;
  body.classList.add("modal-open-custom");
  modal.show();
}

// 切換密碼顯示/隱藏
function togglePassword(inputId) {
  const input = document.querySelector(`#${inputId}`);
  const icon = document.querySelector(`#${inputId}Icon`);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Google 登入處理
async function handleGoogleLogin() {
  console.log("Google 登入被點擊");
  try {
    const result = await loginWithGoogle();
    console.log("Google 登入成功:", result.user);
    showToast("Google 登入成功！歡迎回來", "success", "登入成功");

    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#loginModal")
    );
    if (modal) {
      modal.hide();
    }

    // UI 更新會自動通過 onAuthStateChanged 處理
  } catch (error) {
    console.error("Google 登入失敗:", error);

    let errorMessage = "Google 登入失敗";
    switch (error.code) {
      case "auth/popup-closed-by-user":
        errorMessage = "登入窗口已關閉，請重新嘗試";
        break;
      case "auth/popup-blocked":
        errorMessage = "彈出窗口被阻擋，請允許彈出窗口後重試";
        break;
      default:
        errorMessage = `Google 登入失敗：${error.message}`;
    }

    showToast(errorMessage, "error", "登入失敗");
  }
}

// GitHub 登入處理
async function handleGithubLogin() {
  console.log("GitHub 登入被點擊");
  try {
    const result = await loginWithGithub();
    console.log("GitHub 登入成功:", result.user);
    showToast("GitHub 登入成功！歡迎回來", "success", "登入成功");

    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#loginModal")
    );
    if (modal) {
      modal.hide();
    }

    // UI 更新會自動通過 onAuthStateChanged 處理
  } catch (error) {
    console.error("GitHub 登入失敗:", error);

    let errorMessage = "GitHub 登入失敗";
    switch (error.code) {
      case "auth/popup-closed-by-user":
        errorMessage = "登入窗口已關閉，請重新嘗試";
        break;
      case "auth/popup-blocked":
        errorMessage = "彈出窗口被阻擋，請允許彈出窗口後重試";
        break;
      default:
        errorMessage = `GitHub 登入失敗：${error.message}`;
    }

    showToast(errorMessage, "error", "登入失敗");
  }
}

// 掛載到 window
window.openLoginModal = openLoginModal;
window.togglePassword = togglePassword;
window.handleLogout = handleLogout;

// DOM 載入完成後的處理
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 載入完成");

  // 檢查登入狀態 - 這是新增的
  checkAuthState();

  const loginModal = document.querySelector("#loginModal");
  const body = document.body;

  // 模態框事件處理
  loginModal.addEventListener("show.bs.modal", function () {
    const allElements = document.querySelectorAll(
      "body > *:not(.modal):not(.modal-backdrop)"
    );
    allElements.forEach((element) => {
      element.style.filter = "blur(15px)";
      element.style.transition = "filter 0.3s ease";
    });

    setTimeout(() => {
      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
    }, 100);
  });

  loginModal.addEventListener("hide.bs.modal", function () {
    const allElements = document.querySelectorAll("body > *");
    allElements.forEach((element) => {
      element.style.filter = "";
      element.style.transition = "";
    });
    body.classList.remove("modal-open-custom");
  });

  // 登入表單處理
  document
    .querySelector("#loginForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email || !password) {
        showToast("請輸入電子郵件和密碼", "warning", "輸入不完整");
        return;
      }

      try {
        const userCredential = await loginUser(email, password);
        console.log("登入成功:", userCredential.user);
        showToast("登入成功！歡迎回來", "success", "登入成功");

        const modal = bootstrap.Modal.getInstance(loginModal);
        if (modal) {
          modal.hide();
        }

        // UI 更新會自動通過 onAuthStateChanged 處理
      } catch (error) {
        console.error("登入失敗:", error);

        let errorMessage = "登入失敗";
        switch (error.code) {
          case "auth/user-not-found":
            errorMessage = "找不到此帳號，請先註冊或檢查 Email 是否正確";
            break;
          case "auth/wrong-password":
          case "auth/invalid-credential":
            errorMessage = "密碼錯誤或帳號不存在，請檢查登入資訊";
            break;
          case "auth/invalid-email":
            errorMessage = "請輸入有效的電子郵件地址";
            break;
          default:
            errorMessage = `登入失敗：${error.message}`;
        }

        showToast(errorMessage, "error", "登入失敗");
      }
    });

  // 註冊表單處理
  document
    .querySelector("#registerForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      if (!name || !email || !password || !confirmPassword) {
        showToast("請填寫所有必填欄位", "warning", "輸入不完整");
        return;
      }

      if (password !== confirmPassword) {
        showToast("密碼和確認密碼不一致", "warning", "密碼不符");
        return;
      }

      if (password.length < 6) {
        showToast("密碼至少需要6個字元", "warning", "密碼太短");
        return;
      }

      try {
        const userCredential = await registerUser(email, password);
        console.log("註冊成功:", userCredential.user);
        showToast("註冊成功！現在可以使用此帳號登入", "success", "註冊成功");

        const modal = bootstrap.Modal.getInstance(loginModal);
        if (modal) {
          modal.hide();
        }

        this.reset();

        // UI 更新會自動通過 onAuthStateChanged 處理
      } catch (error) {
        console.error("註冊失敗:", error);

        let errorMessage = "註冊失敗";
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "此電子郵件已被註冊，請使用其他 Email 或嘗試登入";
            break;
          case "auth/invalid-email":
            errorMessage = "請輸入有效的電子郵件地址";
            break;
          case "auth/weak-password":
            errorMessage =
              "密碼強度不足，請使用更複雜的密碼（至少包含字母和數字）";
            break;
          default:
            errorMessage = `註冊失敗：${error.message}`;
        }

        showToast(errorMessage, "error", "註冊失敗");
      }
    });

  // 社群登入按鈕事件監聽器
  const googleLoginBtn = document.querySelector("#googleLoginBtn");
  const githubLoginBtn = document.querySelector("#githubLoginBtn");
  const googleRegisterBtn = document.querySelector("#googleRegisterBtn");
  const githubRegisterBtn = document.querySelector("#githubRegisterBtn");

  if (googleLoginBtn) {
    googleLoginBtn.addEventListener("click", handleGoogleLogin);
    console.log("Google 登入按鈕事件已綁定");
  }

  if (githubLoginBtn) {
    githubLoginBtn.addEventListener("click", handleGithubLogin);
    console.log("GitHub 登入按鈕事件已綁定");
  }

  if (googleRegisterBtn) {
    googleRegisterBtn.addEventListener("click", handleGoogleLogin);
    console.log("Google 註冊按鈕事件已綁定");
  }

  if (githubRegisterBtn) {
    githubRegisterBtn.addEventListener("click", handleGithubLogin);
    console.log("GitHub 註冊按鈕事件已綁定");
  }

  // 備用方案
  if (!googleLoginBtn && !googleRegisterBtn) {
    console.log("使用備用方案綁定 Google 按鈕");
    const googleBtns = document.querySelectorAll(".social-btn .fa-google");
    googleBtns.forEach((icon, index) => {
      const btn = icon.closest("button");
      if (btn) {
        btn.addEventListener("click", handleGoogleLogin);
        console.log(`Google 按鈕 ${index + 1} 事件已綁定`);
      }
    });
  }

  if (!githubLoginBtn && !githubRegisterBtn) {
    console.log("使用備用方案綁定 GitHub 按鈕");
    const githubBtns = document.querySelectorAll(".social-btn .fa-github");
    githubBtns.forEach((icon, index) => {
      const btn = icon.closest("button");
      if (btn) {
        btn.addEventListener("click", handleGithubLogin);
        console.log(`GitHub 按鈕 ${index + 1} 事件已綁定`);
      }
    });
  }

  // 添加會員中心菜單項目點擊事件監聽器
  function initMemberMenuEvents() {
    const memberDropdowns = document.querySelectorAll(".member-dropdown");

    memberDropdowns.forEach((dropdown) => {
      const menuItems = dropdown.querySelectorAll(
        ".dropdown-item:not(.logout-item)"
      );

      menuItems.forEach((item) => {
        item.addEventListener("click", function (event) {
          handleMemberMenuClick(event, this);
        });
      });
    });
  }

  // 初始化會員中心菜單事件
  initMemberMenuEvents();
});
