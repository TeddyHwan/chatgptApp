// result.js

document.addEventListener('DOMContentLoaded', function () {
  // 결과를 표시할 요소
  const resultElement = document.getElementById('result');

  // 다시하기 버튼 텍스트를 변경할 요소
  const restartButton = document.getElementById('restart-button');

  // 로컬 스토리지에서 mbti_result 값을 가져오기
  const savedMBTIResult = localStorage.getItem('mbti_result');

  // 결과가 있으면 결과를 표시하고 버튼 텍스트 변경
  if (savedMBTIResult) {
    resultElement.textContent = `당신의 MBTI는 ${savedMBTIResult}입니다!`;
    restartButton.textContent = '테스트 하러 가기';
  } else {
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    restartButton.textContent = '테스트 하러 가기';
  }
});

// 이하에는 다른 기능이나 이벤트 핸들러를 추가할 수 있습니다.
