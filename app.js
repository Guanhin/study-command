const storageKeys = {
  actions: "study-command-actions-v3",
  importedFiles: "study-command-imports-v1",
  theme: "study-command-theme",
  language: "study-command-language",
  stats: "study-command-stats-v1",
  achievements: "study-command-achievements-v1",
  guideState: "study-command-guide-state-v1",
};

const copy = {
  en: {
    pageTitle: "Study Command",
    brand: "Study Command",
    brandTagline: "One next action, then everything else.",
    navFocus: "Focus",
    navToday: "Today",
    navCalendar: "Calendar",
    ready: "Ready",
    systemCopy: "Open the page, start one block, then decide the rest.",
    themeWorld: "World",
    themeStarry: "Starry",
    achievements: "Achievements",
    achievementGet: "Achievement Get!",
    unlocked: "Unlocked",
    locked: "Locked",
    unlockedSummary: (count) => `${count} unlocked`,
    nextAction: "Next Action",
    highLeverage: "High leverage",
    chooseTask: "Choose a task to start.",
    chooseReason: "Generate a plan or start one action from today's queue.",
    startHere: "Start here",
    focusLoop: "Focus Loop",
    oneClearBlock: "One clear block",
    startFocus: "Start Focus",
    restartFocus: "Restart Focus",
    pause: "Pause",
    resume: "Resume",
    finish: "Finish",
    quit: "Quit",
    focusStreak: (days) => `Focus Streak: ${days} day${days === 1 ? "" : "s"}`,
    playSound: "Play sound",
    pauseSound: "Pause sound",
    volume: "Volume",
    urgentFallback: "Today matters because the test is close enough to become real.",
    upNext: "Up Next",
    compactQueue: "Compact Queue",
    sessionRule: "Session Rule",
    oneBlockOnly: "One block only",
    sessionCopy: "No multitasking. Finish the smallest visible version first.",
    actionQueue: "Action Queue",
    capacity: "Capacity",
    capacityText: (minutes, cap) => `${minutes} / ${cap} min`,
    specificAction: "Specific action",
    itemType: "Item type",
    action: "Action",
    event: "Event",
    deadline: "Deadline",
    minutes: "Minutes",
    priority: "Priority",
    whyToday: "Why today?",
    addAction: "Add Action",
    generatePlan: "Generate Today Plan",
    recommendOne: "Recommend One",
    loadSample: "Load Sample",
    exportData: "Export Data",
    resetData: "Reset",
    resetConfirm: "Reset Study Command data in this browser?",
    resetDone: "Local data reset",
    exportDone: "Study data exported",
    sampleLoaded: "Sample schedule loaded",
    noPlanSources: "Add a deadline first, or load the sample schedule.",
    importSchedule: "Import Schedule",
    plannerRule: "Offline planner: due date + priority + 135 min daily cap + one long-term block.",
    privacyNote: "Your tasks, imported schedules, and focus stats stay in this browser's local storage unless you export or reset them.",
    previousMonth: "Previous month",
    nextMonth: "Next month",
    scheduleInput: "Schedule Input",
    scheduleHelp: "Paste CSV text or import CSV, TXT, or ICS schedules. CSV columns: type,date,title,start,end,minutes,priority,reason,step1,step2,step3,step4. Type can be action, event, or deadline; older files without type stay as actions.",
    promptNote: "To ask AI for import-ready text, use: “Turn my plan into CSV. Use columns type,date,title,start,end,minutes,priority,reason,step1,step2,step3,step4. Use action for work, event for reminders, deadline for due dates. Put each small step in step1-step4, and leave steps blank for events.”",
    importPastedPlan: "Import Pasted Plan",
    clear: "Clear",
    noActionSelected: "No action selected.",
    noActionReason: "Generate a plan or add one concrete action.",
    idle: "Idle",
    defaultDone: "Done means one visible piece of progress exists.",
    doneMeans: "DONE MEANS",
    dueIn: (days) => days < 0 ? `overdue by ${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"}` : days === 0 ? "due today" : `due in ${days} day${days === 1 ? "" : "s"}`,
    noDeadline: "no deadline",
    done: "Done",
    view: "View",
    reminder: "Reminder",
    dueDate: "Due date",
    deleteAction: "Delete item",
    completion: (done, total) => `${done} / ${total} done`,
    compactCompletion: (done, total) => `${done} / ${total}`,
    emptyQueue: "Generate a plan or import your schedule.",
    emptyQueueDetailed: "Add one action, add a deadline, or load the sample schedule to see how planning works.",
    startThisNow: "Start this now",
    urgentCopy: (title) => `${title} is close enough that today changes the workload later.`,
    noPlannedItems: (date) => `${date} has no planned items.`,
    metaDone: "done",
    metaAction: "action",
    metaDeadline: "deadline",
    chooseOne: "Choose one action to open the loop.",
    sessionSummary: (minutes, steps) => `${minutes} min / ${steps} steps / one block ready`,
    focusStarted: (title) => `Starting ${title}`,
    focusFinished: (title, automatic) => `${automatic ? "Auto-finished" : "Finished"} ${title}`,
    focusFinishedFallback: "Focus finished",
    taskLoaded: "Task loaded into Focus",
    reminderOnly: "This item is a reminder, not a focus task",
    reminderCalendar: "Reminder details are shown on the calendar",
    markedDone: (title) => `${title} marked done`,
    removed: (title) => `${title} removed`,
    compactReminderOnly: "Reminder only: no focus timer",
    added: (title) => `Added ${title}`,
    generated: (count) => `Generated ${count} actions`,
    alreadyPlanned: "Today already has a plan",
    recommended: "Recommended one action",
    showing: (date) => `Showing ${date}`,
    backToToday: "Back to today",
    filesSaved: (count) => `${count} file(s) saved`,
    importResult: (created, updated) => `${created} added, ${updated} updated`,
    pasteFirst: "Paste CSV text first",
    noCsvRows: "No valid CSV rows found",
    pastedCleared: "Pasted plan cleared",
    scheduleOpened: "Schedule input opened",
    scheduleClosed: "Schedule input closed",
    chooseSchedule: "Choose your schedule file here",
    file: "file",
    allDay: "all day",
    soundWaves: "Ocean Waves",
    soundPiano: "Soft Piano",
    soundLofi: "Lo-fi Synth",
    soundSpace: "Deep Space",
    soundStarry: "Starry Ambient",
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    greetings: ["Good morning", "Good afternoon", "Good evening"],
  },
  zh: {
    pageTitle: "学习指挥台",
    brand: "学习指挥台",
    brandTagline: "先做下一个动作，其他稍后再说。",
    navFocus: "专注",
    navToday: "今日",
    navCalendar: "日历",
    ready: "就绪",
    systemCopy: "打开页面，开始一个专注块，再决定其他事。",
    themeWorld: "世界",
    themeStarry: "星空",
    achievements: "成就",
    achievementGet: "成就完成！",
    unlocked: "已解锁",
    locked: "未解锁",
    unlockedSummary: (count) => `已解锁 ${count} 个`,
    nextAction: "下一个动作",
    highLeverage: "高价值",
    chooseTask: "选择一个任务开始。",
    chooseReason: "生成今日计划，或从队列里开始一个动作。",
    startHere: "从这里开始",
    focusLoop: "专注循环",
    oneClearBlock: "一个清楚的专注块",
    startFocus: "开始专注",
    restartFocus: "重新开始",
    pause: "暂停",
    resume: "继续",
    finish: "完成",
    quit: "退出",
    focusStreak: (days) => `连续专注：${days} 天`,
    playSound: "播放声音",
    pauseSound: "暂停声音",
    volume: "音量",
    urgentFallback: "今天很重要，因为截止日期已经足够近了。",
    upNext: "接下来",
    compactQueue: "紧凑队列",
    sessionRule: "本次规则",
    oneBlockOnly: "只做一个块",
    sessionCopy: "不多任务。先完成最小可见版本。",
    actionQueue: "行动队列",
    capacity: "容量",
    capacityText: (minutes, cap) => `${minutes} / ${cap} 分钟`,
    specificAction: "具体动作",
    itemType: "项目类型",
    action: "动作",
    event: "事件",
    deadline: "截止",
    minutes: "分钟",
    priority: "优先级",
    whyToday: "为什么今天？",
    addAction: "添加动作",
    generatePlan: "生成今日计划",
    recommendOne: "推荐一个",
    loadSample: "载入示例",
    exportData: "导出数据",
    resetData: "重置",
    resetConfirm: "重置此浏览器中的学习指挥台数据？",
    resetDone: "本地数据已重置",
    exportDone: "学习数据已导出",
    sampleLoaded: "示例日程已载入",
    noPlanSources: "请先添加截止日期，或载入示例日程。",
    importSchedule: "导入日程",
    plannerRule: "离线规划：截止日期 + 优先级 + 每日 135 分钟上限 + 一个长期目标块。",
    privacyNote: "你的任务、导入日程和专注统计只保存在此浏览器本地，除非你主动导出或重置。",
    previousMonth: "上个月",
    nextMonth: "下个月",
    scheduleInput: "日程输入",
    scheduleHelp: "粘贴 CSV 文本，或导入 CSV、TXT、ICS 日程。CSV 列：type,date,title,start,end,minutes,priority,reason,step1,step2,step3,step4。type 可为 action、event、deadline；旧格式默认作为 action。",
    promptNote: "给 AI 的提示词：把我的计划转成 CSV。列使用 type,date,title,start,end,minutes,priority,reason,step1,step2,step3,step4。学习任务用 action，提醒用 event，截止日期用 deadline。小步骤分别放进 step1-step4。",
    importPastedPlan: "导入粘贴计划",
    clear: "清空",
    noActionSelected: "还没有选择动作。",
    noActionReason: "生成计划，或添加一个具体动作。",
    idle: "空闲",
    defaultDone: "完成意味着有一个可见的进展。",
    doneMeans: "完成标准",
    dueIn: (days) => days < 0 ? `已逾期 ${Math.abs(days)} 天` : days === 0 ? "今天截止" : `${days} 天后截止`,
    noDeadline: "无截止日期",
    done: "完成",
    view: "查看",
    reminder: "提醒",
    dueDate: "截止日期",
    deleteAction: "删除项目",
    completion: (done, total) => `${done} / ${total} 完成`,
    compactCompletion: (done, total) => `${done} / ${total}`,
    emptyQueue: "生成计划或导入日程。",
    emptyQueueDetailed: "添加一个动作、添加一个截止日期，或载入示例日程来看看规划如何工作。",
    startThisNow: "现在开始这个",
    urgentCopy: (title) => `${title} 已经很近，今天做会减轻后面的压力。`,
    noPlannedItems: (date) => `${date} 没有计划项目。`,
    metaDone: "已完成",
    metaAction: "动作",
    metaDeadline: "截止",
    chooseOne: "选择一个动作来打开专注循环。",
    sessionSummary: (minutes, steps) => `${minutes} 分钟 / ${steps} 步 / 一个专注块就绪`,
    focusStarted: (title) => `开始 ${title}`,
    focusFinished: (title, automatic) => `${automatic ? "自动完成" : "完成"} ${title}`,
    focusFinishedFallback: "专注完成",
    taskLoaded: "任务已载入专注区",
    reminderOnly: "这是提醒，不是专注任务",
    reminderCalendar: "提醒详情显示在日历中",
    markedDone: (title) => `${title} 已完成`,
    removed: (title) => `${title} 已删除`,
    compactReminderOnly: "仅提醒：没有专注计时器",
    added: (title) => `已添加 ${title}`,
    generated: (count) => `已生成 ${count} 个动作`,
    alreadyPlanned: "今天已经有计划了",
    recommended: "已推荐一个动作",
    showing: (date) => `正在显示 ${date}`,
    backToToday: "回到今天",
    filesSaved: (count) => `已保存 ${count} 个文件`,
    importResult: (created, updated) => `新增 ${created}，更新 ${updated}`,
    pasteFirst: "请先粘贴 CSV 文本",
    noCsvRows: "没有找到有效 CSV 行",
    pastedCleared: "已清空粘贴计划",
    scheduleOpened: "已打开日程输入",
    scheduleClosed: "已关闭日程输入",
    chooseSchedule: "在这里选择你的日程文件",
    file: "文件",
    allDay: "全天",
    soundWaves: "海浪",
    soundPiano: "轻柔钢琴",
    soundLofi: "Lo-fi 合成器",
    soundSpace: "深空",
    soundStarry: "星空氛围",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    greetings: ["早上好", "下午好", "晚上好"],
  },
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const timeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const goals = [];

const seedActions = [];

const focusQuotes = [
  "Just stay with this one rep.",
  "Small progress counts when it is real.",
  "You only need to win this block.",
  "Start messy. Finish clearer.",
  "One focused minute beats ten scattered ones.",
  "Do the next line, not the whole mountain.",
  "Your future self is watching this moment kindly.",
  "Make it visible before making it perfect.",
  "The timer is not pressure. It is a boundary.",
  "Return to the task. That is the skill.",
  "A quiet block can change the whole day.",
  "Less switching, more finishing.",
  "This is practice, and practice compounds.",
  "Keep your hands on the work.",
  "One clear action is enough to restart momentum.",
];

const localizedFocusQuotes = {
  en: focusQuotes,
  zh: [
    "只要留在这一轮里就够了。",
    "真实的小进步也算数。",
    "你只需要赢下这个专注块。",
    "先乱一点开始，再清楚一点结束。",
    "一分钟专注胜过十分钟分心。",
    "先做下一行，不要想着整座山。",
    "未来的你会感谢这一刻。",
    "先让它可见，再让它完美。",
    "计时器不是压力，是边界。",
    "回到任务上，这就是能力。",
    "安静的一块时间，可以改变一整天。",
    "少切换，多完成。",
    "这是练习，而练习会复利。",
    "把手放回工作上。",
    "一个清楚的动作，就足够重启节奏。",
  ],
};

const achievementCopy = {
  en: {
    "first-focus": ["First Focus", "Complete 1 focus block."],
    "ten-minute-spark": ["Ten-Minute Spark", "Study for 10 total minutes."],
    "study-hobbyist": ["Study Hobbyist", "Study for 1 total hour."],
    "deep-work-initiate": ["Deep Work Initiate", "Study for 3 total hours."],
    "action-streaker": ["Action Streaker", "Complete 5 study actions."],
    "triple-win": ["Triple Win", "Complete 3 actions in one day."],
    "schedule-importer": ["Schedule Importer", "Import or paste a schedule once."],
  },
  zh: {
    "first-focus": ["初次专注", "完成 1 个专注块。"],
    "ten-minute-spark": ["十分钟火花", "累计学习 10 分钟。"],
    "study-hobbyist": ["学习爱好者", "累计学习 1 小时。"],
    "deep-work-initiate": ["深度学习入门", "累计学习 3 小时。"],
    "action-streaker": ["行动连击", "完成 5 个学习动作。"],
    "triple-win": ["今日三连胜", "一天内完成 3 个动作。"],
    "schedule-importer": ["日程导入者", "导入或粘贴一次日程。"],
  },
};

const achievements = [
  {
    id: "first-focus",
    title: "First Focus",
    requirement: "Complete 1 focus block.",
    progressLabel: (stats) => currentLanguage === "zh"
      ? `${Math.min(1, stats.focusBlocksCompleted || 0)} / 1 个专注块`
      : `${Math.min(1, stats.focusBlocksCompleted || 0)} / 1 block`,
    progressValue: (stats) => Math.min(1, (stats.focusBlocksCompleted || 0) / 1),
    isUnlocked: (stats) => (stats.focusBlocksCompleted || 0) >= 1,
  },
  {
    id: "ten-minute-spark",
    title: "Ten-Minute Spark",
    requirement: "Study for 10 total minutes.",
    progressLabel: (stats) => `${Math.min(10, Math.floor((stats.totalFocusSeconds || 0) / 60))} / 10 ${currentLanguage === "zh" ? "分钟" : "min"}`,
    progressValue: (stats) => Math.min(1, (stats.totalFocusSeconds || 0) / 600),
    isUnlocked: (stats) => (stats.totalFocusSeconds || 0) >= 600,
  },
  {
    id: "study-hobbyist",
    title: "Study Hobbyist",
    requirement: "Study for 1 total hour.",
    progressLabel: (stats) => `${Math.min(60, Math.floor((stats.totalFocusSeconds || 0) / 60))} / 60 ${currentLanguage === "zh" ? "分钟" : "min"}`,
    progressValue: (stats) => Math.min(1, (stats.totalFocusSeconds || 0) / 3600),
    isUnlocked: (stats) => (stats.totalFocusSeconds || 0) >= 3600,
  },
  {
    id: "deep-work-initiate",
    title: "Deep Work Initiate",
    requirement: "Study for 3 total hours.",
    progressLabel: (stats) => `${Math.min(180, Math.floor((stats.totalFocusSeconds || 0) / 60))} / 180 ${currentLanguage === "zh" ? "分钟" : "min"}`,
    progressValue: (stats) => Math.min(1, (stats.totalFocusSeconds || 0) / 10800),
    isUnlocked: (stats) => (stats.totalFocusSeconds || 0) >= 10800,
  },
  {
    id: "action-streaker",
    title: "Action Streaker",
    requirement: "Complete 5 study actions.",
    progressLabel: () => currentLanguage === "zh"
      ? `${Math.min(5, completedActionCount())} / 5 个动作`
      : `${Math.min(5, completedActionCount())} / 5 actions`,
    progressValue: () => Math.min(1, completedActionCount() / 5),
    isUnlocked: () => completedActionCount() >= 5,
  },
  {
    id: "triple-win",
    title: "Triple Win",
    requirement: "Complete 3 actions in one day.",
    progressLabel: () => currentLanguage === "zh"
      ? `${Math.min(3, completedTodayActionCount())} / 3 今日`
      : `${Math.min(3, completedTodayActionCount())} / 3 today`,
    progressValue: () => Math.min(1, completedTodayActionCount() / 3),
    isUnlocked: () => completedTodayActionCount() >= 3,
  },
  {
    id: "schedule-importer",
    title: "Schedule Importer",
    requirement: "Import or paste a schedule once.",
    progressLabel: () => currentLanguage === "zh"
      ? `${Math.min(1, importedScheduleCount())} / 1 次导入`
      : `${Math.min(1, importedScheduleCount())} / 1 import`,
    progressValue: () => Math.min(1, importedScheduleCount()),
    isUnlocked: () => importedScheduleCount() >= 1,
  },
];

let actions = [];
let stats = {};
let unlockedAchievements = {};
let currentLanguage = "en";
let selectedDate = todayKey();
let visibleMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let activeActionId = null;
let remainingSeconds = 0;
let focusRunning = false;
let focusInterval = null;
let focusEndsAt = null;
let currentFocusQuote = "";
let guideState = {};
let toastTimer = null;
let achievementToastTimer = null;
let achievementToastQueue = [];
let achievementToastActive = false;
let audioContext = null;
let soundscapeNodes = [];
let soundscapeGain = null;

function todayKey(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function daysUntil(value) {
  if (!value) return null;
  return Math.round((parseDate(value) - parseDate(todayKey())) / 86400000);
}

function createAction(action, day = todayKey()) {
  return {
    id: createId(),
    day,
    type: "action",
    completed: false,
    startedAt: null,
    completedAt: null,
    createdAt: new Date().toISOString(),
    ...action,
  };
}

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `action-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function t(key, ...args) {
  const value = copy[currentLanguage]?.[key] ?? copy.en[key] ?? key;
  return typeof value === "function" ? value(...args) : value;
}

function activeLocale() {
  return currentLanguage === "zh" ? "zh-CN" : "en-US";
}

function achievementText(achievement, index) {
  const values = achievementCopy[currentLanguage]?.[achievement.id]
    || achievementCopy.en[achievement.id]
    || [achievement.title, achievement.requirement];
  return values[index];
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = value;
}

function setAria(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("aria-label", value);
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = t("pageTitle");

  setText(".brand h1", t("brand"));
  setText(".brand p", t("brandTagline"));
  setText('.nav-item[href="#focus"]', t("navFocus"));
  setText('.nav-item[href="#today"]', t("navToday"));
  setText('.nav-item[href="#calendar"]', t("navCalendar"));
  setText("#system-status", t("ready"));
  setText("#system-copy", t("systemCopy"));
  setText('button[data-theme="world"]', t("themeWorld"));
  setText('button[data-theme="starry"]', t("themeStarry"));
  setText("#achievements-toggle span", t("achievements"));
  setText(".achievements-panel__top strong", t("achievements"));
  setText(".achievement-toast span", t("achievementGet"));
  setAria("#achievements-panel", t("achievements"));

  setText(".focus-meta .label", t("nextAction"));
  setText("#focus-risk", t("highLeverage"));
  setText("#focus-title", t("chooseTask"));
  setText("#focus-reason", t("chooseReason"));
  document.querySelector("#focus-reason")?.setAttribute("data-done-means", t("doneMeans"));
  setText(".guide-top strong", t("startHere"));
  setText(".focus-loop-card span", t("focusLoop"));
  setText(".focus-loop-card strong", t("oneClearBlock"));
  setText("#primary-start", t("startFocus"));
  setText("#pause-focus", t("pause"));
  setText("#finish-focus", t("finish"));
  setText("#quit-focus", t("quit"));

  document.querySelectorAll(".scenic-dock a").forEach((link) => {
    if (link.getAttribute("href") === "#today") link.textContent = t("navToday");
    if (link.getAttribute("href") === "#calendar") link.textContent = t("navCalendar");
  });
  const soundscapeToggle = document.querySelector("#soundscape-toggle");
  if (soundscapeToggle) {
    soundscapeToggle.textContent = soundscapeToggle.getAttribute("aria-pressed") === "true"
      ? t("pauseSound")
      : t("playSound");
  }
  setText(".volume-control span", t("volume"));
  setAria("#soundscape-wheel", currentLanguage === "zh" ? "专注声音类型" : "Focus sound type");
  setAria("#soundscape-volume", currentLanguage === "zh" ? "声音音量" : "Sound volume");
  updateSoundscapeLabels();

  setText(".compact-queue-panel .label", t("upNext"));
  setText(".compact-queue-panel h3", t("compactQueue"));
  setText(".session-panel .label", t("sessionRule"));
  setText(".session-panel h3", t("oneBlockOnly"));
  setText(".session-panel p", t("sessionCopy"));
  setText(".today-panel .label", t("navToday"));
  setText(".today-panel h3", t("actionQueue"));
  setText("#capacity-label", t("capacity"));
  setPlaceholder("#task-title-input", t("specificAction"));
  setAria("#task-type-input", t("itemType"));
  setText('#task-type-input option[value="action"]', t("action"));
  setText('#task-type-input option[value="event"]', t("event"));
  setText('#task-type-input option[value="deadline"]', t("deadline"));
  setAria("#task-minutes-input", t("minutes"));
  setAria("#task-priority-input", t("priority"));
  setAria("#task-deadline-input", t("deadline"));
  setPlaceholder("#task-reason-input", t("whyToday"));
  setText("#quick-add-form button", t("addAction"));
  setText("#plan-action", t("generatePlan"));
  setText("#recommend-action", t("recommendOne"));
  setText("#sample-action", t("loadSample"));
  setText("#import-shortcut", t("importSchedule"));
  setText(".planner-rule-note", t("plannerRule"));
  setText("#export-data", t("exportData"));
  setText("#reset-data", t("resetData"));

  setAria("#prev-month", t("previousMonth"));
  setText("#select-today", t("navToday"));
  setAria("#next-month", t("nextMonth"));
  document.querySelectorAll(".calendar-weekdays span").forEach((span, index) => {
    span.textContent = t("weekdays")[index];
  });

  setText("#schedule-input summary", t("scheduleInput"));
  const importParagraphs = document.querySelectorAll("#schedule-input > p");
  if (importParagraphs[0]) importParagraphs[0].textContent = t("scheduleHelp");
  if (importParagraphs[1]) importParagraphs[1].textContent = t("promptNote");
  setText("#privacy-note", t("privacyNote"));
  setText("#import-pasted-plan", t("importPastedPlan"));
  setText("#clear-pasted-plan", t("clear"));

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });
}

function updateSoundscapeLabels() {
  const labels = {
    waves: t("soundWaves"),
    "soft-piano": t("soundPiano"),
    "lofi-synth": t("soundLofi"),
    "deep-space": t("soundSpace"),
    "starry-pad": t("soundStarry"),
  };

  document.querySelectorAll(".option-wheel__item").forEach((item) => {
    item.textContent = labels[item.dataset.value] || item.textContent;
  });
  document.querySelectorAll("#soundscape-select option").forEach((option) => {
    option.textContent = labels[option.value] || option.textContent;
  });
}

function setLanguage(language) {
  currentLanguage = language === "zh" ? "zh" : "en";
  localStorage.setItem(storageKeys.language, currentLanguage);
  if (activeActionId) chooseFocusQuote();
  applyLanguage();
  updateClock();
  renderAll();
}

function loadActions() {
  const saved = readJson(storageKeys.actions, null);
  if (Array.isArray(saved)) return saved.map((action) => ({ ...action, type: action.type || "action" }));
  const seeded = seedActions.map((action) => createAction(action));
  localStorage.setItem(storageKeys.actions, JSON.stringify(seeded));
  return seeded;
}

function saveActions() {
  localStorage.setItem(storageKeys.actions, JSON.stringify(actions));
}

function loadStats() {
  return {
    totalFocusSeconds: 0,
    focusBlocksCompleted: 0,
    ...readJson(storageKeys.stats, {}),
  };
}

function saveStats() {
  localStorage.setItem(storageKeys.stats, JSON.stringify(stats));
}

function loadUnlockedAchievements() {
  return readJson(storageKeys.achievements, {});
}

function saveUnlockedAchievements() {
  localStorage.setItem(storageKeys.achievements, JSON.stringify(unlockedAchievements));
}

function loadGuideState() {
  const saved = readJson(storageKeys.guideState, {});
  if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
  return Object.fromEntries(Object.entries(saved).map(([actionId, indexes]) => [
    actionId,
    Array.isArray(indexes) ? indexes.filter(Number.isInteger) : [],
  ]));
}

function saveGuideState() {
  localStorage.setItem(storageKeys.guideState, JSON.stringify(guideState));
}

function completedActionCount() {
  return actions.filter((action) => actionType(action) === "action" && action.completed).length;
}

function completedTodayActionCount() {
  return actions.filter((action) => action.day === todayKey() && actionType(action) === "action" && action.completed).length;
}

function importedScheduleCount() {
  return readJson(storageKeys.importedFiles, []).length;
}

function completionDay(action) {
  if (action.completedAt) return todayKey(new Date(action.completedAt));
  if (action.completed) return action.day || todayKey();
  return null;
}

function studyStreak() {
  const completedDays = new Set(actions
    .filter((action) => actionType(action) === "action" && action.completed)
    .map(completionDay)
    .filter(Boolean));
  let cursor = parseDate(todayKey());
  let streak = 0;

  while (completedDays.has(todayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function sanitizeImportHistory() {
  const records = readJson(storageKeys.importedFiles, []);
  if (!Array.isArray(records) || !records.length) return;

  const sanitized = records.map((record) => ({
    source: record?.name === "Pasted plan" ? "paste" : "file",
    addedAt: record?.addedAt || new Date().toISOString(),
  }));
  localStorage.setItem(storageKeys.importedFiles, JSON.stringify(sanitized));
}

function commit(nextActions) {
  actions = nextActions;
  saveActions();
  renderAll();
  checkAchievements();
}

function showToast(message) {
  const toast = document.querySelector("#app-toast");
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function showAchievementToast(achievement) {
  achievementToastQueue.push(achievement);
  if (achievementToastActive) return;
  showNextAchievementToast();
}

function showNextAchievementToast() {
  const achievement = achievementToastQueue.shift();
  if (!achievement) {
    achievementToastActive = false;
    return;
  }

  const toast = document.querySelector("#achievement-toast");
  const title = document.querySelector("#achievement-title");
  if (!toast || !title) {
    achievementToastActive = false;
    return;
  }

  achievementToastActive = true;
  clearTimeout(achievementToastTimer);
  title.textContent = achievementText(achievement, 0);
  toast.hidden = false;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  achievementToastTimer = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (!toast.classList.contains("show")) toast.hidden = true;
      showNextAchievementToast();
    }, 320);
  }, 4200);
}

function checkAchievements({ announce = true } = {}) {
  let changed = false;
  achievements.forEach((achievement) => {
    if (unlockedAchievements[achievement.id] || !achievement.isUnlocked(stats)) return;
    unlockedAchievements[achievement.id] = {
      title: achievementText(achievement, 0),
      unlockedAt: new Date().toISOString(),
    };
    changed = true;
    if (announce) showAchievementToast(achievement);
  });
  if (changed) saveUnlockedAchievements();
  renderAchievements();
}

function addFocusSeconds(seconds = 1) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  if (!safeSeconds) return;
  stats.totalFocusSeconds = (stats.totalFocusSeconds || 0) + safeSeconds;
  saveStats();
  checkAchievements();
}

function renderAchievements() {
  const count = document.querySelector("#achievement-count");
  const summary = document.querySelector("#achievement-summary");
  const list = document.querySelector("#achievements-list");
  if (!count || !summary || !list) return;

  const unlockedCount = achievements.filter((achievement) => unlockedAchievements[achievement.id]).length;
  count.textContent = `${unlockedCount} / ${achievements.length}`;
  summary.textContent = t("unlockedSummary", unlockedCount);
  list.innerHTML = "";

  achievements.forEach((achievement) => {
    const unlocked = Boolean(unlockedAchievements[achievement.id]);
    const progress = Math.max(0, Math.min(1, achievement.progressValue?.(stats) ?? (unlocked ? 1 : 0)));
    const row = document.createElement("article");
    row.className = "achievement-row";
    row.classList.toggle("achievement-row--locked", !unlocked);
    row.innerHTML = `
      <div class="achievement-row__icon">${unlocked ? "A" : "?"}</div>
      <div class="achievement-row__body">
        <div class="achievement-row__title">
          <strong></strong>
          <span></span>
        </div>
        <p></p>
        <div class="achievement-progress" aria-hidden="true"><div></div></div>
      </div>
    `;
    row.querySelector("strong").textContent = achievementText(achievement, 0);
    row.querySelector(".achievement-row__title span").textContent = unlocked ? t("unlocked") : achievement.progressLabel?.(stats) || t("locked");
    row.querySelector("p").textContent = achievementText(achievement, 1);
    row.querySelector(".achievement-progress div").style.width = `${Math.round(progress * 100)}%`;
    list.append(row);
  });
}

function renderProgressSummary() {
  const streak = document.querySelector("#focus-streak");
  if (streak) streak.textContent = t("focusStreak", studyStreak());
}

function closeAchievementsPanel() {
  const panel = document.querySelector("#achievements-panel");
  const toggle = document.querySelector("#achievements-toggle");
  if (!panel || !toggle) return;
  panel.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}

function pulseElement(element) {
  if (!element) return;
  element.classList.remove("pulse");
  void element.offsetWidth;
  element.classList.add("pulse");
}

function playUiSound(kind = "click") {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  audioContext ||= new AudioCtor();
  if (audioContext.state === "suspended") audioContext.resume();

  const settings = {
    click: { notes: [520], duration: 0.045, volume: 0.035, wave: "sine" },
    start: { notes: [392, 587], duration: 0.11, volume: 0.05, wave: "sine" },
    pause: { notes: [330], duration: 0.09, volume: 0.04, wave: "triangle" },
    finish: { notes: [523, 659, 784], duration: 0.12, volume: 0.055, wave: "sine" },
    quit: { notes: [392, 262], duration: 0.1, volume: 0.04, wave: "triangle" },
  }[kind] || null;
  if (!settings) return;

  const now = audioContext.currentTime;
  settings.notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = now + index * settings.duration * 0.72;
    oscillator.type = settings.wave;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(settings.volume, start + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + settings.duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + settings.duration + 0.02);
  });
}

function stopSoundscape() {
  soundscapeNodes.forEach((node) => {
    try { node.stop?.(); } catch {}
    node.disconnect?.();
  });
  soundscapeNodes = [];
}

function createNoiseSource(type) {
  const sampleRate = audioContext.sampleRate;
  const buffer = audioContext.createBuffer(1, sampleRate * 2, sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;

  for (let index = 0; index < data.length; index += 1) {
    const white = Math.random() * 2 - 1;
    if (type === "brown") {
      last = (last + white * 0.035) / 1.035;
      data[index] = last * 3.2;
    } else {
      data[index] = white;
    }
  }

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
}

function startSoundscape(type) {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  audioContext ||= new AudioCtor();
  if (audioContext.state === "suspended") audioContext.resume();
  stopSoundscape();

  soundscapeGain = audioContext.createGain();
  soundscapeGain.gain.value = Number(document.querySelector("#soundscape-volume")?.value || 0.03);
  soundscapeGain.connect(audioContext.destination);

  if (type === "waves") {
    const source = createNoiseSource("brown");
    const filter = audioContext.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 650;
    const waveGain = audioContext.createGain();
    const swell = audioContext.createOscillator();
    const swellDepth = audioContext.createGain();
    waveGain.gain.value = 0.58;
    swell.type = "sine";
    swell.frequency.value = 0.08;
    swellDepth.gain.value = 0.16;
    swell.connect(swellDepth).connect(waveGain.gain);
    source.connect(filter).connect(waveGain).connect(soundscapeGain);
    source.start();
    swell.start();
    soundscapeNodes = [source, filter, waveGain, swell, swellDepth];
    return;
  }

  const chordMap = {
    "soft-piano": [261.63, 329.63, 392],
    "lofi-synth": [220, 277.18, 329.63],
    "deep-space": [110, 164.81, 220],
    "starry-pad": [196, 246.94, 293.66],
  };
  const chord = chordMap[type] || chordMap["starry-pad"];
  soundscapeNodes = chord.map((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type === "soft-piano" || type === "deep-space" ? "sine" : (index === 1 ? "sine" : "triangle");
    oscillator.frequency.value = frequency;
    gain.gain.value = (type === "soft-piano" ? 0.07 : type === "deep-space" ? 0.05 : 0.09) / chord.length;
    oscillator.connect(gain).connect(soundscapeGain);
    oscillator.start();
    return oscillator;
  });
}

function wireSoundscapeWheel() {
  const wheel = document.querySelector("#soundscape-wheel");
  const select = document.querySelector("#soundscape-select");
  if (!wheel || !select) return;
  const items = [...wheel.querySelectorAll(".option-wheel__item")];
  let selected = 0;

  const render = () => {
    items.forEach((item, index) => {
      let distance = index - selected;
      if (distance > items.length / 2) distance -= items.length;
      if (distance < -items.length / 2) distance += items.length;
      const visible = Math.abs(distance) <= 2;
      item.hidden = !visible;
      item.classList.toggle("option-wheel__item--selected", distance === 0);
      item.setAttribute("aria-selected", String(distance === 0));
      item.style.setProperty("--ow-distance", String(distance));
      item.style.setProperty("--ow-opacity", String(Math.max(0.18, 1 - Math.abs(distance) * 0.28)));
    });
    select.value = items[selected].dataset.value;
  };

  const move = (delta) => {
    selected = (selected + delta + items.length) % items.length;
    render();
    const toggle = document.querySelector("#soundscape-toggle");
    if (toggle?.getAttribute("aria-pressed") === "true") startSoundscape(select.value);
  };

  items.forEach((item, index) => item.addEventListener("click", () => {
    const delta = index - selected;
    move(delta > 0 ? 1 : -1);
  }));
  wheel.addEventListener("wheel", (event) => {
    event.preventDefault();
    move(event.deltaY > 0 ? 1 : -1);
  }, { passive: false });
  wheel.addEventListener("keydown", (event) => {
    if (!["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    move(event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1);
  });
  select.addEventListener("change", () => {
    selected = Math.max(0, items.findIndex((item) => item.dataset.value === select.value));
    render();
  });
  render();
}

function setSoundscapeState(running) {
  const toggle = document.querySelector("#soundscape-toggle");
  const select = document.querySelector("#soundscape-select");
  if (!toggle || !select) return;
  toggle.setAttribute("aria-pressed", String(running));
  toggle.textContent = running ? t("pauseSound") : t("playSound");
  if (running) {
    startSoundscape(select.value);
  } else {
    stopSoundscape();
  }
}

function wireSpecularButtons() {
  const buttons = [...document.querySelectorAll(".primary-action, .secondary-action")];
  const proximity = 260;

  const updateButtonLight = (event) => {
    buttons.forEach((button) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const edgeX = Math.max(rect.left - event.clientX, 0, event.clientX - rect.right);
      const edgeY = Math.max(rect.top - event.clientY, 0, event.clientY - rect.bottom);
      const distance = Math.hypot(edgeX, edgeY);
      const closeness = Math.max(0, 1 - distance / proximity);
      const opacity = closeness * closeness * (3 - 2 * closeness);

      button.style.setProperty("--spec-angle", `${Math.atan2(dy, dx) + Math.PI / 2}rad`);
      button.style.setProperty("--spec-opacity", opacity.toFixed(3));
      button.style.setProperty("--spec-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      button.style.setProperty("--spec-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    });
  };

  window.addEventListener("pointermove", updateButtonLight);
  window.addEventListener("pointerleave", () => {
    buttons.forEach((button) => button.style.setProperty("--spec-opacity", "0"));
  });
}

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? t("greetings")[0] : hour < 18 ? t("greetings")[1] : t("greetings")[2];
  document.querySelector("#greeting").textContent = greeting;
  document.querySelector("#today-date").textContent = new Intl.DateTimeFormat(activeLocale(), {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(now);
  document.querySelector("#live-clock").textContent = timeFormat.format(now);
}

function todayActions() {
  return actions.filter((action) => action.day === todayKey());
}

function actionType(action) {
  const type = String(action?.type || "action").toLowerCase();
  return ["action", "event", "deadline"].includes(type) ? type : "action";
}

function workActions(rows = todayActions()) {
  return rows.filter((action) => actionType(action) === "action");
}

function openTodayActions() {
  return workActions().filter((action) => !action.completed);
}

function riskScore(action) {
  const days = daysUntil(action.deadline);
  const priority = action.priority === "P1" ? 100 : action.priority === "P2" ? 55 : 20;
  const urgency = days === null ? 0 : Math.max(0, 50 - days * 5);
  return priority + urgency;
}

function nextAction() {
  return [...openTodayActions()].sort((a, b) => riskScore(b) - riskScore(a))[0] || null;
}

function focusCandidate() {
  return nextAction() || workActions()[0] || null;
}

function updateFocusProgress(action) {
  const fill = document.querySelector("#focus-progress-fill");

  const totalSeconds = Math.max(1, (action?.minutes || 0) * 60);
  const elapsedSeconds = activeActionId ? Math.max(0, totalSeconds - remainingSeconds) : 0;
  const progress = Math.min(1, elapsedSeconds / totalSeconds);
  const progressPercent = Math.round(progress * 1000) / 10;

  if (fill) fill.style.width = `${progressPercent}%`;

  updateOrbitMarker(progress);

  const stack = document.querySelector(".focus-timer-stack");
  if (stack) stack.style.setProperty("--focus-progress", `${progressPercent}%`);
}

function updateOrbitMarker(progress) {
  const marker = document.querySelector("#focus-orbit-star");
  if (!marker) return;

  const t = Math.max(0, Math.min(1, progress));
  const start = { x: 70, y: 178 };
  const controlA = { x: 230, y: 24 };
  const controlB = { x: 720, y: 24 };
  const end = { x: 930, y: 160 };
  const inverse = 1 - t;
  const x = inverse ** 3 * start.x
    + 3 * inverse ** 2 * t * controlA.x
    + 3 * inverse * t ** 2 * controlB.x
    + t ** 3 * end.x;
  const y = inverse ** 3 * start.y
    + 3 * inverse ** 2 * t * controlA.y
    + 3 * inverse * t ** 2 * controlB.y
    + t ** 3 * end.y;
  marker.setAttribute("x", x.toFixed(2));
  marker.setAttribute("y", y.toFixed(2));
}

function renderFocus() {
  const action = activeActionId
    ? actions.find((item) => item.id === activeActionId)
    : focusCandidate();

  const title = document.querySelector("#focus-title");
  const reason = document.querySelector("#focus-reason");
  const risk = document.querySelector("#focus-risk");
  const startButton = document.querySelector("#primary-start");
  const pauseButton = document.querySelector("#pause-focus");
  const finishButton = document.querySelector("#finish-focus");
  const quitButton = document.querySelector("#quit-focus");
  const quote = document.querySelector("#focus-quote");
  const hasActiveSession = Boolean(activeActionId);

  pauseButton.disabled = !hasActiveSession;
  finishButton.disabled = !hasActiveSession;
  quitButton.disabled = !hasActiveSession;
  pauseButton.textContent = hasActiveSession && !focusRunning ? t("resume") : t("pause");
  if (quote) {
    quote.textContent = hasActiveSession ? currentFocusQuote : "";
    quote.hidden = !hasActiveSession;
  }

  if (!action) {
    title.textContent = t("noActionSelected");
    reason.textContent = t("noActionReason");
    risk.textContent = t("idle");
    startButton.disabled = true;
    startButton.textContent = t("startFocus");
    pauseButton.textContent = t("pause");
    renderSessionSummary(null);
    renderGuide(null);
    updateFocusProgress(null);
    if (!focusRunning) setClockDisplay("00:00");
    return;
  }

  title.textContent = action.title;
  reason.textContent = action.reason || t("defaultDone");
  const days = daysUntil(action.deadline);
  risk.textContent = days === null ? action.priority : `${action.priority} / ${t("dueIn", days)}`;
  startButton.disabled = false;
  startButton.textContent = action.completed ? t("restartFocus") : t("startFocus");
  renderSessionSummary(action);
  renderGuide(action);
  updateFocusProgress(action);

  if (!activeActionId && !focusRunning) {
    setClockDisplay(formatRemaining(action.minutes * 60));
  }
}

function setClockDisplay(value) {
  const clock = document.querySelector("#focus-clock");
  if (!clock) return;

  const text = String(value);
  clock.dataset.time = text;
  clock.setAttribute("aria-label", text);

  if (clock.dataset.counterReady !== "true" || clock.dataset.places !== text.length.toString()) {
    clock.innerHTML = "";
    [...text].forEach((char) => {
      if (char === ":") {
        const separator = document.createElement("span");
        separator.className = "counter-separator";
        separator.textContent = ":";
        clock.append(separator);
        return;
      }

      const digit = document.createElement("span");
      digit.className = "counter-digit";
      digit.style.setProperty("--digit", char);
      digit.setAttribute("aria-hidden", "true");

      const track = document.createElement("span");
      track.className = "counter-track";
      for (let number = 0; number <= 9; number += 1) {
        const item = document.createElement("span");
        item.textContent = number;
        track.append(item);
      }

      digit.append(track);
      clock.append(digit);
    });

    clock.dataset.counterReady = "true";
    clock.dataset.places = text.length.toString();
    return;
  }

  const digits = clock.querySelectorAll(".counter-digit");
  let digitIndex = 0;
  [...text].forEach((char) => {
    if (char === ":") return;
    digits[digitIndex]?.style.setProperty("--digit", char);
    digitIndex += 1;
  });
}

function renderSessionSummary(action) {
  const summary = document.querySelector("#session-summary");
  if (!summary) return;

  if (!action) {
    summary.textContent = t("chooseOne");
    return;
  }

  const steps = guideSteps(action).length;
  summary.textContent = t("sessionSummary", action.minutes, steps);
}

function renderGuide(action) {
  const list = document.querySelector("#focus-guide-list");
  const progress = document.querySelector("#guide-progress");
  if (!list || !progress) return;

  if (!action) {
    list.innerHTML = `<p class="empty-state">${t("chooseOne")}</p>`;
    progress.textContent = "0 / 0";
    return;
  }

  const steps = guideSteps(action);
  const checked = guideState[action.id] || [];
  list.innerHTML = "";

  steps.forEach((step, index) => {
    const label = document.createElement("label");
    label.className = "guide-step";
    label.innerHTML = `
      <input type="checkbox" data-action-id="${action.id}" data-step-index="${index}" />
      <span></span>
    `;
    label.querySelector("input").checked = checked.includes(index);
    label.querySelector("span").textContent = step;
    list.append(label);
  });

  progress.textContent = `${checked.length} / ${steps.length}`;
}

function guideSteps(action) {
  if (Array.isArray(action.customSteps) && action.customSteps.length) {
    return action.customSteps;
  }
  if (typeof action.customSteps === "string" && action.customSteps.trim()) {
    return action.customSteps.split("|").map((step) => step.trim()).filter(Boolean);
  }

  const title = `${action.title} ${action.linkedGoal || ""}`.toLowerCase();

  if (title.includes("essay")) {
    return [
      "Open the document and write the assignment prompt at the top.",
      "Write one rough thesis sentence, even if it is ugly.",
      "List three body points as bullets.",
      "Mark the weakest point to fix next.",
    ];
  }

  if (title.includes("stat") || title.includes("test")) {
    return [
      "Open the exact problem set or review sheet.",
      "Do 5 problems without checking answers.",
      "Check mistakes and write the pattern in one sentence.",
      "Repeat until 20 problems are checked.",
    ];
  }

  if (title.includes("sat")) {
    return [
      "Start one timed SAT English set.",
      "Do not pause until the set is finished.",
      "Review every wrong answer.",
      "Write one rule you missed.",
    ];
  }

  if (title.includes("website") || title.includes("project")) {
    return [
      "Choose one visible thing to improve.",
      "Make the smallest working change.",
      "Refresh and judge only that change.",
      "Write the next bug or improvement.",
    ];
  }

  return [
    "Open the material needed for this action.",
    "Define what finished looks like in one sentence.",
    "Work for 10 minutes without switching tabs.",
    "Record the next smallest step before stopping.",
  ];
}

function renderTasks() {
  const list = document.querySelector("#task-list");
  const completion = document.querySelector("#completion-text");
  const capacityText = document.querySelector("#capacity-text");
  const capacityFill = document.querySelector("#capacity-fill");
  const rows = todayActions();
  const firstOpenActionId = rows.find((action) => actionType(action) === "action" && !action.completed)?.id;
  list.innerHTML = "";

  rows.forEach((action) => {
    const type = actionType(action);
    const row = document.createElement("div");
    row.className = `task task-${type}`;
    row.classList.toggle("complete", action.completed);
    row.dataset.id = action.id;
    const days = daysUntil(action.deadline);
    const due = days === null ? t("noDeadline") : t("dueIn", days);

    row.innerHTML = `
      <div class="task-kicker"></div>
      <button class="task-main" type="button">
        <strong></strong>
        <small></small>
      </button>
      <button class="start-task" type="button">Start</button>
      <button class="complete-task" type="button">Done</button>
      <button class="delete-task" type="button" aria-label="Delete">x</button>
    `;

    row.querySelector(".task-kicker").textContent = action.id === firstOpenActionId ? t("startThisNow") : "";
    row.querySelector(".task-kicker").hidden = action.id !== firstOpenActionId;
    row.querySelector("strong").textContent = action.title;
    row.querySelector("small").textContent = type === "action"
      ? `${action.minutes} ${currentLanguage === "zh" ? "分钟" : "min"} / ${action.priority} / ${due}`
      : `${t(type)} / ${action.start || t("allDay")}${action.end ? `-${action.end}` : ""}`;
    row.querySelector(".start-task").textContent = type === "action" ? (action.completed ? t("restartFocus").replace(" Focus", "") : t("startFocus").replace(" Focus", "")) : type === "event" ? t("reminder") : t("dueDate");
    row.querySelector(".start-task").disabled = type !== "action";
    row.querySelector(".complete-task").textContent = type === "action" ? t("done") : t("view");
    row.querySelector(".complete-task").disabled = type === "action" && action.completed;
    row.querySelector(".delete-task").setAttribute("aria-label", t("deleteAction"));
    row.classList.toggle("selected-task", action.id === activeActionId);
    list.append(row);
  });

  if (!rows.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state task-empty-state";
    empty.textContent = t("emptyQueueDetailed");
    list.append(empty);
  }

  const work = workActions(rows);
  const done = work.filter((action) => action.completed).length;
  const plannedMinutes = work.reduce((total, action) => total + (Number(action.minutes) || 0), 0);
  const dailyCap = 135;
  completion.textContent = t("completion", done, work.length);
  if (capacityText) capacityText.textContent = t("capacityText", plannedMinutes, dailyCap);
  if (capacityFill) capacityFill.style.width = `${Math.min(100, Math.round((plannedMinutes / dailyCap) * 100))}%`;
  renderCompactQueue(rows, done);
}

function renderCompactQueue(rows = todayActions(), done = workActions(rows).filter((action) => action.completed).length) {
  const queue = document.querySelector("#compact-queue");
  const completion = document.querySelector("#compact-completion");
  if (!queue || !completion) return;

  queue.innerHTML = "";
  completion.textContent = t("compactCompletion", done, workActions(rows).length);

  rows.slice(0, 5).forEach((action) => {
    const type = actionType(action);
    const row = document.createElement("button");
    row.className = `compact-task compact-${type}`;
    row.type = "button";
    row.dataset.id = action.id;
    row.classList.toggle("complete", action.completed);
    row.classList.toggle("selected-task", action.id === activeActionId);
    row.innerHTML = `
      <span class="compact-task-play">${action.completed ? "✓" : "▶"}</span>
      <span class="compact-task-title"></span>
      <span class="compact-task-time">${type === "action" ? `${action.minutes} ${currentLanguage === "zh" ? "分钟" : "min"}` : t(type)}</span>
    `;
    row.querySelector(".compact-task-title").textContent = action.title;
    queue.append(row);
  });

  if (!rows.length) {
    const empty = document.createElement("p");
    empty.className = "compact-empty";
    empty.textContent = t("emptyQueue");
    queue.append(empty);
  }
}

function renderUrgent() {
  const deadlines = plannerGoals();
  if (!deadlines.length) {
    document.querySelector("#urgent-title").textContent = t("noActionSelected");
    document.querySelector("#urgent-days").textContent = "";
    document.querySelector("#urgent-copy").textContent = t("emptyQueue");
    return;
  }

  const urgent = [...deadlines].sort((a, b) => {
    const scoreA = (a.priority === "P1" ? 100 : 50) - (daysUntil(a.date) || 0);
    const scoreB = (b.priority === "P1" ? 100 : 50) - (daysUntil(b.date) || 0);
    return scoreB - scoreA;
  })[0];

  const days = Math.max(0, daysUntil(urgent.date));
  document.querySelector("#urgent-title").textContent = urgent.title;
  document.querySelector("#urgent-days").textContent = currentLanguage === "zh" ? `${days} 天` : `${days} days`;
  document.querySelector("#urgent-copy").textContent = t("urgentCopy", urgent.title);
}

function renderCalendar() {
  const calendar = document.querySelector("#calendar-days");
  document.querySelector("#calendar-title").textContent = visibleMonth.toLocaleString(activeLocale(), {
    month: "long",
    year: "numeric",
  });
  calendar.innerHTML = "";
  const dates = calendarDates();

  dates.forEach((date) => {
    const button = document.createElement("button");
    const parsed = parseDate(date);
    const isCurrentMonth = parsed.getMonth() === visibleMonth.getMonth() && parsed.getFullYear() === visibleMonth.getFullYear();
    const isPast = parseDate(date) < parseDate(todayKey());
    button.type = "button";
    button.textContent = parsed.getDate();
    button.dataset.date = date;
    button.classList.toggle("muted", !isCurrentMonth);
    button.classList.toggle("past-day", isPast);
    button.classList.toggle("selected", date === selectedDate);
    button.classList.toggle("has-event", hasEvent(date));
    [...new Set(actions.filter((action) => action.day === date).map(actionType))].forEach((type) => button.classList.add(`has-${type}`));
    calendar.append(button);
  });

  renderSelectedDay();
}

function calendarDates() {
  const start = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  start.setDate(start.getDate() - start.getDay());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return todayKey(date);
  });
}

function hasEvent(date) {
  return actions.some((action) => action.day === date) || plannerGoals().some((goal) => goal.date === date);
}

function renderSelectedDay() {
  const list = document.querySelector("#selected-day-events");
  const dayRows = [
    ...actions.filter((action) => action.day === selectedDate).map((action) => ({
      title: action.title,
      meta: actionType(action) === "action" ? (action.completed ? t("metaDone") : t("metaAction")) : t(actionType(action)),
    })),
    ...goals.filter((goal) => goal.date === selectedDate).map((goal) => ({
      title: goal.title,
      meta: t("metaDeadline"),
    })),
  ];

  if (!dayRows.length) {
    list.innerHTML = `<p class="empty-state">${t("noPlannedItems", labelDate(selectedDate))}</p>`;
    return;
  }

  list.innerHTML = "";
  dayRows.forEach((row) => {
    const div = document.createElement("div");
    div.className = "event-row";
    div.innerHTML = `<strong></strong><span></span>`;
    div.querySelector("strong").textContent = row.title;
    div.querySelector("span").textContent = row.meta;
    list.append(div);
  });
}

function labelDate(date) {
  const parsed = parseDate(date);
  return parsed.toLocaleString(activeLocale(), { month: "short", day: "numeric" });
}

function generateAction(goal) {
  const days = daysUntil(goal.date);
  const title = goal.title.toLowerCase();
  const urgent = days !== null && days <= 3;
  const verb = title.includes("essay")
    ? (urgent ? "Finish outline for" : "Outline")
    : title.includes("sat")
      ? (urgent ? "Timed drill for" : "Practice")
      : title.includes("test")
        ? (urgent ? "Review mistakes for" : "Review")
        : title.includes("class") || title.includes("school")
          ? "Prepare materials for"
          : "Checkpoint";

  return {
    title: `${verb} ${goal.title}`,
    minutes: Math.min(45, Math.max(25, goal.minutes || 35)),
    priority: goal.priority,
    deadline: goal.date,
    linkedGoal: goal.title,
    reason: `Offline rule: ${planReason(goal)} Done means one concrete step exists, not a vague intention.`,
  };
}

function plannerGoals() {
  const deadlineActions = actions
    .filter((action) => actionType(action) === "deadline")
    .map((action) => ({
      title: action.title,
      date: action.deadline || action.day,
      priority: action.priority || "P2",
      minutes: action.minutes,
    }))
    .filter((goal) => goal.title && goal.date);

  const byTitleAndDate = new Map();
  [...goals, ...deadlineActions].forEach((goal) => {
    byTitleAndDate.set(`${goal.title.trim().toLowerCase()}|${goal.date}`, goal);
  });

  return [...byTitleAndDate.values()];
}

function planReason(goal) {
  const days = daysUntil(goal.date);
  if (days === null) return `${goal.priority} item without a deadline.`;
  if (days < 0) return `${goal.title} is overdue, so it gets emergency priority.`;
  if (days === 0) return `${goal.title} is due today.`;
  if (days <= 3) return `${goal.title} is due in ${days} day${days === 1 ? "" : "s"}.`;
  if (days <= 14) return `${goal.title} is close enough to reduce future pressure.`;
  return `${goal.title} is a long-term goal, so only one small maintenance block is allowed.`;
}

function sampleSchedule() {
  const today = todayKey();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);

  return [
    createAction({
      type: "deadline",
      title: currentLanguage === "zh" ? "数学小测" : "Math quiz",
      minutes: 30,
      priority: "P1",
      deadline: todayKey(tomorrow),
      reason: currentLanguage === "zh" ? "示例截止日期，用来生成今日计划。" : "Sample deadline used to generate today's plan.",
    }, todayKey(tomorrow)),
    createAction({
      type: "event",
      title: currentLanguage === "zh" ? "社团会议" : "Club meeting",
      minutes: 45,
      priority: "P3",
      deadline: today,
      start: "16:00",
      end: "16:45",
      reason: currentLanguage === "zh" ? "示例提醒。" : "Sample reminder.",
    }, today),
    createAction({
      type: "deadline",
      title: currentLanguage === "zh" ? "历史论文" : "History essay",
      minutes: 45,
      priority: "P2",
      deadline: todayKey(nextWeek),
      reason: currentLanguage === "zh" ? "较远的截止日期，规划器只会安排一个维护块。" : "Longer deadline, so the planner adds one maintenance block.",
    }, todayKey(nextWeek)),
  ];
}

function planScore(goal) {
  const days = daysUntil(goal.date);
  const priority = goal.priority === "P1" ? 90 : goal.priority === "P2" ? 55 : 25;
  const urgency = days === null ? 0 : days < 0 ? 120 : Math.max(0, 70 - days * 4);
  const longTerm = days !== null && days > 14 ? 12 : 0;
  return priority + urgency + longTerm;
}

function buildPlan() {
  const existing = new Set(workActions().map((action) => action.linkedGoal || action.title));
  const maxMinutes = 135;
  let plannedMinutes = workActions().reduce((total, action) => total + (Number(action.minutes) || 0), 0);
  const selected = [];

  const candidates = plannerGoals()
    .filter((goal) => !existing.has(goal.title))
    .map((goal) => ({ goal, action: generateAction(goal), score: planScore(goal), days: daysUntil(goal.date) }))
    .filter(({ days }) => days === null || days <= 45)
    .sort((a, b) => b.score - a.score);

  for (const candidate of candidates) {
    if (selected.length >= 4) break;
    const isLongTerm = candidate.days !== null && candidate.days > 14;
    const longTermAlreadyPlanned = selected.some((item) => {
      const itemDays = daysUntil(item.deadline);
      return itemDays !== null && itemDays > 14;
    });
    if (isLongTerm && longTermAlreadyPlanned) continue;
    if (plannedMinutes + candidate.action.minutes > maxMinutes && selected.length > 0) continue;

    selected.push(candidate.action);
    plannedMinutes += candidate.action.minutes;
  }

  return selected.map((action) => createAction(action));
}

function recommendOne() {
  const plan = buildPlan();
  return plan[0] || null;
}

function chooseFocusQuote() {
  const quotes = localizedFocusQuotes[currentLanguage] || localizedFocusQuotes.en;
  if (quotes.length <= 1) return quotes[0] || "";
  let nextQuote = currentFocusQuote;
  while (nextQuote === currentFocusQuote) {
    nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  return nextQuote;
}

function startFocus(actionId) {
  const action = actions.find((item) => item.id === actionId) || focusCandidate();
  if (!action) return;
  showToast(t("focusStarted", action.title));

  clearInterval(focusInterval);
  activeActionId = action.id;
  remainingSeconds = action.minutes * 60;
  focusRunning = true;
  focusEndsAt = Date.now() + remainingSeconds * 1000;
  currentFocusQuote = chooseFocusQuote();
  closeAchievementsPanel();
  document.querySelector("#pause-focus").textContent = t("pause");
  document.body.classList.add("focus-active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  actions = actions.map((item) => item.id === action.id ? {
    ...item,
    completed: false,
    completedAt: null,
    startedAt: new Date().toISOString(),
  } : item);
  saveActions();
  renderAll();
  tickFocus();
  focusInterval = setInterval(() => tickFocus({ trackTime: true }), 1000);
}

function secondsUntil(timestamp, now = Date.now()) {
  if (!timestamp) return remainingSeconds;
  return Math.max(0, Math.ceil((timestamp - now) / 1000));
}

function syncRunningFocusTime(now = Date.now()) {
  if (!focusRunning || !activeActionId) return;
  if (!focusEndsAt) focusEndsAt = now + remainingSeconds * 1000;

  const nextRemaining = secondsUntil(focusEndsAt, now);
  const elapsedSeconds = Math.max(0, remainingSeconds - nextRemaining);
  if (elapsedSeconds) addFocusSeconds(elapsedSeconds);
  remainingSeconds = nextRemaining;
}

function tickFocus({ trackTime = false } = {}) {
  const action = actions.find((item) => item.id === activeActionId);
  if (trackTime) syncRunningFocusTime();
  setClockDisplay(formatRemaining(remainingSeconds));
  updateFocusProgress(action);

  if (remainingSeconds <= 0) {
    setClockDisplay("00:00");
    updateFocusProgress(action);
    finishActive({ automatic: true });
  }
}

function formatRemaining(seconds) {
  const safe = Math.max(0, seconds);
  return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
}

function finishActive({ automatic = false } = {}) {
  if (!activeActionId) return;
  syncRunningFocusTime();
  const doneAction = actions.find((action) => action.id === activeActionId);
  stats.focusBlocksCompleted = (stats.focusBlocksCompleted || 0) + 1;
  saveStats();
  checkAchievements();
  commit(actions.map((action) => action.id === activeActionId ? {
    ...action,
    completed: true,
    completedAt: new Date().toISOString(),
  } : action));
  activeActionId = null;
  focusRunning = false;
  focusEndsAt = null;
  closeAchievementsPanel();
  document.body.classList.remove("focus-active");
  clearInterval(focusInterval);
  showToast(doneAction ? t("focusFinished", doneAction.title, automatic) : t("focusFinishedFallback"));
}

function splitCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (const char of line) {
    if (char === "\"") {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function normalizeCsvHeader(header) {
  return header.toLowerCase().replace(/[\s_-]+/g, "");
}

function parseCsvSchedule(text) {
  const lines = text.split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("```"));
  if (lines.length < 2) return [];

  const headers = splitCsvLine(lines[0]).map(normalizeCsvHeader);
  return lines.slice(1).map((line) => {
    const values = splitCsvLine(line);
    const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]));
    if (!row.date || !row.title) return null;
    const customSteps = parseCustomSteps(row);
    const type = ["event", "deadline"].includes((row.type || "action").toLowerCase()) ? row.type.toLowerCase() : "action";
    return createAction({
      type,
      title: row.title,
      minutes: Number(row.minutes) || minutesBetween(row.start, row.end) || 45,
      priority: row.priority || "P2",
      deadline: row.date,
      linkedGoal: type === "action" ? row.title : null,
      reason: row.reason || `Imported from schedule${row.start ? ` / ${row.start}` : ""}.`,
      ...(customSteps.length ? { customSteps } : {}),
    }, row.date);
  }).filter(Boolean);
}

function parseCustomSteps(row) {
  const numbered = [row.step1, row.step2, row.step3, row.step4]
    .map((step) => (step || "").trim())
    .filter(Boolean);
  if (numbered.length) return numbered;

  return (row.steps || "")
    .split("|")
    .map((step) => step.trim())
    .filter(Boolean)
    .slice(0, 6);
}

function sameImportedAction(a, b) {
  return a.day === b.day && (a.title || "").trim().toLowerCase() === (b.title || "").trim().toLowerCase();
}

function mergeImportedActions(imported) {
  let created = 0;
  let updated = 0;

  imported.forEach((incoming) => {
    let matched = false;

    actions = actions.map((action) => {
      if (!sameImportedAction(action, incoming)) return action;
      matched = true;
      updated += 1;
      return {
        ...action,
        ...incoming,
        id: action.id,
        completed: action.completed,
        startedAt: action.startedAt,
        completedAt: action.completedAt,
        createdAt: action.createdAt,
      };
    });

    if (!matched) {
      actions.push(incoming);
      created += 1;
    }
  });

  saveActions();
  return { created, updated };
}

function minutesBetween(start, end) {
  if (!start || !end) return null;
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);
  if ([startHour, startMinute, endHour, endMinute].some(Number.isNaN)) return null;
  return Math.max(5, (endHour * 60 + endMinute) - (startHour * 60 + startMinute));
}

function parseIcsDate(value) {
  const match = value.match(/(\d{4})(\d{2})(\d{2})/);
  if (!match) return "";
  return `${match[1]}-${match[2]}-${match[3]}`;
}

function parseIcsSchedule(text) {
  const events = text.split("BEGIN:VEVENT").slice(1);
  return events.map((block) => {
    const summary = block.match(/SUMMARY:(.+)/)?.[1]?.trim();
    const start = block.match(/DTSTART(?:;[^:]*)?:(.+)/)?.[1]?.trim();
    const end = block.match(/DTEND(?:;[^:]*)?:(.+)/)?.[1]?.trim();
    const date = start ? parseIcsDate(start) : "";
    if (!summary || !date) return null;
    return createAction({
      type: "event",
      title: summary,
      minutes: 45,
      priority: "P2",
      deadline: date,
      linkedGoal: summary,
      reason: `Imported calendar event${end ? ` / ends ${end}` : ""}.`,
    }, date);
  }).filter(Boolean);
}

function parseScheduleFile(file, text) {
  const name = file.name.toLowerCase();
  if (name.endsWith(".ics")) return parseIcsSchedule(text);
  return parseCsvSchedule(text);
}

function quitFocus() {
  activeActionId = null;
  remainingSeconds = 0;
  focusRunning = false;
  focusEndsAt = null;
  clearInterval(focusInterval);
  closeAchievementsPanel();
  document.body.classList.remove("focus-active");
  document.querySelector("#pause-focus").textContent = t("pause");
  renderAll();
}

function wireEvents() {
  wireSoundscapeWheel();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tickFocus({ trackTime: true });
  });
  window.addEventListener("focus", () => tickFocus({ trackTime: true }));
  window.addEventListener("pageshow", () => tickFocus({ trackTime: true }));

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || button.disabled) return;
    const sound = button.id === "primary-start"
      ? "start"
      : button.id === "pause-focus"
        ? "pause"
        : button.id === "finish-focus"
          ? "finish"
          : button.id === "quit-focus"
            ? "quit"
            : "click";
    playUiSound(sound);
  }, { capture: true });

  document.querySelector("#achievements-toggle").addEventListener("click", (event) => {
    event.stopPropagation();
    const panel = document.querySelector("#achievements-panel");
    const toggle = document.querySelector("#achievements-toggle");
    const opening = panel.hidden;
    panel.hidden = !opening;
    toggle.setAttribute("aria-expanded", String(opening));
    if (opening) renderAchievements();
  });

  document.addEventListener("click", (event) => {
    const panel = document.querySelector("#achievements-panel");
    const toggle = document.querySelector("#achievements-toggle");
    if (panel.hidden || event.target.closest(".topbar-actions")) return;
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  });

  document.querySelector("#primary-start").addEventListener("click", () => startFocus(activeActionId));

  document.querySelector("#soundscape-toggle").addEventListener("click", () => {
    const toggle = document.querySelector("#soundscape-toggle");
    setSoundscapeState(toggle.getAttribute("aria-pressed") !== "true");
  });

  document.querySelector("#soundscape-select").addEventListener("change", () => {
    const toggle = document.querySelector("#soundscape-toggle");
    if (toggle.getAttribute("aria-pressed") === "true") startSoundscape(document.querySelector("#soundscape-select").value);
  });

  document.querySelector("#soundscape-volume").addEventListener("input", (event) => {
    if (soundscapeGain) soundscapeGain.gain.value = Number(event.target.value);
  });
  document.querySelector("#pause-focus").addEventListener("click", () => {
    if (!activeActionId) return;
    if (focusRunning) {
      syncRunningFocusTime();
      focusRunning = false;
      focusEndsAt = null;
    } else {
      focusRunning = true;
      focusEndsAt = Date.now() + remainingSeconds * 1000;
    }
    document.querySelector("#pause-focus").textContent = focusRunning ? t("pause") : t("resume");
    tickFocus();
  });
  document.querySelector("#finish-focus").addEventListener("click", finishActive);
  document.querySelector("#quit-focus").addEventListener("click", quitFocus);

  document.querySelector("#focus-guide-list").addEventListener("change", (event) => {
    const input = event.target.closest("input[type='checkbox']");
    if (!input) return;

    const actionId = input.dataset.actionId;
    const stepIndex = Number(input.dataset.stepIndex);
    const current = new Set(guideState[actionId] || []);
    if (input.checked) {
      current.add(stepIndex);
    } else {
      current.delete(stepIndex);
    }
    guideState[actionId] = [...current].sort((a, b) => a - b);
    saveGuideState();
    renderGuide(actions.find((action) => action.id === actionId));
  });

  document.querySelector("#task-list").addEventListener("click", (event) => {
    const task = event.target.closest(".task");
    if (!task) return;
    if (event.target.closest(".task-main")) {
      if (actionType(actions.find((item) => item.id === task.dataset.id)) !== "action") {
        showToast(t("reminderOnly"));
        return;
      }
      activeActionId = task.dataset.id;
      remainingSeconds = (actions.find((action) => action.id === activeActionId)?.minutes || 0) * 60;
      focusRunning = false;
      focusEndsAt = null;
      renderFocus();
      tickFocus();
      pulseElement(task);
      showToast(t("taskLoaded"));
    }
    if (event.target.closest(".start-task") && actionType(actions.find((item) => item.id === task.dataset.id)) === "action") startFocus(task.dataset.id);
    if (event.target.closest(".complete-task")) {
      const currentAction = actions.find((item) => item.id === task.dataset.id);
      if (actionType(currentAction) !== "action") {
        selectedDate = currentAction.day || currentAction.deadline || todayKey();
        const date = parseDate(selectedDate);
        visibleMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        renderCalendar();
        document.querySelector("#calendar")?.scrollIntoView({ behavior: "smooth", block: "center" });
        showToast(t("reminderCalendar"));
        return;
      }
      const title = actions.find((action) => action.id === task.dataset.id)?.title || "Action";
      commit(actions.map((action) => action.id === task.dataset.id ? { ...action, completed: true, completedAt: new Date().toISOString() } : action));
      showToast(t("markedDone", title));
    }
    if (event.target.closest(".delete-task")) {
      const title = actions.find((action) => action.id === task.dataset.id)?.title || "Action";
      commit(actions.filter((action) => action.id !== task.dataset.id));
      showToast(t("removed", title));
    }
  });

  document.querySelector("#compact-queue")?.addEventListener("click", (event) => {
    const task = event.target.closest(".compact-task");
    if (!task) return;
    if (actionType(actions.find((item) => item.id === task.dataset.id)) !== "action") {
      showToast(t("compactReminderOnly"));
      return;
    }
    activeActionId = task.dataset.id;
    remainingSeconds = (actions.find((action) => action.id === activeActionId)?.minutes || 0) * 60;
    focusRunning = false;
    focusEndsAt = null;
    renderFocus();
    tickFocus();
    pulseElement(task);
    showToast(t("taskLoaded"));
  });

  document.querySelector("#quick-add-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#task-title-input").value.trim();
    const type = document.querySelector("#task-type-input").value;
    const date = document.querySelector("#task-deadline-input").value;
    if (!title) return;
    commit([...actions, createAction({
      title,
      type,
      minutes: Number(document.querySelector("#task-minutes-input").value) || 45,
      priority: document.querySelector("#task-priority-input").value,
      deadline: date,
      linkedGoal: type === "action" ? title : null,
      reason: document.querySelector("#task-reason-input").value.trim(),
    }, type !== "action" && date ? date : todayKey())]);
    showToast(t("added", title));
    event.target.reset();
    document.querySelector("#task-minutes-input").value = 45;
  });

  document.querySelector("#plan-action").addEventListener("click", () => {
    const plan = buildPlan();
    if (plan.length) {
      commit([...actions, ...plan]);
      showToast(t("generated", plan.length));
    } else if (!plannerGoals().length) {
      showToast(t("noPlanSources"));
    } else {
      showToast(t("alreadyPlanned"));
    }
  });

  document.querySelector("#sample-action").addEventListener("click", () => {
    mergeImportedActions(sampleSchedule());
    renderAll();
    showToast(t("sampleLoaded"));
  });

  document.querySelector("#export-data").addEventListener("click", () => {
    const exportPayload = {
      exportedAt: new Date().toISOString(),
      app: "Study Command",
      actions,
      stats,
      unlockedAchievements,
      guideState,
      importedFiles: readJson(storageKeys.importedFiles, []),
    };
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `study-command-export-${todayKey()}.json`;
    document.body.append(link);
    link.click();
    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      link.remove();
    }, 0);
    showToast(t("exportDone"));
  });

  document.querySelector("#reset-data").addEventListener("click", () => {
    if (!window.confirm(t("resetConfirm"))) return;
    Object.values(storageKeys).forEach((key) => localStorage.removeItem(key));
    actions = [];
    stats = loadStats();
    unlockedAchievements = {};
    guideState = {};
    activeActionId = null;
    remainingSeconds = 0;
    focusRunning = false;
    focusEndsAt = null;
    clearInterval(focusInterval);
    stopSoundscape();
    document.body.classList.remove("focus-active");
    setTheme("world");
    applyLanguage();
    renderAll();
    showToast(t("resetDone"));
  });

  document.querySelector("#recommend-action").addEventListener("click", () => {
    const recommendation = recommendOne();
    if (!recommendation) {
      showToast(t("emptyQueue"));
      return;
    }
    commit([...actions, recommendation]);
    showToast(t("recommended"));
  });

  document.querySelector("#calendar-days").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-date]");
    if (!button) return;
    selectedDate = button.dataset.date;
    const date = parseDate(selectedDate);
    visibleMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    renderCalendar();
    pulseElement(document.querySelector("#selected-day-events"));
    showToast(t("showing", labelDate(selectedDate)));
  });

  document.querySelector("#select-today").addEventListener("click", () => {
    selectedDate = todayKey();
    const today = parseDate(selectedDate);
    visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    renderCalendar();
    showToast(t("backToToday"));
  });

  document.querySelector("#prev-month").addEventListener("click", () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
    renderCalendar();
    showToast(document.querySelector("#calendar-title").textContent);
  });

  document.querySelector("#next-month").addEventListener("click", () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
    renderCalendar();
    showToast(document.querySelector("#calendar-title").textContent);
  });

  document.querySelector("#schedule-file-input").addEventListener("change", async (event) => {
    const previous = readJson(storageKeys.importedFiles, []);
    const imported = [];
    const nextFiles = [];

    for (const file of Array.from(event.target.files)) {
      let parsed = [];
      let status = "saved only";

      if (/\.(csv|txt|ics)$/i.test(file.name)) {
        const text = await file.text();
        parsed = parseScheduleFile(file, text);
        imported.push(...parsed);
        status = parsed.length ? `${parsed.length} items imported` : "no rows imported";
      }

      nextFiles.push({
        source: "file",
        status,
        addedAt: new Date().toISOString(),
      });
    }

    const mergeResult = imported.length ? mergeImportedActions(imported) : { created: 0, updated: 0 };

    const next = [...previous, ...nextFiles];
    localStorage.setItem(storageKeys.importedFiles, JSON.stringify(next));
    renderAll();
    checkAchievements();
    showToast(imported.length ? t("importResult", mergeResult.created, mergeResult.updated) : t("filesSaved", event.target.files.length));
  });

  document.querySelector("#import-pasted-plan").addEventListener("click", () => {
    const input = document.querySelector("#schedule-paste-input");
    const text = input.value.trim();
    if (!text) {
      showToast(t("pasteFirst"));
      return;
    }

    const imported = parseCsvSchedule(text);
    if (!imported.length) {
      showToast(t("noCsvRows"));
      return;
    }

    const mergeResult = mergeImportedActions(imported);
    const previous = readJson(storageKeys.importedFiles, []);
    localStorage.setItem(storageKeys.importedFiles, JSON.stringify([
      ...previous,
      {
        source: "paste",
        addedAt: new Date().toISOString(),
      },
    ]));

    input.value = "";
    renderAll();
    checkAchievements();
    showToast(t("importResult", mergeResult.created, mergeResult.updated));
  });

  document.querySelector("#clear-pasted-plan").addEventListener("click", () => {
    document.querySelector("#schedule-paste-input").value = "";
    showToast(t("pastedCleared"));
  });

  document.querySelector("#schedule-input").addEventListener("toggle", (event) => {
    showToast(event.target.open ? t("scheduleOpened") : t("scheduleClosed"));
  });

  document.querySelector("#import-shortcut").addEventListener("click", () => {
    const panel = document.querySelector("#schedule-input");
    panel.open = true;
    setTimeout(() => {
      panel.scrollIntoView({ behavior: "smooth", block: "center" });
      pulseElement(panel);
    }, 0);
    showToast(t("chooseSchedule"));
  });

  document.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => setTheme(button.dataset.theme));
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

}

function setTheme(theme) {
  const safeTheme = theme === "starry" ? "starry" : "world";
  document.body.dataset.theme = safeTheme;
  localStorage.setItem(storageKeys.theme, safeTheme);
  document.querySelectorAll("[data-theme]").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === safeTheme);
  });
}

function renderAll() {
  renderFocus();
  renderTasks();
  renderUrgent();
  renderCalendar();
  renderAchievements();
  renderProgressSummary();
}

actions = loadActions();
stats = loadStats();
unlockedAchievements = loadUnlockedAchievements();
guideState = loadGuideState();
sanitizeImportHistory();
currentLanguage = localStorage.getItem(storageKeys.language) === "zh" ? "zh" : "en";
setTheme(localStorage.getItem(storageKeys.theme) || "world");
applyLanguage();
updateClock();
wireEvents();
wireSpecularButtons();
renderAll();
checkAchievements({ announce: false });
setInterval(updateClock, 1000);
