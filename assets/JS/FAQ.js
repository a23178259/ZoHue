const categoryBadges = {
  platform_usage: {
    name: "平台使用",
    badge: "bg-blue-400",
    bgLight: "bg-blue-100",
    borderColor: "border-blue-400",
    textColor: "text-blue-400",
    icon: "computer",
  },
  project_related: {
    name: "專案相關",
    badge: "bg-indigo-400",
    bgLight: "bg-indigo-100",
    borderColor: "border-indigo-400",
    textColor: "text-indigo-400",
    icon: "work",
  },
  volunteer_service: {
    name: "志工服務",
    badge: "bg-primary-600",
    bgLight: "bg-primary-100",
    borderColor: "border-primary-600",
    textColor: "text-primary-600",
    icon: "volunteer_activism",
  },
  payment_security: {
    name: "金流安全",
    badge: "bg-danger",
    bgLight: "bg-red-100",
    borderColor: "border-danger",
    textColor: "text-danger",
    icon: "security",
  },
  account_settings: {
    name: "帳戶設定",
    badge: "bg-natural-600",
    bgLight: "bg-natural-100",
    borderColor: "border-natural-600",
    textColor: "text-natural-600",
    icon: "settings",
  },
};

const faqs = [
  {
    category: "platform_usage",
    question: "如何註冊成為會員？",
    answer:
      "點擊網站右上角的「註冊」按鈕，填寫基本資料包括姓名、信箱、密碼，並驗證信箱即可完成註冊。註冊後可以立即開始瀏覽專案和申請成為志工。",
  },
  {
    category: "platform_usage",
    question: "忘記密碼怎麼辦？",
    answer:
      "在登入頁面點擊「忘記密碼」，輸入註冊時使用的信箱地址，系統會發送重設密碼的連結到您的信箱，點擊連結即可重新設定密碼。",
  },
  {
    category: "platform_usage",
    question: "如何修改個人資料？",
    answer:
      "登入後點擊右上角的頭像，選擇「個人設定」，即可修改姓名、聯絡方式、專長技能、自我介紹等資料。記得按下儲存才會生效。",
  },
  {
    category: "platform_usage",
    question: "平台有手機 App 嗎？",
    answer:
      "目前我們專注於網頁版本的優化，暫時沒有推出手機 App。但網站採用響應式設計，在手機瀏覽器上也能有良好的使用體驗。",
  },
  {
    category: "project_related",
    question: "如何發起新專案？",
    answer:
      "登入後點擊「發起專案」按鈕，填寫專案名稱、目標、所需技能、時程、預算等資訊。提交後會進入審核程序，通過審核的專案將會上線供志工申請參與。",
  },
  {
    category: "project_related",
    question: "專案審核需要多長時間？",
    answer:
      "一般專案審核需要 3-5 個工作天。我們會確認專案內容的合理性、可行性，以及是否符合平台的公益宗旨。審核結果會透過信箱通知。",
  },
  {
    category: "project_related",
    question: "可以修改已發布的專案嗎？",
    answer:
      "已發布的專案可以修改部分內容，如專案描述、時程調整等。但如果是重大變更（如預算、目標大幅調整），可能需要重新審核。",
  },
  {
    category: "project_related",
    question: "專案失敗時資金如何處理？",
    answer:
      "若專案因故無法執行，未使用的資金將全數退還給捐款人。我們會在專案頁面公告處理進度，並透過信箱通知相關人員。",
  },
  {
    category: "volunteer_service",
    question: "如何申請成為志工？",
    answer:
      "瀏覽專案頁面，找到感興趣的專案後點擊「我要參與」，填寫申請表說明您的相關經驗和參與動機。專案發起人會審核申請並與您聯繫。",
  },
  {
    category: "volunteer_service",
    question: "志工需要什麼資格嗎？",
    answer:
      "不同專案對志工的要求不同。有些需要專業技能（如程式設計、攝影），有些只需要熱忱和時間。詳細要求會在專案頁面中說明。",
  },
  {
    category: "volunteer_service",
    question: "志工服務時數如何計算？",
    answer:
      "完成專案後，專案發起人會確認您的服務時數並在平台上登錄。服務時數會累計在您的個人檔案中，可作為志工經驗的證明。",
  },
  {
    category: "volunteer_service",
    question: "可以同時參與多個專案嗎？",
    answer:
      "可以的，但請確保您有足夠的時間和精力投入各個專案。建議根據自己的時間安排，選擇能夠全力投入的專案數量。",
  },
  {
    category: "payment_security",
    question: "捐款的金流安全如何保障？",
    answer:
      "我們與合格的第三方金流服務商合作，採用 SSL 加密傳輸，並遵循 PCI DSS 安全標準。您的付款資料不會儲存在我們的伺服器上。",
  },
  {
    category: "payment_security",
    question: "支援哪些付款方式？",
    answer:
      "目前支援信用卡（Visa、MasterCard、JCB）、ATM 轉帳、超商代碼繳費等多種付款方式。我們持續評估新增其他便民的付款選項。",
  },
  {
    category: "payment_security",
    question: "可以申請退款嗎？",
    answer:
      "捐款完成後如需退款，請在 7 天內聯絡客服並說明原因。我們會依情況進行評估，符合退款條件者會在 7-14 個工作天內完成退款。",
  },
  {
    category: "payment_security",
    question: "如何查詢捐款紀錄？",
    answer:
      "登入後在「個人中心」的「捐款紀錄」頁面可查看所有捐款明細，包括捐款日期、金額、專案名稱等資訊。也可以下載電子收據。",
  },
  {
    category: "account_settings",
    question: "如何刪除帳戶？",
    answer:
      "如需刪除帳戶，請聯絡客服提出申請。我們會在確認身分後協助處理，但請注意刪除後的資料無法復原。",
  },
  {
    category: "account_settings",
    question: "個人資料會被公開嗎？",
    answer:
      "我們重視您的隱私權。基本資料（如姓名、聯絡方式）不會公開，但您選擇公開的技能、自我介紹等會顯示在志工檔案中供專案發起人參考。",
  },
  {
    category: "account_settings",
    question: "如何設定通知偏好？",
    answer:
      "在「個人設定」的「通知設定」頁面，可以選擇接收哪些類型的通知，包括專案更新、訊息通知、電子報等，以及通知方式（信箱、簡訊）。",
  },
  {
    category: "account_settings",
    question: "可以更換註冊信箱嗎？",
    answer:
      "可以在「個人設定」中修改信箱地址。系統會發送驗證信件到新信箱，點擊驗證連結後即可完成變更。變更期間請留意新信箱的收信。",
  },
];

let currentFilter = "all";
let currentSearch = "";

function renderFAQs() {
  const accordion = document.getElementById("faqAccordion");
  accordion.innerHTML = "";

  const filtered = faqs.filter((faq) => {
    const matchCategory =
      currentFilter === "all" || faq.category === currentFilter;
    const matchSearch =
      currentSearch === "" ||
      faq.question.toLowerCase().includes(currentSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    document.getElementById("noResults").style.display = "block";
    return;
  }

  document.getElementById("noResults").style.display = "none";

  filtered.forEach((faq, idx) => {
    const badge = categoryBadges[faq.category];
    const item = document.createElement("div");
    item.className = "accordion-item";
    item.innerHTML = `
    <h2 class="accordion-header">
        <button 
            class="accordion-button collapsed fw-medium text-natural-950" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#collapse${idx}"
            aria-expanded="false"
            aria-controls="collapse${idx}"
        >
            <span class="badge ${badge.badge} text-white me-3 d-flex align-items-center gap-1">
                <span class="material-icons" style="font-size: 1rem;">​${badge.icon}</span>
                ${badge.name}
            </span>
            <span>${faq.question}</span>
        </button>
    </h2>
    <div 
        id="collapse${idx}" 
        class="accordion-collapse collapse" 
        data-bs-parent="#faqAccordion"
    >
        <div class="accordion-body text-natural-600 lh-lg">
            ${faq.answer}
        </div>
    </div>
`;
    accordion.appendChild(item);
  });
}

// 頁面初始化時，設置「全部」按鈕為綠色
document.addEventListener("DOMContentLoaded", function () {
  const allBtn = document.querySelector('[data-category="all"]');
  allBtn.classList.add(
    "bg-secondary-50",
    "text-secondary-700",
    "border-secondary-700"
  );
  allBtn.classList.remove(
    "btn-white",
    "border-primary-500",
    "text-primary-600"
  );
});

// Category Filter Event Listeners
document.querySelectorAll("[data-category]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clickedBtn = e.currentTarget;
    const category = clickedBtn.dataset.category;

    // 移除所有按鈕的 active 樣式
    document.querySelectorAll("[data-category]").forEach((b) => {
      b.classList.remove("active");
      // 移除所有可能的顏色
      b.classList.remove(
        "bg-blue-100",
        "bg-indigo-100",
        "bg-primary-100",
        "bg-red-100",
        "bg-natural-100"
      );
      b.classList.remove(
        "border-blue-400",
        "border-indigo-400",
        "border-primary-600",
        "border-danger",
        "border-natural-600"
      );
      b.classList.remove(
        "text-blue-400",
        "text-indigo-400",
        "text-primary-600",
        "text-danger",
        "text-natural-600"
      );
      b.classList.remove(
        "bg-secondary-50",
        "text-secondary-700",
        "border-secondary-700"
      );
      // 恢復為預設狀態
      b.classList.add(
        "btn-white",
        "border-2",
        "border-primary-500",
        "text-primary-600"
      );
    });

    // 如果點擊的是「全部」
    if (category === "all") {
      clickedBtn.classList.add("active");
      clickedBtn.classList.remove(
        "btn-white",
        "border-primary-500",
        "text-primary-600"
      );
      clickedBtn.classList.add(
        "bg-secondary-50",
        "text-secondary-700",
        "border-secondary-700"
      );
    } else {
      // 其他按鈕根據 badge 顏色改變
      const badge = categoryBadges[category];
      clickedBtn.classList.add("active");
      clickedBtn.classList.remove(
        "btn-white",
        "border-primary-500",
        "text-primary-600"
      );
      clickedBtn.classList.add(
        "border-2",
        badge.bgLight,
        badge.borderColor,
        badge.textColor
      );
    }

    currentFilter = category;
    renderFAQs();
  });
});

// Search Input Event Listener
document.getElementById("searchInput").addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderFAQs();
});

// Initial Render
renderFAQs();
