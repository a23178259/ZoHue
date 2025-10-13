const container = document.querySelector(".timeline-container");
const wrapper = document.querySelector(".timeline-wrapper");
const prevBtn = document.querySelector(".timeline-nav-prev");
const nextBtn = document.querySelector(".timeline-nav-next");

// 取得單個卡片的寬度（包含 padding 和 gap）
function getCardWidth() {
  const firstCard = container.querySelector(".col-12");
  if (!firstCard) return 300;

  // 取得卡片寬度 + gap
  const cardWidth = firstCard.offsetWidth;
  const style = window.getComputedStyle(container.querySelector(".row"));
  const gap = parseInt(style.gap) || 0;

  return cardWidth + gap;
}

// 檢查並更新按鈕狀態
function updateButtonStates() {
  if (!container) return;

  const scrollLeft = Math.round(container.scrollLeft);
  const scrollWidth = container.scrollWidth;
  const clientWidth = container.clientWidth;

  // 判斷是否在最左邊（允許3px誤差）
  const isAtStart = scrollLeft <= 3;

  // 判斷是否在最右邊（允許3px誤差）
  const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 3;

  // 左按鈕狀態
  if (isAtStart) {
    // 若左邊沒有內容將左按鈕設置為禁止狀態
    prevBtn.classList.add("disabled");
  } else {
    // 反之則移除禁止狀態
    prevBtn.classList.remove("disabled");
  }

  // 右按鈕狀態
  if (isAtEnd) {
    // 若右邊沒有內容將右按鈕設置為禁止狀態
    nextBtn.classList.add("disabled");
  } else {
    // 反之則移除禁止狀態
    nextBtn.classList.remove("disabled");
  }
}

// 左按鈕點擊
prevBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (prevBtn.classList.contains("disabled")) return;

  const cardWidth = getCardWidth();
  container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  wrapper.classList.add("scrolled");
  setTimeout(updateButtonStates, 350);
});

// 右按鈕點擊
nextBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (nextBtn.classList.contains("disabled")) return;

  const cardWidth = getCardWidth();
  container.scrollBy({ left: cardWidth, behavior: "smooth" });
  wrapper.classList.add("scrolled");
  setTimeout(updateButtonStates, 350);
});

// 監聽滾動
container?.addEventListener("scroll", () => {
  if (container.scrollLeft > 3) {
    wrapper.classList.add("scrolled");
  } else {
    wrapper.classList.remove("scrolled");
  }
  updateButtonStates();
});

// 等待圖片和內容加載完成後再初始化
window.addEventListener("load", () => {
  setTimeout(updateButtonStates, 200);
});

// 視窗大小改變時重新檢查
window.addEventListener("resize", () => {
  setTimeout(updateButtonStates, 100);
});

// 立即執行一次（以防 load 事件已經觸發）
updateButtonStates();
