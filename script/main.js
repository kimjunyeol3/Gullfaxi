// 모델 데이터 배열 (X, Y, Z 각 시리즈별)
const models = {
  x: [
    { img: "../img/main/Gullfaxi X1.png",
      title: "Gullfaxi X1",
      desc: "<br>Gullfaxi X1은 최첨단 전기 파워트레인을 탑재해 0→100km/h를 단 3.2초에 가속합니다. <br>차체는 알루미늄과 탄소 섬유 복합 소재로 제작되어 가벼우면서도 견고합니다. <br>어댑티브 서스펜션이 도로 상태에 따라 실시간으로 댐핑을 조절해 최고의 승차감을 제공합니다." },
    { img: "../img/main/Gullfaxi X2.png",
      title: "Gullfaxi X2",
      desc: "<br>Gullfaxi X2는 X1의 고성능에 활동성을 더한 SUV 스타일 모델입니다. <br>전륜·후륜 독립식 모터로 4륜 구동(All-Wheel Drive)을 구현해 험로에서도 탁월한 주행 안정성을 자랑합니다. <br>넓어진 실내 공간과 파노라마 글라스 루프로 럭셔리한 감성을 더했습니다." }
  ],
  y: [
    { img: "../img/main/Gullfaxi Y1.png",
      title: "Gullfaxi Y1",
      desc: "<br>Gullfaxi Y1은 중형 세단 세그먼트에 맞춘 최적의 밸런스를 제공합니다.  <br>350마력급 전기 모터와 80kWh 배터리가 결합돼 500km 이상의 항속거리를 달성합니다.  <br>인공지능 기반 주행 보조 시스템이 장착돼 장거리 운전에서도 피로를 최소화합니다." },
    { img: "../img/main/Gullfaxi Y2.png",
      title: "Gullfaxi Y2",
      desc: "<br>Gullfaxi Y2는 Y1의 실용성을 계승하면서도 스포츠 드라이빙 성능을 강화했습니다. <br>저중심 설계로 민첩한 핸들링을 구현하며, 액티브 리어 스티어링으로 코너링 성능을 극대화합니다. <br>하이퍼포먼스 브레이크 시스템이 안전하고 정확한 제동을 지원합니다." }
  ],
  z: [
    { img: "../img/main/Gullfaxi Z1.png",
      title: "Gullfaxi Z1",
      desc: "<br>Gullfaxi Z1은 플래그십 럭셔리 쿠페 모델로, 극한의 디테일과 품격을 담았습니다.<br>리어 휠 스티어링과 토크 벡터링 디퍼렌셜이 결합되어 스포티하면서도 안정적인 주행을 보장합니다.<br>실내에는 최고급 나파 가죽과 메탈 트림이 조화를 이루며, 맞춤형 몰입형 오디오 시스템을 갖췄습니다." },
    { img: "../img/main/Gullfaxi Z2.png",
      title: "Gullfaxi Z2",
      desc: "<br>Gullfaxi Z2는 Z1의 럭셔리함을 계승하면서도 트랙 성능을 대폭 강화한 모델입니다.<br>경량화 패키지와 카본 세라믹 브레이크로 무게 대비 출력 비율을 극대화했습니다.<br>퍼포먼스 타이어와 멀티 스테이지 리어 윙이 공기 역학 성능을 한층 끌어올립니다." }
  ]
};

let currentModelIndex = { x: 0, y: 0, z: 0 };

// 모델 변경 함수
function changeModel(series, direction) {
  const seriesModels = models[series];
  const currentIndex = currentModelIndex[series];
  const newIndex = (currentIndex + direction + seriesModels.length) % seriesModels.length;

  // 요소 가져오기
  const imgEl   = document.querySelector(`#${series}-model .model-img`);
  const titleEl = document.querySelector(`#${series}-model .model-title`);
  const descEl  = document.querySelector(`#${series}-model .model-desc`);

  // 값 채워주기
  imgEl.src             = seriesModels[newIndex].img;
  imgEl.alt             = seriesModels[newIndex].title + " 이미지";
  titleEl.textContent   = seriesModels[newIndex].title;
  descEl.innerHTML      = seriesModels[newIndex].desc;

  currentModelIndex[series] = newIndex;
}



// 모달 함수(360도뷰)
const modalContainer = document.getElementById('modal-container');

document.getElementById('open360').addEventListener('click', async () => {
  const res = await fetch('../html/model360view.html');
  const html = await res.text();
  modalContainer.innerHTML = html;
  modalContainer.classList.add('active');
  document.body.style.overflow = 'hidden';

  const script = document.createElement('script');
  script.type = 'module';
  script.src = '../script/model360view.js';
  document.body.appendChild(script);

  modalContainer.querySelector('.modal-close').addEventListener('click', closeModal);
  modalContainer.querySelector('.modal-backdrop').addEventListener('click', closeModal);
});

function closeModal() {
  modalContainer.classList.remove('active');
  modalContainer.innerHTML = '';
  document.body.style.overflow = '';
}