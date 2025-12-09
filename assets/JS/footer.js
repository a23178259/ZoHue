// 返回頂部按鈕功能

(function () {
  "use strict";

  // 等待 DOM 載入完成
  document.addEventListener("DOMContentLoaded", function () {
    // 獲取返回頂部按鈕
    const backToTopBtn = document.getElementById("backToTop");

    if (!backToTopBtn) {
      return;
    }

    // 設定顯示/隱藏按鈕的滾動距離（像素）
    const showButtonAt = 300;

    // 監聽滾動事件
    let scrollTimeout;
    window.addEventListener("scroll", function () {
      // 使用 debounce 優化性能
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }

      scrollTimeout = window.requestAnimationFrame(function () {
        toggleButtonVisibility();
      });
    });

    // 切換按鈕顯示/隱藏
    function toggleButtonVisibility() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > showButtonAt) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }

    // 點擊按鈕返回頂部
    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToTop();
    });

    // 平滑滾動到頂部
    function scrollToTop() {
      // 使用 window.scrollTo 的平滑滾動
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // 備用方案：如果瀏覽器不支援 smooth behavior
      if (!("scrollBehavior" in document.documentElement.style)) {
        smoothScrollPolyfill();
      }
    }

    // 平滑滾動的 polyfill（舊瀏覽器）
    function smoothScrollPolyfill() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScrollPolyfill);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    }

    // 初始化時檢查滾動位置
    toggleButtonVisibility();
  });
})();
