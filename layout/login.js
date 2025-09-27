// login.js
// 使用第三方 Firebase後端系統 導入登入、註冊功能
import {
  registerUser,
  loginUser,
  loginWithGoogle,
  loginWithGithub,
} from "../auth.js";

// 打開登入模態框的函數
function openLoginModal() {
  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  const body = document.body;
  body.classList.add("modal-open-custom");
  modal.show();
}

// 切換密碼顯示/隱藏
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(inputId + "Icon");

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
    alert("Google 登入成功！");

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("loginModal")
    );
    if (modal) {
      modal.hide();
    }
  } catch (error) {
    console.error("Google 登入失敗:", error);

    let errorMessage = "Google 登入失敗";
    switch (error.code) {
      case "auth/popup-closed-by-user":
        errorMessage = "登入窗口已關閉";
        break;
      case "auth/popup-blocked":
        errorMessage = "彈出窗口被阻擋，請允許彈出窗口";
        break;
      default:
        errorMessage = "Google 登入失敗: " + error.message;
    }

    alert(errorMessage);
  }
}

// GitHub 登入處理
async function handleGithubLogin() {
  console.log("GitHub 登入被點擊");
  try {
    const result = await loginWithGithub();
    console.log("GitHub 登入成功:", result.user);
    alert("GitHub 登入成功！");

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("loginModal")
    );
    if (modal) {
      modal.hide();
    }
  } catch (error) {
    console.error("GitHub 登入失敗:", error);

    let errorMessage = "GitHub 登入失敗";
    switch (error.code) {
      case "auth/popup-closed-by-user":
        errorMessage = "登入窗口已關閉";
        break;
      case "auth/popup-blocked":
        errorMessage = "彈出窗口被阻擋，請允許彈出窗口";
        break;
      case "auth/account-exists-with-different-credential":
        errorMessage = "此 Email 已使用其他登入方式註冊";
        break;
      default:
        errorMessage = "GitHub 登入失敗: " + error.message;
    }

    alert(errorMessage);
  }
}

// 掛載到 window
window.openLoginModal = openLoginModal;
window.togglePassword = togglePassword;

// DOM 載入完成後的處理
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM 載入完成");

  const loginModal = document.getElementById("loginModal");
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
    .getElementById("loginForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email || !password) {
        alert("請輸入電子郵件和密碼");
        return;
      }

      try {
        const userCredential = await loginUser(email, password);
        console.log("登入成功:", userCredential.user);
        alert("登入成功！");

        const modal = bootstrap.Modal.getInstance(loginModal);
        if (modal) {
          modal.hide();
        }
      } catch (error) {
        console.error("登入失敗:", error);

        let errorMessage = "登入失敗";
        switch (error.code) {
          case "auth/user-not-found":
            errorMessage = "找不到此帳號，請先註冊";
            break;
          case "auth/wrong-password":
          case "auth/invalid-credential":
            errorMessage = "密碼錯誤或帳號不存在";
            break;
          case "auth/invalid-email":
            errorMessage = "請輸入有效的電子郵件地址";
            break;
          default:
            errorMessage = "登入失敗: " + error.message;
        }

        alert(errorMessage);
      }
    });

  // 註冊表單處理
  document
    .getElementById("registerForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      if (!name || !email || !password || !confirmPassword) {
        alert("請填寫所有必填欄位");
        return;
      }

      if (password !== confirmPassword) {
        alert("密碼和確認密碼不一致");
        return;
      }

      if (password.length < 6) {
        alert("密碼至少需要6個字元");
        return;
      }

      try {
        const userCredential = await registerUser(email, password);
        console.log("註冊成功:", userCredential.user);
        alert("註冊成功！現在可以使用此帳號登入。");

        const modal = bootstrap.Modal.getInstance(loginModal);
        if (modal) {
          modal.hide();
        }

        this.reset();
      } catch (error) {
        console.error("註冊失敗:", error);

        let errorMessage = "註冊失敗";
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "此電子郵件已被註冊";
            break;
          case "auth/invalid-email":
            errorMessage = "請輸入有效的電子郵件地址";
            break;
          case "auth/weak-password":
            errorMessage = "密碼強度不足，請使用更複雜的密碼";
            break;
          default:
            errorMessage = "註冊失敗: " + error.message;
        }

        alert(errorMessage);
      }
    });

  // 社群登入按鈕事件監聽器 - 移除所有 Facebook 相關
  const googleLoginBtn = document.getElementById("googleLoginBtn");
  const githubLoginBtn = document.getElementById("githubLoginBtn");
  const googleRegisterBtn = document.getElementById("googleRegisterBtn");
  const githubRegisterBtn = document.getElementById("githubRegisterBtn");

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

  // 備用方案 - 移除 Facebook 相關
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
});
