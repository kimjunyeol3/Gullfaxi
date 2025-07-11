const models = {
    x: [
      { img: "/img/main/background.png", desc: "X Series 모델 1 설명" },
      { img: "/img/main/test.png", desc: "X Series 모델 2 설명" }
    ],
    y: [
      { img: "../img/main/background.png", desc: "Y Series 모델 1 설명" },
      { img: "../img/main/background.png", desc: "Y Series 모델 2 설명" }
    ],
    z: [
      { img: "../img/main/background.png", desc: "Z Series 모델 1 설명" },
      { img: "../img/main/background.png", desc: "Z Series 모델 2 설명" }
    ]
};

let currentModelIndex = { x: 0, y: 0, z: 0 };

// 모델 변경 함수
function changeModel(series, direction) {
    const seriesModels = models[series];
    let currentIndex = currentModelIndex[series];

    // 새 인덱스 계산 (순환 방식)
    let newIndex = (currentIndex + direction + seriesModels.length) % seriesModels.length;

    // 이미지 및 설명 변경
    const imgElement = document.querySelector(`#${series}-model img`);
    const descElement = document.querySelector(`#${series}-model .model-desc`);

    imgElement.src = seriesModels[newIndex].img;
    descElement.textContent = seriesModels[newIndex].desc;

    // 인덱스 업데이트
    currentModelIndex[series] = newIndex;
}

// 페이지 로딩 시 첫 번째 모델을 표시
document.addEventListener('DOMContentLoaded', () => {
    const series = ['x', 'y', 'z'];
    series.forEach(s => changeModel(s, 0)); // 각 시리즈 첫 번째 모델 표시
});