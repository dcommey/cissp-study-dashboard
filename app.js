// CISSP Study Dashboard - Application Logic

// Default application state shape
function getDefaultState() {
  return {
    activeVideoIndex: 1, // Default to first video
    completedVideos: {}, // { index: true }
    userAnswers: {},     // { videoIndex: { questionIndex: optionIndex } }
    submittedQuizzes: {} // { videoIndex: true }
  };
}

// Application State
let state = getDefaultState();

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromLocalStorage();
  initSidebar();
  setupEventListeners();
  loadVideo(state.activeVideoIndex);
});

// Load state from localStorage (defensively merged over defaults so that
// older or partial saved blobs never leave required keys undefined)
function loadStateFromLocalStorage() {
  const savedState = localStorage.getItem("cissp_study_state");
  if (!savedState) return;
  try {
    const parsed = JSON.parse(savedState) || {};
    const defaults = getDefaultState();
    state = {
      activeVideoIndex: parsed.activeVideoIndex || defaults.activeVideoIndex,
      completedVideos: parsed.completedVideos || {},
      userAnswers: parsed.userAnswers || {},
      submittedQuizzes: parsed.submittedQuizzes || {}
    };
  } catch (e) {
    console.error("Failed to parse saved state, resetting to defaults:", e);
    state = getDefaultState();
  }
}

// Escape untrusted text before injecting into innerHTML templates
function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Render markdown to sanitized HTML (falls back gracefully if libs missing)
function renderMarkdown(md) {
  const rawHtml = (typeof marked !== "undefined") ? marked.parse(md) : escapeHtml(md);
  if (typeof DOMPurify !== "undefined") {
    return DOMPurify.sanitize(rawHtml);
  }
  return rawHtml;
}

// Typeset LaTeX math inside an element using KaTeX auto-render.
// Runs AFTER sanitization (on the live DOM), so KaTeX output is never
// stripped by DOMPurify. Uses \( \) and \[ \] delimiters only, so plain
// currency dollar signs (e.g. "$100") are never mistaken for math.
function renderMathIn(el) {
  if (typeof renderMathInElement === "undefined") return;
  try {
    renderMathInElement(el, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false,
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
    });
  } catch (e) {
    console.error("KaTeX rendering failed:", e);
  }
}

// Save state to localStorage
function saveStateToLocalStorage() {
  localStorage.setItem("cissp_study_state", JSON.stringify(state));
}

// Update progress bar and texts
function updateProgressUI() {
  const totalVideos = cisspData.length;
  // Count how many videos are marked as completed (only count those in cisspData range)
  let completedCount = 0;
  for (let i = 1; i <= totalVideos; i++) {
    if (state.completedVideos[i]) {
      completedCount++;
    }
  }
  
  const percent = totalVideos > 0 ? Math.round((completedCount / totalVideos) * 100) : 0;
  
  document.getElementById("progress-percent").textContent = `${percent}%`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.getElementById("progress-text").textContent = `${completedCount} of ${totalVideos} Completed`;
}

// Initialize Sidebar Playlist
function initSidebar() {
  const videoListUl = document.getElementById("video-list");
  videoListUl.innerHTML = "";
  
  cisspData.forEach((video) => {
    const li = document.createElement("li");
    li.className = `video-item ${video.index === state.activeVideoIndex ? 'active' : ''}`;
    li.dataset.index = video.index;
    li.setAttribute("role", "button");
    li.setAttribute("tabindex", "0");
    
    // Status Icon
    let statusIconHtml = "";
    const isCompleted = state.completedVideos[video.index];
    const isUnlocked = video.notes && video.notes.trim() !== "";
    
    if (isCompleted) {
      statusIconHtml = `
        <span class="video-status-icon completed" title="Completed">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>
        </span>`;
    } else if (!isUnlocked) {
      statusIconHtml = `
        <span class="video-status-icon locked" title="Coming Soon">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10A2,2 0 0,1 6,8H9V6A3,3 0 0,1 12,3A3,3 0 0,1 15,6V8H18M12,5A1,1 0 0,0 11,6V8H13V6A1,1 0 0,0 12,5Z" /></svg>
        </span>`;
    } else {
      statusIconHtml = `
        <span class="video-status-icon" title="Incomplete">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12,20A8,8 0 1,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 1,0 22,12A10,10 0 0,0 12,2Z" /></svg>
        </span>`;
    }
    
    // Clean name for display (remove course prefix)
    let displayName = video.title;
    if (displayName.startsWith("CISSP Full Course: ")) {
      displayName = displayName.substring("CISSP Full Course: ".length);
    }
    
    li.innerHTML = `
      <span class="video-item-num">${String(video.index).padStart(2, '0')}</span>
      <div class="video-item-info">
        <div class="video-item-title">${displayName}</div>
      </div>
      ${statusIconHtml}
    `;
    
    li.addEventListener("click", () => {
      selectVideo(video.index);
    });
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectVideo(video.index);
      }
    });

    videoListUl.appendChild(li);
  });
  
  updateProgressUI();
}

// Select video by index
function selectVideo(index) {
  state.activeVideoIndex = index;
  saveStateToLocalStorage();
  
  // Update Active class in sidebar
  document.querySelectorAll(".video-item").forEach((item) => {
    item.classList.toggle("active", parseInt(item.dataset.index) === index);
  });
  
  // Reset tab to notes
  switchTab("notes-tab");

  // On small screens, close the sidebar drawer after picking a video
  closeSidebar();

  loadVideo(index);
}

// Set up tabs and general click listeners
function setupEventListeners() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });
  
  // Submit Quiz Button
  document.getElementById("submit-quiz-btn").addEventListener("click", submitQuiz);

  // Retry Quiz Button
  document.getElementById("retry-quiz-btn").addEventListener("click", retryQuiz);

  // Sidebar drawer toggle (mobile)
  const menuToggle = document.getElementById("menu-toggle");
  const backdrop = document.getElementById("sidebar-backdrop");
  if (menuToggle) menuToggle.addEventListener("click", toggleSidebar);
  if (backdrop) backdrop.addEventListener("click", closeSidebar);

  // Close the drawer with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });
}

// Sidebar drawer helpers (only visually affect small screens)
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const menuToggle = document.getElementById("menu-toggle");
  if (sidebar) sidebar.classList.add("open");
  if (backdrop) backdrop.classList.add("show");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const menuToggle = document.getElementById("menu-toggle");
  if (sidebar) sidebar.classList.remove("open");
  if (backdrop) backdrop.classList.remove("show");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
}

// Switch tabs
function switchTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
}

// Load video data to main view
function loadVideo(index) {
  const video = cisspData.find(v => v.index === index);
  if (!video) return;
  
  // Load Title
  document.getElementById("active-video-index").textContent = `Video ${String(video.index).padStart(2, '0')}`;
  
  let displayName = video.title;
  if (displayName.startsWith("CISSP Full Course: ")) {
    displayName = displayName.substring("CISSP Full Course: ".length);
  }
  document.getElementById("active-video-title").textContent = displayName;
  
  // YouTube link
  document.getElementById("youtube-link").href = video.url;
  
  // Load Notes
  const markdownContainer = document.getElementById("markdown-content");
  const quizTabBtn = document.getElementById("quiz-tab-btn");
  
  const isUnlocked = video.notes && video.notes.trim() !== "";
  
  if (!isUnlocked) {
    markdownContainer.innerHTML = `
      <div class="coming-soon-card">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10A2,2 0 0,1 6,8H9V6A3,3 0 0,1 12,3A3,3 0 0,1 15,6V8H18M12,5A1,1 0 0,0 11,6V8H13V6A1,1 0 0,0 12,5Z" /></svg>
        <h3>Content Coming Soon</h3>
        <p>We are studying this course video-by-video! The study notes and quiz for this video will be generated as we progress.</p>
      </div>
    `;
    quizTabBtn.style.display = "none";
  } else {
    // Render Markdown (sanitized), then typeset any LaTeX math
    markdownContainer.innerHTML = renderMarkdown(video.notes);
    renderMathIn(markdownContainer);
    quizTabBtn.style.display = "flex";
    
    // Load Quiz
    renderQuiz(video);
  }
}

// Render the quiz inside the quiz-tab
function renderQuiz(video) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  
  const quizResultsBanner = document.getElementById("quiz-results-banner");
  const submitQuizBtn = document.getElementById("submit-quiz-btn");
  const retryQuizBtn = document.getElementById("retry-quiz-btn");
  
  const quizData = video.quiz || [];
  
  if (quizData.length === 0) {
    container.innerHTML = `
      <div class="coming-soon-card">
        <h3>No Quiz Available</h3>
        <p>There are no practice questions loaded for this section yet.</p>
      </div>
    `;
    quizResultsBanner.style.display = "none";
    submitQuizBtn.style.display = "none";
    retryQuizBtn.style.display = "none";
    return;
  }
  
  const isSubmitted = state.submittedQuizzes[video.index];
  const answers = state.userAnswers[video.index] || {};
  
  // Render Questions
  quizData.forEach((q, qIdx) => {
    const qCard = document.createElement("div");
    qCard.className = "question-card";
    
    const optionsHtml = q.options.map((opt, oIdx) => {
      const isSelected = answers[qIdx] === oIdx;
      let reviewClass = "";
      
      if (isSubmitted) {
        if (oIdx === q.correctIndex) {
          reviewClass = "correct";
        } else if (isSelected) {
          reviewClass = "incorrect";
        }
      }
      
      const optionLetter = String.fromCharCode(65 + oIdx); // A, B, C, D...
      const interactiveAttrs = isSubmitted ? "" : 'role="button" tabindex="0"';

      return `
        <li class="option-item ${isSelected ? 'selected' : ''} ${reviewClass} ${isSubmitted ? 'disabled' : ''}"
            data-qidx="${qIdx}" data-oidx="${oIdx}" ${interactiveAttrs}
            aria-pressed="${isSelected ? 'true' : 'false'}">
          <span class="option-letter">${optionLetter}</span>
          <span class="option-text">${escapeHtml(opt)}</span>
        </li>
      `;
    }).join("");

    let explanationHtml = "";
    if (isSubmitted) {
      explanationHtml = `
        <div class="explanation-panel">
          <div class="explanation-title">Explanation</div>
          <div class="explanation-text">${escapeHtml(q.explanation)}</div>
        </div>
      `;
    }

    qCard.innerHTML = `
      <div class="question-num">Question ${qIdx + 1}</div>
      <div class="question-text">${escapeHtml(q.question)}</div>
      <ul class="options-list">
        ${optionsHtml}
      </ul>
      ${explanationHtml}
    `;

    // Add click + keyboard listeners to option items (only if not submitted)
    if (!isSubmitted) {
      qCard.querySelectorAll(".option-item").forEach((item) => {
        const handler = () => {
          const qidx = parseInt(item.getAttribute("data-qidx"));
          const oidx = parseInt(item.getAttribute("data-oidx"));
          selectOption(video.index, qidx, oidx);
        };
        item.addEventListener("click", handler);
        item.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handler();
          }
        });
      });
    }
    
    container.appendChild(qCard);
  });
  
  // Update Actions & Banner UI
  if (isSubmitted) {
    // Calculate Score
    let score = 0;
    quizData.forEach((q, qIdx) => {
      if (answers[qIdx] === q.correctIndex) {
        score++;
      }
    });
    
    const pct = Math.round((score / quizData.length) * 100);
    const passed = pct >= 80;
    
    document.getElementById("quiz-score-text").textContent = `You scored ${score} / ${quizData.length} (${pct}%)`;
    
    const banner = document.getElementById("quiz-results-banner");
    banner.className = `quiz-status-bar card glass ${passed ? 'passed' : 'failed'}`;
    document.getElementById("quiz-status-badge").textContent = passed ? "PASSED" : "FAILED";
    banner.style.display = "flex";
    
    submitQuizBtn.style.display = "none";
    retryQuizBtn.style.display = "inline-flex";
  } else {
    quizResultsBanner.style.display = "none";
    submitQuizBtn.style.display = "inline-flex";
    retryQuizBtn.style.display = "none";
  }
}

// Select an option in a quiz
function selectOption(vIdx, qIdx, oIdx) {
  if (!state.userAnswers[vIdx]) {
    state.userAnswers[vIdx] = {};
  }
  
  state.userAnswers[vIdx][qIdx] = oIdx;
  saveStateToLocalStorage();
  
  // Update Selection UI
  const questionCard = document.querySelectorAll(".question-card")[qIdx];
  questionCard.querySelectorAll(".option-item").forEach((item) => {
    const itemOIdx = parseInt(item.getAttribute("data-oidx"));
    const isSel = itemOIdx === oIdx;
    item.classList.toggle("selected", isSel);
    item.setAttribute("aria-pressed", isSel ? "true" : "false");
  });
}

// Submit Quiz
function submitQuiz() {
  const videoIndex = state.activeVideoIndex;
  const video = cisspData.find(v => v.index === videoIndex);
  if (!video) return;
  
  const quizData = video.quiz || [];
  const answers = state.userAnswers[videoIndex] || {};
  
  // Check if all questions are answered
  const answeredCount = Object.keys(answers).length;
  if (answeredCount < quizData.length) {
    alert(`Please answer all ${quizData.length} questions before submitting.`);
    return;
  }
  
  state.submittedQuizzes[videoIndex] = true;
  
  // Grade quiz
  let score = 0;
  quizData.forEach((q, qIdx) => {
    if (answers[qIdx] === q.correctIndex) {
      score++;
    }
  });
  
  const pct = Math.round((score / quizData.length) * 100);
  
  // Mark completed if user passes (>= 80%)
  if (pct >= 80) {
    state.completedVideos[videoIndex] = true;
  }
  
  saveStateToLocalStorage();
  
  // Re-render quiz in submission mode
  renderQuiz(video);
  
  // Update Sidebar to show completed checkmark
  initSidebar();
  
  // Scroll main panel to top to see results banner
  document.querySelector(".tab-panels").scrollTop = 0;
}

// Retry Quiz
function retryQuiz() {
  const videoIndex = state.activeVideoIndex;
  const video = cisspData.find(v => v.index === videoIndex);
  if (!video) return;
  
  // Reset quiz state for this video
  delete state.submittedQuizzes[videoIndex];
  state.userAnswers[videoIndex] = {};

  // Completion is earned by passing; clear it on retry so a later
  // failed attempt cannot leave the module falsely marked "Completed".
  delete state.completedVideos[videoIndex];

  saveStateToLocalStorage();

  // Re-render quiz and refresh the sidebar/progress to reflect the reset
  renderQuiz(video);
  initSidebar();
}
