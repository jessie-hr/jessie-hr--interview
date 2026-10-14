const sheet = document.querySelector('#actionSheet');
const backdrop = document.querySelector('#backdrop');
const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function openSheet() {
  sheet.classList.add('show');
  backdrop.classList.add('show');
  sheet.setAttribute('aria-hidden', 'false');
}

function closeSheet() {
  sheet.classList.remove('show');
  backdrop.classList.remove('show');
  sheet.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-start]').forEach((button) => button.addEventListener('click', openSheet));
document.querySelector('#sheetClose').addEventListener('click', closeSheet);
backdrop.addEventListener('click', closeSheet);
document.querySelector('#confirmStart').addEventListener('click', () => {
  closeSheet();
  showToast('面试间已就绪，正在连接 AI 助手…');
});
document.querySelector('[data-action="question"]').addEventListener('click', () => showToast('正在为「高级产品经理」生成题库…'));
document.querySelector('#noticeButton').addEventListener('click', () => showToast('你有 2 条面试提醒'));
document.querySelector('#allTools').addEventListener('click', () => showToast('更多 HR 工具即将上线'));
document.querySelector('#calendarButton').addEventListener('click', () => showToast('已为你定位到今天的日程'));

document.querySelectorAll('.bottom-nav button:not(.center-action)').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.bottom-nav button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    if (!button.textContent.includes('首页')) showToast(`${button.textContent.trim()}模块正在完善中`);
  });
});
