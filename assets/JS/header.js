// header.js
function toggleMobileDropdown() {
  const dropdown = document.querySelector("#mobileDropdown");
  const icon = document.querySelector("#hamburgerIcon");
  const body = document.body;

  dropdown.classList.toggle("show");

  // 切換圖標和動畫
  if (dropdown.classList.contains("show")) {
    // 菜單打開 - 變成 X
    icon.className = "fa-solid fa-xmark text-natural-700 hamburger-icon active";
    // 隱藏滾動條
    body.classList.add("mobile-menu-open");

    // 嘗試進入全屏模式隱藏系統導航欄
    requestFullscreen();
  } else {
    // 菜單關閉 - 變回漢堡包
    icon.className = "fa-solid fa-bars text-natural-700 hamburger-icon";
    // 顯示滾動條
    body.classList.remove("mobile-menu-open");

    // 退出全螢幕模式
    exitFullscreen();
  }
}

function closeMobileDropdown() {
  const dropdown = document.querySelector("#mobileDropdown");
  const icon = document.querySelector("#hamburgerIcon");
  const body = document.body;

  dropdown.classList.remove("show");
  // 重置圖標為漢堡包
  icon.className = "fa-solid fa-bars text-natural-700 hamburger-icon";
  // 顯示滾動條
  body.classList.remove("mobile-menu-open");

  // 退出全屏模式
  exitFullscreen();
}

// 全螢幕相關函數
function requestFullscreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {
      // 用戶可能拒絕全屏，不影響功能
    });
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }

  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("portrait").catch(() => {});
  }
}

function exitFullscreen() {
  // 檢查是否真的在全屏狀態
  if (
    !document.fullscreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    return; // 不在全屏，直接返回
  }

  // 執行退出全屏
  if (document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// 掛載到 window
window.toggleMobileDropdown = toggleMobileDropdown;
window.closeMobileDropdown = closeMobileDropdown;

// 監聽全屏變化事件
document.addEventListener("fullscreenchange", handleFullscreenChange);
document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
document.addEventListener("msfullscreenchange", handleFullscreenChange);

function handleFullscreenChange() {
  const dropdown = document.querySelector("#mobileDropdown");

  // 如果退出全屏且菜單是開著的，就關閉菜單
  if (
    !document.fullscreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (dropdown && dropdown.classList.contains("show")) {
      closeMobileDropdown();
    }
  }
}
// 鈴鐺通知狀態
function initNotification() {
  const btn = document.getElementById("desktopNotificationBtn");
  const dropdown = document.getElementById("notificationDropdown");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.toggle("active");
    dropdown.classList.toggle("show");
    dropdown.classList.toggle("d-none");
  });

  // 點擊其他地方移除 active 和關閉 dropdown
  document.addEventListener("click", (e) => {
    if (
      e.target !== btn &&
      !btn.contains(e.target) &&
      !dropdown.contains(e.target)
    ) {
      btn.classList.remove("active");
      dropdown.classList.remove("show");
      dropdown.classList.add("d-none");
    }
  });
}

// 手機版鈴鐺通知（仿照 toggleMobileDropdown）
function toggleMobileNotification() {
  const modal = document.querySelector("#mobileNotificationDropdown");
  const body = document.body;

  modal.classList.toggle("show");

  if (modal.classList.contains("show")) {
    body.classList.add("mobile-menu-open");
    requestFullscreen();
  } else {
    body.classList.remove("mobile-menu-open");
    exitFullscreen();
  }
}

function closeMobileNotification() {
  const modal = document.querySelector("#mobileNotificationDropdown");
  const body = document.body;

  modal.classList.remove("show");
  body.classList.remove("mobile-menu-open");
  exitFullscreen();
}

// 掛載到 window
window.toggleMobileNotification = toggleMobileNotification;
window.closeMobileNotification = closeMobileNotification;

document.addEventListener("DOMContentLoaded", initNotification);
