// 志工故事數據
const VolunteerStories = [
    {
        id: 1,
        title: "初心",
        subtitle: "はじめ",
        volunteer: "林美玲",
        role: "英語教學志工",
        story: "第一次踏進偏鄉小學，看見孩子們渴望學習的眼神，我知道這就是我想做的事。",
        quote: "教育不是填滿水桶，而是點燃火焰。",
        image: "🌸",
        imageUrl: "https://picsum.photos/id/180/767/470",
        stats: { students: 32, hours: 128, years: 2 },
    },
    {
        id: 2,
        title: "成長",
        subtitle: "せいちょう",
        volunteer: "陳志明",
        role: "程式設計導師",
        story: "從一個害羞的工程師，到能夠站在講台上分享知識，這段旅程改變了我。",
        quote: "在教學中，我們不只是老師，更是永遠的學生。",
        image: "🌿",
        imageUrl: "https://picsum.photos/id/160/767/470",
        stats: { students: 45, hours: 256, years: 3 },
    },
    {
        id: 3,
        title: "感動",
        subtitle: "かんどう",
        volunteer: "王雅琪",
        role: "美術創作老師",
        story: "當學生第一次完成作品時的笑容，是我繼續前進的最大動力。",
        quote: "藝術讓孩子看見世界的美好，也看見自己的可能。",
        image: "🎨",
        imageUrl: "https://picsum.photos/id/184/767/470",
        stats: { students: 28, hours: 96, years: 1 },
    },
    {
        id: 4,
        title: "堅持",
        subtitle: "けんじ",
        volunteer: "李建華",
        role: "數學輔導老師",
        story: "即使遇到挫折，看到學生進步的那一刻，所有的努力都值得了。",
        quote: "堅持不是因為看到希望才堅持，而是堅持了才看到希望。",
        image: "💪",
        imageUrl: "https://picsum.photos/id/188/767/470",
        stats: { students: 38, hours: 180, years: 4 },
    },
    {
        id: 5,
        title: "希望",
        subtitle: "きぼう",
        volunteer: "張淑芬",
        role: "閱讀推廣志工",
        story: "每一本書都是一扇窗，讓孩子們看見更廣闊的世界。",
        quote: "閱讀是給孩子最好的禮物，知識是他們飛翔的翅膀。",
        image: "📚",
        imageUrl: "https://picsum.photos/id/24/767/470",
        stats: { students: 52, hours: 320, years: 5 },
    },
    {
        id: 6,
        title: "傳承",
        subtitle: "でんしょう",
        volunteer: "劉永祥",
        role: "資深志工導師",
        story: "看著新志工們成長，就像看見自己當年的模樣，這份愛會一直傳下去。",
        quote: "最好的傳承不是給予，而是啟發他人也成為給予者。",
        image: "🌟",
        imageUrl: "https://picsum.photos/id/177/767/470",
        stats: { students: 120, hours: 500, years: 8 },
    },
];

// 故事牆變數
let currentSection = 0;
let isAnimating = false;
let isScrolling = false;
let lastScrollTime = 0;
let touchStartY = 0;
let elements = {};

// 燈箱控制 - 外部調用

// 開啟燈箱
function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.style.display = 'flex';
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);

    if (!window.storyWallInitialized) {
        initStoryWall();
        window.storyWallInitialized = true;
    }
}
// 關閉燈箱
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    // 1. 加入 .closing 狀態
    lightbox.classList.add('closing');
    // 2. 移除 active（開始縮小動畫）
    lightbox.classList.remove('active');
    // 3. 監聽動畫完畢後才隱藏
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    if (lightboxContent) {
        lightboxContent.addEventListener('animationend', function handler() {
            lightbox.style.display = 'none';
            lightbox.classList.remove('closing');
            // 移除監聽，避免重複
            lightboxContent.removeEventListener('animationend', handler);
        });
    }
}

// 初始化DOM元素
function initElements() {
    elements = {
        chapterName: document.querySelector("#chapterName"),
        chapterSubtitle: document.querySelector("#chapterSubtitle"),
        volunteerImage: document.querySelector("#volunteerImage"),
        volunteerName: document.querySelector("#volunteerName"),
        volunteerRole: document.querySelector("#volunteerRole"),
        storyParagraph: document.querySelector("#storyParagraph"),
        storyQuote: document.querySelector("#storyQuote"),
        statStudents: document.querySelector("#statStudents"),
        statHours: document.querySelector("#statHours"),
        statYears: document.querySelector("#statYears"),
        pageCurrent: document.querySelector("#pageCurrent"),
        pageTotal: document.querySelector("#pageTotal"),
        scrollHint: document.querySelector("#scrollHint"),
        storyContent: document.querySelector("#storyContent"),
        visualContent: document.querySelector("#visualContent"),
        pageIndicators: document.querySelector("#pageIndicators"),
        prevButton: document.querySelector("#prevButton"),
        nextButton: document.querySelector("#nextButton"),
        container: document.querySelector("#container"),
    };
}

function preloadImages() {
    VolunteerStories.forEach((story) => {
        const img = new Image();
        img.src = story.imageUrl;
    });
}

function initStoryWall() {
    initElements();
    createPageIndicators();
    preloadImages();
    updateContent();
    bindEvents();
    if (elements.pageTotal) {
        elements.pageTotal.textContent = VolunteerStories.length;
    }
}

function createPageIndicators() {
    if (!elements.pageIndicators) return;

    elements.pageIndicators.innerHTML = "";
    VolunteerStories.forEach((story, index) => {
        const indicator = document.createElement("button");
        indicator.className = "indicator";
        indicator.setAttribute("aria-label", `Go to story ${index + 1}`);
        indicator.innerHTML = `
        <div class="indicator-dot"></div>
        <span class="indicator-label">${story.title}</span>
    `;
        indicator.addEventListener("click", () => handleSectionChange(index));
        elements.pageIndicators.appendChild(indicator);
    });
}

function updateContent() {
    const story = VolunteerStories[currentSection];

    if (elements.chapterName) elements.chapterName.textContent = story.title;
    if (elements.chapterSubtitle) elements.chapterSubtitle.textContent = story.subtitle;
    if (elements.volunteerImage) elements.volunteerImage.textContent = story.image;
    if (elements.volunteerName) elements.volunteerName.textContent = story.volunteer;
    if (elements.volunteerRole) elements.volunteerRole.textContent = story.role;
    if (elements.storyParagraph) elements.storyParagraph.textContent = story.story;
    if (elements.storyQuote) elements.storyQuote.textContent = `— ${story.quote}`;
    if (elements.statStudents) elements.statStudents.textContent = story.stats.students;
    if (elements.statHours) elements.statHours.textContent = story.stats.hours;
    if (elements.statYears) elements.statYears.textContent = story.stats.years;
    if (elements.pageCurrent) elements.pageCurrent.textContent = currentSection + 1;

    const storyImage = document.querySelector("#storyImage");
    if (storyImage && story.imageUrl) {
        storyImage.style.opacity = "0.3";

        let loadingElement = document.querySelector(".image-loading");
        if (!loadingElement) {
            loadingElement = document.createElement("div");
            loadingElement.className = "image-loading";
            loadingElement.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">載入中...</div>
    `;
            loadingElement.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        z-index: 10;
    `;

            storyImage.parentElement.style.position = "relative";
            storyImage.parentElement.appendChild(loadingElement);
        }
        loadingElement.style.display = "flex";

        const tempImg = new Image();
        tempImg.onload = function () {
            storyImage.src = this.src;
            storyImage.style.opacity = "1";
            loadingElement.style.display = "none";
        };
        tempImg.onerror = function () {
            storyImage.style.opacity = "1";
            loadingElement.querySelector(".loading-text").textContent = "載入失敗";
            loadingElement.querySelector(".loading-spinner").style.display = "none";
            setTimeout(() => {
                loadingElement.style.display = "none";
            }, 2000);
        };
        tempImg.src = story.imageUrl;
        storyImage.alt = `${story.title} - ${story.volunteer}`;
    }

    updatePageIndicators();

    if (elements.scrollHint) {
        if (currentSection === 0) {
            elements.scrollHint.classList.remove("hidden");
        } else {
            elements.scrollHint.classList.add("hidden");
        }
    }
}

function updatePageIndicators() {
    if (!elements.pageIndicators) return;

    const indicators = elements.pageIndicators.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
        if (index === currentSection) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    });
}

function handleSectionChange(index) {
    if (isAnimating || isScrolling) return;

    const newIndex = Math.max(0, Math.min(VolunteerStories.length - 1, index));

    if (newIndex === currentSection) return;

    isAnimating = true;

    if (elements.storyContent) elements.storyContent.classList.add("animating");
    if (elements.visualContent) elements.visualContent.classList.add("animating");

    setTimeout(() => {
        currentSection = newIndex;
        updateContent();

        setTimeout(() => {
            if (elements.storyContent) elements.storyContent.classList.remove("animating");
            if (elements.visualContent) elements.visualContent.classList.remove("animating");
            isAnimating = false;
        }, 100);
    }, 300);
}

function handlePrev() {
    const newIndex = currentSection === 0 ? VolunteerStories.length - 1 : currentSection - 1;
    handleSectionChange(newIndex);
}

function handleNext() {
    const newIndex = currentSection === VolunteerStories.length - 1 ? 0 : currentSection + 1;
    handleSectionChange(newIndex);
}

function handleWheel(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    e.preventDefault();
    e.stopPropagation();

    const now = Date.now();
    if (now - lastScrollTime < 500) return;

    if (isScrolling || isAnimating) return;

    lastScrollTime = now;

    if (e.deltaY > 0) {
        handleNext();
    } else {
        handlePrev();
    }
}

function handleKeydown(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    if (isAnimating || isScrolling) return;

    switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp":
            e.preventDefault();
            handlePrev();
            break;
        case "ArrowRight":
        case "ArrowDown":
            e.preventDefault();
            handleNext();
            break;
        case "Escape":
            e.preventDefault();
            closeLightbox();
            break;
    }
}

function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
    if (isAnimating || isScrolling) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            handleNext();
        } else {
            handlePrev();
        }
    }
}

function bindEvents() {
    if (elements.prevButton) elements.prevButton.addEventListener("click", handlePrev);
    if (elements.nextButton) elements.nextButton.addEventListener("click", handleNext);

    window.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("wheel", handleWheel, { passive: false });
    if (elements.container) {
        elements.container.addEventListener("wheel", handleWheel, { passive: false });
    }

    document.addEventListener("keydown", handleKeydown);

    if (elements.container) {
        elements.container.addEventListener("touchstart", handleTouchStart, { passive: true });
        elements.container.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function (e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }
}

// 將函數暴露到全域，供header調用
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;