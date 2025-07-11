document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.tech-btn');
  const sections = document.querySelectorAll('.tech-item');

  // 모든 섹션을 숨기고, 선택된 one만 보이게
  function showSection(key) {
    sections.forEach(sec => {
      sec.style.display = (sec.id === key) ? 'block' : 'none';
    });
    // 버튼 active 토글
    btns.forEach(btn => {
      if (btn.dataset.tech === key) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // 각 버튼에 클릭 이벤트
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      showSection(btn.dataset.tech);
    });
  });

  // 초기 상태: 자율주행 섹션 보이기
  showSection('autonomy');
});