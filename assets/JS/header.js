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
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }

  // 針對移動設備的額外處理
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("portrait").catch(() => {});
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
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

  // 如果不是全屏狀態且菜單是開著的，就關閉菜單
  if (
    !document.fullscreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (dropdown.classList.contains("show")) {
      closeMobileDropdown();
    }
  }
}
