document.addEventListener("DOMContentLoaded", () => {
    // 初始化 AOS
    if (window.AOS && typeof AOS.init === "function") {
        AOS.init({ duration: 600, easing: "ease-out", once: false });
    }

    const btn = document.getElementById("jumpBtn");
    if (!btn) return;

    let visibleCount = 0; // 目前在 viewport 內的 card3 / card4

    // card3 / card4 進入視窗 → 顯示按鈕
    document.addEventListener("aos:in", (e) => {
        const el = e.detail;
        if (!el || !el.id) return;
        if (el.id === "card3" || el.id === "card4") {
            visibleCount++;
            btn.classList.add("is-visible");
        }
    });

    // card3 / card4 離開視窗 → 若都不在，就隱藏
    document.addEventListener("aos:out", (e) => {
        const el = e.detail;
        if (!el || !el.id) return;
        if (el.id === "card3" || el.id === "card4") {
            visibleCount = Math.max(0, visibleCount - 1);
            if (visibleCount === 0) btn.classList.remove("is-visible");
        }
    });

    // 點擊 → 向右捲動三張卡片
    btn.addEventListener("click", () => {
        const row = document.getElementById("cardRow");
        if (!row) return;

        const firstCard = row.querySelector(".card");
        let step = 260; // 預設卡片寬
        const gap = 12; // 預設 gap

        if (firstCard) {
            const style = window.getComputedStyle(firstCard);
            const mr = parseFloat(style.marginRight) || 0;
            step = firstCard.offsetWidth + mr;
        }

        row.scrollBy({ left: step * 3, behavior: "smooth" });
    });
});
